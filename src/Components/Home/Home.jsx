import Intro from "../Header/Intro";
import Nav from "./SideBar/Nav";

const Home = () => {
  return (
    <section className="flex ">
      <Nav />
      <div className="p-3 text-xl text-gray-900 font-semibold w-full ">
        <Intro className=""/>
      </div>
    </section>
  );
};

export default Home;
