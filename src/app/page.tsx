import { cn } from '@/util/cn';
import Image from 'next/image';
import { IconBrandLinkedin, IconBrandX, IconMail } from '@tabler/icons-react';
import Link from 'next/link';
import Container from './components/container';
import { Tech } from './components/tech';
import WorkExperience from './components/experience';

export default function Home() {
  // Get the current date
  const currentDate = new Date();

  // Create a Date object for July 1, 2019
  const date2019 = new Date('2019-07-01');

  // Calculate the difference in months
  let differenceInMonths =
    (currentDate.getFullYear() - date2019.getFullYear()) * 12 +
    (currentDate.getMonth() - date2019.getMonth());

  // Adjust if the current date's day is before the date2019's day
  if (currentDate.getDate() < date2019.getDate()) {
    differenceInMonths--;
  }

  // Calculate years from months
  const years = Math.floor(differenceInMonths / 12);

  // Calculate remaining months
  const months = differenceInMonths % 12;

  return (
    <main className="relative flex flex-col items-center ">
      <div className="relative w-full overflow-hidden flex flex-col items-center justify-center">
        <>
          <Image
            src="/images/user3.png"
            width={400}
            height={400}
            alt="user"
            className="rounded-full mb-6 hidden sm:flex animate-popIn"
          />
          <Image
            src="/images/user3.png"
            width={260}
            height={300}
            alt="user"
            className="rounded-full mb-6 sm:hidden flex animate-popIn"
          />
        </>
        <h1 className={cn('md:text-6xl font-mono text-xl relative')}>
          Navneet Dabral
        </h1>
        <p className="text-center font-mono mt-2 relative">
          Learner | Engineer | UI/UX
        </p>
        <p className="text-center font-mono mt-2 relative">
          {years} years, {months} months of accumulating tech debt
        </p>
      </div>
      <Container>
        <div className="flex flex-col w-full font-mono text-xl md:text-4xl items-center">
          <p className="sm:mt-12 mt-12">My Toolkit</p>
          <Tech />

          <p className="sm:mt-24 mt-12 sm:mb-12 mb-4">Work Experience</p>
          <WorkExperience />
        </div>
      </Container>
      <footer className="w-full mt-16 px-6 py-10 bg-[#f4e2c580] backdrop-blur-md border-t border-[#E9D5B4]">
        <div className="max-w-4xl mx-auto flex flex-col items-center gap-4">
          <div className="flex space-x-4">
            <p className="text-center flex flex-row gap-4 font-mono mt-6  relative ">
              <Link
                target="__blank"
                href="https://linkedin.com/in/navneet-dabral-859707117"
              >
                <IconBrandLinkedin size="36" className="cursor-pointer" />
              </Link>
              <Link target="__blank" href="https://twitter.com/medabral">
                <IconBrandX size="36" className="cursor-pointer" />
              </Link>
              <a href="mailto:dabralnavneet@gmail.com" title="Hire Me">
                <IconMail size="36" className="cursor-pointer" />
              </a>
            </p>
          </div>
          <p className="text-[#3C2C26] text-sm">
            © {new Date().getFullYear()} Navneet Dabral
          </p>
        </div>
      </footer>
    </main>
  );
}
