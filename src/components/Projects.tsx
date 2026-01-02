import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  github?: string;
  demo?: string;
  image?: string;
}

const Projects: React.FC = () => {
  const location = useLocation();
  const projectRefs = useRef<(HTMLDivElement | null)[]>([]);
  const projects: Project[] = [
    {
      title: 'TheraVoice',
      description:
        'A modern AI mental health companion that delivers seamless voice-based conversations through real-time speech processing, intelligent response generation, and natural speech synthesis, supported by secure user accounts, persistent sessions, and a clean dark-mode design.',
      technologies: ['FastAPI', 'Supabase', 'ElevenLabs', 'TypeScript', 'Material UI', 'Tailwind CSS', 'JWT', 'React.js/Vite'],
      github: 'https://github.com/Preyan489/TheraVoice',
      demo: 'https://devpost.com/software/theravoice',
      image: `${process.env.PUBLIC_URL || ''}/theravoice-logo.png`,
    },
    {
      title: 'ScriptShelf',
      description:
        'A tool for organizing and managing reusable code snippets across projects. It provides a single place to store, search, and retrieve snippets whether you\'re working in the browser, your editor, or the web app making it easy to keep frequently used code accessible and well-organized.',
      technologies: ['JavaScript', 'CSS', 'TypeScript', 'HTML', 'Node.js', 'Cucumber', 'Express'],
      github: 'https://github.com/Preyan489/script-shelf',
      demo: '#',
      image: `${process.env.PUBLIC_URL || ''}/script-shelf.png`,
    },
    {
      title: 'Wonky Kong',
      description:
        'Wonky Kong is a retro-style platformer where players jump across platforms, climb ladders, and avoid dangers such as rolling barrels and fireballs in their quest to reach Kong. Using burp-based attacks and collecting items along the way, players must survive each stage as the game ramps up in difficulty.',
      technologies: ['C++', 'C'],
      github: 'https://github.com/Preyan489/Wonky-Kong.git',
      demo: '#',
      image: `${process.env.PUBLIC_URL || ''}/wonky-kong.png`,
    },
  ];

  // Handle navigation from Skills page
  useEffect(() => {
    const state = (location as any).state as { scrollToProject?: number } | null;
    const index = state?.scrollToProject;
    if (index !== undefined && typeof index === 'number' && projectRefs.current[index]) {
      setTimeout(() => {
        const ref = projectRefs.current[index];
        if (ref) {
          const elementRect = ref.getBoundingClientRect();
          const elementTop = elementRect.top + window.pageYOffset;
          const windowHeight = window.innerHeight;
          const stickyHeaderHeight = 100;
          const centerPosition = elementTop - (windowHeight / 2) + stickyHeaderHeight;

          window.scrollTo({
            top: Math.max(0, centerPosition),
            behavior: 'smooth'
          });
        }
      }, 100);
    }
  }, [location]);

  return (
    <section className="section-container bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl sm:text-6xl font-black bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-4 tracking-tight">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              ref={(el) => (projectRefs.current[index] = el)}
              className="group backdrop-blur-xl bg-gray-50 rounded-2xl overflow-hidden border border-gray-200 hover:border-cyan-500/50 hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Project Image */}
              <div className={`w-full h-40 relative overflow-hidden ${project.image ? 'bg-[#fbfbfa] flex items-center justify-center' : 'bg-gradient-to-br from-cyan-500/20 via-blue-500/20 to-purple-500/20'}`}>
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-auto object-contain transition-transform duration-500"
                    style={project.title === 'Wonky Kong' 
                      ? { transform: 'scaleX(1.3)', transformOrigin: 'center' } 
                      : {}}
                    onMouseEnter={(e) => {
                      if (project.title === 'Wonky Kong') {
                        e.currentTarget.style.transform = 'scaleX(1.365)';
                      } else {
                        e.currentTarget.style.transform = 'scale(1.05)';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (project.title === 'Wonky Kong') {
                        e.currentTarget.style.transform = 'scaleX(1.3)';
                      } else {
                        e.currentTarget.style.transform = 'scale(1)';
                      }
                    }}
                  />
                ) : (
                  <>
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/30 to-purple-500/30 group-hover:scale-110 transition-transform duration-500"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <svg
                        className="w-20 h-20 text-cyan-400/50"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                        />
                      </svg>
                    </div>
                  </>
                )}
              </div>

              <div className="p-5">
                <h3 className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-cyan-500/20 text-blue-700 rounded-full text-xs font-medium border border-cyan-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-700 hover:text-cyan-600 transition-colors font-medium group/link"
                    >
                      <svg
                        className="w-5 h-5 group-hover/link:scale-110 transition-transform"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;