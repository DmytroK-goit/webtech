'use client';
import Image, { StaticImageData } from 'next/image';
import planning from '../img/how/planning.png';
import design from '../img/how/design.png';
import development from '../img/how/development.png';
import Vector from '../img/how/vector.png';
import VectorS from '../img/how/vector_s.png';
import Awsom from '../img/how/awsom.png';
import Seo from '../img/how/seo.png';
import Web from '../img/how/web.png';
import Star from '../img/how/star.png';
import ResponseFull from '../img/how/res_full.png';
import HighCustom from '../img/how/hight_cust.png';
import { motion } from 'framer-motion';

const steps = [
  { img: planning, title: 'Planning' },
  { img: design, title: 'Design' },
  { img: development, title: 'Development' },
];

const features = [
  {
    img: Seo,
    title: 'SEO Ready Code',
    text: 'Clean and optimized structure for search engines.',
  },
  {
    img: ResponseFull,
    title: 'Fully Responsive',
    text: 'Perfect on desktop, tablet and mobile.',
  },
  {
    img: Awsom,
    title: 'Awesome Features',
    text: 'Dynamic elements, grids, video and more.',
  },
  {
    img: Star,
    title: '5-star support',
    text: 'Reliable and friendly support anytime.',
  },
  {
    img: HighCustom,
    title: 'High Customizability',
    text: 'Flexible architecture for custom needs.',
  },
  {
    img: Web,
    title: 'Up-to-date Software',
    text: 'Modern technologies and best practices.',
  },
];
export const sectionAnimation = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};
export const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.25,
    },
  },
};

export const stepAnimation = {
  hidden: {
    opacity: 0,
    y: 60,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};

export default function HowWorks() {
  return (
    <motion.section
      variants={sectionAnimation}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      id="how_we_works"
    >
      <div className="relative bg-white py-16 md:py-24">
        <h2 className="mx-auto flex max-w-fit items-center justify-center gap-3 border-l-2 border-blue-600 pl-4 text-2xl text-blue-700 md:gap-5 md:text-3xl lg:text-4xl">
          How <span className="text-black">We Work</span>
        </h2>

        <Image
          src={Vector}
          alt="Vector"
          width={100}
          className="absolute top-70 left-[35.5%] hidden xl:block"
        />
        <Image
          src={VectorS}
          alt="Vector"
          width={100}
          className="absolute top-70 right-[35.5%] hidden xl:block"
        />

        <ul className="flex flex-col items-center justify-center gap-12 pt-16 md:flex-row md:gap-16 lg:gap-32">
          {steps.map((step, index) => (
            <motion.li
              key={index}
              variants={stepAnimation}
              whileHover={{ scale: 1.08, y: -5 }}
              className="flex w-full flex-col items-center gap-4 text-center md:w-auto"
            >
              <Image
                src={step.img}
                alt={step.title}
                width={160}
                height={160}
                className="rounded-full"
              />
              <p className="text-xl font-medium text-[#141d28] md:text-2xl">{step.title}</p>
            </motion.li>
          ))}
        </ul>
      </div>

      <div className="bg-[#233142] py-16 text-white md:py-24">
        <ul className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-4">
              <Image src={feature.img} alt={feature.title} width={45} height={45} />
              <div className="flex flex-col gap-2">
                <h4 className="text-lg font-semibold md:text-xl">{feature.title}</h4>
                <p className="text-sm text-gray-300 md:text-base">{feature.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </motion.section>
  );
}
