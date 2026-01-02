import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

interface Experience {
  company: string;
  location: string;
  title: string;
  period: string;
  bullets: string[];
  skills?: string[];
}

const Experiences: React.FC = () => {
  const location = useLocation();
  const [activeIndex, setActiveIndex] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const experienceRefs = useRef<(HTMLDivElement | null)[]>([]);
  const sectionRef = useRef<HTMLElement>(null);
  const isScrollingRef = useRef(false);

  const experiences: Experience[] = [
    {
      company: 'Daily Bruin',
      location: 'Los Angeles, CA',
      title: 'Software Engineer',
      period: 'Oct 2025 - Present',
      bullets: [
        'Refactored core routing and server-side data flows using Node.js to eliminate redundant queries, streamline critical end-to-end core request execution paths, and reduce latency across article, homepage, and media-serving endpoints',
        'Integrated Django services, Vue.js components, and PostgreSQL workflows into the platform\'s architecture, unifying data-access patterns and leading to a measurable 30% system stability improvement and load consistency',
        'Improved CI/CD reliability by containerizing services with Docker and deploying via Kubernetes on Azure',
      ],
      skills: ['Node.js', 'Django', 'Vue.js', 'PostgreSQL', 'Docker', 'Kubernetes', 'Azure'],
    },
    {
      company: 'Exo Imaging',
      location: 'Santa Clara, CA',
      title: 'Software Engineer Intern',
      period: 'June 2025 - Sept 2025',
      bullets: [
        'Designed MongoDB schemas and Python workflows to organize diagnostic data from ultrasound transmitter boards, improving trace accuracy and reducing data inconsistencies by 23% in hardware-driven test environments',
        'Automated board diagnostics and anomaly detection using pytest logging and pandas/SciPy statistical analysis',
        'Built backend data ingestion and validation pipelines with ETL pipeline design, incorporating schema enforcement and error handling to ensure reliable data flow across hardware testing and analysis workflows',
      ],
      skills: ['MongoDB', 'Python', 'pytest', 'pandas', 'SciPy', 'ETL pipeline design'],
    },
    {
      company: 'UCLA Mobility Lab',
      location: 'Los Angeles, CA',
      title: 'Research Assistant',
      period: 'Jan 2025 - Present',
      bullets: [
        'Built multimodal data pipelines in Python and PyTorch integrating video, synchronized telemetry, and scenario metadata, supporting autonomous driving perception research across over 2,000 labeled driving scenarios',
        'Applied Hugging Face Transformers to encode driving commands for supervised and reinforcement workflows',
        'Utilized TensorFlow/Keras to modularize model training and evaluation pipelines, enabling consistent iteration',
      ],
      skills: ['Python', 'PyTorch', 'Hugging Face Transformers', 'TensorFlow/Keras', 'Keras'],
    },
    {
      company: 'Inspirit AI',
      location: 'Rocklin, CA',
      title: 'Artificial Intelligence Scholar',
      period: 'June 2024 - Sept. 2024',
      bullets: [
        'Completed mentored ML project in supervised learning/error analysis, gaining experience with iterative training',
        'Researched algorithmic bias and how dataset imbalance and model design can create inequitable outcomes',
      ],
      skills: ['Machine Learning', 'Supervised Learning'],
    },
  ];

  // Handle navigation from Skills page
  useEffect(() => {
    const state = (location as any).state as { scrollToExperience?: number } | null;
    const index = state?.scrollToExperience;
    if (index !== undefined && typeof index === 'number' && experienceRefs.current[index]) {
      // Small delay to ensure page is rendered
      setTimeout(() => {
        scrollToExperience(index);
      }, 100);
    }
  }, [location]);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    experienceRefs.current.forEach((ref, index) => {
      if (!ref) return;

      const observer = new IntersectionObserver(
        (entries) => {
          // Don't update if we're in the middle of a programmatic scroll
          if (isScrollingRef.current) return;

          entries.forEach((entry) => {
            if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
              setActiveIndex(index);
            }
          });
        },
        {
          threshold: [0, 0.25, 0.5, 0.75, 1],
          rootMargin: '-30% 0px -30% 0px',
        }
      );

      observer.observe(ref);
      observers.push(observer);
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const section = sectionRef.current;
      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const sectionTop = rect.top;
      const sectionHeight = rect.height;
      
      // Calculate progress based on how much of the section has been scrolled through
      const scrollableDistance = sectionHeight - windowHeight;
      const scrolled = Math.max(0, -sectionTop);
      const progress = scrollableDistance > 0 ? (scrolled / scrollableDistance) * 100 : 0;
      
      setScrollProgress(Math.min(100, Math.max(0, progress)));
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial calculation

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToExperience = (index: number) => {
    const ref = experienceRefs.current[index];
    if (!ref) return;

    // Set flag to prevent intersection observer from interfering
    isScrollingRef.current = true;
    setActiveIndex(index);

    // Get element position relative to document
    const elementRect = ref.getBoundingClientRect();
    const elementTop = elementRect.top + window.pageYOffset;
    const elementHeight = elementRect.height;
    const windowHeight = window.innerHeight;
    
    // Calculate position to center the element vertically
    // Position element so its center aligns with viewport center, accounting for sticky header
    const stickyHeaderHeight = 180; // Account for sticky header/progress bar
    const centerPosition = elementTop - (windowHeight / 2) + (elementHeight / 2) - stickyHeaderHeight;

    window.scrollTo({
      top: Math.max(0, centerPosition),
      behavior: 'smooth'
    });

    // Reset flag after scroll completes
    setTimeout(() => {
      isScrollingRef.current = false;
    }, 1000);
  };

  return (
    <section ref={sectionRef} className="section-container bg-white min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Title Section */}
        <div className="text-center mb-16">
          <h2 className="text-5xl sm:text-6xl font-black bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-4 tracking-tight">
            Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto rounded-full"></div>
        </div>

        {/* Sticky Progress Bar */}
        <div className="sticky top-20 z-40 bg-white/95 backdrop-blur-sm pt-6 pb-4 mb-8 border-b border-gray-200">
          <div className="relative h-2 bg-gray-200 rounded-full overflow-hidden backdrop-blur-sm">
            <div
              className="h-full bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 transition-all duration-300 ease-out rounded-full shadow-lg shadow-cyan-500/50"
              style={{ width: `${scrollProgress}%` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer"></div>
            </div>
          </div>
          <div className="text-right mt-2">
            <span className="text-xs font-mono text-cyan-400">{Math.round(scrollProgress)}%</span>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          {/* Left Side - Enhanced Timeline */}
          <div className="lg:w-1/3 flex-shrink-0">
            <div className="sticky top-40">
              <div className="relative">
                {/* Vertical Timeline Line with Glow */}
                <div className="absolute left-[24px] top-6 bottom-0 w-1 bg-gray-200 rounded-full backdrop-blur-sm transform -translate-x-1/2">
                  <div
                    className="absolute top-0 w-full bg-gradient-to-b from-cyan-500 via-blue-500 to-purple-500 rounded-full transition-all duration-700 ease-out shadow-lg shadow-cyan-500/50"
                    style={{
                      height: `${(activeIndex / (experiences.length - 1)) * 100}%`,
                    }}
                  />
                </div>

                {/* Timeline Dots with Tech Effects */}
                <div className="space-y-20 pt-6">
                  {experiences.map((experience, index) => (
                    <button
                      key={index}
                      onClick={() => scrollToExperience(index)}
                      className="relative flex items-start gap-6 w-full text-left group focus:outline-none"
                    >
                      <div className="relative z-10 flex-shrink-0 w-12 flex items-center justify-center">
                        {/* Outer Glow Ring */}
                        <div
                          className={`absolute inset-0 rounded-full transition-all duration-500 ${
                            activeIndex === index
                              ? 'bg-cyan-500/30 blur-xl scale-150 animate-pulse'
                              : 'bg-transparent'
                          }`}
                        />
                        {/* Inner Dot */}
                        <div
                          className={`relative w-12 h-12 rounded-full border-2 transition-all duration-500 flex items-center justify-center backdrop-blur-sm ${
                            activeIndex === index
                              ? 'bg-gradient-to-br from-cyan-400 to-blue-600 border-cyan-400 scale-110 shadow-2xl shadow-cyan-500/50'
                              : 'bg-white border-gray-300 group-hover:border-cyan-500/50 group-hover:bg-gray-50'
                          }`}
                        >
                          {activeIndex === index ? (
                            <>
                              <div className="w-3 h-3 bg-white rounded-full shadow-lg" />
                              <div className="absolute inset-0 rounded-full bg-cyan-400/20 animate-ping" />
                            </>
                          ) : (
                            <div className="w-2.5 h-2.5 bg-gray-300 rounded-full group-hover:bg-cyan-400 transition-colors" />
                          )}
                        </div>
                      </div>
                      <div className="flex-1 pt-3">
                        <div
                          className={`transition-all duration-300 ${
                            activeIndex === index
                              ? 'text-cyan-600'
                              : 'text-gray-600 group-hover:text-gray-900'
                          }`}
                        >
                          <p className={`font-bold text-sm mb-1 tracking-wide uppercase ${
                            activeIndex === index ? 'text-cyan-600' : 'text-gray-500'
                          }`}>
                            {experience.period}
                          </p>
                          <p className="font-semibold text-base">
                            {experience.company}
                          </p>
                          <p className="text-xs text-gray-400 mt-1 font-mono">
                            {experience.location}
                          </p>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Glassmorphism Card */}
          <div className="lg:w-2/3">
            <div className="space-y-8">
              {experiences.map((experience, index) => (
                <div
                  key={index}
                  ref={(el) => (experienceRefs.current[index] = el)}
                  className={`transition-all duration-700 ${
                    activeIndex === index
                      ? 'opacity-100 scale-100'
                      : 'opacity-40 scale-[0.98]'
                  }`}
                >
                  <div
                    className={`relative backdrop-blur-xl rounded-2xl p-8 border transition-all duration-500 overflow-hidden ${
                      activeIndex === index
                        ? 'bg-gradient-to-br from-gray-50 to-white border-cyan-500/50 shadow-2xl shadow-cyan-500/20'
                        : 'bg-gray-50 border-gray-200'
                    }`}
                  >
                    {/* Animated Gradient Border */}
                    {activeIndex === index && (
                      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20 rounded-2xl opacity-50 animate-gradient-x"></div>
                    )}
                    
                    {/* Content */}
                    <div className="relative z-10">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
                        <div>
                          <h3 className="text-3xl font-bold mb-2 text-black transition-colors duration-300">
                            {experience.title}
                          </h3>
                          <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-gray-600">
                            <span className="font-semibold text-lg text-gray-900">
                              {experience.company}
                            </span>
                            <span className="hidden sm:inline text-gray-400">•</span>
                            <span className="text-sm font-mono">{experience.location}</span>
                          </div>
                        </div>
                        <span
                              className={`text-xs font-mono px-4 py-2 rounded-full border inline-block transition-all duration-300 ${
                                activeIndex === index
                                  ? 'bg-cyan-50 text-cyan-600 border-cyan-500/50 shadow-lg shadow-cyan-500/20'
                                  : 'bg-gray-100 text-gray-600 border-gray-300'
                              }`}
                        >
                          {experience.period}
                        </span>
                      </div>

                      <ul className="space-y-4">
                        {experience.bullets.map((bullet, bulletIndex) => {
                          // Function to convert skill words to bubbles
                          const renderBulletWithSkills = (text: string, skills: string[] = []) => {
                            if (!skills || skills.length === 0) return text;
                            
                            // Sort skills by length (longest first) to match longer phrases first
                            const sortedSkills = [...skills].sort((a, b) => b.length - a.length);
                            let result: (string | JSX.Element)[] = [text];
                            
                            sortedSkills.forEach((skill) => {
                              const newResult: (string | JSX.Element)[] = [];
                              result.forEach((item) => {
                                if (typeof item === 'string') {
                                  // Split by the skill word (case-insensitive)
                                  const regex = new RegExp(`\\b(${skill.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})\\b`, 'gi');
                                  const parts = item.split(regex);
                                  
                                  parts.forEach((part, partIndex) => {
                                    if (part.toLowerCase() === skill.toLowerCase()) {
                                      // This is the skill word - make it a bubble
                                      newResult.push(
                                        <span
                                          key={`${skill}-${partIndex}`}
                                          className={`inline-block px-2 py-0.5 mx-0.5 rounded-full text-xs font-medium border transition-all duration-300 ${
                                            activeIndex === index
                                              ? 'bg-cyan-500/20 text-blue-700 border-cyan-500/30'
                                              : 'bg-gray-100 text-gray-600 border-gray-300'
                                          }`}
                                          style={{ verticalAlign: 'baseline', lineHeight: '1.5', marginTop: '0', marginBottom: '0' }}
                                        >
                                          {part}
                                        </span>
                                      );
                                    } else if (part) {
                                      newResult.push(part);
                                    }
                                  });
                                } else {
                                  newResult.push(item);
                                }
                              });
                              result = newResult;
                            });
                            
                            return result;
                          };
                          
                          return (
                            <li
                              key={bulletIndex}
                              className="flex items-start gap-4 text-gray-700 group/item"
                            >
                              <span
                                className={`mt-1.5 flex-shrink-0 transition-all duration-300 ${
                                  activeIndex === index
                                    ? 'text-cyan-600 group-hover/item:scale-110'
                                    : 'text-gray-400'
                                }`}
                              >
                                <svg
                                  className="w-5 h-5"
                                  fill="currentColor"
                                  viewBox="0 0 20 20"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                    clipRule="evenodd"
                                  />
                                </svg>
                              </span>
                              <div className="flex-1" style={{ lineHeight: '1.75', fontSize: 'inherit' }}>
                                {renderBulletWithSkills(bullet, experience.skills)}
                              </div>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
        
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 3s ease infinite;
        }
      `}</style>
    </section>
  );
};

export default Experiences;