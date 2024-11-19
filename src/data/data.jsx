// Work Data
export const projects = [
  {
    num: "01",
    category: "Full Stack",
    title: "PDFCraft",
    description:
      "A saas application where user can chat with PDFs with the help of open AI",
    stack: [
      { name: "Next JS" },
      { name: "Tailwind CSS" },
      { name: "Shadcn UI" },
      { name: "Open AI" },
      { name: "Prisma" },
      { name: "Tanstack Query" },
      { name: "zod" },
    ],
    image:
      "https://res.cloudinary.com/djwpnwfs8/image/upload/v1732025546/my-portfolio/project-photo/pdf-craft-dashboard.jpg",
    live: "https://pdf-craft.vercel.app/",
    github: "https://github.com/tanzid64/pdf-craft.git",
  },
  {
    num: "02",
    category: "Full Stack",
    title: "PingPanda",
    description:
      "A saas application where user can track their business events and get notification in Discord",
    stack: [
      { name: "Next JS" },
      { name: "Tailwind CSS" },
      { name: "Shadcn UI" },
      { name: "Prisma" },
      { name: "Tanstack Query" },
      { name: "zod" },
      { name: "Discord" },
    ],
    image:
      "https://res.cloudinary.com/djwpnwfs8/image/upload/v1732025956/my-portfolio/project-photo/pingpanda-landing-page.png",
    live: "https://ping-panda-tau.vercel.app/",
    github: "https://github.com/tanzid64/ping-panda.git",
  },
  {
    num: "03",
    category: "Full Stack",
    title: "Bindu Blood Bank",
    description:
      "A blood donation web application using React JS for front-end development and Django REST framework for back-end development.",
    stack: [
      { name: "Tailwind CSS" },
      { name: "React JS" },
      { name: "Redux" },
      { name: "Django REST Framework" },
    ],
    image:
      "https://res.cloudinary.com/djwpnwfs8/image/upload/v1717965856/my-portfolio/project-photo/bindu_blood_bank_portfolio.png",
    live: "https://bindu-blood-bank.vercel.app/",
    github: "https://github.com/tanzid64/Bindu-Blood-Bank/tree/main/frontend",
  },
  {
    num: "04",
    category: "Full Stack",
    title: "Jobify",
    description: "A job portal using MERN Stack",
    stack: [{ name: "MERN" }, { name: "Cloudinary" }],
    image:
      "https://res.cloudinary.com/djwpnwfs8/image/upload/v1717966691/my-portfolio/project-photo/jobify_portfolio.png",
    live: "https://jobify-tanzid64.vercel.app/",
    github: "https://github.com/tanzid64/jobify",
  },
];

// Service Page Data
export const services = [
  {
    num: "01",
    title: "Front-end Development",
    description:
      "Crafting beautiful and responsive interfaces is my passion. With expertise in HTML5, CSS3, and JavaScript, I design visually appealing, user-friendly websites that work flawlessly across all devices. Whether it's a static landing page or a dynamic web application, I ensure a seamless user experience that keeps your audience engaged.",
  },
  {
    num: "02",
    title: "Back-end Development",
    description:
      "Behind every great website is a robust backend. I specialize in building scalable, secure, and high-performance server-side applications using Node.js and Express. From user authentication and database management to complex business logic, I ensure that your website's backend operates smoothly and efficiently.",
  },
  {
    num: "03",
    title: "Saas Development",
    description:
      "Bringing innovative ideas to life through scalable, cloud-based solutions is my expertise. I specialize in building Software as a Service (SaaS) platforms that deliver exceptional user experiences and streamline workflows. From multi-tenancy architecture to secure data management and seamless integrations, I create robust solutions that adapt to your business needs and empower your growth.",
  },
  {
    num: "04",
    title: "API Development",
    description:
      "Efficient data management and integration are crucial for modern web applications. I develop RESTful APIs that provide seamless communication between the frontend and backend. By ensuring efficient data retrieval and manipulation, I enable your website to handle complex functionalities and scale effortlessly as your needs grow.",
  },
];

// Contact Page
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
export const contactInfo = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "(+880) 17089-15045",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "tanzid3@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    description: "RainKhola Bazar, Mirpur-1, Dhaka",
  },
];
