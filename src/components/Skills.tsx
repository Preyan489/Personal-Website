import React from 'react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      category: 'Frontend',
      skills: [
        { name: 'React', level: 90 },
        { name: 'TypeScript', level: 85 },
        { name: 'Next.js', level: 80 },
        { name: 'Tailwind CSS', level: 90 },
        { name: 'HTML/CSS', level: 95 },
      ],
    },
    {
      category: 'Backend',
      skills: [
        { name: 'Node.js', level: 85 },
        { name: 'Express', level: 80 },
        { name: 'Python', level: 75 },
        { name: 'REST APIs', level: 90 },
        { name: 'GraphQL', level: 70 },
      ],
    },
    {
      category: 'Tools & Others',
      skills: [
        { name: 'Git', level: 90 },
        { name: 'Docker', level: 75 },
        { name: 'AWS', level: 70 },
        { name: 'MongoDB', level: 80 },
        { name: 'PostgreSQL', level: 75 },
      ],
    },
  ];

  return (
    <section className="section-container bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl sm:text-6xl font-black bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-4 tracking-tight">
            Skills & Technologies
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="backdrop-blur-xl bg-gray-50 rounded-2xl p-8 border border-gray-200 hover:border-cyan-500/50 hover:shadow-2xl hover:shadow-cyan-500/10 transition-all duration-300"
            >
              <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-8 text-center">
                {category.category}
              </h3>
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-3">
                      <span className="font-medium text-gray-700">{skill.name}</span>
                      <span className="text-sm text-cyan-400 font-mono font-semibold">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5 overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-full transition-all duration-1000 shadow-lg shadow-cyan-500/50"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Technology Icons */}
        <div className="mt-16">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-10">
            Technologies I Use
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              'React',
              'TypeScript',
              'JavaScript',
              'Node.js',
              'Python',
              'Tailwind CSS',
              'MongoDB',
              'PostgreSQL',
              'Git',
              'Docker',
              'AWS',
              'Next.js',
            ].map((tech, index) => (
              <div
                key={index}
                className="px-6 py-3 bg-white backdrop-blur-sm rounded-lg border border-gray-300 hover:border-cyan-500/50 shadow-md hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-200 font-medium text-gray-700 hover:text-cyan-600 hover:scale-105"
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;