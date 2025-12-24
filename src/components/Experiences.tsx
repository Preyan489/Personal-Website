import React, { useState, useEffect, useRef } from 'react';

interface Experience {
  company: string;
  location: string;
  title: string;
  period: string;
  bullets: string[];
}

const Experiences: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const experienceRefs = useRef<(HTMLDivElement | null)[]>([]);
  const sectionRef = useRef<HTMLElement>(null);

  const experiences: Experience[] = [
    {
      company: 'Daily Bruin',
      location: 'Los Angeles, CA',
      title: 'Software Engineer',
      period: 'Oct 2025 - Present',
      bullets: [
        'Refactored core routing and server-side data flows in Node.js/Express to eliminate redundant queries, streamline core request execution paths, and reduce latency across article, homepage, and media-serving endpoints',
        'Integrated Django services, Vue components, and PostgreSQL workflows into the platform\'s architecture, unifying data-access patterns and leading to a 30% system stability improvement and load consistency',
        'Improved CI/CD reliability by containerizing services with Docker and deploying via Kubernetes on Azure',
      ],
    },
    {
      company: 'UCLA Mobility Lab',
      location: 'Los Angeles, CA',
      title: 'Research Assistant',
      period: 'Jan 2025 - Present',
      bullets: [
        'Built multimodal data pipelines in Python and PyTorch combining high-resolution video, synchronized telemetry, and scenario metadata, supporting scalable autonomous driving perception and research in Agile',
        'Used Hugging Face Transformers to encode driving commands, producing structured representations that improved consistency across supervised learning and reinforcement-based policy evaluation workflows',
        'Created standardized preprocessing utilities using NumPy that reduced manual setup for model-training runs',
      ],
    },
    {
      company: 'Exo Imaging',
      location: 'Santa Clara, CA',
      title: 'Software Engineer Intern',
      period: 'June 2025 - Sept 2025',
      bullets: [
        'Designed MongoDB schemas and Python ingestion workflows to organize diagnostic data from ultrasound transmitter boards, improving trace accuracy and reducing inconsistencies in hardware-driven test environments',
        'Automated board diagnostics and metric logging using pytest, enabling early anomaly detection',
        'Performed statistical analysis using pandas and SciPy to validate imaging signal quality and detect anomalies',
      ],
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
    },
  ];

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    experienceRefs.current.forEach((ref, index) => {
      if (!ref) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
              setActiveIndex(index);
            }
          });
        },
        {
          threshold: [0, 0.25, 0.5, 0.75, 1],
          rootMargin: '-20% 0px -20% 0px',
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
      
      // Calculate progress based on how much of the section has been scrolled
      const scrollableDistance = sectionHeight - windowHeight;
      const scrolled = Math.max(0, -sectionTop);
      const progress = scrollableDistance > 0 ? (scrolled / scrollableDistance) * 100 : 0;
      setScrollProgress(Math.min(100, Math.max(0, progress)));
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial calculation

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToExperience = (index: number) => {
    const ref = experienceRefs.current[index];
    if (ref) {
      const offset = 100; // Account for header
      const elementPosition = ref.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setActiveIndex(index);
    }
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
                        {experience.bullets.map((bullet, bulletIndex) => (
                          <li
                            key={bulletIndex}
                            className="flex items-start gap-4 text-gray-700 leading-relaxed group/item"
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
                            <span className="flex-1">{bullet}</span>
                          </li>
                        ))}
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