import { Card, Button } from "flowbite-react";

export default function WorkItem({ ...work }) {
  const handlePreviewClick = (e) => {
    e.preventDefault();
    window.location.href = work.live;
  };
  return (
    <a href={work.live} target="_blank">
      <Card
        className="max-w-sm md:w-full bg-slate-300 hover:bg-slate-200 dark:bg-slate-800 rounded-md"
        imgSrc={work.imgUrl}
        imgClass="md:w-full md:object-cover w-1/2"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {work.title}
        </h5>
        <p className="flex gap-2 flex-wrap text-xs md:text-sm">
          {work.tech.map((item) => (
            <span
              key={item}
              className="inline-block px-2 py-1 bg-slate-200 text-gray-900 dark:text-white dark:bg-slate-900 rounded-md"
            >
              {item}
            </span>
          ))}
        </p>

        <div className="flex justify-around">
          <a
            href="https://drive.google.com/file/d/1ZK7vbCvXsejlgVER9_SU3k17tkDtK8wY/view?usp=sharing"
            target="_blank"
            className="border border-green-500 hover:bg-green-500 hover:text-white text-green-500  py-2 px-6 rounded focus:outline-none focus:shadow-outline "
          >
            Details
          </a>
          <a
            href="https://drive.google.com/file/d/1ZK7vbCvXsejlgVER9_SU3k17tkDtK8wY/view?usp=sharing"
            target="_blank"
            className="border border-blue-500 hover:bg-blue-500 hover:text-white text-blue-500  py-2 px-6 rounded focus:outline-none focus:shadow-outline "
          >
            Preview
          </a>
        </div>
      </Card>
    </a>
  );
}
