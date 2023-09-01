import Chefs from "./Chefs";
import Contact from "./Contact";
import Counter from "./Counter";
import Features from "./Features";
import Hero from "./Hero";
import KeepOnOpenMind from "./KeepOnOpenMind";
import Location from "./Location";
import Subscrib from "./Subscrib";
import Testimonial from "./Testimonial";

const Home = () => {
  return (
    <>
      <Hero/>
      <Counter className=""></Counter>
      <Chefs/>
      <Features/>
      <Testimonial/>

      <Contact></Contact>
      <KeepOnOpenMind/>
      <Location/>
      <Subscrib/>
      
    </>
  );
};

export default Home;
