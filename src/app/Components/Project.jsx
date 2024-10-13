"use client"
import { useState, useEffect } from "react";
import TabContent from "./TabContent";
import tab1 from '@/public/Project-1.png';
import tab2 from '@/public/Project-2.png';
import tab3 from '@/public/Project-3.png';
import tab4 from '@/public/Project-1.png';
import tab5 from '@/public/Project-2.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import Image from "next/image";

const Project = () => {
    const [projects, setProjects] = useState([])
    const [toggle, setToggle] = useState(1)

    useEffect(() => {
        const getData = async () => {
            const query = await fetch("https://job-portfolio-dun.vercel.app/api/data")
            const response = await query.json()
            setProjects(response)
        }
        getData()
    }, [])

    const uiData = projects.filter(project => project.Category === "UI/UX")
    const webData = projects.filter(project => project.Category === "Web Design")
    const appData = projects.filter(project => project.Category === "App Design")
    const graphicData = projects.filter(project => project.Category === "Graphic Design")
    return (
        <div role="tablist" className="mb-36">   

            <div className="flex items-center gap-4 lg:gap-8 overflow-scroll md:overflow-x-auto justify-start md:justify-center">
                <button onClick={() => setToggle(1)} className={`px-5 py-3 text-center text-base lg:text-2xl font-semibold rounded-lg ${toggle === 1 ? "text-white" : "text-black"} ${toggle === 1 ? "bg-primary" : "bg-[#F8F8F8]"}`}>All</button>
                <button onClick={() => setToggle(2)} className={`px-5 py-3 text-center text-base lg:text-2xl font-semibold rounded-lg ${toggle === 2 ? "text-white" : "text-black"} ${toggle === 2 ? "bg-primary" : "bg-[#F8F8F8]"}`}>UI/UX</button>
                <button onClick={() => setToggle(3)} className={`px-5 py-3 text-center text-base lg:text-2xl font-semibold rounded-lg ${toggle === 3 ? "text-white" : "text-black"} ${toggle === 3 ? "bg-primary" : "bg-[#F8F8F8]"}`}>Web Design</button>
                <button onClick={() => setToggle(4)} className={`px-5 py-3 text-center text-base lg:text-2xl font-semibold rounded-lg ${toggle === 4 ? "text-white" : "text-black"} ${toggle === 4 ? "bg-primary" : "bg-[#F8F8F8]"}`}>App Design</button>
                <button onClick={() => setToggle(5)} className={`px-5 py-3 text-center text-base lg:text-2xl font-semibold rounded-lg ${toggle === 5 ? "text-white" : "text-black"} ${toggle === 5 ? "bg-primary" : "bg-[#F8F8F8]"}`}>Graphic Design</button>
            </div>

            <div>
                <div className={`${toggle !== 1 ? "hidden" : "block"} mt-24 grid gap-11 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full font-semibold text-2xl  `}>
                    {
                        projects && projects.length && projects.map((project, index) =>

                            <div key={index} className="col-span-1">
                                <div className="bg-[#FFEBDB] rounded-2xl h-[489px] flex items-end justify-center overflow-hidden">
                                    <Image src={project.Image} width={345} height={301} alt={`image-${index}`} />
                                </div>
                                <div className="text-start">
                                    <h3 className="text-[1.188rem] text-primary mt-[47px] mb-[11px]">{project.Category}</h3>
                                    <h1>{project.Name}</h1>
                                </div>
                            </div>
                        )
                    }
                </div>
                <div className={`${toggle !== 2 ? "hidden" : "block"} mt-24 grid gap-11 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full font-semibold text-2xl  `}>
                    {
                        uiData && uiData.length && uiData.map((project, index) =>

                            <div key={index} className="col-span-1">
                                <div className="bg-[#FFEBDB] rounded-2xl h-[489px] flex items-end justify-center overflow-hidden">
                                    <Image src={project.Image} width={345} height={301} alt={`image-${index}`} />
                                </div>
                                <div className="text-start">
                                    <h3 className="text-[1.188rem] text-primary mt-[47px] mb-[11px]">{project.Category}</h3>
                                    <h1>{project.Name}</h1>
                                </div>
                            </div>
                        )
                    }
                </div>
                <div className={`${toggle !== 3 ? "hidden" : "block"} mt-24 grid gap-11 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full font-semibold text-2xl  `}>
                    {
                        webData && webData.length && webData.map((project, index) =>

                            <div key={index} className="col-span-1">
                                <div className="bg-[#FFEBDB] rounded-2xl h-[489px] flex items-end justify-center overflow-hidden">
                                    <Image src={project.Image} width={345} height={301} alt={`image-${index}`} />
                                </div>
                                <div className="text-start">
                                    <h3 className="text-[1.188rem] text-primary mt-[47px] mb-[11px]">{project.Category}</h3>
                                    <h1>{project.Name}</h1>
                                </div>
                            </div>
                        )
                    }
                </div>
                <div className={`${toggle !== 4 ? "hidden" : "block"} mt-24 grid gap-11 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full font-semibold text-2xl  `}>
                    {
                        appData && appData.length && appData.map((project, index) =>

                            <div key={index} className="col-span-1">
                                <div className="bg-[#FFEBDB] rounded-2xl h-[489px] flex items-end justify-center overflow-hidden">
                                    <Image src={project.Image} width={345} height={301} alt={`image-${index}`} />
                                </div>
                                <div className="text-start">
                                    <h3 className="text-[1.188rem] text-primary mt-[47px] mb-[11px]">{project.Category}</h3>
                                    <h1>{project.Name}</h1>
                                </div>
                            </div>
                        )
                    }
                </div>
                <div className={`${toggle !== 5 ? "hidden" : "block"} mt-24 grid gap-11 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full font-semibold text-2xl  `}>
                    {
                        graphicData && graphicData.length && graphicData.map((project, index) =>

                            <div key={index} className="col-span-1">
                                <div className="bg-[#FFEBDB] rounded-2xl h-[489px] flex items-end justify-center overflow-hidden">
                                    <Image src={project.Image} width={345} height={301} alt={`image-${index}`} />
                                </div>
                                <div className="text-start">
                                    <h3 className="text-[1.188rem] text-primary mt-[47px] mb-[11px]">{project.Category}</h3>
                                    <h1>{project.Name}</h1>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default Project;