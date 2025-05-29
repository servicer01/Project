// services/automation.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { FaFileAlt, FaCogs, FaDatabase, FaRobot, FaClipboardList, FaSync } from 'react-icons/fa';

export interface AutomationServiceInfo {
  id: string;
  name: string;
  description: string;
  features: string[];
  integrations: string[];
  pricing?: string;
}

export const automationServices: AutomationServiceInfo[] = [
  {
    id: 'document-automation',
    name: 'Document Generation & Management',
    description: 'Automated creation and organization of business documents',
    features: ['Template automation', 'Dynamic content insertion', 'Version control', 'Bulk document creation'],
    integrations: ['Google Docs', 'Microsoft Office', 'PDF generators', 'Cloud storage'],
    pricing: 'Starting at $300/month'
  },
  {
    id: 'workflow-automation',
    name: 'Business Process Automation',
    description: 'Streamline repetitive tasks and business workflows',
    features: ['Process mapping', 'Task automation', 'Approval workflows', 'Integration bridges'],
    integrations: ['Zapier', 'Microsoft Power Automate', 'Custom APIs', 'Database systems'],
    pricing: 'Starting at $500/month'
  },
  {
    id: 'data-automation',
    name: 'Data Processing & Reporting',
    description: 'Automated data collection, processing, and report generation',
    features: ['Data extraction', 'Automated reporting', 'Dashboard creation', 'Alert systems'],
    integrations: ['Excel', 'Google Sheets', 'Databases', 'BI tools'],
    pricing: 'Starting at $400/month'
  },
  {
    id: 'communication-automation',
    name: 'Internal Communication Automation',
    description: 'Streamline internal communications and notifications',
    features: ['Automated notifications', 'Meeting scheduling', 'Status updates', 'Team coordination'],
    integrations: ['Slack', 'Microsoft Teams', 'Email systems', 'Calendar apps'],
    pricing: 'Starting at $200/month'
  }
];

// Workflow Automation
export async function createWorkflow(
    name: string,
    steps: any[],
    triggers: any[],
    generateWorkflowId: () => string,
    saveWorkflow: (workflow: any) => Promise<void>,
    setupTrigger: (workflowId: string, trigger: any) => Promise<void>
) {
    const workflow = {
        id: generateWorkflowId(),
        name,
        steps: steps.map((step, index) => ({
            ...step,
            order: index,
            id: `step_${index}_${Date.now()}`
        })),
        triggers,
        status: 'active',
        createdAt: new Date()
    };

    await saveWorkflow(workflow);

    // Set up triggers (placeholder logic)
    for (const trigger of triggers) {
        await setupTrigger(workflow.id, trigger);
    }

    return {
        workflowId: workflow.id,
        status: 'created',
        triggerUrls: triggers.map(t => t.webhookUrl || null).filter(Boolean)
    };
}

