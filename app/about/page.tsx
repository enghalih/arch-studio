import Image from "next/image";
import { IconLinkedIn, IconTwitter } from "@/components/icons";

const leaders = [
  {
    name: "Jake Richards",
    role: "Chief Architect",
    image: "/about/desktop/avatar-jake.webp",
  },
  {
    name: "Thompson Smith",
    role: "Head of Finance",
    image: "/about/desktop/avatar-thompson.webp",
    social: true,
  },
  {
    name: "Jackson Rourke",
    role: "Lead Designer",
    image: "/about/desktop/avatar-jackson.webp",
  },
  {
    name: "Maria Simpson",
    role: "Senior Architect",
    image: "/about/desktop/avatar-maria.webp",
  },
];

export default function AboutPage() {
  return (
    <div className="flex flex-col w-full relative pb-28 md:pb-40">
      {/* Hero Section */}
      <section className="relative px-6 md:px-16 lg:px-32 max-w-[1440px] mx-auto w-full pt-4 md:pt-0">
        <div className="flex flex-col lg:flex-row items-start relative">
          {/* Hero Image */}
          <div className="w-full lg:w-[540px] h-[240px] md:h-[350px] lg:h-[720px] relative shrink-0">
            <Image
              src="/about/desktop/image-hero.webp"
              alt="Team working on architectural blueprints"
              fill
              priority
              className="object-cover"
            />
          </div>

          {/* Content Card overlapping/adjacent */}
          <div className="w-full lg:w-[635px] lg:-ml-28 lg:mt-48 bg-neutral-0 py-12 lg:pl-16 relative z-10 flex flex-col gap-6">
            {/* Large Watermark 'About' text behind/above on desktop */}
            <div className="hidden lg:block absolute -top-32 right-0 font-preset-1 text-slate-100 select-none pointer-events-none z-[-1]">
              About
            </div>

            <div className="w-16 h-0.5 bg-slate-200"></div>
            <h1 className="font-preset-3-mobile md:font-preset-3 text-zinc-900">
              Your team of <br /> professionals
            </h1>
            <p className="font-preset-6-medium text-slate-500 max-w-[445px]">
              Our small team of world-class professionals will work with you
              every step of the way. Strong relationships are at the core of
              everything we do. This extends to the relationship our projects
              have with their surroundings.
            </p>
          </div>
        </div>
      </section>

      {/* Our Heritage Section */}
      <section className="max-w-[1110px] mx-auto px-6 md:px-12 lg:px-0 w-full mt-28 md:mt-40 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        <div className="lg:col-span-7 flex flex-col gap-6">
          <div className="w-16 h-0.5 bg-slate-200"></div>
          <h2 className="font-preset-3-mobile md:font-preset-3 text-zinc-900">
            Our <br /> Heritage
          </h2>
          <div className="flex flex-col gap-6 font-preset-6-medium text-slate-500 mt-2 max-w-[570px]">
            <p>
              Founded in 2007, we started as a trio of architects. Our
              complimentary skills and relentless attention to detail turned
              Arch into one of the most sought after boutique firms in the
              country.
            </p>
            <p>
              Specializing in Urban Design allowed us to focus on creating
              exceptional structures that live in harmony with their
              surroundings. We consider every detail from every surrounding
              element to inform our designs.
            </p>
            <p>
              Our small team of world-class professionals provides input on
              every project.
            </p>
          </div>
        </div>
        <div className="lg:col-span-5 hidden lg:block relative h-[568px] w-full">
          <Image
            src="/about/desktop/image-heritage.webp"
            alt="Architectural structure showing detailed lines"
            fill
            className="object-cover"
          />
        </div>
      </section>

      {/* The Leaders Section */}
      <section className="max-w-[1110px] mx-auto px-6 md:px-12 lg:px-0 w-full mt-32 md:mt-48 flex flex-col lg:flex-row gap-16">
        <div className="lg:w-[350px] shrink-0">
          <h2 className="font-preset-3-mobile md:font-preset-3 text-zinc-900">
            The <br /> Leaders
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-16 gap-x-8 w-full">
          {leaders.map((leader, index) => (
            <div key={index} className="flex flex-col gap-4 group">
              <div className="relative h-[280px] md:h-[320px] w-full overflow-hidden">
                <Image
                  src={leader.image}
                  alt={leader.name}
                  fill
                  className="object-cover"
                />
                {leader.social && (
                  <div className="absolute inset-0 bg-zinc-900/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-6">
                    <a
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="LinkedIn"
                    >
                      <IconLinkedIn />
                    </a>
                    <a
                      href="https://twitter.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Twitter"
                    >
                      <IconTwitter />
                    </a>
                  </div>
                )}
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="font-preset-4 text-zinc-900">{leader.name}</h3>
                <span className="font-preset-6-medium text-slate-500">
                  {leader.role}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
