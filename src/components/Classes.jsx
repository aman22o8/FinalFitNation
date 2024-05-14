
import React, { useEffect } from 'react';
import { easeInOut, motion } from 'framer-motion'


const Classes = () => {
    useEffect(() => {
        const projectAnimation = () => {
            const container = document.querySelector(".elem-container");
            const fixed = document.querySelector(".fixed-image");

            const handleMouseEnter = () => {
                fixed.classList.remove("hidden");
                fixed.classList.add("block");
            };

            const handleMouseLeave = () => {
                fixed.classList.remove("block");
                fixed.classList.add("hidden");
            };

            const handleElemMouseEnter = (e) => {
                const image = e.getAttribute("data-image");
                fixed.style.backgroundImage = `url("${image}")`;
            };

            container.addEventListener("mouseenter", handleMouseEnter);
            container.addEventListener("mouseleave", handleMouseLeave);

            const elems = document.querySelectorAll(".elem");
            elems.forEach((e) => {
                e.addEventListener("mouseenter", () => handleElemMouseEnter(e));
            });

            // Cleanup event listeners on unmount
            return () => {
                container.removeEventListener("mouseenter", handleMouseEnter);
                container.removeEventListener("mouseleave", handleMouseLeave);
                elems.forEach((e) => {
                    e.removeEventListener("mouseenter", handleElemMouseEnter);
                });
            };
        };

        projectAnimation();
    }, []);

    const projects = [
        {
            name: "Yoga",
            image: "https://assets-global.website-files.com/64d3dd9edfb41666c35b15d4/64d3dd9edfb41666c35b1644_Copy%20of%20DSC04084.webp"
        },
        {
            name: "Mind Body",
            image: "https://assets-global.website-files.com/64d3dd9edfb41666c35b15d4/64d3dd9edfb41666c35b16f5_Copy%20of%20Nike_Soho_50th_SU22_FL1_6252.webp"
        },
        {
            name: "Body Shape",
            image: "https://assets-global.website-files.com/64d3dd9edfb41666c35b15d4/64d3dd9edfb41666c35b16cb_Copy%20of%20Nike_Soho_AMD21_0772_LORES.webp"
        },
        {
            name: "Dance Mix",
            image: "https://assets-global.website-files.com/64d3dd9edfb41666c35b15d4/64d3dd9edfb41666c35b1732_Nike_HOI_50th_SU22_FL1_5393.webp"
        },

    ];


    return (
        <div className="w-full min-h-[150vh] class_image ">

            <section className="h-4/5  w-full relative pb-10 bg-inherit  " id="projectSection">
                <div className="border-t-2 border-white flex items-center py-0 px-8">
                    <p className="text-uppercase font-light text-lg w-full inline-block text-right">featured projects</p>
                </div>
                {/* main bug */}
                <div className='flex justify-center items-center gap-6 h-[140vh]'>
                    <div className=" group bg-inherit w-1/4 h-[60vh] rounded-md border-2  z-30 absolute left-20 top-20 fixed-image  "></div>
                    <ul className="elem-container w-7/12 top-[30px] absolute bg-transparent right-0  ">
                        <p className='text-lg text-white mb-4 ml-10'>Online Classes</p>
                        {projects.map((project, index) => (
                            <li key={index} className="elem border-b-2 border-white" data-image={project.image}>
                                <div className="overlay absolute h-full w-full bg-orange-500 top-[-100%] left-0 transition-all duration-300 group-hover:top-5"></div>
                                <a href="#" className="text-4xl font-semibold text-white z-10 w-full group-hover:underline">
                                    {project.name}
                                </a>
                                <div className=' mx-auto w-full flex  justify-between class_details'>
                                    <span className='text-center '>
                                        <p className='text-xl font-medium text-gray-600 '>GOAL</p>
                                        <p className='text-xl font-medium text-white '>Fit</p>
                                    </span>
                                    <span className='text-center'>
                                        <p className='text-xl font-medium text-gray-600 '>GOAL</p>
                                        <p className='text-xl font-medium text-white '>Fit</p>
                                    </span>
                                    <span className='text-center'>
                                        <p className='text-xl font-medium text-gray-600 '>GOAL</p>
                                        <p className='text-xl font-medium text-white '>Fit</p>
                                    </span>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>

            </section>
        </div>


    );
};

export default Classes;


