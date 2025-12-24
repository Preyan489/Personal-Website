import React from 'react';

const About: React.FC = () => {
  return (
    <section className="section-container">
      <div className="max-w-4xl mx-auto">
        <h2 className="section-title text-center">About Me</h2>
        <p className="section-subtitle text-center">
          Get to know me better
        </p>

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
            <div className="bg-gradient-to-br from-primary-500 to-purple-600 rounded-2xl p-1 shadow-2xl">
              <div className="bg-white rounded-2xl p-8">
                <div className="aspect-square bg-gradient-to-br from-primary-100 to-purple-100 rounded-xl flex items-center justify-center">
                  <svg
                    className="w-32 h-32 text-primary-600"
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
              className="text-center p-6 bg-gray-50 rounded-xl hover:bg-primary-50 transition-colors duration-200"
            >
              <div className="text-3xl font-bold text-primary-600 mb-2">
                {stat.value}
              </div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
