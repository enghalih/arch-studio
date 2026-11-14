import type { Metadata } from "next";
import { League_Spartan } from "next/font/google";
import "./globals.css";
import { Logo, IconHamburger, IconArrow } from "@/components/icons";
import Link from "next/link";
import Image from "next/image";

const leagueSpartan = League_Spartan({
  variable: "--font-spartan",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Arch Studio",
  description: "Design for the future",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${leagueSpartan.variable} h-full antialiased`}>
      <head></head>
      <body className="min-h-full flex flex-col font-preset-6-medium">
        <div className="block md:flex">
          <div className="w-50 md:flex flex-col items-center gap-12 hidden">
            <div className="h-24 w-1 bg-slate-200"></div>
            <h2 className="font-preset-6-medium text-slate-200 [writing-mode:vertical-rl] xl:tracking-[18px]">
              HOME
            </h2>
          </div>
          <div className="md:pr-24 w-full">
            <header className="flex md:h-min-[152px] p-8 md:px-0 items-center justify-between md:justify-start md:gap-24">
              <Link href="/">
                <Logo className="w-20 md:w-24" />
              </Link>
              <IconHamburger className="md:hidden" />
              <div className="md:flex hidden gap-14 font-preset-6-bold text-slate-500">
                <Link href="/portfolios">Portfolio</Link>
                <Link href="/about">About Us</Link>
                <Link href="/contact">Contact</Link>
              </div>
            </header>
            {children}
          </div>
        </div>
        <footer className="relative mt-15 md:mt-0 md:text-slate-500 bg-slate-100 md:flex md:justify-start gap-10 -z-5 md:max-w-min text-nowrap">
          <div className="bg-neutral-950 h-30 aspect-square grid place-items-center absolute md:relative -top-15 left-1/2 -translate-x-1/2 md:top-0 md:left-0 md:translate-x-0">
            <Logo className="text-neutral-0 w-15 h-6" />
          </div>
          <div className="flex flex-col gap-8 items-center pb-12 pt-23 md:py-0 md:flex-row">
            <div className="flex flex-col gap-8 items-center font-preset-6-bold font-bold text-slate-500 md:flex-row">
              <Link href="/portfolios">Portfolios</Link>
              <Link href="/about">About Us</Link>
              <Link href="/contact">Contact</Link>
            </div>
            <Link
              href="/portofolios"
              className="button-custom md:translate-x-1/2"
            >
              See Our Portfolio
              <IconArrow />
            </Link>
          </div>
        </footer>
      </body>
    </html>
  );
}
