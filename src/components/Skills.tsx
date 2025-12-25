import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';

interface SkillSource {
  skill: string;
  type: 'experience' | 'project';
  name: string;
  index: number;
}

const Skills: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  // Map skills to their sources (experiences and projects)
  const skillSources = useMemo(() => {
    const sources: SkillSource[] = [];

    // Skills from experiences
    const experiences = [
      {
        name: 'Daily Bruin',
        skills: ['Node.js/Express', 'Django', 'Vue', 'PostgreSQL', 'Docker', 'Kubernetes', 'Azure']
      },
      {
        name: 'Exo Imaging',
        skills: ['MongoDB', 'Python', 'pytest', 'pandas', 'SciPy']
      },
      {
        name: 'UCLA Mobility Lab',
        skills: ['Python', 'PyTorch', 'Hugging Face Transformers', 'NumPy', 'Agile']
      },
      {
        name: 'Inspirit AI',
        skills: ['Machine Learning', 'Supervised Learning']
      }
    ];

    // Technologies from projects
    const projects = [
      {
        name: 'TheraVoice',
        skills: ['FastAPI', 'Supabase', 'ElevenLabs', 'TypeScript', 'Material UI', 'Tailwind CSS', 'JWT', 'React', 'Vite']
      },
      {
        name: 'ScriptShelf',
        skills: ['JavaScript', 'CSS', 'TypeScript', 'HTML', 'Node.js', 'Cucumber', 'Express']
      }
    ];

    // Map experience skills
    experiences.forEach((exp, index) => {
      exp.skills.forEach(skill => {
        // Split combined skills
        if (skill.includes('/')) {
          skill.split('/').forEach(s => {
            sources.push({
              skill: s.trim(),
              type: 'experience',
              name: exp.name,
              index: index
            });
          });
        } else {
          sources.push({
            skill: skill,
            type: 'experience',
            name: exp.name,
            index: index
          });
        }
      });
    });

    // Map project skills
    projects.forEach((proj, index) => {
      proj.skills.forEach(skill => {
        // Split combined skills
        if (skill.includes('/')) {
          skill.split('/').forEach(s => {
            sources.push({
              skill: s.trim(),
              type: 'project',
              name: proj.name,
              index: index
            });
          });
        } else {
          sources.push({
            skill: skill,
            type: 'project',
            name: proj.name,
            index: index
          });
        }
      });
    });

    return sources;
  }, []);

  // Collect all unique skills and their first source
  const allSkills = useMemo(() => {
    const skillMap = new Map<string, SkillSource>();
    
    skillSources.forEach(source => {
      if (!skillMap.has(source.skill)) {
        skillMap.set(source.skill, source);
      }
    });

    return Array.from(skillMap.entries())
      .map(([skill, source]) => ({ skill, source }))
      .sort((a, b) => a.skill.localeCompare(b.skill));
  }, [skillSources]);

  // Filter skills based on search query
  const filteredSkills = useMemo(() => {
    if (!searchQuery.trim()) {
      return allSkills;
    }
    const query = searchQuery.toLowerCase();
    return allSkills.filter(({ skill }) => 
      skill.toLowerCase().includes(query)
    );
  }, [allSkills, searchQuery]);

  const handleSkillClick = (source: SkillSource) => {
    if (source.type === 'experience') {
      navigate('/experiences', { 
        state: { scrollToExperience: source.index },
        replace: false 
      });
      // Also set a hash in the URL for direct linking
      setTimeout(() => {
        const experienceNames = ['daily-bruin', 'exo-imaging', 'ucla-mobility-lab', 'inspirit-ai'];
        const hash = experienceNames[source.index];
        if (hash) {
          window.location.hash = hash;
        }
      }, 300);
    } else {
      navigate('/projects', { 
        state: { scrollToProject: source.index },
        replace: false 
      });
      // Also set a hash in the URL for direct linking
      setTimeout(() => {
        const projectNames = ['theravoice', 'e-commerce-platform', 'task-management-app', 'weather-dashboard'];
        const hash = projectNames[source.index];
        if (hash) {
          window.location.hash = hash;
        }
      }, 300);
    }
  };

  return (
    <section className="section-container bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl sm:text-6xl font-black bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-4 tracking-tight">
            Technical Skills
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto rounded-full mb-8"></div>
          
          {/* Search Input */}
          <div className="max-w-md mx-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="Search skills..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-3 pl-12 bg-gray-50 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300 text-gray-700 placeholder-gray-400"
              />
              <svg
                className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
            {searchQuery && (
              <p className="text-sm text-gray-500 mt-2">
                {filteredSkills.length} skill{filteredSkills.length !== 1 ? 's' : ''} found
              </p>
            )}
          </div>
        </div>

        {/* Skills Bubbles */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {filteredSkills.length > 0 ? (
            filteredSkills.map(({ skill, source }, index) => (
              <button
                key={index}
                onClick={() => handleSkillClick(source)}
                className="px-4 py-2 bg-cyan-500/20 text-blue-700 rounded-full text-sm font-medium border border-cyan-500/30 hover:bg-cyan-500/30 hover:border-cyan-500/50 hover:scale-105 transition-all duration-200 shadow-sm hover:shadow-md cursor-pointer focus:outline-none focus:ring-2 focus:ring-cyan-500/50"
                title={`Used in ${source.type === 'experience' ? 'Experience' : 'Project'}: ${source.name}`}
              >
                {skill}
              </button>
            ))
          ) : (
            <div className="text-center w-full py-12 text-gray-500">
              No skills found matching "{searchQuery}"
            </div>
          )}
        </div>

        {!searchQuery && (
          <div className="text-center mt-8 text-gray-500 text-sm">
            {allSkills.length} total skill{allSkills.length !== 1 ? 's' : ''}
          </div>
        )}
      </div>
    </section>
  );
};

export default Skills;