import React from 'react';

const About: React.FC = () => {
  return (
    <section className="section-container bg-white min-h-screen flex items-center justify-center py-8 px-4 relative">
      {/* Subtle Grid Background */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(0,0,0,0.03) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0,0,0,0.03) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}
      ></div>
      
      <div className="max-w-4xl w-full relative z-10">
        {/* Greeting Text */}
        <div className="text-center mb-12">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#1A202C] mb-2">
            Hi, I'm
          </h1>
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent animate-gradient-x bg-[length:200%_auto]">
              Preyanthan Raguparan
            </span>
          </h1>
        </div>

        {/* Single Large Container */}
        <div className="bg-white rounded-2xl border-8 border-black shadow-lg p-6 md:p-8 transition-all duration-500 ease-out hover:scale-[1.08] hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)] hover:-translate-y-4">
          {/* Two Column Layout */}
          <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-6">
            {/* Left Column - Text Content */}
            <div className="space-y-5 text-gray-800">
              {/* Introduction */}
              <p className="text-sm md:text-base leading-relaxed">
                I'm an undergraduate student at the University of California, Los Angeles studying Computer Science and Computer Engineering. I'm passionate about blending technology, analytics, and language processing to solve impactful issues.
              </p>

              {/* Currently Working On */}
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <svg
                    className="w-4 h-4 text-gray-700"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <h3 className="font-semibold text-sm md:text-base text-gray-900">Currently working on:</h3>
                </div>
                <ul className="list-disc list-inside space-y-1 text-sm md:text-base pl-0 ml-0">
                  <li className="whitespace-nowrap">Software Developer for Daily Bruin Internal Tools Team</li>
                  <li className="whitespace-nowrap">Machine Learning Researcher at UCLA Mobility Lab</li>
                  <li className="whitespace-nowrap">Technology Consulting Director at Glitch UCLA</li>
                </ul>
              </div>

              {/* Fun Facts */}
              <div className="space-y-1.5">
                <h3 className="font-bold text-sm md:text-base text-gray-900">Some Fun Facts:</h3>
                <p className="text-sm md:text-base leading-relaxed">
                  I've played piano for nine years. I resell shoes out of love. I've visited 11 countries. My favorite number is 7. And Korean raw marinated crab's my favorite food.
                </p>
              </div>
            </div>

            {/* Right Column - Avatar */}
            <div className="flex items-start justify-center md:justify-end">
              <div className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-gray-200 shadow-md">
                <div className="w-full h-full bg-gradient-to-br from-cyan-50 to-purple-50 flex items-center justify-center">
                  <svg
                    className="w-32 h-32 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Social Media Links */}
          <div className="flex justify-center gap-3 pt-4 border-t border-gray-200">
            {/* GitHub */}
            <a
              href="https://github.com/Preyan489"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors shadow-sm text-sm"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              <span className="font-medium text-gray-700">GitHub</span>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/preyanthan"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors shadow-sm text-sm"
            >
              <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              <span className="font-medium text-gray-700">LinkedIn</span>
            </a>

          </div>
        </div>
      </div>

      <style>{`
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient-x {
          animation: gradient-x 3s ease infinite;
        }
      `}</style>
    </section>
  );
};

export default About;