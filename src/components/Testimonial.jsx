import React,{useState} from 'react'
import "./Testimonial.css"


import { motion } from 'framer-motion';

const testimonialsData = [
  {
    image: '/asset/t-image1.png',
    review:
      "I made the right choice by choosing the Fitclub and by choosing the right plan and program I already achieved my ideal body!",
    name: 'MATHEW HENDRICKSON',
    status : 'ENTREPRENEUR'
  },
  {
    image: '/asset/t-image2.jpg',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi ipsam, ab itaque nam perferendis impedit sint ',
    name: 'JOHN KEVIN',
    status: 'COACH'
  },
  {
    image : '/asset/t-image3.jpg',
    review:' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima aspernatur quod voluptatem',
    name: 'FRANKLIN',
    status: "CUSTOMER"
  }
];




const Testimonial = () => {
    const transition = { type: 'spring', duration: 3 };

	const [selected, setSelected] = useState(0);

	const tLength = testimonialsData.length;

	return (
		<div className='Testimonials' id='testimonials'>
			<div className='left-t'>
				<span>TESTIMONIALS</span>
				<span className='stroke'>WHAT THEY</span>
				<span>SAY ABOUT US</span>
				<motion.span
					key={selected}
					initial={{ opacity: 0, x: 100 }}
					animate={{ opacity: 1, x: 0 }}
					exit={{ opacity: 0, x: -100 }}
					transition={transition}>
					{testimonialsData[selected].review}
				</motion.span>

				<span
					style={{
						color: '#fb5607',
					}}>
					<span>{testimonialsData[selected].name}</span> --{' '}
					{testimonialsData[selected].status}
				</span>
			</div>
			<div className='right-t'>
				<motion.div
					initial={{ opacity: 0, x: -100 }}
					transition={{ ...transition, duration: 2 }}
					whileInView={{ opacity: 1, x: 0 }}></motion.div>

				<motion.div
					initial={{ opacity: 0, x: 100 }}
					transition={{ ...transition, duration: 2 }}
					whileInView={{ opacity: 1, x: 0 }}></motion.div>
				<motion.img
					key={selected}
					initial={{ opacity: 0, x: 100 }}
					animate={{ opacity: 1, x: 0 }}
					exit={{ opacity: 0, x: -100 }}
					transition={transition}
					src={testimonialsData[selected].image}
					alt=''
				/>
				<div className='arrows'>
					<img
						src='asset/leftArrow.png'
						alt=''
						onClick={() => {
							selected === 0
								? setSelected(tLength - 1)
								: setSelected((prev) => prev - 1);
						}}
					/>
					<img
						src='asset/rightArrow.png'
						alt=''
						onClick={() => {
							selected === tLength - 1
								? setSelected(0)
								: setSelected((prev) => prev + 1);
						}}
					/>
				</div>
			</div>
		</div>
	);
}

export default Testimonial