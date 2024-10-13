import Banner from "./Components/Banner";
import Footer from "./Components/Footer";
import Project from "./Components/Project";
import Testimonials from "./Components/Testimonials";





export const metadata = {
  title: "Portfolio | Home",
  description: "All section will be here.",
};

export default function Home() {
  return (
    <div className="font-poppins">
      <Banner/>
      <Project />
      <Testimonials />      
    </div>
  );
}
