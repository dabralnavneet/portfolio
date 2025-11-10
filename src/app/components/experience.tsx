'use client';

export default function WorkExperience() {
  return (
    <section className="w-full max-w-6xl mx-auto px-6">
      <div className="grid gap-8 md:grid-cols-2">
        {/* BMW Techworks India Experience */}
        <div className="bg-[#f4e2c588] backdrop-blur-md border border-[#E9D5B4] rounded-2xl p-6 shadow-[0_4px_20px_rgba(0,0,0,0.05)] transition hover:shadow-[0_8px_30px_rgba(0,0,0,0.1)]">
          <h3 className="text-2xl font-semibold text-[#3C2C26]">BMW Techworks India</h3>
          <p className="text-sm text-[#6B4E36] mt-1">Apr 2025 – Present</p>
          <p className="mt-2 text-sm text-[#3C2C26]/70 italic">
            Working on Angular and NestJS based applications. Created Helm charts
            for EKS cluster deployments with MongoDB Cloud. Building solutions for
            AI/MLOps pipeline automation, leveraging Claude and GitHub Copilot
            extensively for development acceleration.
          </p>
        </div>

        {/* C2FO Experience */}
        <div className="bg-[#f4e2c588] backdrop-blur-md border border-[#E9D5B4] rounded-2xl p-6 shadow-[0_4px_20px_rgba(0,0,0,0.05)] transition hover:shadow-[0_8px_30px_rgba(0,0,0,0.1)]">
          <h3 className="text-2xl font-semibold text-[#3C2C26]">C2FO</h3>
          <p className="text-sm text-[#6B4E36] mt-1">Mar 2021 – Apr 2025</p>
          <p className="mt-2 text-sm text-[#3C2C26]/70 italic">
            Worked on major UI improvements to boost onboarding conversion and
            system observability. Delivered high-impact features like user
            registration, streamlined UI workflows, and integrated third-party
            tools like Qualtrics. Played a key role in cross-team collaboration
            and tech stack modernization.
          </p>
        </div>

        {/* Reliance Jio Experience */}
        <div className="bg-[#f4e2c588] backdrop-blur-md border border-[#E9D5B4] rounded-2xl p-6 shadow-[0_4px_20px_rgba(0,0,0,0.05)] transition hover:shadow-[0_8px_30px_rgba(0,0,0,0.1)]">
          <h3 className="text-2xl font-semibold text-[#3C2C26]">
            Reliance Jio
          </h3>
          <p className="text-sm text-[#6B4E36] mt-1">Jul 2019 – Feb 2021</p>
          <p className="mt-2 text-sm text-[#3C2C26]/70 italic">
            Delivered scalable cross platform solutions for Jio Payments bank,
            including a net banking platform, a robust merchant dashboard, and
            cross-platform mobile apps using React Native. Played a crucial role
            in launching production systems integrated with payment gateways and
            NGINX servers.
          </p>
        </div>
      </div>
    </section>
  );
}
