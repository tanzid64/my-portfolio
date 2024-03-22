import { TypeAnimation } from "react-type-animation";

const IntroTypeAnimation = () => {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        "I am a Programmer",
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        "I am a Web Developer",
        1000,
        "I am a Django Developer",
        1000,
      ]}
      wrapper="span"
      speed={50}
      className="text-gray-100"
      repeat={Infinity}
    />
  );
};

export default IntroTypeAnimation;
