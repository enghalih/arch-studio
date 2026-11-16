"use client";

import { usePathname } from "next/navigation";

export default function HeaderLeft() {
  const pathname = usePathname();
  const title = pathname !== "/" ? pathname.replaceAll("/", "") : 'home';

  return (
    <div className="hidden z-100 lg:flex absolute left-16 top-0 items-center gap-18 text-slate-500 tracking-[18px] uppercase font-preset-6-regular rotate-90 origin-left">
      {/* Vertical Home Indicator for Desktop */}
      <div className="w-20 h-px bg-slate-200"></div>
    <span>{title}</span>
    </div>
  );
}
