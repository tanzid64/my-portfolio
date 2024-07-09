import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaNode,
  FaPython,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiRedux,
  SiDjango,
} from "react-icons/si";
import educationIcon from "/public/assets/resume/cap.svg";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const Resume = () => {
  // About Data
  const about = {
    title: "About Me",
    description:
      "Hello! I'm a passionate developer with a keen interest in web development, and backend systems. I have a strong passion for creating efficient and scalable software solutions. I am always seeking out new and innovative ways to improve my skills and stay up-to-date with the latest technologies.",
    info: [
      {
        fieldName: "Name",
        fieldValue: "Tanzid Haque",
      },
      {
        fieldName: "Phone",
        fieldValue: "(+880) 17089-15045",
      },
      {
        fieldName: "Nationality",
        fieldValue: "Bangladeshi",
      },
      {
        fieldName: "Email",
        fieldValue: "tanzid@inbox.ru",
      },
      {
        fieldName: "Freelance",
        fieldValue: "Available",
      },
      {
        fieldName: "Languages",
        fieldValue: "Bangla, English",
      },
    ],
  };
  const education = {
    icon: educationIcon,
    title: "My Education",
    description:
      "I have completed my education from Green University. I have studied CSE Fundamentals with Phitron.",
    items: [
      {
        institution: "Green University",
        degree: "Bachelor of Electrical and Electronic Engineering",
        year: "2023",
      },
      {
        institution: "Phitron.io",
        degree: "CSE Fundamentals with Phitron",
        year: "2023",
      },
    ],
  };
  // Skills
  const skills = {
    title: "My Skills",
    description:
      "Skilled in developing robust backend systems with Node.js & Django, focusing on creating efficient APIs and server-side logic. Experienced in working with ESP32-CAM for IoT projects. Proficient in using Git for version control, ensuring smooth collaboration and project management.",
    skillList: [
      {
        icon: <FaHtml5 />,
        name: "HTML5",
      },
      {
        icon: <FaCss3 />,
        name: "CSS3",
      },
      {
        icon: <FaJs />,
        name: "JavaScript",
      },
      {
        icon: <SiTailwindcss />,
        name: "Tailwind CSS",
      },
      {
        icon: <FaReact />,
        name: "React.js",
      },
      {
        icon: <SiRedux />,
        name: "Redux",
      },
      {
        icon: <FaNode />,
        name: "Node.js",
      },
      {
        icon: <SiExpress />,
        name: "Express.js",
      },
      {
        icon: <FaPython />,
        name: "Python",
      },
      {
        icon: <SiDjango />,
        name: "Django",
      },
      {
        icon: <SiMongodb />,
        name: "MongoDB",
      },
      {
        icon: <SiMysql />,
        name: "MySQL",
      },
      {
        icon: <SiPostgresql />,
        name: "PostgreSQL",
      },
    ],
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="skills"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About Me</TabsTrigger>
          </TabsList>
          {/* content */}
          <div className="min-h-[70vh] w-full">
            {/* Education */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                          key={index}
                        >
                          <span className="text-accent">{item.year}</span>
                          <h3 className="text-md max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.degree}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.institution}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/* Skills */}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{skills.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {skills.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                    {skills.skillList.map((skill, index) => {
                      return (
                        <li className="" key={index}>
                          <TooltipProvider delayDuration={100}>
                            <Tooltip>
                              <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                                <span className="">
                                  <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                    {skill.icon}
                                  </div>
                                </span>
                              </TooltipTrigger>
                              <TooltipContent>
                                <p className="capitalize">{skill.name}</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/* About */}
            <TabsContent value="about" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((info, index) => {
                    return (
                      <li
                        className="flex items-center justify-center xl:justify-start gap-4"
                        key={index}
                      >
                        <span className="text-white/60">{info.fieldName}</span>
                        <span className="text-xl">{info.fieldValue}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};
export default Resume;
