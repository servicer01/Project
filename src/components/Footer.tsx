import React from 'react';
import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Logo />
            <p className="mt-4 text-gray-400">
              Empowering businesses with AI solutions in Reeds Spring, Missouri and beyond.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href=".\src\services\content.tsx" className="hover:text-white">Content Creation</a></li>
              <li><a href="#" className="hover:text-white">Chatbots</a></li>
              <li><a href="src\components\services\social.tsx" className="hover:text-white">Social Media</a></li>
              <li><a href="src\components\services\automation.tsx" className="hover:text-white">Automation</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href=".\src\components\about.tsx" className="hover:text-white">About Us</a></li>
              <li><a href=".\src\components\contact.tsx" className="hover:text-white">Contact</a></li>
              <li><a href=".\src\components\privacy.tsx" className="hover:text-white">Privacy Policy</a></li>
              <li><a href=".\src\components\tos.tsx" className="hover:text-white">Terms of Service</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Now!</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Reeds Spring, MO</li>
              <li>
                <a href="mailto:ai.solutions.serv@mail.com" className="hover:text-white">
                  ai.solutions.serv@mail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Diamond D. AI Solutions Services. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}