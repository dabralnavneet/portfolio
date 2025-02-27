'use client';

const experiences = [
  {
    company: 'C2FO',
    role: 'Software Engineer II',
    duration: 'Mar 2022 - Present',
    description: [
      'Collaborated with the marketing team to boost customer acquisition by streamlining processes and introducing a new single-step UI workflow, achieving a 75% conversion rate on the onboarding page.',
      'Improved load time (LCP) from 5 sec to 1 sec for the onboarding page.',
      'Played an integral role in multi-product initiatives by creating features such as in-app notifications and rebranding the Material UI component library, which other teams can leverage.',
      'Developed Datadog dashboards, including funnels and charts, to track user conversions.',
      'Implemented Datadog alerts and monitoring to ensure system performance and user engagement.',
      'Migrated multiple deployment pipelines from Azure to GitHub Actions.',
      'Implemented third-party integration of NPS surveys with Qualtrics and successfully deprecated WebEngage.',
    ],
  },
  {
    company: 'C2FO',
    role: 'Software Engineer',
    duration: 'Mar 2021 - Feb 2022',
    description: [
      'Developed UI for a customized scheduler application tailored to manage email campaigns using Marketo.',
      'Implemented user profile image CRUD feature using NestJS and leveraged (AWS) S3 to efficiently store and manage user profile images.',
      'Wrote comprehensive unit tests to validate the functionality of the application.',
    ],
  },
  {
    company: 'Jio',
    role: 'Software Engineer',
    duration: 'Jul 2019 - Feb 2021',
    description: [
      'Developed JPB net banking website from scratch in 3 months, which is integrated with various payment gateways.',
      'A significant contribution to merchant portal development and deployment to NGINX server, used by Jio payment gateway merchants for checking payment history, initiating refunds, etc. [View site](https://www.jiomoney.com/merchants.html)',
      'Developed React Native-based cross-platform applications, which can support mobile and web platforms with 60-70% code reusability.',
    ],
  },
];

export default function WorkExperience() {
  return (
    <section className="w-full max-w-4xl mx-auto px-6">
      <div className="relative border-l-4 border-gray-300 dark:border-gray-600">
        {experiences.map((exp, index) => (
          <div key={index} className="mb-8 ml-6 relative">
            <div className="bg-white dark:bg-gray-800 p-6 shadow-lg rounded-lg border border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-semibold">{exp.role}</h3>
              <p className="text-gray-500 dark:text-gray-400">{exp.company}</p>
              <p className="text-sm text-gray-400">{exp.duration}</p>
              <ul className="mt-2 text-gray-600 dark:text-gray-300 list-disc list-inside">
                {exp.description.map((point, idx) => (
                  <li key={idx} className="text-sm">
                    {point.includes('http') ? (
                      <a
                        href={point.match(/\((.*?)\)/)?.[1]}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 underline"
                      >
                        {point.replace(/\s*\[.*?\]\(.*?\)/, '')}
                      </a>
                    ) : (
                      point
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
