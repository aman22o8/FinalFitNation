import React from "react";
import SignupForm from "./SignupForm";
import LoginForm from "./LoginForm";
import { FcGoogle } from "react-icons/fc";
import { Vortex } from "./ui/Vortex"


const Template = ({ title, desc1, desc2, formtype, setIsLoggedIn }) => {
  return (

    <Vortex particleCount={500} rangeY={300} baseHue={290}
      className=" flex justify-center items-center h-screen">
      <div className="w-7/8 max-w-[1160px] border rounded-md border-gray-900">
        <div className={`bg-transparent backdrop-blur-md flex justify-center items-center flex-col  gap-2 rounded-lg ${formtype === "signup" ? "p-10" : "p-20"}`}>
          <h1 className=" text-gray-50 font-semibold text-[1.875rem] leading-[2.375rem]">
            {title}
          </h1>

          {formtype === "signup" ? (
            <SignupForm setIsLoggedIn={setIsLoggedIn} />
          ) : (
            <LoginForm setIsLoggedIn={setIsLoggedIn} />
          )}

          <div className="flex w-full items-center gap-x-2">
            <div className="w-full h-[1px] bg-gray-300"></div>
            <p className="text-gray-300 font-medium leading[1.375rem]">OR</p>
            <div className="w-full h-[1px] bg-gray-300"></div>
          </div>

          <button
            className="w-full flex justify-center items-center rounded-[8px] font-medium text-gray-50
            border border-orange-600 px-[12px] py-[8px] gap-x-2 "
          >
            <FcGoogle />
            <p>Sign Up with Google</p>
          </button>
        </div>
      </div>
    </Vortex>



  );
};

export default Template;
