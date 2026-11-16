import Link from "next/link";
import { Logo, IconArrow } from "@/components/icons";

export default function Footer() {
  return (
    <footer className="relative bg-stone-100 md:bg-transparent mt-24 md:mt-36 md:overflow-hidden">
      <div className="max-w-[1110px] md:bg-stone-100 mx-auto px-6 md:px-0 flex flex-col md:flex-row items-center justify-between py-12 md:py-0 relative">
        {/* Left Card containing Logo and Nav */}
        <div className="flex flex-col md:flex-row items-center text-neutral-0 md:text-zinc-900 -mt-24 md:-mt-0 mb-12 md:mb-0 w-full md:w-auto p-12 md:p-0 gap-8 md:gap-24 relative z-20">
          <div className="bg-zinc-900 text-neutral-0 w-30 aspect-square flex items-center justify-center -translate-y-1/2 md:translate-0">
            <Logo height={25}/>
          </div>
          <nav className="flex flex-col md:flex-row items-center gap-8 font-preset-6-bold text-slate-500 md:text-zinc-900">
            <Link
              href="/portfolio"
              className="hover:text-slate-500 transition-colors"
            >
              Portfolio
            </Link>
            <Link
              href="/about"
              className="hover:text-slate-500 transition-colors"
            >
              About Us
            </Link>
            <Link
              href="/contact"
              className="hover:text-slate-500 transition-colors"
            >
              Contact
            </Link>
          </nav>
        </div>

        {/* Right Button */}
        <div className="relative z-20">
          <Link
            href="/portfolio"
            className="button-custom group hover:bg-slate-500 transition-colors"
          >
            <span className="font-preset-6-bold">See Our Portfolio</span>
            <IconArrow className="w-6 h-6 transform group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* White background extension on the right side */}
        <div className="bg-neutral-0 md:w-38 lg:w-31 absolute right-0 top-0 bottom-0 z-10 hidden md:block"></div>
      </div>
    </footer>
  );
}
