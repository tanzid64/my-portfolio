import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { contactInfo } from "@/data/data";
import emailjs from "emailjs-com";

const Contact = () => {
  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const { firstName, lastName, email, phone, message } = e.target.elements;

    const serviceID = process.env.EMAILJS_SERVICE_ID;
    const templateID = process.env.EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.EMAILJS_PUBLIC_KEY;

    const emailData = {
      from_name: `${firstName.value} ${lastName.value}`,
      from_email: email.value,
      from_phone: phone.value,
      message: message.value,
    };

    try {
      await emailjs.send(serviceID, templateID, emailData, publicKey);
      e.target.reset();
    } catch (error) {
      console.error(error.text);
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* Form */}
          <div className="xl:h-[54%] order-2 xl:order-none">
            <form
              className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-lg"
              onSubmit={handleOnSubmit}
            >
              <h3 className="text-4xl text-accent">Let's work together</h3>
              {/* Inputs */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  type="text"
                  placeholder="First Name"
                  name="firstName"
                  required
                />
                <Input
                  type="text"
                  placeholder="Last Name"
                  name="lastName"
                  required
                />
                <Input type="email" placeholder="Email" name="email" required />
                <Input
                  type="phone"
                  placeholder="Phone Number"
                  name="phone"
                  required
                />
              </div>
              {/* Text Area */}
              <Textarea
                className="h-[200px]"
                placeholder="Type your message here"
                name="message"
                required
              ></Textarea>
              {/* Button */}
              <Button size="md" className="max-w-40">
                Send Message
              </Button>
            </form>
          </div>
          {/* Info */}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {contactInfo.map((item, index) => {
                return (
                  <li className="flex items-center gap-6" key={index}>
                    <div className="w-[52px] h-[52px] xl:h-[72px] xl:w-[72px] bg-[#27272c] rounded-md text-accent flex items-center justify-center">
                      <div className="text-[28px]">{item.icon}</div>
                    </div>
                    <div className="flex-1">
                      <p className="text-white/60">{item.title}</p>
                      <h3 className="text-xl">{item.description}</h3>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};
export default Contact;
