import AboutImage from "@/components/about/AboutImage";
import AboutStatistic from "@/components/about/AboutStatistic";
import { IoStorefrontSharp } from "react-icons/io5";
import { BsPersonVideo3 } from "react-icons/bs";
import { FaBookAtlas } from "react-icons/fa6";

function AboutPage() {
  return (
    <section className="grid md:grid-cols-2 gap-8 max-h-[500px]">
      <div>
        <div>
          <h1 className="flex flex-wrap gap-2 sm:gap-x-6 items-center  text-4xl font-bold leading-none tracking-wide sm:text-6xl">
            PixelNest
            <span className="bg-primary py-2 px-4 rounded-lg tracking-widest text-white">
              Store
            </span>
          </h1>
          <p className="mt-6 text-lg tracking-wide leading-8 max-w-2xl mx-auto text-muted-foreground">
            At PixelNest, we believe in the power of digital creativity. We are
            a curated marketplace where creators and enthusiasts come together
            to explore e-books, design templates, music, and photo presets — all
            in one beautifully simple platform. Whether you are a designer,
            developer, photographer, or content creator, our mission is to help
            you find tools that inspire, elevate, and simplify your work.
          </p>
        </div>
        <div className="grid grid-cols-3 mt-8">
          <AboutStatistic
            icon={<IoStorefrontSharp className="text-xl" />}
            title="Monthly visit"
            number="33500"
          />
          <AboutStatistic
            icon={<BsPersonVideo3 className="text-xl" />}
            title="Active customers"
            number="20"
          />
          <AboutStatistic
            icon={<FaBookAtlas className="text-xl" />}
            title="Products for any need"
            number="15"
          />
        </div>
      </div>

      <div>
        <AboutImage />
      </div>
    </section>
  );
}
export default AboutPage;
