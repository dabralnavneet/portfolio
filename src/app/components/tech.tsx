'use client';

import {
  IconBrandHtml5,
  IconBrandCss3,
  IconBrandDocker,
  IconBrandAws,
  IconBrandTailwind,
  IconBrandReact,
  IconBrandGraphql,
  IconBrandTypescript,
  IconBrandGit,
  IconBrandVscode,
  IconBrandNodejs,
  IconBrandJavascript,
  IconBrandFramerMotion,
  IconBrandGithub,
  IconBrandStorybook,
} from '@tabler/icons-react';

const tech = [
  { name: 'Html5', Icon: IconBrandHtml5 },
  { name: 'Css3', Icon: IconBrandCss3 },
  { name: 'JavaScript', Icon: IconBrandJavascript },
  { name: 'Docker', Icon: IconBrandDocker },
  { name: 'AWS', Icon: IconBrandAws },
  { name: 'Tailwind', Icon: IconBrandTailwind },
  { name: 'React', Icon: IconBrandReact },
  { name: 'Graphql', Icon: IconBrandGraphql },
  { name: 'TypeScript', Icon: IconBrandTypescript },
  { name: 'Git', Icon: IconBrandGit },
  { name: 'VsCode', Icon: IconBrandVscode },
  { name: 'NodeJs', Icon: IconBrandNodejs },
  { name: 'FramerMotion', Icon: IconBrandFramerMotion },
  { name: 'Github', Icon: IconBrandGithub },
  { name: 'Storybook', Icon: IconBrandStorybook },
];

export const Tech = () => {
  return (
    <div className="w-full items-center justify-center grid grid-cols-3 md:grid-cols-5 sm:grid-cols-4 gap-6 mt-4 sm:mt-12">
      {tech.map(({ Icon, name }, index) => (
        <div
          key={index}
          className="flex flex-col justify-center items-center py-10  bg-white border border-gray-200 rounded-lg shadow-lg hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
        >
          <div>
            <Icon className="opacity-50 h-12 w-12 sm:h-16 sm:w-16 md:h-24 md:w-24" />
          </div>
          <p className="font-light text-xs mt-2 opacity-50">{name}</p>
        </div>
      ))}
    </div>
  );
};
