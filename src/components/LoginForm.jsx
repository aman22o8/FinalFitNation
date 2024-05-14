import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import Cookies from 'js-cookie'


const LoginForm = ({ setIsLoggedIn }) => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  function changeHandler(event) {
    setFormData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  }

  // 

  const submitHandler = async (e) => {
    e.preventDefault();

    // if (formData.password !== formData.confirmPassword) {
    //   toast.error("Passwords do not match");
    //   return;
    // }

    setIsLoggedIn(true);
    toast.success("Account Created");

    const userDetails = {
      email: formData.email,
      passwd: formData.password,
    };
    // console.log(userDetails);
    try {
      const response = await fetch('https://fitness-server-u793.onrender.com/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(userDetails)
      });
      console.log(response);

      const responseData = await response.json();
      console.log(responseData);
      toast.success(responseData.message);
      if (response.ok) {
        console.log("Account is succesfully Created", response);
        const jwtToken=responseData.token
        Cookies.set('jwt_token', jwtToken, {expires: 30})
        navigate("/dashboard");
      } else {
        throw new Error(response.message || "Failed to create account.");
      }
    } catch (error) {
      // console.error("Error:", error);
      toast.error(`Error: ${error.message}`);
    }
  };

  const Token = Cookies.get('jwt_token')
  console.log("Token is",Token)



  return (
    <form
      onSubmit={submitHandler}
      className="flex flex-col w-full gap-y-4 mt-6"
    >
      <label className="w-full">
        <p className="text-[0.875rem] text-gray-300 mb-1 leading-[1.375rem]">
          Email Address<sup className="text-pink-600">*</sup>
        </p>
        <input
          required
          type="email"
          value={formData.email}
          onChange={changeHandler}
          placeholder="Enter email address"
          name="email"
          className=" rounded-[0.5rem] placeholder-gray-800 text-gray-800 outline-orange-600  w-full p-[12px]"
        />
      </label>

      <label className="w-full relative">
        <p className="text-[0.875rem] text-gray-300 mb-1 leading-[1.375rem]">
          Password<sup className="text-pink-600">*</sup>
        </p>
        <input
          required
          type={showPassword ? "text" : "password"}
          value={formData.password}
          onChange={changeHandler}
          placeholder="Enter Password"
          name="password"
          className=" rounded-[0.5rem] placeholder-gray-800 text-gray-800  outline-orange-600  w-full p-[12px]"
        />

        <span
          className="absolute right-3 top-[38px] cursor-pointer"
          onClick={() => setShowPassword((prev) => !prev)}
        >
          {showPassword ? (
            <AiOutlineEyeInvisible fontSize={24} fill="#FFFFFF" />
          ) : (
            <AiOutlineEye fontSize={24} fill="#FFFFFF" />
          )}
        </span>

        <Link to="/forgotPassword">
          <p className="text-xs mt-1 text-blue-100 max-w-max ml-auto">
            Forgot Password
          </p>
        </Link>
      </label>

      <button className="bg-orange-600 text-gray-50 rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px] mt-6">
        Sign In
      </button>
    </form>
  );
};

export default LoginForm;
