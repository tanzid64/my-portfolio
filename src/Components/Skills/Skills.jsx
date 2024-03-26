import SectionTitle from "../SectionTitle";
import skills from "./Data/skills";
import { GiSkills } from "react-icons/gi";
export default function Skills() {
  return (
    <div
      className="py-12"
      data-aos="fade-down"
      data-aos-easing="linear"
      data-aos-duration="1500"
    >
      <SectionTitle text={"Expertise"} Icon={GiSkills} />
      <div className="flex flex-col md:flex-row items-center">
        {/* Details of skills */}
        <div className="md:text-left pl-4 md:pr-16 md:w-2/4">
          <p className="text-lg text-gray-500 mb-6 dark:text-gray-200 text-justify">
            My technical skillset is focused on Backend development, with
            comfort in languages like Python, JavaScript, and SQL, alongside
            essential web development tools like HTML, Django, Django REST
            Framework, React, Bootstrap, and Tailwind CSS. I&apos;m also
            well-versed in version control using Git and GitHub, and utilize
            tools like Postman for API testing.
          </p>
          <ul className="list-disc list-inside text-gray-500 dark:text-gray-200">
            <li>Web App Development</li>
            <li>API Development</li>
            <li>Database Development</li>
          </ul>
        </div>
        {/* Skills Icon */}
        <div className="w-full grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 text-center py-8 px-12 sm:px-0 ">
          {skills.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`w-2/3 md:w-full shadow-md hover:scale-105 duration-500 p-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4 dark:text-white text-[12px] md:text-md">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
