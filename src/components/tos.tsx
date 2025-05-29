import React from 'react';

/**
 * The Terms of Service component, which displays the legal agreement between the service provider, Diamond D. AI Solutions, and the client.
 *
 * @returns A React component with the Terms of Service.
 */
const Tos: React.FC = () => (
  <div className="p-4 md:p-8 lg:p-12 max-w-4xl mx-auto bg-white shadow-lg rounded-lg font-['Inter',_sans-serif] text-gray-800">
    <h1 className="text-2xl md:text-3xl font-bold mb-4 text-center text-blue-700">Terms of Service for Diamond D. AI Solutions Services</h1>
    <p className="text-sm text-gray-500 mb-6 text-center">Last Updated: May 25, 2025</p>

    <p className="mb-4">
      This Client Service Agreement (the “Agreement” or “TOS”) is entered into as of the Effective Date, by and between:
    </p>

    <div className="mb-6 p-4 border border-gray-200 rounded-md bg-gray-50">
      <p className="mb-2">
        <strong className="font-semibold text-gray-700">Service Provider:</strong> Diamond D. AI Solutions, operated as a sole proprietorship by Daniel (Dan) L. Diamond, with a principal place of business at 23604 Old Highway 160, Reeds Spring, Mo. 65737.
      </p>
      <p>
        <strong className="font-semibold text-gray-700">Client:</strong> [Client’s Full Legal Name or Business Name], with a principal place of business at [Client’s Street Address, City, State, ZIP Code].
      </p>
    </div>

    <h2 className="text-xl font-semibold mt-6 mb-3 text-blue-600">RECITALS</h2>
    <p className="mb-4">
      WHEREAS, the Service Provider provides specialized services using artificial intelligence (AI) to enhance business operations, marketing, engagement, and efficiencies; and WHEREAS, the Client wishes to retain the Service Provider for such services under the terms and conditions of this Agreement;
    </p>
    <p className="mb-6">
      NOW, THEREFORE, in consideration of the mutual covenants herein, the parties agree as follows:
    </p>

    {/* Section 1 */}
    <section className="mb-6">
      <h2 className="text-xl font-semibold mb-3 text-blue-600 border-b pb-2">1. Introduction and Acceptance of Terms</h2>
      <p className="mb-3">
        <strong className="font-medium">1.1 Agreement to Terms:</strong> By accessing or using the services provided by Diamond D. AI Solutions (the "Services"), the Client agrees to be bound by these Terms of Service. If the Client does not agree to these terms, they may not use the Services.
      </p>
      <p>
        <strong className="font-medium">1.2 Geographic Scope:</strong> While Diamond D. AI Solutions primarily focuses on serving clients in the SW Missouri/Branson area, the Service Provider will take on workloads beyond the local demographic if there is demand.
      </p>
    </section>

    {/* Section 2 */}
    <section className="mb-6">
      <h2 className="text-xl font-semibold mb-3 text-blue-600 border-b pb-2">2. Description of Services</h2>
      <p className="mb-3">
        <strong className="font-medium">2.1 Scope of Services:</strong> The Service Provider offers comprehensive AI-powered solutions to enhance business operations, marketing, customer service, and internal efficiencies. These Services are detailed in the specific package or custom plan agreed upon with the Client (e.g., the "Total Package: AI Business Overhaul System," "Package Enhancements," or "Custom Package Builder") and will be further outlined in Appendix A of this Agreement.
      </p>
      <p className="mb-3">
        <strong className="font-medium">2.2 Key Service Offerings:</strong> Services may include, but are not limited to:
      </p>
      <ul className="list-disc list-inside mb-3 pl-4 space-y-1">
        <li>AI-Enhanced Content Generation: Development of logos, brand packs, SEO-optimized website content (e.g., 5+ pages), social media content calendars (30-day AI-generated + human-reviewed), ad copy, FAQs, SOP templates, and image generation via DALL·E 3.</li>
        <li>AI-Driven Analytics &amp; Strategy: Customer persona modeling, performance reports (AI-summarized with visual insights), dynamic pricing recommendations, sentiment analysis of customer reviews, and identification of time-drains for AI automation.</li>
        <li>Customer Experience &amp; Automation: Implementation of sales funnel chatbots, full FAQ bots, custom chat agents trained on Client's business data, and review responder agents with human override options.</li>
        <li>Operational &amp; Backend Efficiency: Development of AI agent systems for tasks like auto-scheduling, report summarization, data entry, and AI-driven internal dashboards.</li>
        <li>Specialized Solutions: For Short-Term Rental (STR) Hosts, services include automated guest communication, SEO-optimized listing content, dynamic pricing recommendations, auto-scheduling for cleanings, maintenance alerts, and upsell offers.</li>
        <li>Video Conferencing Integration: Provision of professional video conferencing capabilities via Daily.co WebRTC Service for client interactions, which may include real video streams, audio communication, text chat, screen sharing, and optional recording.</li>
      </ul>
      <p className="mb-3">
        <strong className="font-medium">2.3 Client Interaction with AI:</strong> Clients will not have direct access to the underlying large language models (LMs/LLMs). Instead, Clients will interact with tailored versions of their purchased packages and experience the capabilities of AI agents and tools via a "client demo sandbox." Any AI connections are established through this sandbox and the Service Provider's access line for the contracted work. If an AI is tied to a Client's package, a dedicated API/SDK may be set up for them under their information, which can be white-labeled for their branding.
      </p>
      <p>
        <strong className="font-medium">2.4 Pricing Model:</strong> Pricing for desired packages or custom combinations will be presented to the Client as a total package price, which may be influenced by AI recommendations. Additional services or custom work will be billed at an hourly rate of $75–$100/hour, as agreed upon.
      </p>
    </section>

    {/* Section 3 */}
    <section className="mb-6">
      <h2 className="text-xl font-semibold mb-3 text-blue-600 border-b pb-2">3. Client Responsibilities and Obligations</h2>
      <p className="mb-3">
        <strong className="font-medium">3.1 Information Provision:</strong> The Client agrees to provide accurate, complete, and timely information necessary for the Service Provider to perform the Services. This includes details gathered via the "Discovery Intake UI" (questionnaire) and other onboarding processes. Data for AI-driven features (e.g., dynamic pricing, sentiment analysis) should ideally be provided from the Client's systems, but manual provision is acceptable if system integration is not feasible. The Client will be provided with a "Data we need from you for this job" information sheet.
      </p>
      <p className="mb-3">
        <strong className="font-medium">3.2 Review and Approval:</strong> The Client is responsible for reviewing and approving all drafts and deliverables in a timely manner. The Client is entitled to up to two (2) rounds of revisions per deliverable.
      </p>
      <p className="mb-3">
        <strong className="font-medium">3.3 Final Use of AI Outputs:</strong> The Client acknowledges that some outputs may be AI-generated, and current copyright laws may not fully protect such material. The Client accepts sole responsibility for the final use of all AI-generated content and insights, including but not limited to, ensuring its accuracy, completeness, suitability for their specific purpose, and compliance with all applicable laws and regulations.
      </p>
      <p className="mb-3">
        <strong className="font-medium">3.4 Prohibited Uses and Acceptable Use Policy:</strong> The Client agrees not to use the Services or any AI-generated outputs for any prohibited activities. Prohibited activities include, but are not limited to:
      </p>
      <ul className="list-disc list-inside pl-4 space-y-1">
        <li>Any illegal or fraudulent activities, hate speech, harassment, or abusive conduct.</li>
        <li>Generating or disseminating misleading, deceptive, or false information.</li>
        <li>Infringement of intellectual property rights, privacy rights, or any other rights of third parties.</li>
        <li>Introduction of viruses, malware, or other harmful code into the Service Provider's systems or Client's systems.</li>
        <li>Any attempt to reverse engineer, decompile, or gain unauthorized access to the Service Provider's AI models, systems, platform, or the underlying technology of the sandbox or client packages.</li>
        <li>Using the Services for competitive purposes or to develop similar competing services.</li>
        <li>Any activities that violate the policies of third-party services integrated by the Service Provider (e.g., OpenAI, Daily.co).</li>
        <li>Any content or activities that are obscene, defamatory, or otherwise harmful.</li>
      </ul>
    </section>
    {/* Add more sections as needed, following the pattern above */}
  </div>
);

/**
 * Main application component.
 * This component renders the Terms of Service page.
 */
const App: React.FC = () => {
  // This is the main container for the application.
  // Tailwind CSS classes are used for styling.
  // 'min-h-screen' ensures the background covers the full screen height.
  // 'bg-gray-100' sets a light gray background.
  // 'flex items-center justify-center' centers the content on the page.
  // 'p-4' adds some padding around the content.
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4 font-['Inter',_sans-serif]">
      {/* Header for the entire page - Optional */}
      <header className="w-full max-w-4xl mb-8 text-center">
        {/* You could put a logo or site title here if needed */}
      </header>

      {/* Main content area where the Tos component is rendered */}
      <main className="w-full">
        <Tos />
      </main>

      {/* Footer for the entire page - Optional */}
      <footer className="w-full max-w-4xl mt-8 text-center text-sm text-gray-500">
        <p>&copy; {new Date().getFullYear()} Diamond D. AI Solutions. All rights reserved.</p>
        <p>23604 Old Highway 160, Reeds Spring, Mo. 65737</p>
      </footer>
    </div>
  );
};

export default App;