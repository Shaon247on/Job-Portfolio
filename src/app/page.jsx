import Banner from "./Components/Banner";
import Contact from "./Components/Contact";
import Project from "./Components/Project";
import Services from "./Components/Services";
import Testimonials from "./Components/Testimonials";





export const metadata = {
  title: "Portfolio | Home",
  description: "All section will be here.",
};

export default function Home() {
  return (
    <>
       
      <div className="font-poppins">
        <Banner />
        <Services />
        <Project />
        <Testimonials />
        <Contact />
      </div>
    </>
  );
}
