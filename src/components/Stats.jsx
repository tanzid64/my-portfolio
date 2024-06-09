import CountUp from "react-countup";

const Stats = () => {
  const stats = [
    {
      num: 12,
      text: "Years of experience",
    },
    {
      num: 12,
      text: "Years of experience",
    },
    {
      num: 26,
      text: "Projects completed",
    },
    {
      num: 500,
      text: "Code commits",
    },
  ];
  return (
    <section className="pt-4 pb-12 xl:pt-0 xl:pb-0">
      <div className="container mx-auto">
        <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none">
          {stats.map((item, index) => (
            <div
              className="flex-1 flex gap-4 items-center justify-center xl:justify-start"
              key={index}
            >
              <CountUp
                start={0}
                end={item.num}
                duration={5}
                separator=","
                className="text-4xl xl:text-6xl font-extrabold"
              />
              <p
                className={`${
                  item.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"
                } leading-sung text-white/80`}
              >
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Stats;
