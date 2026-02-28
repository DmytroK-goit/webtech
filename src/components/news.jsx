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
      desc: "Explore the latest in motion animation and virtual reality headset technologies. Stay updated on how immersive experiences are shaping the future of gaming and design.",
      photo: Soft,
    },
    {
      id: 2,
      title: "Awesome Tips to Become CEO Of Big Network Startup",
      date: "May 27, 2019",
      desc: "Learn the essential skills and mindset to lead a large network startup successfully. From strategic planning to team management, we cover the key steps.",
      photo: Secur,
    },
    {
      id: 3,
      title: "Top 5 Amazing Changes For The Social Media Industry",
      date: "May 29, 2019",
      desc: "Discover the top 5 innovations transforming social media platforms today. From AI-driven feeds to new engagement strategies, stay ahead of the curve.",
      photo: New,
    },
    {
      id: 4,
      title: "Cloud Computing Trends in 2026",
      date: "Feb 10, 2026",
      desc: "Cloud technologies are evolving rapidly. Learn the key trends, tools, and services that businesses are adopting to stay competitive in the cloud era.",
      photo: New,
    },
    {
      id: 5,
      title: "Latest Tech Innovations to Watch",
      date: "Feb 20, 2026",
      desc: "From AI breakthroughs to next-gen devices, explore the most exciting technological innovations that are shaping our world.",
      photo: New,
    },
  ];
  const [activeNews, setActiveNews] = useState(news[0]);

  return (
    <section className="bg-white py-32">
      <h2 className="text-5xl flex items-center justify-center pl-3 border-l-4 border-l-blue-700 w-60 mx-auto text-[#377dff] gap-5">
        Our <span className="text-[#141d28]">News</span>
      </h2>

      <div className="flex max-w-6xl mx-auto mt-16 gap-8">
        <div className="w-7/12">
          <Image
            src={activeNews.photo}
            alt={activeNews.title}
            className="w-full h-80 object-cover rounded-lg"
          />
          <h3 className="text-3xl mt-4 font-bold">{activeNews.title}</h3>
          <p className="text-gray-500 mt-2">{activeNews.date}</p>
          <p className="mt-4 text-gray-700">{activeNews.desc}</p>
        </div>

        <div className="w-5/12">
          <Swiper spaceBetween={20} slidesPerView={3}>
            {news.slice(1).map((item) => (
              <SwiperSlide key={item.id}>
                <div className="flex flex-col gap-2 border p-2 rounded-lg">
                  <Image
                    src={item.photo}
                    alt={item.title}
                    className="w-full h-32 object-cover rounded-md"
                  />
                  <h4 className="font-semibold">{item.title}</h4>
                  <p className="text-gray-500 text-sm">{item.date}</p>
                  <button
                    onClick={() => setActiveNews(item)}
                    className="mt-auto bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
                  >
                    Detail
                  </button>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
