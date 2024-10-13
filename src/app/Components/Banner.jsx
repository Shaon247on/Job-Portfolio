import About from './About';
import Introduction from './Introduction';

export const metadata = {
    title: "Portfolio | Banner",
    description: "Developer Identity Lies Here.",
  };

const Banner = () => {

    return (
        <div>
             <Introduction />
            <About />          
        </div>
    );
};

export default Banner;