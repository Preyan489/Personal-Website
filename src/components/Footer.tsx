import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 backdrop-blur-xl border-t border-slate-800 text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-lg font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-2">
              Portfolio
            </p>
            <p className="text-sm text-gray-400">
              © {currentYear} All rights reserved.
            </p>
          </div>
          <div className="flex gap-6">
            <Link
              to="/"
              className="text-gray-400 hover:text-cyan-400 transition-colors"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-gray-400 hover:text-cyan-400 transition-colors"
            >
              About
            </Link>
            <Link
              to="/projects"
              className="text-gray-400 hover:text-cyan-400 transition-colors"
            >
              Projects
            </Link>
            <Link
              to="/experiences"
              className="text-gray-400 hover:text-cyan-400 transition-colors"
            >
              Experiences
            </Link>
            <Link
              to="/contact"
              className="text-gray-400 hover:text-cyan-400 transition-colors"
            >
              Contact
            </Link>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-slate-800 text-center text-sm text-gray-500">
          <p>
            Built with React, TypeScript, and Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;