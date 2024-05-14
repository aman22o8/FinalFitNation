import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const SignupForm = ({ setIsLoggedIn }) => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",

  });


  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [accountType, setAccountType] = useState("Trainee");

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
      return;
    }

    setIsLoggedIn(true);
    toast.success("Account Created");

    const userDetails = {
      fname: formData.firstName,
      lname: formData.lastName,
      e_mail: formData.email,
      password: formData.password,
    };

    try {
      const response = await fetch('https://fitness-server-u793.onrender.com/user/trainee', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(userDetails)
      });
      console.log(response);

      // const responseData = await response.json();
      if (response.ok) {
        console.log("Server Response:", response);
        navigate("/login");
        toast.success("Account is succesfully Created");
      } else {
        throw new Error(response.message || "Failed to create account.");
      }
    } catch (error) {
      // console.error("Error:", error);
      toast.error(`Error: ${error.message}`);
    }
  };

  // const submitHandler(event) {

  //   event.preventDefault();
  //   if (formData.password !== formData.confirmPassword) {
  //     toast.error("Passwords do not match");
  //     return;
  //   }

  //   setIsLoggedIn(true);
  //   toast.success("Account Created");
  //   const accountData = {
  //     ...formData,
  //   };

  //   const finalData = {
  //     ...accountData,
  //     accountType,
  //   };

  //   console.log("printing Final account data ");
  //   console.log(finalData);

  //   navigate("/dashboard");
  // }
  return (
    <div>
      {/* Trainer-trainee tab */}
      <div className="flex justify-center mx-auto mt-4 bg-gray-50 p-1 gap-x-1 rounded-full max-w-max">
        <button
          className={`${accountType === "Trainee"
            ? "bg-orange-600 text-gray-50"
            : "bg-transparent text-gray-900"
            } py-2 px-5 rounded-full transition-all duration-200`}
          onClick={() => setAccountType("Trainee")}
        >
          Trainee
        </button>

        <button
          className={`${accountType === "Trainer"
            ? "bg-orange-600 text-gray-50"
            : "bg-transparent text-gray-900"
            } py-2 px-5 rounded-full transition-all duration-200`}
          onClick={() => setAccountType("Trainer")}
        >
          Trainer
        </button>
      </div>

      <form onSubmit={submitHandler}>
        {/* first name and lastName */}
        <div className="flex gap-x-4 mt-[20px]">
          <label className="w-full">
            <p className="text-[0.875rem] text-gray-50 mb-1 leading-[1.375rem]">
              First Name<sup className="text-red-500">*</sup>
            </p>
            <input
              required
              type="text"
              name="firstName"
              onChange={changeHandler}
              placeholder="Enter First Name"
              value={formData.firstName}
              className="text-white::placeholder placeholder-gray-800 text-gray-800 outline-orange-600 rounded-[0.5rem]  w-full p-[12px]"
            />
          </label>

          <label className="w-full">
            <p className="text-[0.875rem] text-gray-50 mb-1 leading-[1.375rem]">
              Last Name<sup className="text-red-500">*</sup>
            </p>
            <input
              required
              type="text"
              name="lastName"
              onChange={changeHandler}
              placeholder="Enter Last Name"
              value={formData.lastName}
              className="placeholder-gray-800 text-gray-800 outline-orange-600 rounded-[0.5rem]  w-full p-[12px]"
            />
          </label>
        </div>
        {/* email Add */}
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

        {/* createPassword and Confirm Password */}
        <div className="w-full flex gap-x-4 mt-[20px]">
          <label className="w-full relative">
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
        </div>
        <button className=" w-full bg-[#000000] rounded-[8px] font-medium border border-orange-600 text-[#fb5607] px-[12px] py-[8px] mt-6">
          Create Account
        </button>
      </form>
    </div>
  );
};

export default SignupForm;
