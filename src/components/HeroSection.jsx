import React from 'react';
import './Hero.css';
import { motion } from 'framer-motion';
import NumberCounter from 'number-counter';
const  HeroSection=()=> {
	const transition = { type: 'spring', duration: 3 };
	const mobile = window.innerWidth <= 768 ? true : false;
	return (
		<div className='hero' id='hero'>
			
			<div className='left-h'>
				

				<div className='the-best-ad'>
					<motion.div
						initial={{ left: mobile ? '178px' : '238px' }}
						whileInView={{ left: '8px' }}
						transition={{ ...transition, type: 'tween' }}></motion.div>
					<span>the best fitness club in the town</span>
				</div>

				<div className='hero-text'>
					<div>
						<span className='stroke'>Shape </span>
						<span>Your</span>
					</div>
					<div>
						<span>Ideal Body</span>
					</div>

					<div>
						<span>
							here we will help you to shape and build your ideal body and live
							up your life to fullest
						</span>
					</div>
				</div>

				<div className='figures'>
					<div>
						<span>
							<NumberCounter start={100} end={140} delay='4' preFix='+' />
						</span>
						<span>expert coaches</span>
					</div>
					<div>
						<span>
							<NumberCounter start={925} end={978} delay='4' preFix='+' />
						</span>
						<span>members joined</span>
					</div>
					<div>
						<span>
							<NumberCounter start={10} end={46} delay='4' preFix='+' />
						</span>
						<span>fitness programs</span>
					</div>
				</div>

				
			</div>

			<div className='right-h'>
				

				<motion.div
					initial={{ right: '-1rem' }}
					whileInView={{ right: '4rem' }}
					transition={transition}
					className='heart-rate'>
					<img src='/asset/heart.png' alt='' />
					<span>Heart Rate</span>
					<span>116 bpm</span>
				</motion.div>

				<img src='/asset/hero_image.png' alt='' className='hero-image' />
				<motion.img
					initial={{ right: '11rem' }}
					whileInView={{ right: '20rem' }}
					transition={transition}
					src='/asset/hero_image_back.png'
					alt=''
					className='hero-image-back'
				/>

				<motion.div
					initial={{ right: '37rem' }}
					whileInView={{ right: '28rem' }}
					transition={transition}
					className='calories'>
					<img src='/asset/calories.png' alt='' />
					<div>
						<span>Calories burned</span>
						<span>220 kcal</span>
					</div>
				</motion.div>
			</div>
		</div>
	);
}

export default HeroSection;
