"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { IconArrow } from "@/components/icons";

const heroSlides = [
  {
    id: "01",
    title: "Project Paramour",
    description:
      "Project made for an art museum near Southwest London. Project Paramour is a statement of bold, modern architecture.",
    imageDesktop: "/home/desktop/image-hero-paramour.webp",
    imageTablet: "/home/tablet/image-hero-paramour.webp",
    imageMobile: "/home/mobile/image-hero-paramour.webp",
  },
  {
    id: "02",
    title: "Seraph Station",
    description:
      "The Seraph Station project challenged us to design a unique station that would transport people through time. The result is a fresh and futuristic model inspired by space stations.",
    imageDesktop: "/home/desktop/image-hero-seraph.webp",
    imageTablet: "/home/tablet/image-hero-seraph.webp",
    imageMobile: "/home/mobile/image-hero-seraph.webp",
  },
  {
    id: "03",
    title: "Federal II Tower",
    description:
      "A sequel theme project for a tower originally built in the 1800s. We achieved this with a striking look of brutal minimalism with modern touches.",
    imageDesktop: "/home/desktop/image-hero-federal.webp",
    imageTablet: "/home/tablet/image-hero-federal.webp",
    imageMobile: "/home/mobile/image-hero-federal.webp",
  },
  {
    id: "04",
    title: "Trinity Bank Tower",
    description:
      "Trinity Bank challenged us to make a concept for a 84 story building located in the middle of a city with a high earthquake frequency. For this project we used curves to blend design and stability to meet our objectives.",
    imageDesktop: "/home/desktop/image-hero-trinity.webp",
    imageTablet: "/home/tablet/image-hero-trinity.webp",
    imageMobile: "/home/mobile/image-hero-trinity.webp",
  },
];

const featuredProjects = [
  {
    title: "Project Del Sol",
    category: "View All Projects",
    image: "/portfolio/desktop/image-del-sol.webp",
    number: "1",
  },
  {
    title: "228B Tower",
    category: "View All Projects",
    image: "/portfolio/desktop/image-228b.webp",
    number: "2",
  },
  {
    title: "Le Prototype",
    category: "View All Projects",
    image: "/portfolio/desktop/image-prototype.webp",
    number: "3",
  },
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slide = heroSlides[currentSlide];

  return (
    <div className="flex flex-col w-full">
      {/* Hero Slider Section */}
      <section className="relative px-6 md:px-16 lg:px-32 max-w-[1440px] mx-auto w-full">

        {/* Slide Item */}
        <div className="relative w-full h-[560px] md:h-[720px] flex items-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src={slide.imageDesktop}
              alt={slide.title}
              fill
              priority
              className="object-cover brightness-[0.75]"
            />
          </div>

          <div className="relative z-10 max-w-[545px] text-neutral-0 px-8 md:px-20 flex flex-col gap-6">
            <h1 className="font-preset-3 md:font-preset-2">{slide.title}</h1>
            <p className="font-preset-6-medium text-neutral-200">
              {slide.description}
            </p>
            <div>
              <Link
                href="/portfolio"
                className="button-custom"
              >
                <span className="font-preset-6-bold">See Our Portfolio</span>
                <IconArrow />
              </Link>
            </div>
          </div>
        </div>

        {/* Carousel Pagination Controls */}
        <div className="flex z-20">
          {heroSlides.map((item, index) => (
            <button
              key={item.id}
              onClick={() => setCurrentSlide(index)}
              className={`w-20 h-20 flex items-center justify-center font-preset-6-bold transition-colors ${
                currentSlide === index
                  ? "bg-zinc-900 text-neutral-0"
                  : "bg-neutral-0 text-slate-500 hover:bg-stone-100"
              }`}
            >
              {item.id}
            </button>
          ))}
        </div>
      </section>

      {/* Welcome Section */}
      <section className="relative max-w-[1110px] mx-auto px-6 md:px-12 mt-28 md:mt-40 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="hidden lg:block absolute -top-24 left-0 font-preset-1 text-slate-100 select-none z-0">
          Welcome
        </div>
        <div className="lg:col-span-7 z-10 flex flex-col gap-6">
          <div className="w-16 h-0.5 bg-slate-200"></div>
          <h2 className="font-preset-3-mobile md:font-preset-3 text-zinc-900">
            Welcome to <br /> Arch Studio
          </h2>
          <div className="flex flex-col gap-6 font-preset-6-medium text-slate-500 mt-4">
            <p>
              We have a unique network and skillset to help bring your projects
              to life. Our small team of highly skilled individuals combined
              with our large network put us in a strong position to deliver
              exceptional results.
            </p>
            <p>
              Over the past 10 years, we have worked on all kinds of projects.
              From stations to high-rise buildings, we create spaces that
              inspire and delight.
            </p>
            <p>
              We work closely with our clients so that we understand the
              intricacies of each project. This allows us to work in harmony the
              surrounding area to create truly stunning projects that will stand
              the test of time.
            </p>
          </div>
        </div>
        <div className="lg:col-span-5 hidden lg:block z-10 relative h-[568px]">
          <Image
            src="/home/desktop/image-welcome.webp"
            alt="Welcome to Arch Studio"
            fill
            className="object-cover shadow-lg"
          />
        </div>
      </section>

      {/* Small Team, Big Ideas Banner */}
      <section className="relative max-w-[1110px] mx-auto px-6 md:px-12 w-full mt-32 md:mt-48 h-[560px] flex items-center">
        <div className="absolute inset-0 z-0 mx-6 md:mx-12">
          <Image
            src="/home/desktop/image-small-team.webp"
            alt="Small team, big ideas"
            fill
            className="object-cover brightness-[0.55]"
          />
        </div>
        <div className="relative z-10 px-8 md:px-20 flex flex-col gap-8 text-neutral-0 max-w-[450px]">
          <h2 className="font-preset-3-mobile md:font-preset-3">
            Small team, big ideas
          </h2>
          <Link
            href="/about"
            className="button-custom w-fit"
          >
            <span className="font-preset-6-bold">About Us</span>
            <IconArrow />
          </Link>
        </div>
      </section>

      {/* Featured Section */}
      <section className="max-w-[1110px] mx-auto px-6 md:px-12 w-full mt-32 md:mt-48 flex flex-col gap-20">
        <div className="flex items-center justify-between">
          <h2 className="font-preset-3-mobile md:font-preset-3 text-zinc-900">
            Featured
          </h2>
          <Link
            href="/portfolio"
            className="button-custom hidden md:inline-flex"
          >
            <span className="font-preset-6-bold">See All</span>
            <IconArrow />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project, index) => (
            <Link
              key={index}
              href="/portfolio"
              className="relative group h-[400px] md:h-[560px] flex flex-col justify-end p-8 overflow-hidden rounded-none shadow-md"
            >
              <div className="absolute inset-0 z-0">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover brightness-[0.7] group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/80 via-transparent to-transparent z-0"></div>
              <span className="absolute top-6 right-6 font-preset-2 text-neutral-0 opacity-40 select-none z-10">
                {project.number}
              </span>
              <div className="relative z-10 flex flex-col gap-2">
                <h3 className="font-preset-4 text-neutral-0">
                  {project.title}
                </h3>
                <span className="font-preset-6-medium text-neutral-200">
                  {project.category}
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className="flex md:hidden justify-center">
          <Link
            href="/portfolio"
            className="button-custom w-full justify-center"
          >
            <span className="font-preset-6-bold">See All</span>
            <IconArrow />
          </Link>
        </div>
      </section>
    </div>
  );
}
