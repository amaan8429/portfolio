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
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. In
          laboriosam, natus omnis commodi doloribus voluptatum suscipit vero
          dicta temporibus aliquam nihil nobis dolorem non facilis quasi? Odit
          molestias sapiente molestiae? Sit saepe adipisci obcaecati tempore
          architecto quidem in omnis deleniti, ipsa dicta repellendus,
          dignissimos quisquam error illo dolore itaque necessitatibus harum
          voluptatem similique ducimus provident vel ipsum rem commodi?
          Suscipit!
        </div>
        <div className="w-full mt-4 flex flex-row gap-5">
          <Link className="w-8 h-8" href={"https://github.com/amaan8429"}>
            <FiGithub size={"26"} />
          </Link>
          <Link className="w-8 h-8" href={"https://x.com/amaan8429"}>
            <FiTwitter size={"26"} />
          </Link>
          <Link className="w-8 h-8" href={"https://huggingface.com/amaan8429"}>
            <GiArtificialHive size={"26"} />
          </Link>
          <Link className="w-8 h-8" href={"https://instagram.com/amaan.8429"}>
            <FiInstagram size={"26"} />
          </Link>
          <Link className="w-8 h-8" href={"https://amaan849.hashnode.dev"}>
            <FaHashnode size={"26"} />
          </Link>
          <Link className="w-8 h-8" href={"https://linkedin.com/amaan8429"}>
            <FiLinkedin size={"26"} />
          </Link>
        </div>
        <Projects />
      </div>
    </div>
  );
}
