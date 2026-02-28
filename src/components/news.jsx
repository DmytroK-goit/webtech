"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Soft from "../img/news/sofwere.png";
import Secur from "../img/news/security.png";
import New from "../img/news/new.png";
import Image from "next/image";
import { useState } from "react";

export default function News() {
  const news = [
    {
      id: 1,
      title: "Motion Animation And VR Headset",
      date: "May 17, 2019",
      desc: "Explore the latest breakthroughs in motion animation and virtual reality headset technologies. From immersive gaming experiences to professional simulation tools, modern VR devices are redefining how users interact with digital environments and content.",
      photo: Soft,
      tag: "Software",
      author: "Emma Johnson",
    },
    {
      id: 2,
      title: "Awesome Tips to Become CEO Of Big Network Startup",
      date: "May 27, 2019",
      desc: "Learn the essential leadership, strategic thinking, and networking skills required to lead a large-scale startup. This guide covers real-world challenges founders face and practical tips to scale a tech company successfully in a competitive market.",
      photo: Secur,
      tag: "Security",
      author: "Emma Johnson",
    },
    {
      id: 3,
      title: "Top 5 Amazing Changes For The Social Media Industry",
      date: "May 29, 2019",
      desc: "Discover the top innovations transforming social media platforms, including AI-driven content, immersive formats, and advanced personalization. These trends are reshaping how brands connect with audiences and how users consume online content.",
      photo: New,
      tag: "New",
      author: "Emma Johnson",
    },
    {
      id: 4,
      title: "Cloud Computing Trends in 2026",
      date: "Feb 10, 2026",
      desc: "Cloud technologies are evolving rapidly with serverless architectures, edge computing, and AI-powered infrastructure management. Businesses are increasingly adopting multi-cloud strategies to improve scalability, resilience, and performance across global services.",
      photo: New,
      tag: "Cloud",
      author: "Emma Johnson",
    },
    {
      id: 5,
      title: "Latest Tech Innovations to Watch",
      date: "Feb 20, 2026",
      desc: "Explore the most exciting technological innovations shaping the near future, from autonomous systems and robotics to next-generation processors and smart devices. These advancements are set to transform industries and everyday digital experiences.",
      photo: New,
      tag: "Tech",
      author: "Emma Johnson",
    },
  ];

  const [activeNews, setActiveNews] = useState(news[0]);

  return (
    <section className="bg-[#f5f7fb] py-24">
      <h2 className="text-5xl flex items-center justify-center pl-3 border-l-4 border-l-blue-700 w-60 mx-auto text-[#377dff] gap-5">
        Our <span className="text-[#141d28]">News</span>
      </h2>

      <div className="max-w-6xl mx-auto flex gap-10 pt-8">
        <div className="w-[70%]">
          <div className="relative h-90 overflow-hidden">
            <Image
              src={activeNews.photo}
              alt={activeNews.title}
              fill
              className="object-cover"
            />
            <span className="absolute top-4 left-4 bg-blue-500 text-white text-sm px-3 py-1 rounded">
              {activeNews.tag}
            </span>
          </div>

          <h3 className="text-2xl mt-6 font-semibold text-[#0b1320]">
            {activeNews.title}
          </h3>

          <div className="flex gap-6 text-gray-500 text-sm mt-2">
            <span>{activeNews.author}</span>
            <span>{activeNews.date}</span>
          </div>

          <p className="mt-4 text-gray-600 leading-relaxed max-w-xl">
            {activeNews.desc}
          </p>

          <button className="mt-6 text-sm tracking-widest text-gray-800 hover:text-blue-600 cursor-pointer border-4 border-blue-700 p-3">
            VIEW DETAILS
          </button>
        </div>

        <div className="w-[30%] h-130">
          <Swiper
            direction="vertical"
            slidesPerView={3}
            spaceBetween={16}
            className="h-full"
          >
            {news.map((item) => (
              <SwiperSlide key={item.id}>
                <div
                  onClick={() => setActiveNews(item)}
                  className="relative h-40 cursor-pointer overflow-hidden"
                >
                  <Image
                    src={item.photo}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />

                  <div className="absolute inset-0 bg-[#0b1320]/70 p-3 flex flex-col justify-end">
                    <span className="text-xs text-blue-400 mb-1">
                      {item.tag}
                    </span>

                    <h4 className="text-white text-sm leading-snug line-clamp-2">
                      {item.title}
                    </h4>

                    <div className="flex justify-between text-[11px] text-gray-300 mt-1">
                      <span>{item.author}</span>
                      <span>{item.date}</span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
