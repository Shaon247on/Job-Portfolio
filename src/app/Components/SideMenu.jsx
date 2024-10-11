"use client"
import { RiMenu5Line } from "react-icons/ri";
import { useState } from "react";
// import Logo from "./Logo";
import SideMenuList from "@/src/app/Components/SideMenuList";

const SideMenu = () => {
    const [toggle, setToggle] = useState(false)
    console.log(toggle);  
     
    return (
        <>
            <button onClick={() => setToggle(true)} className="mr-4 text-2xl block lg:hidden"><RiMenu5Line /></button>
            <div className={` absolute top-[0px] w-full animate__animated my-element block lg:hidden bg-[#121a2b] ${toggle ? 'animate__slideInLeft' : "animate__slideOutLeft"} overflow-y-scroll pb-8 h-[100vh]`} >
                <div className="flex justify-between items-start">
                    <div>                       
                        <SideMenuList/>
                       
                    </div>
                    <button onClick={() => setToggle(false)} className="text-white text-lg pt-8 pr-6">X</button>
                </div>
                <div className="flex gap-7 flex-col w-full mt-3 mx-2 md:mx-5">
                    <button className="text-xl w-[95%]">Login</button>
                    <button className="px-6 py-3 w-[95%] border-2 border-[#2d9f89] text-[#2d9f89] rounded-md text-xl">Sign Up</button>
                </div>
            </div>
        </>
    );
};

export default SideMenu;