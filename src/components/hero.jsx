import Link from "next/link";
import s from "../scss/hero.module.scss";

export default function Hero() {
  return (
    <section
      className={`${s.hero_section} w-full h-250 pl-35 flex flex-col justify-center`}
    >
      <div className="flex max-w-160 items-center gap-5 justify-center">
        <p className="text-[140px] text-[rgba(255,255,255,0.13)] border-r-4 border-[#377dff]">
          01
        </p>

        <h1 className="text-5xl text-white leading-[180%]">
          The Uniqe Creative{" "}
          <span className="text-blue-700">Design Agency</span>
        </h1>
      </div>
      <p className="max-w-140 pt-7 ">
        Always on the lookout for the hi-tech advancements. Build not only a
        product that can sell well, but a platform through which to deliver it.
      </p>
      <div className="flex gap-4 pt-14">
        <Link
          href="/"
          className="flex items-center justify-center p-3 border-none rounded-4xl w-36 h-12 bg-[#377dff]"
        >
          Start Now
        </Link>
        <Link
          href="/"
          className="flex items-center justify-center p-3 border border-[#377dff] rounded-4xl w-36 h-12 bg-transparent"
        >
          Learn More
        </Link>
      </div>
    </section>
  );
}
