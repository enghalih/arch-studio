import Image from "next/image";
import Link from "next/link";

const portfolioProjects = [
  {
    title: "Seraph Station",
    date: "September 2019",
    image: "/portfolio/desktop/image-seraph.webp",
  },
  {
    title: "Eebox Building",
    date: "August 2017",
    image: "/portfolio/desktop/image-eebox.webp",
  },
  {
    title: "Federal II Tower",
    date: "March 2017",
    image: "/portfolio/desktop/image-federal.webp",
  },
  {
    title: "Project Del Sol",
    date: "January 2016",
    image: "/portfolio/desktop/image-del-sol.webp",
  },
  {
    title: "Le Prototype",
    date: "October 2015",
    image: "/portfolio/desktop/image-prototype.webp",
  },
  {
    title: "228B Tower",
    date: "April 2015",
    image: "/portfolio/desktop/image-228b.webp",
  },
  {
    title: "Grand Edelweiss Hotel",
    date: "December 2013",
    image: "/portfolio/desktop/image-edelweiss.webp",
  },
  {
    title: "Netcry Tower",
    date: "August 2012",
    image: "/portfolio/desktop/image-netcry.webp",
  },
  {
    title: "Hypers",
    date: "January 2012",
    image: "/portfolio/desktop/image-hypers.webp",
  },
  {
    title: "SXIV Tower",
    date: "March 2011",
    image: "/portfolio/desktop/image-sxiv.webp",
  },
  {
    title: "Trinity Bank Tower",
    date: "September 2010",
    image: "/portfolio/desktop/image-trinity.webp",
  },
  {
    title: "Project Paramour",
    date: "February 2008",
    image: "/portfolio/desktop/image-paramour.webp",
  },
];

export default function PortfolioPage() {
  return (
    <div className="flex flex-col w-full relative">
      {/* Portfolio Section */}
      <section className="relative px-6 md:px-16 lg:px-32 max-w-[1440px] mx-auto w-full pb-32">

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
          {portfolioProjects.map((project, index) => (
            <div
              key={index}
              className="relative group h-[400px] md:h-[560px] flex flex-col justify-end p-8 overflow-hidden rounded-none shadow-md cursor-pointer"
            >
              <div className="absolute inset-0 z-0">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover brightness-[0.75] group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/80 via-transparent to-transparent z-0"></div>

              <div className="relative z-10 flex flex-col gap-1">
                <h3 className="font-preset-4 text-neutral-0">
                  {project.title}
                </h3>
                <span className="font-preset-6-medium text-neutral-200 opacity-75">
                  {project.date}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
