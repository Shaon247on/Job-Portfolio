"use client"

import '@/src/app/Components/Style.css';
import 'animate.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import SideMenu from '@/src/app/Components/SideMenu';

import NavList from '@/src/app/Components/NavList';
import Logo from './Logo';
import { useEffect } from 'react';




const NavBarFlot = () => {

    useEffect(() => {
        AOS.init();
    }, []);
    return (
        <>
            <div
                data-aos="fade-down"
                data-aos-delay="50"
                data-aos-duration="500"
                data-aos-easing="ease-in-out"
                data-aos-anchor="#navAnchor"
                className="nav_bar grid grid-cols-1 lg:grid-cols-12 justify-between items-center z-[5] w-full h-[80px] lg:h-[100px] px-[250px]">

                <div className='lg:col-span-2'>
                    <Logo />
                </div>
                <div className="lg:col-span-10 border-2 border-red-700 hidden lg:flex justify-end items-center gap-14">
                    <ul className="flex px-1">
                        <NavList />
                    </ul>
                </div>
                <div className="col-span-1 lg:col-span-0 flex-1 hidden lg:flex flex-row-reverse lg:flex-row justify-between items-center">
                    <SideMenu />
                </div>

            </div>
            <div id="navAnchor" className="absolute right-0 bottom-[0%]"></div>
        </>
    );
};

export default NavBarFlot;