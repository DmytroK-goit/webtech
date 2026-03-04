import Image, { StaticImageData } from "next/image";

import planning from "../img/how/planning.png";
import design from "../img/how/design.png";
import development from "../img/how/development.png";

import Vector from "../img/how/vector.png";
import VectorS from "../img/how/vector_s.png";

import Awsom from "../img/how/awsom.png";
import Seo from "../img/how/seo.png";
import Web from "../img/how/web.png";
import Star from "../img/how/star.png";
import ResponseFull from "../img/how/res_full.png";
import HighCustom from "../img/how/hight_cust.png";

const steps = [
  { img: planning, title: "Planning" },
  { img: design, title: "Design" },
  { img: development, title: "Development" },
];

const features = [
  {
    img: Seo,
    title: "SEO Ready Code",
    text: "Clean and optimized structure for search engines.",
  },
  {
    img: ResponseFull,
    title: "Fully Responsive",
    text: "Perfect on desktop, tablet and mobile.",
  },
  {
    img: Awsom,
    title: "Awesome Features",
    text: "Dynamic elements, grids, video and more.",
  },
  {
    img: Star,
    title: "5-star support",
    text: "Reliable and friendly support anytime.",
  },
  {
    img: HighCustom,
    title: "High Customizability",
    text: "Flexible architecture for custom needs.",
  },
  {
    img: Web,
    title: "Up-to-date Software",
    text: "Modern technologies and best practices.",
  },
];

export default function HowWorks() {
  return (
    <section id="how_we_works">
      <div className="bg-white relative py-16 md:py-24">
        <h2 className="text-2xl md:text-3xl lg:text-4xl flex justify-center items-center gap-3 md:gap-5 border-l-2 border-blue-600 text-blue-700 max-w-fit mx-auto pl-4">
          How <span className="text-black">We Work</span>
        </h2>

        <Image
          src={Vector}
          alt="Vector"
          width={100}
          className="hidden xl:block absolute top-70 left-[35.5%]"
        />
        <Image
          src={VectorS}
          alt="Vector"
          width={100}
          className="hidden xl:block absolute top-70 right-[35.5%]"
        />

        <ul className="flex flex-col md:flex-row gap-12 md:gap-16 lg:gap-32 items-center justify-center pt-16">
          {steps.map((step, index) => (
            <li
              key={index}
              className="flex flex-col items-center text-center gap-4 w-full md:w-auto"
            >
              <Image
                src={step.img}
                alt={step.title}
                width={160}
                height={160}
                className="rounded-full"
              />
              <p className="text-xl md:text-2xl text-[#141d28] font-medium">
                {step.title}
              </p>
            </li>
          ))}
        </ul>
      </div>

      <div className="bg-[#233142] py-16 md:py-24 text-white">
        <ul
          className="
            grid 
            grid-cols-1 
            sm:grid-cols-2 
            lg:grid-cols-3 
            gap-8 
            max-w-6xl 
            mx-auto 
            px-6
          "
        >
          {features.map((feature, index) => (
            <li key={index} className="flex gap-4 items-start">
              <Image
                src={feature.img}
                alt={feature.title}
                width={45}
                height={45}
              />
              <div className="flex flex-col gap-2">
                <h4 className="text-lg md:text-xl font-semibold">
                  {feature.title}
                </h4>
                <p className="text-sm md:text-base text-gray-300">
                  {feature.text}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
