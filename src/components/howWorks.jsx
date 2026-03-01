import Image from "next/image";
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

export default function HowWorks() {
  return (
    <section id="how_we_works">
      <div className="h-124 bg-white relative">
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
      </div>
      <div className="bg-[#233142] py-36">
        <ul className="grid grid-cols-3 gap-6 max-w-300 mx-auto">
          <li className="flex gap-2.5">
            <Image
              src={Seo}
              alt="Seo"
              width={50}
              height={50}
              className="max-h-13"
            />
            <div className="flex flex-col gap-2.5 max-w-80">
              <h4 className="text-xl">SEO Ready Code</h4>
              <p>
                Tincidunt felis dignissim justo congue, non rutrum tortor
                volutpat.
              </p>
            </div>
          </li>

          <li className="flex gap-2.5">
            <Image
              src={ResponseFull}
              alt="Fully Responsive"
              width={50}
              height={50}
              className="max-h-13"
            />
            <div className="flex flex-col gap-2.5 max-w-80">
              <h4 className="text-xl">Fully Responsive</h4>
              <p>
                Fully responsive on notebook, tablets and smartphones and
                others.
              </p>
            </div>
          </li>

          <li className="flex gap-2.5">
            <Image
              src={Awsom}
              alt="Awesome Features"
              width={50}
              height={50}
              className="max-h-13"
            />
            <div className="flex flex-col gap-2.5 max-w-80">
              <h4 className="text-xl">Awesome Features</h4>
              <p>
                Easy-to-use, dynamic colors, grid, video, map and much more.
              </p>
            </div>
          </li>

          <li className="flex gap-2.5">
            <Image
              src={Star}
              alt="5-star-support"
              width={50}
              height={50}
              className="max-h-13"
            />
            <div className="flex flex-col gap-2.5 max-w-80">
              <h4 className="text-xl">5-star support</h4>
              <p>
                Tincidunt felis dignissim justo congue, non rutrum tortor
                volutpat.
              </p>
            </div>
          </li>

          <li className="flex gap-2.5">
            <Image
              src={HighCustom}
              alt="High Customizibility"
              width={50}
              height={50}
              className="max-h-13"
            />
            <div className="flex flex-col gap-2.5 max-w-80">
              <h4 className="text-xl">High Customizibility</h4>
              <p>
                Tincidunt felis dignissim justo congue, non rutrum tortor
                volutpat.
              </p>
            </div>
          </li>

          <li className="flex gap-2.5">
            <Image
              src={Web}
              alt="Up-to-date Software"
              width={50}
              height={50}
              className="max-h-13"
            />
            <div className="flex flex-col gap-2.5 max-w-80">
              <h4 className="text-xl">Up-to-date Software</h4>
              <p>Lorem dolor sit amet, teso adipiscing elit. Mauris.</p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}
