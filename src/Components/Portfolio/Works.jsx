import WorkItem from "./WorkItem";
import works from "./Data/works";
import SectionTitle from "../SectionTitle";
import { GoProjectSymlink } from "react-icons/go";

export default function Works() {
  return (
    <div className="py-12">
      <SectionTitle text={"Portfolio"} Icon={GoProjectSymlink} />

      <div className="flex flex-col md:flex-row md:gap-48 gap-28 justify-center items-center flex-wrap text-center">
        {works.map((work, index) => (
          <div key={index} className="">
            <WorkItem {...work} />
          </div>
        ))}
      </div>
    </div>
  );
}
