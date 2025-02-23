import { Boxes } from './components/background-boxes';
import { cn } from '@/util/cn';
import Image from 'next/image';
import { IconBrandLinkedin, IconBrandX, IconTools } from '@tabler/icons-react';
import Link from 'next/link';
import Container from './components/container';
import { Tech } from './components/tech';

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
    <main className="relative flex flex-col items-center bg-slate-900">
      <div className="relative h-screen w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center rounded-lg">
        <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
        <Boxes />
        <>
          <Image
            src="/images/user1.jpeg"
            width={200}
            height={200}
            alt="user"
            className="rounded-full z-20 mb-6 hidden sm:flex"
          />
          <Image
            src="/images/user1.jpeg"
            width={100}
            height={100}
            alt="user"
            className="rounded-full z-20 mb-6 sm:hidden flex"
          />
        </>
        <h1
          className={cn(
            'md:text-6xl font-mono text-xl text-white relative z-20'
          )}
        >
          Navneet Dabral
        </h1>
        <p className="text-center font-mono mt-2 text-neutral-300 relative z-20">
          Learner | Engineer | FrontEnd
        </p>
        <p className="text-center font-mono mt-2 text-neutral-300 relative z-20">
          Survived {years} years and {months} months of software building
          madness - still sane (mostly).
        </p>
        <p className="text-center flex flex-row gap-4 font-mono mt-6 text-neutral-300 relative z-20">
          <Link
            target="__blank"
            href="https://linkedin.com/in/navneet-dabral-859707117"
          >
            <IconBrandLinkedin size="36" className="cursor-pointer" />
          </Link>
          <Link target="__blank" href="https://twitter.com/medabral">
            <IconBrandX size="36" className="cursor-pointer" />
          </Link>
        </p>
      </div>
      <Container>
        <div className="flex flex-col w-full font-mono text-xl md:text-4xl items-center">
          <IconTools className="m-2" size={28} />
          <p className="my-2">My Toolkit</p>
          <Tech />
        </div>
      </Container>
    </main>
  );
}
