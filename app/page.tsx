import Link from "next/link";
import { IconArrow } from "@/components/icons";
import Image from "next/image";

const portfolioData = [
  {
    imageUrl: "/portfolio/mobile/image-del-sol.webp",
    title: "Project Del Sol",
  },
  {
    imageUrl: "/portfolio/mobile/image-228b.webp",
    title: "228B Tower",
  },
  {
    imageUrl: "/portfolio/mobile/image-prototype.webp",
    title: "Le Prototype",
  },
];

export default function Home() {
  return (
    <div>
      <div className="px-8 py-24 xl:p-50 bg-[url(/home/mobile/image-hero-paramour.webp)] bg-cover bg-center text-neutral-0">
        <h1 className="font-preset-3-mobile md:font-preset-2 xl:max-w-122">
          Project Paramour
        </h1>
        <p className="font-preset-6-medium md:font-preset-6-medium md:mt-2">
          Project made for an art museum near Southwest London. Project Paramour
          is a statement of bold, modern architecture.
        </p>
        <Link
          href="/portfolios"
          className="button-custom mt-20 md:mt-10 w-min text-nowrap"
        >
          See Our Portfolio
          <IconArrow />
        </Link>
      </div>

      <div className="relative mb-28 mt-18 mx-8 md:mx-0">
        <div className="w-16 h-1 bg-slate-200 mb-16 md:hidden"></div>
        <span className="font-preset-1-tablet xl:font-preset-1 xl:absolute z-10 text-slate-100 select-none hidden md:block">
          Welcome
        </span>
        <div className="flex justify-between items-end gap-16 md:-mt-12 xl:mt-0 xl:pt-17 xl:pl-48">
          <div className="xl:max-w-111.5">
            <h2 className="font-preset-3-mobile md:font-preset-3 mb-6 text-zinc-900">
              Welcome to Arch Studio
            </h2>
            <div className="font-preset-6-medium text-zinc-600 flex flex-col gap-6">
              <p>
                We have a unique network and skillset to help bring your
                projects to life. Our small team of highly skilled individuals
                combined with our large network put us in a strong position to
                deliver exceptional results.
              </p>
              <p>
                Over the past 10 years, we have worked on all kinds of projects.
                From stations to high-rise buildings, we create spaces that
                inspire and delight.
              </p>
              <p>
                We work closely with our clients so that we understand the
                intricacies of each project. This allows us to work in harmony
                the surrounding area to create truly stunning projects that will
                stand the test of time.
              </p>
            </div>
          </div>

          <div className="hidden xl:block shrink-0">
            <Image
              src="/home/desktop/image-welcome.webp"
              width={350}
              height={568}
              alt="Arch Studio Architecture"
            />
          </div>
        </div>
      </div>

      <div className="py-50 px-8 md:px-14 xl:px-50 xl:py-41.5 bg-[url(/home/mobile/image-small-team.webp)] flex flex-col gap-7.5 items-start bg-cover ">
        <h2 className="font-preset-3-mobile md:font-preset-3 text-neutral-0">
          Small team,
          <br /> big ideas
        </h2>
        <Link href="/about" className="button-custom">
          About Us
          <IconArrow />
        </Link>
      </div>

      <div className="my-18 mx-8">
        <h2 className="font-preset-3-mobile mb-10">Featured</h2>
        <div className="flex flex-col gap-6 items-start xl:flex-row">
          {portfolioData.map((item, index) => (
            <div
              key={index}
              className="py-4 px-6 text-neutral-0 relative max-h-60 w-full overflow-hidden flex flex-col justify-end xl:min-h-140"
            >
              <Image
                src={item.imageUrl}
                className="object-cover -z-10"
                fill
                alt="Arch Studio Architecture"
              ></Image>
              <div className="absolute inset-0 bg-neutral-950/30 -z-5"></div>
              <h3 className="font-preset-4">{item.title}</h3>
              <Link className="font-preset-6-medium" href="/portfolios">
                View All Projects
              </Link>
              <p className="font-preset-1 absolute right-4 top-[calc(50%+20px)] -translate-y-1/2 text-white/50 select-none pointer-events-none hidden md:block xl:right-0 xl:top-9 xl:translate-y-0">
                {index + 1}
              </p>
            </div>
          ))}
          <Link href="/portfolios" className="button-custom xl:hidden">
            See Our Portfolio
            <IconArrow />
          </Link>
        </div>
      </div>
    </div>
  );
}