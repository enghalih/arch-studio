import Link from "next/link";
import { IconArrow } from "@/components/icons";
import Image from "next/image";

const portfolioData = [
  {
    imageUrl: "/portfolio/mobile/image-del-sol.webp",
    title: "Seraph Station",
    date: "September 2019",
  },
  {
    imageUrl: "/portfolio/mobile/image-del-sol.webp",
    title: "Seraph Station",
    date: "September 2019",
  },
  {
    imageUrl: "/portfolio/mobile/image-del-sol.webp",
    title: "Seraph Station",
    date: "September 2019",
  },
  {
    imageUrl: "/portfolio/mobile/image-del-sol.webp",
    title: "Seraph Station",
    date: "September 2019",
  },
  {
    imageUrl: "/portfolio/mobile/image-del-sol.webp",
    title: "Seraph Station",
    date: "September 2019",
  },
  {
    imageUrl: "/portfolio/mobile/image-del-sol.webp",
    title: "Seraph Station",
    date: "September 2019",
  },
];

export default function Portfolios() {
  return (
    <div className="grid gap-6 px-8 py-14 md:px-0 xl:grid-cols-[repeat(auto-fit,minmax(350px,1fr))]">
      {portfolioData.map((item, index) => (
        <div
          key={index}
          className="py-8 px-10 xl:py-10 text-neutral-0 relative min-h-60 w-full overflow-hidden flex flex-col justify-end xl:min-h-140"
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
        </div>
      ))}
    </div>
  );
}
