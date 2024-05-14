import { motion } from "framer-motion";

const Marquee = () => {
  return (
    <div className=" w-full py-[20vw] md:py-[10vw] lg:py-[5vw] mt-[-250px]  bg-[#000000]">
      <div className="text-[#FB5607] flex overflow-hidden whitespace-nowrap">
        <motion.h1
          initial={{ x: "100%" }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 10 }}
          className="marquee_text text-[12vw]  leading-none uppercase  font-semibold pr-20"
        >
          We are FitNation
        </motion.h1>
        {/* <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 15 }}
          className=" text-[45vw] text-[#000000] md:text-[20vw] lg:text-[16vw] leading-none uppercase -mb-2 md:mb-1 mt-1 lg:-mt-10 font-semibold pr-20"
        >
          We are FitWeb 
        </motion.h1> */}
      </div>
    </div>
  );
}

export default Marquee;
