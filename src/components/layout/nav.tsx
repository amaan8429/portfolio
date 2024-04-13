import React from "react";
import Link from "next/link";

export default function Nav() {
  return (
    <div className="w-full flex items-center flex-row h-[2rem] border-b-2 mb-4 py-8">
      <a className="text-3xl font-bold block w-1/2" href="/">
        Mohd Amaan
      </a>
      <div className="w-1/2 flex justify-end py-4 items-center flex-row h-full gap-7">
        <Link
          href="/"
          className="font-semibold text-black/60 dark:text-white/60"
        >
          About
        </Link>
      </div>
    </div>
  );
}
