import {
  IconBrandHtml5,
  IconBrandCss3,
  IconBrandDocker,
  IconBrandAws,
  IconBrandTailwind,
  IconBrandReact,
  IconBrandGraphql,
  IconBrandReactNative,
  IconBrandTypescript,
  IconBrandGit,
  IconBrandVscode,
    IconBrandNodejs,
} from '@tabler/icons-react';

const tech = [
  IconBrandHtml5,
  IconBrandCss3,
  IconBrandDocker,
  IconBrandAws,
  IconBrandTailwind,
  IconBrandReact,
  IconBrandGraphql,
  IconBrandReactNative,
  IconBrandTypescript,
  IconBrandGit,
  IconBrandVscode,
  IconBrandNodejs,
];

export const Tech = () => {
  return (
    <div className="w-full items-center grid grid-cols-2 md:grid-cols-4 gap-4 mt-4 sm:mt-12">
      {tech.map((Icon) => (
        <div className="flex justify-center py-10  bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
          <Icon className='opacity-50' size={96} />
        </div>
      ))}
    </div>
  );
};
