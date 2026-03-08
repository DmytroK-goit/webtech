'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Soft from '../img/news/sofwere.png';
import Secur from '../img/news/security.png';
import New from '../img/news/new.png';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { sectionAnimation, stepAnimation } from './howWorks';
export default function News() {
  const news = [
    {
      id: 1,
      title: 'Motion Animation And VR Headset',
      date: 'May 17, 2019',
      desc: `Explore the latest breakthroughs in motion animation and virtual reality headset technologies. From immersive gaming experiences to professional simulation tools, modern VR devices are redefining how users interact with digital environments and content.

Advanced motion tracking systems now allow precise body and gesture recognition, enabling more natural interaction in virtual spaces. Industries such as architecture, medicine, and education are adopting VR to visualize complex data and simulate real-world scenarios safely and efficiently.

As hardware becomes lighter and more affordable, VR is rapidly moving beyond entertainment into everyday productivity and collaboration tools. Companies investing in VR platforms today are positioning themselves at the forefront of next-generation digital experiences.`,
      photo: Soft,
      tag: 'Software',
      author: 'Emma Johnson',
    },
    {
      id: 2,
      title: 'Awesome Tips to Become CEO Of Big Network Startup',
      date: 'May 27, 2019',
      desc: `Learn the essential leadership, strategic thinking, and networking skills required to lead a large-scale startup. Building a successful technology company demands more than a great idea — it requires vision, resilience, and the ability to inspire teams during uncertain growth stages.

Founders must develop strong decision-making frameworks, understand financial scaling models, and cultivate investor relationships. Effective CEOs also prioritize company culture, ensuring innovation and accountability remain core values as the organization expands.

By studying real startup journeys and avoiding common leadership pitfalls, aspiring entrepreneurs can accelerate their path toward executive roles and sustainable business growth in competitive global markets.`,
      photo: Secur,
      tag: 'Security',
      author: 'Emma Johnson',
    },
    {
      id: 3,
      title: 'Top 5 Amazing Changes For The Social Media Industry',
      date: 'May 29, 2019',
      desc: `Discover the top innovations transforming social media platforms, including AI-driven content discovery, immersive short-form video formats, and advanced personalization algorithms. These changes are reshaping how audiences engage with digital content and how brands communicate online.

New creator-centric monetization tools are empowering individuals to build sustainable careers through content production. At the same time, privacy regulations and transparency expectations are forcing platforms to rethink data usage and moderation strategies.

The next generation of social media will likely blend augmented reality, real-time collaboration, and decentralized identity systems, creating more interactive and user-controlled digital communities.`,
      photo: New,
      tag: 'New',
      author: 'Emma Johnson',
    },
    {
      id: 4,
      title: 'Cloud Computing Trends in 2026',
      date: 'Feb 10, 2026',
      desc: `Cloud technologies continue to evolve with the rise of serverless architectures, edge computing, and AI-driven infrastructure management. Organizations are increasingly shifting from monolithic deployments to distributed cloud ecosystems that improve performance and resilience across global services.

Multi-cloud strategies are becoming standard practice, allowing companies to avoid vendor lock-in while optimizing cost and availability. Automated scaling, predictive maintenance, and intelligent workload orchestration are reducing operational overhead and enabling faster product delivery cycles.

As security and compliance frameworks mature, cloud adoption is expanding into highly regulated sectors such as healthcare, finance, and government, making cloud platforms the backbone of modern digital transformation.`,
      photo: New,
      tag: 'Cloud',
      author: 'Emma Johnson',
    },
    {
      id: 5,
      title: 'Latest Tech Innovations to Watch',
      date: 'Feb 20, 2026',
      desc: `Explore the most exciting technological innovations shaping the near future, from autonomous robotics and smart infrastructure to next-generation processors and human-AI collaboration tools. These advancements are transforming how industries operate and how people interact with technology daily.

Edge AI devices are enabling real-time decision-making in manufacturing, transportation, and healthcare environments. Meanwhile, breakthroughs in semiconductor design are dramatically increasing computational efficiency while reducing energy consumption.

As digital ecosystems become more interconnected, organizations that adopt emerging technologies early will gain significant competitive advantages, unlocking new business models and customer experiences previously impossible.`,
      photo: New,
      tag: 'Tech',
      author: 'Emma Johnson',
    },
  ];

  const [activeNews, setActiveNews] = useState(news[0]);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    setExpanded(false);
  }, [activeNews]);

  return (
    <motion.section
      variants={sectionAnimation}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      id="news"
      className="bg-[#f5f7fb] py-16 md:py-24"
    >
      <h2 className="mx-auto flex w-fit items-center justify-center gap-3 border-l-4 border-blue-700 pl-4 text-3xl text-[#377dff] md:text-4xl lg:text-5xl">
        Our <span className="text-[#141d28]">News</span>
      </h2>

      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 pt-10 md:flex-row md:gap-10 md:px-6 lg:px-0">
        <div className="md:w-[70%]">
          <div className="relative h-60 overflow-hidden rounded-xl md:h-65 lg:h-70">
            <Image src={activeNews.photo} alt={activeNews.title} fill className="object-cover" />
            <span className="absolute top-4 left-4 rounded bg-blue-500 px-3 py-1 text-xs text-white md:text-sm">
              {activeNews.tag}
            </span>
          </div>

          <h3 className="mt-4 text-xl font-semibold text-[#0b1320] md:mt-6 md:text-2xl">
            {activeNews.title}
          </h3>

          <div className="mt-1 flex flex-wrap gap-4 text-sm text-gray-500 md:mt-2">
            <span>{activeNews.author}</span>
            <span>{activeNews.date}</span>
          </div>

          <div
            className={`mt-4 max-w-xl overflow-hidden leading-relaxed text-gray-600 transition-all duration-500 ${expanded ? 'max-h-[500px] md:max-h-[600px]' : 'max-h-24 md:max-h-36'} `}
          >
            {activeNews.desc}
          </div>

          <button
            onClick={() => setExpanded(!expanded)}
            className="mt-4 cursor-pointer border-2 border-blue-700 px-5 py-2 text-sm tracking-widest text-gray-800 transition hover:bg-blue-50 hover:text-blue-600 md:mt-6"
          >
            {expanded ? 'SHOW LESS' : 'VIEW DETAILS'}
          </button>
        </div>

        <div className="mt-6 h-34 md:mt-0 md:h-120 md:w-[30%] lg:h-130">
          <Swiper
            direction="vertical"
            slidesPerView={3}
            spaceBetween={12}
            className="h-full md:h-full"
          >
            {news.map((item) => (
              <SwiperSlide key={item.id}>
                <motion.div
                  variants={stepAnimation}
                  whileHover={{ scale: 1.01, y: -5 }}
                  onClick={() => setActiveNews(item)}
                  className="group relative h-12 cursor-pointer overflow-hidden rounded-lg md:h-40"
                >
                  <Image
                    src={item.photo}
                    alt={item.title}
                    fill
                    className="object-cover transition group-hover:scale-105"
                  />
                  <div className="absolute inset-0 flex flex-col justify-end bg-[#0b1320]/70 p-2 md:p-3">
                    <span className="mb-1 text-xs text-blue-400">{item.tag}</span>
                    <h4 className="line-clamp-2 text-xs leading-snug text-white md:text-sm">
                      {item.title}
                    </h4>
                    <div className="mt-1 flex justify-between text-[10px] text-gray-300 md:text-[11px]">
                      <span>{item.author}</span>
                      <span>{item.date}</span>
                    </div>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </motion.section>
  );
}
