import React from 'react';

interface Experience {
  company: string;
  location: string;
  title: string;
  period: string;
  bullets: string[];
}

const Experiences: React.FC = () => {
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

  return (
    <section className="section-container">
      <div className="max-w-5xl mx-auto">
        <h2 className="section-title text-center">Experience</h2>
        <p className="section-subtitle text-center">
          My professional journey and accomplishments
        </p>

        <div className="space-y-8">
          {experiences.map((experience, index) => (
            <div
              key={index}
              className="card relative pl-8 border-l-4 border-primary-500"
            >
              <div className="absolute left-0 top-6 -ml-2.5 w-5 h-5 bg-primary-500 rounded-full border-4 border-white shadow-lg"></div>
              
              <div className="mb-4">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                  <h3 className="text-2xl font-bold text-gray-900">
                    {experience.title}
                  </h3>
                  <span className="text-sm font-medium text-primary-600 bg-primary-50 px-3 py-1 rounded-full">
                    {experience.period}
                  </span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-gray-600">
                  <span className="font-semibold text-lg">{experience.company}</span>
                  <span className="hidden sm:inline">•</span>
                  <span>{experience.location}</span>
                </div>
              </div>

              <ul className="space-y-3 mt-4">
                {experience.bullets.map((bullet, bulletIndex) => (
                  <li
                    key={bulletIndex}
                    className="flex items-start gap-3 text-gray-700 leading-relaxed"
                  >
                    <span className="text-primary-500 mt-2 flex-shrink-0">
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
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experiences;
