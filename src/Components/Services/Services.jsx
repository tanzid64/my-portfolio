import SectionTitle from "../SectionTitle";
import services from "./Data/services";
import ServiceItem from "./ServiceItem";
import { GrServices } from "react-icons/gr";

export default function Services() {
  return (
    <div
      className="py-12"
      data-aos="fade-left"
      data-aos-easing="linear"
      data-aos-duration="1500"
    >
      <SectionTitle text={"Services"} Icon={GrServices} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {services.map((service, index) => (
          <ServiceItem key={index} {...service} />
        ))}
      </div>
    </div>
  );
}
