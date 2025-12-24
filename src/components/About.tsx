import React from 'react';

const About: React.FC = () => {
  return (
    <section className="section-container bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl sm:text-6xl font-black bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-4 tracking-tight">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-gray-700 leading-relaxed">
            <p className="text-lg">
              Hello! I'm a passionate full stack developer with a love for creating
              innovative web applications. I enjoy turning complex problems into simple,
              beautiful, and intuitive solutions.
            </p>
            <p className="text-lg">
              When I'm not coding, you can find me exploring new technologies, contributing
              to open source projects, or working on personal side projects that challenge
              my skills and creativity.
            </p>
            <p className="text-lg">
              I'm always looking for opportunities to work with a team of talented individuals
              on meaningful projects that make a difference.
            </p>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-cyan-500/20 via-blue-500/20 to-purple-500/20 rounded-2xl p-1 shadow-2xl shadow-cyan-500/20 backdrop-blur-sm">
              <div className="bg-white backdrop-blur-sm rounded-2xl p-8 border border-gray-200">
                <div className="aspect-square bg-gradient-to-br from-cyan-50 to-purple-50 rounded-xl flex items-center justify-center border border-cyan-200">
                  <svg
                    className="w-32 h-32 text-cyan-400"
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
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { label: 'Years Experience', value: '3+' },
            { label: 'Projects Completed', value: '50+' },
            { label: 'Happy Clients', value: '30+' },
            { label: 'Technologies', value: '15+' },
          ].map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 bg-gray-50 backdrop-blur-sm rounded-xl border border-gray-200 hover:border-cyan-500/50 hover:bg-gray-100 transition-all duration-300 group"
            >
              <div className="text-4xl font-black bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                {stat.value}
              </div>
              <div className="text-gray-600 text-sm font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;