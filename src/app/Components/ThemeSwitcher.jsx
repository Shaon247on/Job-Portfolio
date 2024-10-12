"use client"

import { useEffect, useState } from "react";
import { FaMoon } from "react-icons/fa";
import { BsSunFill } from "react-icons/bs";



export default function ThemeSwitcher() {
  const [theme, setTheme] = useState(true)

  useEffect(()=>{
    const theme = localStorage.getItem("theme")
    if (theme === "dark") setTheme(true)
  },[])
 
  useEffect(()=>{
    if(theme){
      document.documentElement.classList.add('dark')
      localStorage.setItem("theme", "dark")
    } else{
      document.documentElement.classList.remove('dark')
      localStorage.setItem("theme", "light")
    }
  },[theme])
  return (

    <>

      <div 
      className="relative my-auto w-16 h-8 flex items-center dark:bg-gray-900 bg-[#FD6F00] cursor-pointer rounded-full p-1"
      onClick={()=> setTheme(!theme)}
      >
        <FaMoon  className="text-white
        " size={18}/>
        <div className="absolute bg-white dark:bg-medium w-6 h-6 rounded-full shadow-md transform transition-transform duration-300 px-1"
        style={theme? {left: "2.5px"} : {right:"2.5px"}}>
        </div>
        <BsSunFill className="ml-auto text-[#FD6F00]" size={18}/>
      </div>

      {/* <label className="grid cursor-pointer place-items-center">
        <input         
          type="checkbox"
          value="synthwave"
          className="toggle theme-controller bg-base-content col-span-2 col-start-1 row-start-1" />
        <svg
          className="stroke-base-100 fill-base-100 col-start-1 row-start-1"
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round">
          <circle cx="12" cy="12" r="5" />
          <path
            d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
        </svg>
        <svg
          className="stroke-base-100 fill-base-100 col-start-2 row-start-1"
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
        </svg>
      </label> */}

    </>
  );
}
