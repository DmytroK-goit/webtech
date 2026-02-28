import Image from "next/image";
import Person from "../img/inivations/person.png";
import Link from "next/link";
export default function Innovation() {
  return (
    <section className="bg-[#233142] h-160 flex gap-20 overflow-hidden relative">
      <Image
        src={Person}
        alt="Background person"
        width={696}
        height={865}
        className="w-174 h-206 object-cover block relative -top-40"
      />
      <div className="flex flex-col justify-center pr-32">
        {" "}
        <h2 className="text-white text-start text-[70px]">
          A New Era of{" "}
          <span className="text-blue-700 text-[55px]">Innovation</span>
        </h2>
        <p className="text-[20px]">
          Always on the lookout for the hi-tech advancements. Build a product
          that will sell well
        </p>
        <div className="flex gap-5 items-start pt-9">
          <Link
            href="/"
            className="w-36 h-12 bg-blue-600 text-white flex items-center justify-center"
          >
            Start Now
          </Link>
          <Link
            className="w-36 h-12 bg-transparent text-white border-4 border-blue-800 flex items-center justify-center"
            href="/"
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
}
