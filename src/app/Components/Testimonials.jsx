
import Slider from './Slider';
import Title from './Title';


export const metadata = {
    title: "Portfolio | Testimonial",
    description: "All customers reviews are here.",
};



const Testimonials= () => {
    return (
        <div>
            <Title tittle='Testimonials' subtitle='Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium'/>
            <Slider />
        </div>
    );
};

export default Testimonials;