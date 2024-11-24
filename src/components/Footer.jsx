import React from 'react';
import GitHubIcon from './icons/GitHubIcon';
import LinkedInIcon from './icons/LinkedInIcon';
import TwitterIcon from './icons/TwitterIcon';

const Footer = () => {
  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/dgoldenthal',
      icon: GitHubIcon
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/dov-g-6a19582/',
      icon: LinkedInIcon
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/dgoldenthal132',
      icon: TwitterIcon
    }
  ];

  return (
    <footer className="w-full bg-slate-800 text-white py-6">
      <div className="max-w-screen-2xl mx-auto px-4">
        <div className="flex flex-col items-center space-y-4">
          <div className="flex space-x-6">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition-colors"
                aria-label={link.name}
              >
                <link.icon />
              </a>
            ))}
          </div>
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Your Name. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;