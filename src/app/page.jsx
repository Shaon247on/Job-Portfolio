import Banner from "./Components/Banner";
import Slider from "./Components/Slider";




export const metadata = {
  title: "Portfolio | Home",
  description: "All section will be here.",
};

export default function Home() {
  return (
    <div className=" font-poppins">
      <Banner/>
      <Slider />
    </div>
  );
}
