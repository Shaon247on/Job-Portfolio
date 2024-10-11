import Link from "next/link";
import ThemeSwitcher from "./ThemeSwitcher";



const NavList = () => {
    return (
        <>
            <div className="flex items-center mr-6">
                <Link href="/"><li className="text-xl ml-8 font-medium hover:text-white">Home</li></Link>
                <Link href="/"><li className="text-xl ml-8 font-medium hover:text-white">About Us</li></Link>
                <Link href="/"><li className="text-xl ml-8 font-medium hover:text-white">Services</li></Link>
                <Link href="/"><li className="text-xl ml-8 font-medium hover:text-white">Projects</li></Link>
                <Link href="/"><li className="text-xl ml-8 font-medium hover:text-white">Testimonials</li></Link>
                <Link href="/"><li className="text-xl ml-8 font-medium hover:text-white">Contact</li></Link>
            </div>
            <div className="flex gap-6">
                <ThemeSwitcher/>
                <button className="p-[18px] bg-[#FD6F00] rounded-lg">Downlaod CV</button>
            </div>
        </>
    );
};

export default NavList;