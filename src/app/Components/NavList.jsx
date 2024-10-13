"use client"
import { Link as ScrollLink } from 'react-scroll';
import ThemeSwitcher from "./ThemeSwitcher";
import Button from "./Button";



const NavList = () => {
    return (
        <>
            <div className="flex items-center lg:gap-3 xl:gap-0">
                <ScrollLink                    
                    href="/"><li className="xl:text-xl xl:ml-8 font-medium hover:text-white">Home</li></ScrollLink>
                <ScrollLink
                    to="about"
                    smooth={true}
                    duration={400}
                    offset={-50}                    
                    ><li className="xl:text-xl xl:ml-8 font-medium hover:text-white">About Us</li></ScrollLink>
                <ScrollLink
                    to="section1"
                    smooth={true}
                    duration={400}
                    offset={-50}
                    href="/"><li className="xl:text-xl xl:ml-8 font-medium hover:text-white">Services</li></ScrollLink>
                <ScrollLink
                    to="section1"
                    smooth={true}
                    duration={400}
                    offset={-50}
                    href="/"><li className="xl:text-xl xl:ml-8 font-medium hover:text-white">Projects</li></ScrollLink>
                <ScrollLink
                    to="Testimonials"
                    smooth={true}
                    duration={400}
                    offset={-50}
                    href="/"><li className="xl:text-xl xl:ml-8 font-medium hover:text-white">Testimonials</li></ScrollLink>
                <ScrollLink
                    to="section1"
                    smooth={true}
                    duration={400}
                    offset={-50}
                    href="/"><li className="xl:text-xl xl:ml-8 font-medium hover:text-white">Contact</li></ScrollLink>
            </div>
            <div className="flex gap-3 xl:gap-6 xl:ml-3">
                <ThemeSwitcher />
                <Button text={"Download CV"} />
            </div>
        </>
    );
};

export default NavList;