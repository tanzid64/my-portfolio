import { Button } from "@/components/ui/button";
import { FaDownload } from "react-icons/fa";
import { Photo, Socials, Stats } from "../components";

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* text */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Software Developer</span>
            <h1 className="h1">
              Hello I'm <br /> <span className="text-accent">Tanzid Haque</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              I excel at crafting elegant digital experiences and I am
              proficient in various programming languages and technologies.
            </p>
            {/* Button & Socials */}
            <div className="flex flex-col items-center xl:flex-row gap-8">
              <Button
                className="uppercase flex items-center gap-2"
                variant="outline"
                size="lg"
              >
                <span>Download Resume</span>
                <FaDownload className="text-xl" />
              </Button>
              <div className="mb-8 xl:mb-0">
                <Socials
                  containerStyle="flex gap-6"
                  iconStyle="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          {/* photo */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats/>
    </section>
  );
};
export default Home;
