import Logo from './Logo';
import NavList from './NavList';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="footer footer-center h-[17rem] md:h-[20rem] xl:h-[34.5rem] bg-[#F8F8F8] dark:bg-[#1E1E1E] text-black dark:text-white rounded">
            <div className='mt-10'>
                <Logo />
            </div>
            <NavList button={false} />
            <nav className=''>
                <div className='flex items-center justify-between  w-[11rem] h-[3.063rem] '>
                    <FaFacebook className='w-[1.5rem] lg:w-[1.5rem] xl:w-[2.063rem] h-full lg:h-[1.5rem] xl:h-[2.063rem]' />
                    <FaTwitter className='w-[1.5rem] lg:w-[1.5rem] xl:w-[2.063rem] h-full lg:h-[1.5rem] xl:h-[2.063rem]' />
                    <FaInstagram className='w-[1.5rem] lg:w-[1.5rem] xl:w-[2.063rem] h-full lg:h-[1.5rem] xl:h-[2.063rem]' />
                    <FaLinkedin className='w-[1.5rem] lg:w-[1.5rem] xl:w-[2.063rem] h-full lg:h-[1.5rem] xl:h-[2.063rem]' />
                </div>
            </nav>
            <aside className='bg-[#545454] dark:bg-black w-full md:h-[2.5rem] lg:h-[3.5rem] xl:h-[5.25rem]'>
                <p>Copyright © {new Date().getFullYear()} - All right reserved by ACME Industries Ltd</p>
            </aside>
        </footer>
    );
};

export default Footer;