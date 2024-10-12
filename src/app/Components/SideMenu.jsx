"use client"
import { RiMenu5Line } from "react-icons/ri";
import { useState } from "react";
// import Logo from "./Logo";
import SideMenuList from "@/src/app/Components/SideMenuList";
import Button from "./Button";
import ThemeSwitcher from "./ThemeSwitcher";

const SideMenu = () => {
    const [toggle, setToggle] = useState(false)
    console.log(toggle);  
     
    return (
        <>
            <button onClick={() => setToggle(true)} className="mr-4 text-2xl block lg:hidden"><RiMenu5Line /></button>
            <div className={` absolute top-[0px] w-full animate__animated my-element block lg:hidden bg-white dark:bg-[#1E1E1E] ${toggle ? 'animate__slideInLeft' : "animate__slideOutLeft"} overflow-y-auto md:-mr-10 pb-8 h-[100vh] z-[100]`} >
                <div className="flex justify-between items-start">
                    <div>                       
                        <SideMenuList/>
                       
                    </div>
                    <button onClick={() => setToggle(false)} className="text-black text-lg pt-8 pr-16">X</button>
                </div>
                <div className="flex gap-7 flex-col w-[85%] mt-3 mx-2 md:mx-auto">
                    <ThemeSwitcher/>
                    <Button text="Download CV"/>
                </div>
            </div>
        </>
    );
};

export default SideMenu;