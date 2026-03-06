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
          className="flex flex-col justify-center items-center py-10 px-4 rounded-2xl shadow-[0_4px_20px_rgba(44,39,35,0.1)] bg-[#F4E2C5] text-[#3C2C26] transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_8px_24px_rgba(44,39,35,0.15)]"
        >
          <div>
            <Icon className="opacity-80 h-12 w-12 sm:h-16 sm:w-16 md:h-12 md:w-12" />
          </div>
          <p className="font-medium text-sm mt-4 opacity-80">{name}</p>
        </div>
      ))}
    </div>
  );
};
