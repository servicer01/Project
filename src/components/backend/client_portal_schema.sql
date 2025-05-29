-- Client Portal Database Schema for AI Productivity & Growth Packages
-- Supports: Kickstart, Connection, and Efficiency Plans with Sandbox Demos

-- Enable necessary extensions
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

-- User roles enum
CREATE TYPE user_role AS ENUM ('admin', 'client', 'team_member');

-- Package types enum  
CREATE TYPE package_type AS ENUM ('kickstart', 'connection', 'efficiency');

-- Demo status enum
CREATE TYPE demo_status AS ENUM ('pending', 'active', 'completed', 'expired');

-- Subscription status enum
CREATE TYPE subscription_status AS ENUM ('trial', 'active', 'paused', 'cancelled', 'completed');

-- Discovery session status enum
CREATE TYPE discovery_status AS ENUM ('scheduled', 'completed', 'needs_followup', 'converted');

-- Users table (extends Supabase auth.users)
CREATE TABLE profiles (
    id UUID REFERENCES auth.users(id) PRIMARY KEY,
    email TEXT UNIQUE NOT NULL,
    full_name TEXT,
    company_name TEXT,
    phone TEXT,
    role user_role DEFAULT 'client',
    avatar_url TEXT,
    timezone TEXT DEFAULT 'America/Chicago',
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Companies/Organizations table
CREATE TABLE companies (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    name TEXT NOT NULL,
    industry TEXT,
    website_url TEXT,
    description TEXT,
    employee_count INTEGER,
    annual_revenue_range TEXT,
    primary_contact_id UUID REFERENCES profiles(id),
    billing_address JSONB,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Team memberships (for client team access)
CREATE TABLE team_memberships (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    company_id UUID REFERENCES companies(id) ON DELETE CASCADE,
    user_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
    role TEXT DEFAULT 'member', -- 'admin', 'member', 'viewer'
    permissions JSONB DEFAULT '[]', -- Array of permission strings
    invited_by UUID REFERENCES profiles(id),
    joined_at TIMESTAMPTZ DEFAULT NOW(),
    UNIQUE(company_id, user_id)
);

-- Discovery sessions (AI Solutions Discovery Questionnaire)
CREATE TABLE discovery_sessions (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    company_id UUID REFERENCES companies(id) ON DELETE CASCADE,
    conducted_by UUID REFERENCES profiles(id), -- Admin who conducted it
    scheduled_date TIMESTAMPTZ,
    completed_date TIMESTAMPTZ,
    status discovery_status DEFAULT 'scheduled',
    
    -- Business Overview (Section 1)
    business_description TEXT,
    products_services TEXT[],
    primary_customers TEXT,
    business_goals TEXT[],
    main_challenge TEXT,
    success_metrics TEXT[],
    
    -- Marketing Pain Points (Section 2A)
    current_marketing_methods TEXT[],
    marketing_challenges TEXT[],
    weekly_marketing_hours INTEGER,
    marketing_improvement_benefits TEXT,
    
    -- Customer Service Pain Points (Section 2B)
    customer_contact_methods TEXT[],
    customer_service_challenges TEXT[],
    daily_inquiries INTEGER,
    repetitive_inquiry_percentage INTEGER,
    customer_service_impact TEXT,
    
    -- Operations Pain Points (Section 2C)
    repetitive_tasks TEXT[],
    internal_communication_challenges TEXT[],
    biggest_time_waster TEXT,
    efficiency_benefits TEXT,
    
    -- Technology & Readiness (Section 3)
    current_tech_stack TEXT[],
    tech_comfort_level TEXT,
    ai_understanding TEXT,
    current_ai_tools TEXT[],
    
    -- Budget & Decision Making (Section 4)
    budget_range TEXT,
    decision_makers TEXT[],
    implementation_timeline TEXT,
    
    -- Recommendations & Next Steps (Section 5)
    priority_area package_type,
    recommended_packages package_type[],
    follow_up_scheduled BOOLEAN DEFAULT FALSE,
    
    notes TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Service packages definition
CREATE TABLE service_packages (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    name TEXT NOT NULL,
    type package_type NOT NULL,
    description TEXT,
    features JSONB, -- Array of feature objects
    pricing JSONB, -- Intro and standard pricing
    deliverables JSONB, -- What's included
    estimated_hours INTEGER,
    is_active BOOLEAN DEFAULT TRUE,
    demo_script JSONB, -- Sandbox demo configuration
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Client subscriptions/purchases
CREATE TABLE client_subscriptions (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    company_id UUID REFERENCES companies(id) ON DELETE CASCADE,
    package_id UUID REFERENCES service_packages(id),
    discovery_session_id UUID REFERENCES discovery_sessions(id),
    
    status subscription_status DEFAULT 'trial',
    purchase_date TIMESTAMPTZ,
    start_date TIMESTAMPTZ,
    end_date TIMESTAMPTZ,
    
    pricing_tier TEXT, -- 'intro' or 'standard'
    amount_paid DECIMAL(10,2),
    payment_reference TEXT,
    
    -- Custom requirements based on discovery
    custom_requirements JSONB,
    deliverables_status JSONB, -- Track completion of each deliverable
    
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Sandbox sessions for demos
CREATE TABLE sandbox_sessions (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    company_id UUID REFERENCES companies(id) ON DELETE CASCADE,
    package_id UUID REFERENCES service_packages(id),
    subscription_id UUID REFERENCES client_subscriptions(id),
    
    admin_id UUID REFERENCES profiles(id), -- Admin who set up the demo
    demo_name TEXT NOT NULL,
    demo_description TEXT,
    
    status demo_status DEFAULT 'pending',
    scheduled_date TIMESTAMPTZ,
    started_at TIMESTAMPTZ,
    ended_at TIMESTAMPTZ,
    expires_at TIMESTAMPTZ,
    
    -- Demo configuration and data
    demo_config JSONB, -- Sandbox configuration
    sample_data JSONB, -- Pre-loaded demo data
    client_interactions JSONB, -- Track what they clicked/used
    
    -- Results and feedback
    completion_percentage INTEGER DEFAULT 0,
    client_feedback JSONB,
    admin_notes TEXT,
    
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Analytics and interaction tracking
CREATE TABLE demo_interactions (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    sandbox_session_id UUID REFERENCES sandbox_sessions(id) ON DELETE CASCADE,
    user_id UUID REFERENCES profiles(id),
    
    action_type TEXT NOT NULL, -- 'click', 'view', 'generate', 'download', etc.
    element_id TEXT, -- What they interacted with
    feature_category TEXT, -- Which package feature
    
    interaction_data JSONB, -- Additional context
    duration_seconds INTEGER, -- How long they spent
    timestamp TIMESTAMPTZ DEFAULT NOW()
);

-- Admin activity logs
CREATE TABLE admin_activities (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    admin_id UUID REFERENCES profiles(id),
    activity_type TEXT NOT NULL,
    entity_type TEXT, -- 'demo', 'client', 'package', etc.
    entity_id UUID,
    description TEXT,
    metadata JSONB,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Communication logs
CREATE TABLE communications (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    company_id UUID REFERENCES companies(id) ON DELETE CASCADE,
    from_user_id UUID REFERENCES profiles(id),
    to_user_id UUID REFERENCES profiles(id),
    
    communication_type TEXT, -- 'email', 'sms', 'in_app', 'call_log'
    subject TEXT,
    content TEXT,
    
    related_discovery_id UUID REFERENCES discovery_sessions(id),
    related_demo_id UUID REFERENCES sandbox_sessions(id),
    
    sent_at TIMESTAMPTZ DEFAULT NOW(),
    read_at TIMESTAMPTZ,
    replied_at TIMESTAMPTZ
);

-- Automated follow-ups and triggers
CREATE TABLE follow_up_sequences (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    name TEXT NOT NULL,
    trigger_event TEXT, -- 'demo_completed', 'no_activity_7days', etc.
    sequence_steps JSONB, -- Array of follow-up actions
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE scheduled_follow_ups (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    company_id UUID REFERENCES companies(id) ON DELETE CASCADE,
    sequence_id UUID REFERENCES follow_up_sequences(id),
    trigger_data JSONB,
    
    scheduled_for TIMESTAMPTZ NOT NULL,
    completed_at TIMESTAMPTZ,
    status TEXT DEFAULT 'pending', -- 'pending', 'sent', 'failed', 'skipped'
    
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- RLS (Row Level Security) Policies
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE companies ENABLE ROW LEVEL SECURITY;
ALTER TABLE team_memberships ENABLE ROW LEVEL SECURITY;
ALTER TABLE discovery_sessions ENABLE ROW LEVEL SECURITY;
ALTER TABLE client_subscriptions ENABLE ROW LEVEL SECURITY;
ALTER TABLE sandbox_sessions ENABLE ROW LEVEL SECURITY;
ALTER TABLE demo_interactions ENABLE ROW LEVEL SECURITY;
ALTER TABLE communications ENABLE ROW LEVEL SECURITY;

-- Policies for profiles
CREATE POLICY "Users can view own profile" ON profiles
    FOR SELECT USING (auth.uid() = id);

CREATE POLICY "Users can update own profile" ON profiles
    FOR UPDATE USING (auth.uid() = id);

-- Policies for companies (clients can only see their own company)
CREATE POLICY "Users can view own company" ON companies
    FOR SELECT USING (
        id IN (
            SELECT company_id FROM team_memberships 
            WHERE user_id = auth.uid()
        )
        OR 
        EXISTS (
            SELECT 1 FROM profiles 
            WHERE id = auth.uid() AND role = 'admin'
        )
    );

-- Admin can see everything
CREATE POLICY "Admins can view all companies" ON companies
    FOR ALL USING (
        EXISTS (
            SELECT 1 FROM profiles 
            WHERE id = auth.uid() AND role = 'admin'
        )
    );

-- Similar policies for other tables...
CREATE POLICY "Company members can view sandbox sessions" ON sandbox_sessions
    FOR SELECT USING (
        company_id IN (
            SELECT company_id FROM team_memberships 
            WHERE user_id = auth.uid()
        )
        OR 
        EXISTS (
            SELECT 1 FROM profiles 
            WHERE id = auth.uid() AND role = 'admin'
        )
    );

-- Functions and triggers for updated_at timestamps
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Apply triggers to tables
CREATE TRIGGER update_profiles_updated_at BEFORE UPDATE ON profiles
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_companies_updated_at BEFORE UPDATE ON companies
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_discovery_sessions_updated_at BEFORE UPDATE ON discovery_sessions
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_client_subscriptions_updated_at BEFORE UPDATE ON client_subscriptions
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_sandbox_sessions_updated_at BEFORE UPDATE ON sandbox_sessions
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- Indexes for performance
CREATE INDEX idx_profiles_role ON profiles(role);
CREATE INDEX idx_companies_primary_contact ON companies(primary_contact_id);
CREATE INDEX idx_team_memberships_company ON team_memberships(company_id);
CREATE INDEX idx_team_memberships_user ON team_memberships(user_id);
CREATE INDEX idx_discovery_sessions_company ON discovery_sessions(company_id);
CREATE INDEX idx_discovery_sessions_status ON discovery_sessions(status);
CREATE INDEX idx_sandbox_sessions_company ON sandbox_sessions(company_id);
CREATE INDEX idx_sandbox_sessions_status ON sandbox_sessions(status);
CREATE INDEX idx_demo_interactions_session ON demo_interactions(sandbox_session_id);
CREATE INDEX idx_demo_interactions_timestamp ON demo_interactions(timestamp);
CREATE INDEX idx_communications_company ON communications(company_id);
CREATE INDEX idx_scheduled_follow_ups_date ON scheduled_follow_ups(scheduled_for);

-- Insert default service packages
INSERT INTO service_packages (name, type, description, features, pricing, deliverables, estimated_hours, demo_script) VALUES 
(
    'Kickstart Plan – Attract & Engage Faster',
    'kickstart',
    'Focus: Attracting & Engaging Customers / Content Creation Efficiency',
    '[
        "AI-generated social media post ideas & captions",
        "AI assistance for engaging headlines & CTAs",
        "AI-drafted website copy for core pages",
        "AI-powered local SEO keyword suggestions",
        "Human review and refinement"
    ]',
    '{
        "intro_range": "$497 - $697",
        "standard_range": "$750 - $1,200",
        "intro_min": 497,
        "intro_max": 697,
        "standard_min": 750,
        "standard_max": 1200
    }',
    '{
        "social_media_ideas": "10-12 ready-to-use ideas/captions for 2 platforms",
        "ad_copy": "Headlines & calls to action for digital ads",
        "website_copy": "1-2 core pages (About Us, Services Overview)",
        "seo_keywords": "1-2 primary local keywords",
        "human_review": "1 round of review and refinement"
    }',
    15,
    '{
        "demo_type": "content_generation",
        "sample_business": "Local Restaurant",
        "features_to_show": ["social_posts", "headline_generator", "seo_analyzer"],
        "duration_minutes": 15
    }'
),
(
    'Connection Plan – Smart Customer Service',
    'connection', 
    'Focus: Improving Customer Service & Efficiency',
    '[
        "AI-generated comprehensive FAQ responses",
        "Basic AI chatbot script drafts",
        "AI-assisted review analysis",
        "AI-generated review responses",
        "Human review and refinement"
    ]',
    '{
        "intro_range": "$397 - $597",
        "standard_range": "$650 - $950",
        "intro_min": 397,
        "intro_max": 597,
        "standard_min": 650,
        "standard_max": 950
    }',
    '{
        "faq_responses": "5-7 comprehensive FAQ responses",
        "chatbot_scripts": "Basic chatbot scripts for FAQs",
        "review_analysis": "Analysis of existing Google/Yelp reviews",
        "review_responses": "3-5 positive and 3-5 negative review responses",
        "human_review": "1 round of review and refinement"
    }',
    12,
    '{
        "demo_type": "customer_service_automation",
        "sample_business": "Local Service Provider",
        "features_to_show": ["faq_generator", "chatbot_builder", "review_manager"],
        "duration_minutes": 12
    }'
),
(
    'Efficiency Plan – Automate & Save Time',
    'efficiency',
    'Focus: Internal Efficiency & Time-Saving / Admin Automation',
    '[
        "AI-assisted internal document drafting",
        "AI-powered report summarization",
        "AI-facilitated brainstorming sessions",
        "Task automation identification",
        "Process optimization recommendations"
    ]',
    '{
        "intro_range": "$347 - $547", 
        "standard_range": "$600 - $850",
        "intro_min": 347,
        "intro_max": 547,
        "standard_min": 600,
        "standard_max": 850
    }',
    '{
        "internal_documents": "2 key internal documents",
        "report_summaries": "1-2 lengthy report summarizations",
        "brainstorming_session": "1-hour AI-facilitated session",
        "automation_identification": "1-2 simple automation opportunities",
        "optimization_plan": "Process improvement recommendations"
    }',
    10,
    '{
        "demo_type": "operations_automation",
        "sample_business": "Small Professional Office",
        "features_to_show": ["document_generator", "data_summarizer", "automation_finder"],
        "duration_minutes": 10
    }'
);

-- Insert default follow-up sequences
INSERT INTO follow_up_sequences (name, trigger_event, sequence_steps) VALUES
(
    'Post-Demo Follow-up',
    'demo_completed',
    '[
        {
            "delay_hours": 2,
            "type": "email",
            "template": "immediate_followup",
            "subject": "Thanks for exploring our AI solutions!"
        },
        {
            "delay_hours": 48,
            "type": "email", 
            "template": "value_reinforcement",
            "subject": "Quick question about your demo experience"
        },
        {
            "delay_hours": 168,
            "type": "email",
            "template": "proposal_ready",
            "subject": "Your custom AI solution proposal is ready"
        }
    ]'
),
(
    'Inactive Client Re-engagement',
    'no_activity_7days',
    '[
        {
            "delay_hours": 0,
            "type": "email",
            "template": "check_in",
            "subject": "How can we help move your AI project forward?"
        },
        {
            "delay_hours": 72,
            "type": "sms",
            "template": "quick_check",
            "message": "Hi! Just checking if you have any questions about the AI solutions we discussed. Reply STOP to opt out."
        }
    ]'
);