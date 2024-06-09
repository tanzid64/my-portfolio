import { useState } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import { WorkSliderBtns } from "@/components";

const projects = [
  {
    num: "01",
    category: "Full Stack",
    title: "Project -1",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam vitae fugit aspernatur nulla nesciunt ab ipsam. Consectetur facilis illum a?",
    stack: [{ name: "html5" }, { name: "html5" }],
    image: "/public/assets/work/thumb1.png",
    live: "",
    github: "",
  },
  {
    num: "02",
    category: "Full Stack",
    title: "Project -2",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam vitae fugit aspernatur nulla nesciunt ab ipsam. Consectetur facilis illum a?",
    stack: [{ name: "html5" }, { name: "html5" }],
    image: "/public/assets/work/thumb2.png",
    live: "",
    github: "",
  },
  {
    num: "03",
    category: "Full Stack",
    title: "Project -3",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam vitae fugit aspernatur nulla nesciunt ab ipsam. Consectetur facilis illum a?",
    stack: [{ name: "html5" }],
    image: "/public/assets/work/thumb3.png",
    live: "",
    github: "",
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);
  const handleSlideChange = (swiper) => {
    //get current slide index
    const currentIndex = swiper.activeIndex;
    // update project state based on current slide index
    setProject(projects[currentIndex]);
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              {/* Outline Number */}
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              {/* Project Category */}
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.category}
              </h2>
              {/* Project Description */}
              <p className="text-white/60">{project.description}</p>
              {/* Project Stack */}
              <ul className="flex gap-4">
                {project.stack.map((stack, index) => {
                  return (
                    <li className="text-xl text-accent" key={index}>
                      {stack.name}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>
              {/* border */}
              <div className="border border-white/60"></div>
              {/* buttons */}
              <div className=" flex items-center gap-4">
                {/* Live Project Button */}
                <a href={project.live} className="">
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group-hover:text-accent">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <span className="">Live Project</span>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </a>
                {/* GitHub Project Button */}
                <a href={project.github} className="">
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group-hover:text-accent">
                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <span className="">GitHub Repo</span>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </a>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((item, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                      {/* overlay */}
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                      {/* Image */}
                      <div className="relative w-full h-full">
                        <img
                          src={project.image}
                          alt="Project Image"
                          className="object-cover h-full"
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              {/* Slider Buttons */}
              <WorkSliderBtns
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all "
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
export default Work;
