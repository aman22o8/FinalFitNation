import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

const ForgotPassword = ({ setIsLoggedIn }) => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        otp: "",
    });

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const [fetchOtp, setFetchOtp] = useState("");

    const [VerifyPassword, setVerifyPassword] = useState(false);


    function changeHandler(event) {
        setFormData((prevData) => ({
            ...prevData,
            [event.target.name]: event.target.value,
        }));
    }



    const submitHandler = async (e) => {
        e.preventDefault();

        if (formData.password !== formData.confirmPassword) {
            toast.error("Passwords do not match");
            console.log("Passwords do not match");
            return;
        }

        // setIsLoggedIn(true);
        // toast.success("Account Created");

        const userDetails = {
            email: formData.email,
            // passwd: formData.password,
        };
        // console.log(userDetails);
        try {
            const response = await fetch('https://fitness-server-u793.onrender.com/user/forgotpassword', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(userDetails)
            });
            console.log(response);

            const responseData = await response.json();
            console.log(responseData);
            setFetchOtp(responseData.otp);


            // toast.success(responseData.message);
            // if (response.ok) {
            //     console.log("Account is succesfully Created", response);
            // navigate("/otp_verification");
            // } else {
            //     throw new Error(response.message || "Failed to create account.");
            // }
        } catch (error) {
            console.error("Error:", error);
            toast.error(`Error: ${error.message}`);
        }
    };

    const submitHandlerOtp = async (e) => {
        e.preventDefault();

        if (fetchOtp !== parseInt(formData.otp)) {
            console.log("Otp does not match");
            return;
        } else {
            console.log("otp matches")
            setVerifyPassword(true);
        }
    }
    const submitHandlerConfirmPassword = async (e) => {
        e.preventDefault();
        const userDetails = {
            email: formData.email,
            passwd: formData.password,
        };
        console.log(userDetails);
        try {
            const response = await fetch('https://fitness-server-u793.onrender.com/user/forgotpassword/user/update', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(userDetails)
            });
            // console.log("Password updated");
            const responseData = await response.json();
            console.log(responseData);
            navigate("/login");



            // toast.success(responseData.message);
            // if (response.ok) {
            //     console.log("Account is succesfully Created", response);
            // } else {
            //     throw new Error(response.message || "Failed to create account.");
            // }
        } catch (error) {
            console.log("Error:", error);
            toast.error(`Error: ${error.message}`);
        }
    }



    return (
        <div className="flex flex-col w-full min-h-[100vh]  bg-red-300 p-8 gap-y-4 mt-24">
            <form
                onSubmit={submitHandler}
                className="flex flex-col w-full h-[200px] bg-red-300 p-8 gap-y-4 mt-24"
            >

                <div className="mt-[20px]">
                    <label className="w-full mt-[20px]">
                        <p className="text-[0.875rem] text-gray-50 mb-1 leading-[1.375rem]">
                            Email Address<sup className="text-red-500">*</sup>
                        </p>
                        <input
                            required
                            type="email"
                            name="email"
                            onChange={changeHandler}
                            placeholder="Enter Email Address "
                            value={formData.email}
                            className=" rounded-[0.5rem] placeholder-gray-800 text-gray-800 outline-orange-600 w-full p-[12px]"
                        />
                    </label>
                </div>
                {/* <div className="w-full flex gap-x-4 mt-[20px]"> */}




                <button className="bg-orange-600 text-gray-50 rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px] mt-6">
                    verifyEmail
                </button>
                {/* </div> */}
            </form>

            <form onSubmit={submitHandlerOtp}>
                <div>
                    <label className="w-full relative">
                        <p className="text-[0.875rem] text-gray-50 mb-1 leading-[1.375rem]">
                            OTP<sup className="text-red-500">*</sup>
                        </p>
                        <input
                            required
                            type="text"
                            name="otp"
                            onChange={changeHandler}
                            placeholder="Enter OTP"
                            value={formData.otp}
                            className=" rounded-[0.5rem] placeholder-gray-800 text-gray-800 outline-orange-600 w-full p-[12px]"
                        />
                        <span
                            className="absolute right-3 top-[38px] cursor-pointer"
                            onClick={() => setShowPassword((prev) => !prev)}
                        >
                            {showPassword ? (
                                <AiOutlineEyeInvisible fontSize={24} fill="#76777A" />
                            ) : (
                                <AiOutlineEye fontSize={24} fill="#76777A" />
                            )}
                        </span>
                    </label>
                    <button className="bg-orange-600 text-gray-50 rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px] mt-6">
                        VerifyOtp
                    </button>
                </div>

            </form>

            {/* Forgot Password redirection */}

            <div >
                {VerifyPassword && <form onSubmit={submitHandlerConfirmPassword} >
                    {/* first name and lastName */}


                    {/* createPassword and Confirm Password */}
                    {/* <div className="w-full flex gap-x-4 mt-[20px]"> */}
                    <label className="w-full relative border">
                        <p className="text-[0.875rem] text-gray-50 mb-1 leading-[1.375rem]">
                            Create Password<sup className="text-red-500">*</sup>
                        </p>
                        <input
                            required
                            type={showPassword ? "text" : "password"}
                            name="password"
                            onChange={changeHandler}
                            placeholder="Enter Password"
                            value={formData.password}
                            className=" rounded-[0.5rem] placeholder-gray-800 text-gray-800 outline-orange-600 w-full p-[12px]"
                        />
                        <span
                            className="absolute right-3 top-[38px] cursor-pointer"
                            onClick={() => setShowPassword((prev) => !prev)}
                        >
                            {showPassword ? (
                                <AiOutlineEyeInvisible fontSize={24} fill="#76777A" />
                            ) : (
                                <AiOutlineEye fontSize={24} fill="#76777A" />
                            )}
                        </span>
                    </label>

                    <label className="w-full relative">
                        <p className="text-[0.875rem] text-gray-50 mb-1 leading-[1.375rem]">
                            Confirm Password<sup className="text-red-500">*</sup>
                        </p>
                        <input
                            required
                            type={showConfirmPassword ? "text" : "password"}
                            name="confirmPassword"
                            onChange={changeHandler}
                            placeholder="Confirm Password"
                            value={formData.confirmPassword}
                            className=" rounded-[0.5rem] placeholder-gray-800 text-gray-800 outline-orange-600 w-full p-[12px]"
                        />
                        <span
                            className="absolute right-3 top-[38px] cursor-pointer"
                            onClick={() => setShowConfirmPassword((prev) => !prev)}
                        >
                            {showConfirmPassword ? (
                                <AiOutlineEyeInvisible fontSize={24} fill="#76777A" />
                            ) : (
                                <AiOutlineEye fontSize={24} fill="#76777A" />
                            )}
                        </span>

                    </label>
                    <button className="bg-orange-600 text-gray-50 rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px] mt-6">
                        Verifypass
                    </button>
                    {/* </div> */}

                </form>}
            </div>


        </div >
    );
};



export default ForgotPassword