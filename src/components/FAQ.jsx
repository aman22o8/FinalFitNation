
import React, { useState, useEffect } from 'react';

const faqData = [
    {
        question: 'What product lines does Buckler offer?',
        answer: 'Buckler offers three main product lines: Inception, Amplify and Genesis. Each line has been carefully designed to meet different needs and budgets, guaranteeing quality and innovation at every level.'
    },
    {
        question: 'What is the best time to work out?',
        answer: 'The best time for a workout is the time that fits your schedule and keeps you consistent.'
    },
    {
        question: 'Should I eat before exercising?',
        answer: 'A small snack before exercising can provide energy but avoid heavy meals within two hours of your workout.'
    },
    {
        question: 'How long should my workouts be?',
        answer: 'Depending on the intensity, workouts can be effective from 30 to 60 minutes.'
    },
    {
        question: 'Can I work out every day?',
        answer: 'It is important to have at least one rest day per week to allow your body to recover.'
    },
    {
        question: 'How do I avoid injuries while exercising?',
        answer: 'Proper form, gradual progression, and adequate rest are key to preventing injuries.'
    },
    {
        question: 'How can I stay motivated to keep exercising?',
        answer: 'Set realistic goals, track your progress, and vary your routines to keep things interesting.'
    },
    {
        question: 'What should I do on rest days?',
        answer: 'Active recovery activities like walking or yoga can be beneficial on rest days.'
    },
];


const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = index => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className=" text-[#E2DDDB] w-1/2 mx-auto ">
            <h1 className='text-3xl text-center my-8 '>FREQUENTLY ASKED QUESTIONS</h1>
            <h2 className='text-6xl  text-center my-8 font-semibold'>ANY QUESTIONS?</h2>
            <div className='mt-16 space-y-6'>
                {
                    faqData.map((faq, index) => (
                        <div
                            key={index}
                            className=" mx-4 py-6 px-8 bg-[#FB5607] rounded-[1.2rem] shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px]"
                        >
                            <div
                                className="flex justify-between items-center cursor-pointer"
                                onClick={() => toggleFAQ(index)}
                            >
                                <p className="text-2xl text-[#000000]">{faq.question}</p>


                                <button
                                    className="relative w-10 h-10 bg-[#000000] rounded-full flex justify-center items-center focus:outline-none"
                                    onClick={() => toggleFAQ(index)}
                                >
                                    <span
                                        className={`absolute w-3 h-0.5 bg-white transform transition-transform ${openIndex === index ? 'rotate-0' : 'rotate-90'
                                            }`}
                                    ></span>
                                    <span
                                        className="absolute w-3 h-0.5 bg-white"
                                    ></span>
                                </button>
                            </div>
                            <div
                                className={`overflow-hidden transition-all duration-500 ease-in-out ${openIndex === index ? 'max-h-40' : 'max-h-0'}`}
                            >
                                <p className="pt-2  text-lg mt-2 ">{faq.answer}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div >
    );
};









export default FAQ;

