import React, { useState } from 'react';
import Banner1 from "../assets/AboutBanner.jpg";
import Banner2 from "../assets/Banner2.jpg";
import Story from "../assets/Story.jpg";
import About1 from "../assets/About1.jpg";
import { motion } from 'framer-motion';
import { AiOutlineFileProtect} from 'react-icons/ai';
import { GiShinyApple } from 'react-icons/gi';
import { GrUserExpert } from 'react-icons/gr';
import { ImNext, ImPrevious } from 'react-icons/im';
import egg from '../assets/egg.webp'

const About = () => {

    //Temp Trainers Data
    const trainer = [
        {
            photo : egg,
            trainerName : "Trainer 1",
            specialisations : ["Specialisation", "of", "Trainer",],
        },
        {
            photo : egg,
            trainerName : "Trainer 2",
            specialisations : ["Specialisation", "of", "Trainer",],
        },
        {
            photo : egg,
            trainerName : "Trainer 3",
            specialisations : ["Specialisation", "of", "Trainer",],
        },
        {
            photo : egg,
            trainerName : "Trainer 4",
            specialisations : ["Specialisation", "of", "Trainer",],
        },
        {
            photo : egg,
            trainerName : "Trainer 5",
            specialisations : ["Specialisation", "of", "Trainer",],
        },
    ]

    const [currentTrainer, setCurrentTrainer] = useState(0);

    const nextTrainer = () => {
        setCurrentTrainer((prevIndex) =>
            prevIndex + 3 < trainer.length ? prevIndex + 3 : 0
        );
    };

    const prevTrainer = () => {
        setCurrentTrainer((prevIndex) =>
            prevIndex - 3 >= 0 ? prevIndex - 3 : trainer.length - 3
        );
    };
    
    return (
        <div className='flex flex-col bg-[#F8F8F3] pt-[20px]'>
            <div className='py-24'>
                <span className='flex justify-center w-full'>
                    <img src={Banner1} alt="Banner1" />
                </span>
                <span className='flex justify-center'>
                    <img src={Banner2} alt="Banner2" className='w-2/3 -mt-16 md:-mt-32 lg:-mt-48'/>
                </span>
            </div>

            <div className='flex flex-col md:flex-col lg:flex-row p-8 md:p-10 lg:p-20 gap-10 py-20'>
                <div className='flex flex-col w-full md:w-full lg:w-1/2'>
                    <div>
                        <h1 className='text-blue-600 font-semibold text-xl '>W E L C O M E</h1>
                        <h1 className='text-black text-5xl font-extrabold'>The Story Behind <br /> us!</h1>
                        <p className='py-10 text-lg text-gray-600'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                    </div>
                    <div className='bg-gray-200 p-10'>
                        <h1 className='text-black text-3xl font-bold'>Story</h1>
                        <p className='text-lg text-gray-600 font-medium py-5'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.point of using Lorem Ipsum.</p>
                        <img src={Story} alt="StoryImage" className='w-full'/>
                    </div>
                </div>
                <div className='flex flex-col w-full md:w-full lg:w-1/2 gap-10'>
                    <div className='bg-cover bg-center h-2/3 p-10' style={{backgroundImage: `url(${About1})`}}>
                        <h1 className='text-white text-3xl font-bold pt-44'>Our Mission</h1>
                        <p className='text-lg text-white font-medium py-5'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.point of using Lorem Ipsum.</p>
                    </div>
                    <div className=' bg-[#a1f65e] p-10 h-1/3'>
                        <h1 className='text-black text-3xl font-bold'>Our Value</h1>
                        <p className='text-lg text-black font-medium py-5'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.point of using Lorem Ipsum.</p>
                    </div>
                </div>
            </div>

            <div className='py-20'>
                <div  className='w-full md:w-full md:h-96 lg:h-96 relative'>
                    <motion.video initial={{opacity:1}} 
                    transition={{duration:.9,delay:.05}}
                    src="/videos/b_Gym.mp4" className="w-[100%] h-[100%] object-cover" muted loop autoPlay
                    />
                    <h1 className='absolute bottom-28 left-16 md:bottom-36 md:left-44 md:text-7xl lg:bottom-36 lg:left-48 lg:text-9xl font-extrabold outline-text'>OUR FACILITIES</h1>
                </div>
                <div className='py-28 px-12 md:px-24 lg:px-36 w-full bg-gray-900 flex flex-col gap-10'>
                    <div className='h-1/3'>
                        <h1 className='text-[#a1f65e] font-semibold text-lg md:text-xl lg:text-xl'>V A L U E S</h1>
                        <h1 className='text-white text-4xl md:text-5xl lg:text-5xl font-semibold'>My core work values</h1>
                    </div>
                    <div className='flex flex-col md:flex-col lg:flex-row justify-between gap-10 h-2/3'>
                        <div className='bg-gray-100 bg-opacity-10 border border-gray-700 p-10 flex flex-col gap-5'>
                            <AiOutlineFileProtect className='text-5xl text-white '/>
                            <h1 className='text-white text-2xl font-semibold'>Certified Trainer</h1>
                            <p className='text-lg text-white font-light'>Bring to the table win survival strategies ensure proactive new domination.</p>
                        </div>
                        <div className='bg-gray-100 bg-opacity-10 border border-gray-700 p-10 flex flex-col gap-5'>
                            <GiShinyApple className='text-5xl text-white '/>
                            <h1 className='text-white text-2xl font-semibold'>Nutrition & Diet</h1>
                            <p className='text-lg text-white font-light'>Bring to the table win survival strategies ensure proactive new domination.</p>
                        </div>
                        <div className='bg-gray-100 bg-opacity-10 border border-gray-700 p-10 flex flex-col gap-5'>
                            <GrUserExpert className='text-5xl text-white '/>
                            <h1 className='text-white text-2xl font-semibold'>Years of Experience</h1>
                            <p className='text-lg text-white font-light'>Bring to the table win survival strategies ensure proactive new domination.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='flex flex-row px-2 lg:justify-center'>
                <div className='flex flex-col items-center p-4 md:p-6 lg:p-8 w-60 border border-[#1b2129] border-opacity-15'>
                    <h1 className='text-[#1b2129] text-2xl md:text-3xl lg:text-5xl font-bold'>10+</h1>
                    <p className='text-[#1b2129] p-2 px-4 text-xs md:text-sm lg:text-lg'>Year of Experience</p>
                </div>
                <div className='flex flex-col items-center p-4 md:p-6 lg:p-8 w-60 border border-[#1b2129] border-opacity-15'>
                    <h1 className='text-[#1b2129] text-2xl md:text-3xl lg:text-5xl font-bold'>500+</h1>
                    <p className='text-[#1b2129] py-2 text-xs md:text-sm lg:text-lg'>Happy Clients</p>
                </div>
                <div className='flex flex-col items-center p-4 md:p-6 lg:p-8 w-60 border border-[#1b2129] border-opacity-15'>
                    <h1 className='text-[#1b2129] text-2xl md:text-3xl lg:text-5xl font-bold'>50+</h1>
                    <p className='text-[#1b2129] py-2 text-xs md:text-sm lg:text-lg'>Expert Trainers</p>
                </div>
                <div className='flex flex-col items-center p-4 md:p-6 lg:p-8 w-60 border border-[#1b2129] border-opacity-15'>
                    <h1 className='text-[#1b2129] text-2xl md:text-3xl lg:text-5xl font-bold'>15k</h1>
                    <p className='text-[#1b2129] py-2 px-4 text-xs md:text-sm lg:text-lg'>Instagram followers</p>
                </div>
            </div>

            <div className='py-32'>
                <div className='flex flex-col items-center gap-3'>
                    <h1 className='text-blue-700 font-semibold text-md lg:text-xl'>O U R - T R A I N E R S</h1>
                    <h1 className='text-black text-2xl lg:text-4xl font-bold'>We Trained You to Gain</h1>
                </div>
                <div className="flex justify-center lg:justify-end px-32 pt-3 gap-5">
                    <ImPrevious onClick={prevTrainer} className="text-2xl lg:text-4xl text-gray-800 cursor-pointer shadow-md rounded-full"/>
                    <ImNext onClick={nextTrainer} className="text-2xl lg:text-4xl text-gray-800 cursor-pointer shadow-md rounded-full"/>
                </div>
                <div className='px-10 md:px-28 lg:px-32 py-5 md:py-10 lg:py-20 flex flex-col items-center md:flex-col lg:flex-row justify-center gap-16 '>
                    {trainer.slice(currentTrainer, currentTrainer + 3).map((item, index) => (
                        <div key={index} className='w-80'>
                            <img src={item.photo} alt="UserPhoto" className='border-4 border-gray-800 ' />
                            <div className='bg-gray-800 w-full p-8'>
                                <h1 className='text-white font-bold text-2xl'>{item.trainerName}</h1>
                                <hr className='mt-2 p-2 opacity-25' />
                                <h1 className='text-white text-md font-semibold py-2'>Specialisations : </h1>
                                <p className='text-gray-400 text-sm'>{item.specialisations.join(", ")}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default About
