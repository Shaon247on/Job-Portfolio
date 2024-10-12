import Link from "next/link";
import ThemeSwitcher from "./ThemeSwitcher";
import Button from "./Button";



const NavList = () => {
    return (
        <>
            <div className="flex items-center lg:gap-3 xl:gap-0">
                <Link href="/"><li className="xl:text-xl xl:ml-8 font-medium hover:text-white">Home</li></Link>
                <Link href="/About"><li className="xl:text-xl xl:ml-8 font-medium hover:text-white">About Us</li></Link>
                <Link href="/"><li className="xl:text-xl xl:ml-8 font-medium hover:text-white">Services</li></Link>
                <Link href="/"><li className="xl:text-xl xl:ml-8 font-medium hover:text-white">Projects</li></Link>
                <Link href="/"><li className="xl:text-xl xl:ml-8 font-medium hover:text-white">Testimonials</li></Link>
                <Link href="/"><li className="xl:text-xl xl:ml-8 font-medium hover:text-white">Contact</li></Link>
            </div>
            <div className="flex gap-3 xl:gap-6 xl:ml-3">
                <ThemeSwitcher/>
                <Button text={"Download CV"} />
            </div>
        </>
    );
};

export default NavList;