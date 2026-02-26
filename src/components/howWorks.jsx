import Image from "next/image";
import planning from "../img/how/planning.png";
import design from "../img/how/design.png";
import development from "../img/how/development.png";
import Vector from "../img/how/vector.png";
import VectorS from "../img/how/vector_s.png";

export default function HowWorks() {
  return (
    <section className="h-154 bg-white relative">
      <h2 className="text-4xl flex justify-center items-center gap-5 border-l-2 border-l-blue-600 text-blue-700 max-w-90 mx-auto">
        How<span className="text-black">we Works</span>
      </h2>
      <Image
        src={Vector}
        alt="Vector"
        width={156}
        className="absolute top-55 left-110"
      />
      <Image
        src={VectorS}
        alt="Vector"
        width={156}
        className="absolute top-55 left-214"
      />
      <ul className="flex gap-32 items-center justify-center pt-18 pb-36 ">
        <li className="flex flex-col w-76 h-60 items-center justify-center gap-4">
          <Image
            src={planning}
            alt="Planning"
            className="block rounded-[50%]"
            width={180}
            height={180}
          />
          <p className="text-3xl text-[#141d28]">Planning</p>
        </li>
        <li className="flex flex-col w-76 h-60 items-center justify-center gap-4">
          <Image
            src={design}
            alt="design"
            className="block rounded-[50%]"
            width={180}
            height={180}
          />
          <p className="text-3xl text-[#141d28]">Design</p>
        </li>
        <li className="flex flex-col w-76 h-60 items-center justify-center gap-4">
          <Image
            src={development}
            alt="development"
            className="block rounded-[50%]"
            width={180}
            height={180}
          />
          <p className="text-3xl text-[#141d28]">Development</p>
        </li>
      </ul>
    </section>
  );
}
