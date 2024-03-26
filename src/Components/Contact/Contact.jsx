import { GrContact } from "react-icons/gr";

import { MdAttachEmail } from "react-icons/md";
import { HiDevicePhoneMobile } from "react-icons/hi2";
import SectionTitle from "../SectionTitle";
export default function Contact() {
  return (
    <>
      <p id="contact" className=" items-center text-xl text-gray-600">
        <SectionTitle text={"Contact Me"} Icon={GrContact} />
      </p>
      <div className="md:flex md:flex-row flex-col items-center justify-between gap-80">
        {/* ---------------Email and Phone----------------- */}
        <div
          className="w-full md:w-1/2 px-8 mb-8 md:mb-0 md:border-l-2 border-gray-400"
          data-aos="fade-right"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          <p className="text-lgtext-gray-600 dark:text-gray-200 mb-8">
            Just give me a message whenever and however you want and we will
            start our cooperation.
          </p>
          <h2 className="text-lg text-gray-600 dark:text-gray-200">EMAIL: </h2>
          <div className="flex items-center space-x-2 mb-4">
            <MdAttachEmail className="text-md text-gray-600 dark:text-gray-200" />
            <span className="text-gray-600 dark:text-gray-200">
              tanzid@inbox.ru
            </span>
          </div>
          <h2 className="text-lg text-gray-600 dark:text-gray-200">
            MY PHONE:
          </h2>
          <div className="flex items-center space-x-2">
            <HiDevicePhoneMobile className="text-md text-gray-600 dark:text-gray-200" />
            <span className="text-gray-600 dark:text-gray-200">
              (+880) 17089-15045
            </span>
          </div>
        </div>

        {/* ------------Contact Form---------------- */}
        <div
          className="w-full md:w-1/2 px-8 md:border-l-2 border-gray-400"
          data-aos="fade-left"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          <form
            className="space-y-4 md:pt-6"
            action="https://formspree.io/f/mwkgnvwk"
            method="POST"
          >
            <div className="relative z-0">
              <input
                type="text"
                id="name"
                name="name"
                className="block py-2.5 pl-2 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
              />
              <label
                htmlFor="name"
                className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
              >
                Name
              </label>
            </div>
            <div className="relative z-0">
              <input
                type="email"
                id="email"
                name="email"
                className="block py-2.5 pl-2 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
              />
              <label
                htmlFor="email"
                className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
              >
                Email
              </label>
            </div>
            <div className="relative z-0">
              <textarea
                id="message"
                name="message"
                rows="4"
                className="block py-2.5 pl-2 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
              />
              <label
                htmlFor="message"
                className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
              >
                Your message
              </label>
            </div>
            <div className="flex justify-end">
              <button
                type="submit"
                className="border border-blue-500 hover:bg-blue-500 hover:text-white text-blue-500  py-1 px-8 rounded focus:outline-none focus:shadow-outline"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
