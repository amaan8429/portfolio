import Link from "next/link";
import { FiGithub, FiInstagram, FiTwitter, FiLinkedin } from "react-icons/fi";
import { FaHashnode } from "react-icons/fa6";
import { GiArtificialHive } from "react-icons/gi";
import Projects from "@/components/sections/projects";

export default function Home() {
  return (
    <div className="w-full h-auto">
      <div className="w-full flex flex-col gap-2">
        <div className="font-semibold text-xl">Hey, I am Amaan</div>
        <div className="">
          I love building things and learning about new technologies. I am
          currently building web applications using Next.js, TypeScript,
          Tailwind, and MongoDB. I write about the things I learn on my blog. I
          spend my free time on Twitter. I am currently learning AI to make my
          web apps more interesting.
        </div>
        <div className="w-full mt-4 flex flex-row gap-5">
          <Link
            className="w-8 h-8"
            href={"https://github.com/amaan8429"}
            target="_blank"
          >
            <FiGithub size={"26"} />
          </Link>
          <Link
            className="w-8 h-8"
            href={"https://x.com/amaan8429"}
            target="_blank"
          >
            <FiTwitter size={"26"} />
          </Link>
          <Link
            className="w-8 h-8"
            href={"https://huggingface.com/amaan8429"}
            target="_blank"
          >
            <GiArtificialHive size={"26"} />
          </Link>
          <Link
            className="w-8 h-8"
            href={"https://instagram.com/amaan.8429"}
            target="_blank"
          >
            <FiInstagram size={"26"} />
          </Link>
          <Link
            className="w-8 h-8"
            href={"https://amaan849.hashnode.dev"}
            target="_blank"
          >
            <FaHashnode size={"26"} />
          </Link>
          <Link
            className="w-8 h-8"
            href={"https://linkedin.com/amaan8429"}
            target="_blank"
          >
            <FiLinkedin size={"26"} />
          </Link>
        </div>
        <Projects />
      </div>
    </div>
  );
}
