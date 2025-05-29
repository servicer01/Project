// services/messaging.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { FaRobot, FaComments, FaPhone, FaEnvelope } from 'react-icons/fa';

interface MessagingServiceInfo {
  id: string;
  name: string;
  description: string;
  features: string[];
  platforms: string[];
  pricing?: string;
}

export const messagingServices: MessagingServiceInfo[] = [
  {
    id: 'chatbot-development',
    name: 'AI Chatbot Development',
    description: 'Custom chatbots for your website and messaging platforms',
    features: ['Natural language processing', '24/7 availability', 'Multi-language support', 'Integration ready'],
    platforms: ['Website', 'WhatsApp', 'Facebook Messenger', 'Telegram'],
    pricing: 'Starting at $800/setup'
  },
  {
    id: 'guest-messaging',
    name: 'Guest Messaging Automation',
    description: 'Automated guest communication for hospitality businesses',
    features: ['Check-in instructions', 'FAQ responses', 'Booking confirmations', 'Review requests'],
    platforms: ['Airbnb', 'VRBO', 'Booking.com', 'Direct bookings'],
    pricing: 'Starting at $200/month'
  },
  {
    id: 'lead-qualification',
    name: 'Lead Qualification Bots',
    description: 'Qualify leads automatically before they reach your sales team',
    features: ['Smart questioning', 'Lead scoring', 'CRM integration', 'Appointment scheduling'],
    platforms: ['Website', 'Facebook', 'LinkedIn', 'Email'],
    pricing: 'Starting at $400/month'
  }
];

export class MessagingService {
  private apiKey: string;
  private webhookUrl: string;

  constructor(apiKey: string, webhookUrl?: string) {
    this.apiKey = apiKey;
    this.webhookUrl = webhookUrl || '';
  }

  // Chatbot Response Generation
  async generateResponse(userMessage: string, context: any = {}) {
    try {
      const response = await this.callAIService({
        message: userMessage,
        context: context,
        personality: 'helpful and professional',
        businessType: context.businessType || 'general'
      });

      return {
        message: response.text,
        confidence: response.confidence,
        intent: response.intent,
        entities: response.entities,
        suggestedActions: response.actions || []
      };
    } catch (error) {
      return {
        message: "I apologize, but I'm having trouble processing your request right now. Please try again or contact our support team.",
        confidence: 0,
        intent: 'error',
        entities: [],
        suggestedActions: ['contact_support']
      };
    }
  }

  // Guest Messaging Automation
  async sendGuestMessage(guestId: string, messageType: string, customData: any = {}) {
    const messageTemplates = {
      'check_in': `Hi {guestName}! Your check-in is today at {checkInTime}. Here are your access instructions: {instructions}`,
      'check_out': `Thank you for staying with us, {guestName}! Check-out is at {checkOutTime}. We'd love your feedback!`,
      'booking_confirmation': `Your booking is confirmed! Reference: {bookingId}. Check-in: {checkInDate} at {checkInTime}`,
      'review_request': `Hi {guestName}! We hope you enjoyed your stay. Would you mind leaving us a review? {reviewLink}`
    };

    const template = messageTemplates[messageType];
    if (!template) {
      throw new Error(`Unknown message type: ${messageType}`);
    }

    const personalizedMessage = this.personalizeMessage(template, customData);
    
    return await this.sendMessage(guestId, personalizedMessage);
  }

  // Multi-platform Message Sending
  async sendMessage(recipientId: string, message: string, platform: string = 'default') {
    const platformConfig = {
      'whatsapp': { endpoint: '/whatsapp/send', format: 'whatsapp' },
      'facebook': { endpoint: '/facebook/send', format: 'facebook' },
      'email': { endpoint: '/email/send', format: 'html' },
      'sms': { endpoint: '/sms/send', format: 'text' }
    };

    const config = platformConfig[platform] || { endpoint: '/send', format: 'text' };
    
    try {
      // Platform-specific sending logic
      const response = await fetch(this.webhookUrl + config.endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${this.apiKey}`
        },
        body: JSON.stringify({
          recipient: recipientId,
          message: message,
          format: config.format
        })
      });

      return await response.json();
    } catch (error) {
      throw new Error(`Failed to send message: ${error.message}`);
    }
  }

  // Lead Qualification
  async qualifyLead(responses: Record<string, any>) {
    const qualificationScore = this.calculateLeadScore(responses);
    const category = this.categorizeLeadScore(qualificationScore);
    
    return {
      score: qualificationScore,
      category: category,
      followUpActions: this.getFollowUpActions(category),
      summary: this.generateLeadSummary(responses)
    };
  }

  private personalizeMessage(template: string, data: Record<string, any>): string {
    return template.replace(/\{(\w+)\}/g, (match, key) => data[key] || match);
  }

  private calculateLeadScore(responses: Record<string, any>): number {
    // Lead scoring algorithm
    let score = 0;
    
    if (responses.budget && responses.budget > 1000) score += 30;
    if (responses.timeline && responses.timeline === 'immediate') score += 25;
    if (responses.companySize && responses.companySize > 50) score += 20;
    if (responses.authority && responses.authority === 'decision-maker') score += 25;
    
    return Math.min(score, 100);
  }

  private categorizeLeadScore(score: number): string {
    if (score >= 80) return 'hot';
    if (score >= 60) return 'warm';
    if (score >= 40) return 'cold';
    return 'unqualified';
  }

  private getFollowUpActions(category: string): string[] {
    const actions = {
      'hot': ['immediate_call', 'send_proposal', 'schedule_demo'],
      'warm': ['nurture_email', 'schedule_call', 'send_case_study'],
      'cold': ['add_to_newsletter', 'send_educational_content'],
      'unqualified': ['archive', 'add_to_general_list']
    };
    
    return actions[category] || [];
  }

  private generateLeadSummary(responses: Record<string, any>): string {
    return `Lead interested in ${responses.service || 'services'} with budget of ${responses.budget || 'unknown'} and timeline of ${responses.timeline || 'unknown'}.`;
  }

  private async callAIService(params: any) {
    // AI service integration for response generation
    return {
      text: "Thank you for your message. How can I help you today?",
      confidence: 0.8,
      intent: 'greeting',
      entities: [],
      actions: []
    };
  }
}

// React Component for Messaging Service Page
export default function MessagingServicePage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <FaRobot className="w-16 h-16 text-primary-600 mx-auto mb-4" />
          <h1 className="text-4xl font-bold mb-4">Chatbots & Guest Messaging</h1>
          <p className="text-xl text-gray-600">Automated responses that feel personal</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {messagingServices.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-6 rounded-xl shadow-lg"
            >
              <h3 className="text-xl font-semibold mb-3">{service.name}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              
              <div className="mb-4">
                <h4 className="font-semibold text-sm mb-2">Features:</h4>
                <ul className="space-y-1">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm">
                      <span className="w-2 h-2 bg-primary-600 rounded-full mr-2"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-4">
                <h4 className="font-semibold text-sm mb-2">Platforms:</h4>
                <div className="flex flex-wrap gap-2">
                  {service.platforms.map((platform, idx) => (
                    <span key={idx} className="text-xs bg-gray-100 px-2 py-1 rounded">
                      {platform}
                    </span>
                  ))}
                </div>
              </div>

              {service.pricing && (
                <p className="text-primary-600 font-semibold">{service.pricing}</p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}