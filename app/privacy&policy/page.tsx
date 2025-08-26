'use client'
import { Shield, Eye, Lock, Users, FileText, Mail, Calendar, Globe } from 'lucide-react';

const PrivacyPolicy = () => {
  const sections = [
    {
      id: 'information-collection',
      title: 'Information We Collect',
      icon: <FileText className="w-6 h-6" />,
      content: [
        'Personal information you provide directly (name, email, phone number, company details)',
        'Technical information (IP address, browser type, device information)',
        'Usage data (pages visited, time spent, interactions with our products)',
        'Cookies and similar tracking technologies'
      ]
    },
    {
      id: 'information-use',
      title: 'How We Use Your Information',
      icon: <Eye className="w-6 h-6" />,
      content: [
        'Provide and improve our products and services',
        'Communicate with you about our offerings and updates',
        'Process transactions and fulfill orders',
        'Analyze website usage and optimize user experience',
        'Comply with legal obligations and protect our rights'
      ]
    },
    {
      id: 'information-sharing',
      title: 'Information Sharing',
      icon: <Users className="w-6 h-6" />,
      content: [
        'We do not sell your personal information to third parties',
        'We may share information with trusted service providers',
        'Information may be disclosed to comply with legal requirements',
        'Business transfers may include customer information',
        'We may share aggregated, non-personal information for analytics'
      ]
    },
    {
      id: 'data-security',
      title: 'Data Security',
      icon: <Lock className="w-6 h-6" />,
      content: [
        'We implement industry-standard security measures',
        'Data is encrypted during transmission and storage',
        'Regular security audits and updates are performed',
        'Access to personal information is restricted to authorized personnel',
        'We maintain incident response procedures for data breaches'
      ]
    },
    {
      id: 'cookies',
      title: 'Cookies and Tracking',
      icon: <Globe className="w-6 h-6" />,
      content: [
        'Essential cookies for website functionality',
        'Analytics cookies to understand user behavior',
        'Marketing cookies for personalized advertising',
        'You can control cookie preferences in your browser',
        'Some features may not work properly without cookies'
      ]
    },
    {
      id: 'your-rights',
      title: 'Your Rights',
      icon: <Shield className="w-6 h-6" />,
      content: [
        'Access your personal information we hold',
        'Request correction of inaccurate information',
        'Request deletion of your personal information',
        'Object to processing of your information',
        'Request data portability where applicable'
      ]
    }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-drakGray text-white mt-14">
      <div className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Shield className="w-16 h-16 mx-auto mb-4 text-main" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              We are committed to protecting your privacy and ensuring the security of your personal information.
            </p>
            <div className="flex items-center justify-center mt-6 text-white">
              <Calendar className="w-5 h-5 mr-2" />
              <span>Last updated: August 2025</span>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="bg-black sticky top-0 z-10 border-b border-gray-700">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto py-4 space-x-6">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className="flex items-center space-x-2 text-main hover:text-blue-400 transition-colors whitespace-nowrap"
              >
                {section.icon}
                <span className="text-sm font-medium text-gray-300">{section.title}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="hidden lg:block ">
            <div className="sticky top-32">
              <h3 className="text-lg font-semibold mb-4 text-white">Quick Navigation</h3>
              <nav className="space-y-2">
                {sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => scrollToSection(section.id)}
                    className="flex items-center space-x-3 text-main hover:text-blue-400 transition-colors w-full text-left p-2 rounded-lg hover:bg-gray-800"
                  >
                    {section.icon}
                    <span className="text-sm text-gray-300">{section.title}</span>
                  </button>
                ))}
              </nav>
            </div>
          </div>

          <div className="lg:col-span-3 space-y-12">

            <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
              <h2 className="text-2xl font-bold mb-4 text-white">Introduction</h2>
              <p className="text-gray-300 leading-relaxed">
                This Privacy Policy describes how we collect, use, and protect your information when you visit our website 
                or use our services. We are committed to ensuring that your privacy is protected and that you understand 
                how your information is being used.
              </p>
            </div>

            {/* Sections */}
            {sections.map((section) => (
              <div key={section.id} id={section.id} className="bg-gray-800 rounded-lg p-6 border border-gray-700">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="text-main">{section.icon}</div>
                  <h2 className="text-2xl font-bold text-white">{section.title}</h2>
                </div>
                <ul className="space-y-3">
                  {section.content.map((item, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-main rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-300 leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Contact Information */}
            <div className="bg-gradient-to-r from-blue-900 to-blue-800 rounded-lg p-6 border border-blue-700">
              <div className="flex items-center space-x-3 mb-4">
                <Mail className="w-6 h-6 text-blue-300" />
                <h2 className="text-2xl font-bold text-blue-300">Contact Us</h2>
              </div>
              <p className="text-blue-100 mb-4">
                If you have any questions about this Privacy Policy or our data practices, please contact us:
              </p>
              <div className="space-y-2 text-blue-200">
                <p>Email: info@shenzor.com</p>
                <p>Phone: +(966) 55 9845411</p>
                <p>Address: Riyadh,KSA</p>
              </div>
            </div>

            {/* Updates Notice */}
            <div className="bg-yellow-900 border border-yellow-700 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-yellow-300 mb-2">Policy Updates</h3>
              <p className="text-yellow-100">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting 
                the new Privacy Policy on this page and updating the Last updated date.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;