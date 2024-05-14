import React, { useState } from 'react';
import { AiFillTwitterCircle } from 'react-icons/ai';
import { FaLocationDot, FaSquareInstagram } from 'react-icons/fa6';
import { IoMailOutline } from 'react-icons/io5';
import { MdFacebook, MdOutlineWifiCalling3 } from 'react-icons/md';
import SemiCircle from '../assets/SemiCircle.jpg';
import { Link } from 'react-router-dom';
import { RiMessage2Line, RiUserLine } from 'react-icons/ri';
import { IoMdCall, IoMdMail } from 'react-icons/io';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const initialFormData = {
    firstName: '',
    lastName: '',
    mobileNumber: '',
    email: '',
    message: '',
    generalInquiry1: false,
    generalInquiry2: false,
    generalInquiry3: false,
    generalInquiry4: false,
};

const Contact = () => {
    const [formData, setFormData] = useState(initialFormData);

    function changeHandler(event) {
        const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
        setFormData((prevData) => ({
            ...prevData,
            [event.target.name]: value,
        }));
    }

    function submitHandler(event) {
        event.preventDefault();
        console.log('Profile Form Data: ', formData);
        toast.success('Submitteed successfully!');
        setFormData(initialFormData);
    }

    return (
        <div className='bg-[#F8F8F3] py-24 pt-[110px]'>
            <ToastContainer />
            <div className='flex flex-col items-center'>
                <h1 className='text-2xl md:text-4xl lg:text-6xl font-bold'>Contact Us</h1>
                <span className='flex flex-col md:flex-row md:gap-2 lg:gap-2 text-xl md:text-2xl lg:text-3xl text-gray-500 p-4'>
                    <p>Any question or remarks?</p>
                    <p>Just write us a message!</p>
                </span>
            </div>
            <div className='px-10 py-10 md:py-10 lg:py-16 md:p-16 lg:px-24'>
                <div className='bg-white rounded-md p-3 shadow-lg flex flex-col md:flex-col lg:flex-row'>
                    <div className='bg-black rounded-md w-full md:w-full lg:w-2/5 p-8 relative'>
                        <div>
                            <h1 className='text-4xl font-semibold text-white'>Contact Information</h1>
                            <p className='text-2xl font-light py-3 text-gray-100'>Just drop a message for us!</p>
                        </div>
                        <div className='py-24 flex flex-col gap-3'>
                            <span className='flex flex-row items-center gap-12'>
                                <MdOutlineWifiCalling3 className='text-orange-600 text-3xl' />
                                <p className='text-xl font-light py-3 text-gray-100'>+91-12345-67890</p>
                            </span>
                            <span className='flex flex-row items-center gap-12'>
                                <IoMailOutline className='text-orange-600 text-3xl' />
                                <p className='text-xl font-light py-3 text-gray-100'>abc@gmail.com</p>
                            </span>
                            <span className='flex flex-row items-center gap-12'>
                                <FaLocationDot className='text-orange-600 text-3xl' />
                                <p className='text-xl font-light py-3 text-gray-100'>Upskill mafia campus</p>
                            </span>
                        </div>
                        <div className='flex flex-row gap-5'>
                            <Link to='https://www.facebook.com/'>
                                <MdFacebook className='text-gray-200 opacity-80 text-4xl hover:text-orange-500' />
                            </Link>
                            <Link to='https://twitter.com/?lang=en'>
                                <AiFillTwitterCircle className='text-gray-200 opacity-80 text-4xl hover:text-orange-500' />
                            </Link>
                            <Link to='https://www.instagram.com/'>
                                <FaSquareInstagram className='text-gray-200 opacity-80 text-4xl hover:text-orange-500' />
                            </Link>
                        </div>
                        <div>
                            <img src={SemiCircle} alt='' className='w-28 md:w-32 lg:w-32 absolute bottom-0 right-0' />
                            <div
                                className='p-18 bg-orange-500 opacity-50 rounded-full w-20 h-20 md:w-28 md:h-28 lg:w-24 lg:h-24 absolute bottom-14 right-14 '
                            ></div>
                        </div>
                    </div>

                    <div className='p-10 w-full lg:w-3/5 flex flex-col gap-10'>
                        <div className='flex flex-col md:flex-row lg:flex-row gap-10'>
                            <label className='w-full lg:w-1/2'>
                                <div className='flex flex-row font-bold ml-2'>
                                    <RiUserLine className='text-black mr-2 mt-1' />
                                    <p className='text-black mb-1 leading-[1.375rem]'>First Name</p>
                                    <sup className='text-red-500 mt-4 ml-1'>*</sup>
                                </div>
                                <input
                                    required
                                    type='text'
                                    name='firstName'
                                    onChange={changeHandler}
                                    placeholder='Enter First Name'
                                    value={formData.firstName}
                                    className='text-white::placeholder placeholder-gray-500 text-black outline-none rounded-[0.5rem]  w-full p-[12px] bg-transparent border-b border-gray-500 focus:border-orange-500'
                                />
                            </label>

                            <label className='w-full lg:w-1/2'>
                                <div className='flex flex-row font-bold ml-2'>
                                    <RiUserLine className='text-black mr-2 mt-1' />
                                    <p className='text-black mb-1 leading-[1.375rem]'>Last Name</p>
                                    <sup className='text-red-500 mt-4 ml-1'>*</sup>
                                </div>
                                <input
                                    required
                                    type='text'
                                    name='lastName'
                                    onChange={changeHandler}
                                    placeholder='Enter Last Name'
                                    value={formData.lastName}
                                    className='placeholder-gray-500 text-black outline-none rounded-[0.5rem]  w-full p-[12px] bg-transparent border-b border-gray-500 focus:border-orange-500'
                                />
                            </label>
                        </div>
                        <div className='flex flex-col md:flex-row lg:flex-row gap-10'>
                            <label className='w-full'>
                                <div className='flex flex-row font-bold ml-2'>
                                    <IoMdCall className='text-black mr-2 mt-1' />
                                    <p className='text-black mb-1 leading-[1.375rem]'>Mobile Number</p>
                                    <sup className='text-red-500 mt-4 ml-1'>*</sup>
                                </div>
                                <input
                                    required
                                    type='tel'
                                    name='mobileNumber'
                                    minLength={10}
                                    maxLength={10}
                                    onChange={changeHandler}
                                    placeholder='Enter Mobile Number'
                                    value={formData.mobileNumber}
                                    className='text-white::placeholder placeholder-gray-500 text-black outline-none rounded-[0.5rem]  w-full p-[12px] bg-transparent border-b border-gray-500 focus:border-orange-500'
                                />
                            </label>

                            <label className='w-full'>
                                <div className='flex flex-row font-bold ml-2'>
                                    <IoMdMail className='text-black mr-2 mt-1' />
                                    <p className='text-black mb-1 leading-[1.375rem]'>Email Address</p>
                                    <sup className='text-red-500 mt-4 ml-1'>*</sup>
                                </div>
                                <input
                                    required
                                    type='email'
                                    name='email'
                                    onChange={changeHandler}
                                    placeholder='Enter Email Address '
                                    value={formData.email}
                                    className='rounded-[0.5rem] placeholder-gray-500 text-black outline-none w-full p-[12px] bg-transparent border-b border-gray-500 focus:border-orange-500'
                                />
                            </label>
                        </div>

                        <div className='flex flex-col gap-4'>
                            <h1 className='text-xl font-bold text-black'>Select Subject?</h1>
                            <div className='flex flex-col lg:flex-row gap-4'>
                                <div className='flex flex-row gap-4'>
                                    <label className='flex items-center gap-1'>
                                        <input
                                            type='checkbox'
                                            name='generalInquiry1'
                                            checked={formData.generalInquiry1}
                                            onChange={changeHandler}
                                            className='form-checkbox h-4 w-4 text-orange-600'
                                        />
                                        <span className='text-black'>General Inquiry</span>
                                    </label>
                                    <label className='flex items-center gap-2'>
                                        <input
                                            type='checkbox'
                                            name='generalInquiry2'
                                            checked={formData.generalInquiry2}
                                            onChange={changeHandler}
                                            className='form-checkbox h-4 w-4 text-orange-600'
                                        />
                                        <span className='text-black'>General Inquiry</span>
                                    </label>
                                </div>
                                <div className='flex flex-row gap-4'>
                                    <label className='flex items-center gap-2'>
                                        <input
                                            type='checkbox'
                                            name='generalInquiry3'
                                            checked={formData.generalInquiry3}
                                            onChange={changeHandler}
                                            className='form-checkbox h-4 w-4 text-orange-600'
                                        />
                                        <span className='text-black'>General Inquiry</span>
                                    </label>
                                    <label className='flex items-center gap-2'>
                                        <input
                                            type='checkbox'
                                            name='generalInquiry4'
                                            checked={formData.generalInquiry4}
                                            onChange={changeHandler}
                                            className='form-checkbox h-4 w-4 text-orange-600'
                                        />
                                        <span className='text-black'>General Inquiry</span>
                                    </label>
                                </div>
                            </div>
                        </div>

                        <div>
                            <label className='w-full'>
                                <div className='flex flex-row font-bold ml-2'>
                                    <RiMessage2Line className='text-black mr-2 mt-1' />
                                    <p className='text-black mb-1 leading-[1.375rem]'>Message</p>
                                </div>
                                <textarea
                                    name='message'
                                    onChange={changeHandler}
                                    placeholder='Enter Message'
                                    value={formData.message}
                                    className='text-white::placeholder placeholder-gray-500 text-black outline-none rounded-[0.5rem]  w-full p-[12px] bg-transparent border-b border-gray-500 focus:border-orange-500'
                                    rows={2}
                                />
                            </label>
                        </div>

                        <button
                            type='submit'
                            onClick={submitHandler}
                            className='bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
                        >
                            Submit
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
