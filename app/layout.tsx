import type { Metadata } from "next";
import { League_Spartan } from "next/font/google";
import "./globals.css";
import Header from "./Header";
import Footer from "./Footer";
import HeaderLeft from "./HeaderLeft";

const leagueSpartan = League_Spartan({
  variable: "--font-spartan",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Arch Studio",
  description: "Design for the future",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
  }) {
  return (
    <html lang="en" className={`${leagueSpartan.variable} h-full antialiased`}>
      <body className="flex flex-col relative min-h-screen bg-neutral-0 font-spartan text-zinc-900 selection:bg-zinc-900 selection:text-neutral-0">
        <HeaderLeft />
        <Header />

        <main className="grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
