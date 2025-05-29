import React from 'react';
const logo = require('./assets/AI solutions logo.png');

export default function Logo() {
  return (
    <div className="flex items-center space-x-2">
      <img src={logo} alt="AI Solutions-Serv Logo" className="h-12 w-12" />
      <span className="text-2xl font-bold text-primary-600">Diamond D.</span>
      <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-accent-500">
        AI Solutions Services
      </span>
    </div>
  );
}

