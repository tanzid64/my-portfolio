import { motion } from "framer-motion";
import { BsArrowDownRight } from "react-icons/bs";
const Services = () => {
  const services = [
    {
      num: "01",
      title: "Front-end Development",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores ducimus rerum minima odit provident corrupti officiis blanditiis vero, deserunt ratione!",
    },
    {
      num: "02",
      title: "Back-end Development",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores ducimus rerum minima odit provident corrupti officiis blanditiis vero, deserunt ratione!",
    },
    {
      num: "03",
      title: "API Development",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores ducimus rerum minima odit provident corrupti officiis blanditiis vero, deserunt ratione!",
    },
  ];
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((item, index) => (
            <div
              className="flex-1 flex flex-col justify-center gap-6 group:"
              key={index}
            >
              {/* Top */}
              <div className="w-full flex justify-between items-center">
                <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover">
                  {item.num}
                </div>
                <BsArrowDownRight />
              </div>
              {/* title */}
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
                {item.title}
              </h2>
              {/* description */}
              <p className="text-white/60">{item.description}</p>
              {/* border */}
              <div className="border-b border-white/20 w-full"></div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
export default Services;
