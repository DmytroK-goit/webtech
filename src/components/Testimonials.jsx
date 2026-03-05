"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import Person1 from "../img/testimonials/james.png";
import Person2 from "../img/testimonials/jorg.png";
import Person3 from "../img/testimonials/ronald.png";

const testimonials = [
  {
    id: 1,
    name: "Ronald C. Hartung",
    role: "Marketer",
    text: "Donec eget elit vel urna varius pharetra. Suspendisse sodales venenatis lorem nec tincidunt. Donec dignissim purus ut nulla ultricies.",
    img: Person1,
  },
  {
    id: 2,
    name: "James W. Phelps",
    role: "UI Designer",
    text: "Aliquam eu ante ante. Cras rutrum massa lacinia est lobortis maximus. Integer pellentesque nisl at odio porta iaculis.",
    img: Person2,
  },
  {
    id: 3,
    name: "Sharon A. Melton",
    role: "Web Designer",
    text: "Vestibulum auctor libero a quam rhoncus, vel facilisis turpis fermentum. Praesent sed neque at ipsum gravida tristique.",
    img: Person3,
  },
];

export default function Testimonials() {
  return (
    <section className="bg-white py-20 md:py-34 ">
      <h2 className="flex items-center justify-center w-2/3 md:w-1/4 mx-auto gap-3 text-center pl-3 text-blue-700 text-2xl md:text-3xl lg:text-4xl border-l-4 border-l-blue-700 ">
        Our <span className="text-black">Testimonials</span>
      </h2>
      <div className="max-w-3xl mx-auto text-center relative mt-20">
        <Swiper
          modules={[Navigation]}
          navigation
          loop
          centeredSlides
          slidesPerView={1}
          className="pb-16"
        >
          {testimonials.map((item, index) => {
            const prev =
              index === 0
                ? testimonials[testimonials.length - 1]
                : testimonials[index - 1];

            const next =
              index === testimonials.length - 1
                ? testimonials[0]
                : testimonials[index + 1];

            return (
              <SwiperSlide key={item.id}>
                <div className="flex justify-center items-center gap-6 mb-8">
                  <Image
                    src={prev.img}
                    alt={prev.name}
                    width={70}
                    height={70}
                    className="rounded-full opacity-50"
                  />

                  <Image
                    src={item.img}
                    alt={item.name}
                    width={150}
                    height={150}
                    className="rounded-full"
                  />

                  <Image
                    src={next.img}
                    alt={next.name}
                    width={70}
                    height={70}
                    className="rounded-full opacity-50"
                  />
                </div>

                <p className="inline-block w-[70%] md:w-[100%] text-[#4e5e72] text:[10px] md:text-[20px] max-w-xl mx-auto leading-relaxed">
                  {item.text}
                </p>

                <h4 className="mt-8 text-[24px] font-semibold text-[#141d28] tracking-wide uppercase">
                  {item.name}
                </h4>

                <span className="text-sm tracking-widest text-[#4e5e72] uppercase ">
                  {item.role.toUpperCase()}
                </span>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
}
