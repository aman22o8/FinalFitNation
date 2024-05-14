import React, { useState } from "react";
import { GiBodyHeight, GiWeight } from "react-icons/gi";
import { MdDirectionsWalk, MdLocalDrink } from "react-icons/md";
import { IoMdBed } from "react-icons/io";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { IoFastFood } from "react-icons/io5";

const initialFormData = {
  currentWeight: "",
  targetWeight: "",
  currentHeight: "",
  targetHeight: "",
  waterIntake: "",
  steps: "",
  sleep: "",
  nutrition: "",
};

const GoalsForm = () => {
  const [formData, setFormData] = useState(initialFormData);

  function changeHandler(event) {
    setFormData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  }

  function submitHandler(event) {
    event.preventDefault();
    console.log("Goals Form Data: ", formData);
    toast.success("Updated successfully!");
    setFormData(initialFormData);
  }

  return (
    <>
      <ToastContainer />
      <form onSubmit={submitHandler} className="bg-white rounded-lg p-6">
        <div className="flex gap-x-4 mt-[20px]">
          <label className="w-full">
            <div className="flex flex-row font-bold ml-2">
              <GiWeight className="text-black mr-2 mt-1" />
              <p className="text-black mb-1 leading-[1.375rem]">
                Current Weight (Kg)
              </p>
            </div>
            <input
              type="number"
              name="currentWeight"
              onChange={changeHandler}
              placeholder="Enter Current Weight"
              value={formData.currentWeight}
              className="text-white::placeholder placeholder-gray-500 text-black outline-none rounded-[0.5rem]  w-full p-[12px] bg-transparent border-b border-gray-500 focus:border-orange-500"
            />
          </label>

          <label className="w-full">
            <div className="flex flex-row font-bold ml-2">
              <GiWeight className="text-black mr-2 mt-1" />
              <p className="text-black mb-1 leading-[1.375rem]">
                Target Weight (Kg)
              </p>
            </div>
            <input
              type="number"
              name="targetWeight"
              onChange={changeHandler}
              placeholder="Enter Target Weight"
              value={formData.targetWeight}
              className="text-white::placeholder placeholder-gray-500 text-black outline-none rounded-[0.5rem]  w-full p-[12px] bg-transparent border-b border-gray-500 focus:border-orange-500"
            />
          </label>
        </div>

        <div className="flex gap-x-4 mt-[20px]">
          <label className="w-full">
            <div className="flex flex-row font-bold ml-2">
              <GiBodyHeight className="text-black mr-2 mt-1" />
              <p className="text-black mb-1 leading-[1.375rem]">
                Current Height (cm)
              </p>
            </div>
            <input
              type="number"
              name="currentHeight"
              onChange={changeHandler}
              placeholder="Enter Height"
              value={formData.currentHeight}
              className="text-white::placeholder placeholder-gray-500 text-black outline-none rounded-[0.5rem]  w-full p-[12px] bg-transparent border-b border-gray-500 focus:border-orange-500"
            />
          </label>

          <label className="w-full">
            <div className="flex flex-row font-bold ml-2">
              <GiBodyHeight className="text-black mr-2 mt-1" />
              <p className="text-black mb-1 leading-[1.375rem]">
                Target Height (cm)
              </p>
            </div>
            <input
              type="number"
              name="targetHeight"
              onChange={changeHandler}
              placeholder="Enter Height"
              value={formData.targetHeight}
              className="text-white::placeholder placeholder-gray-500 text-black outline-none rounded-[0.5rem]  w-full p-[12px] bg-transparent border-b border-gray-500 focus:border-orange-500"
            />
          </label>
        </div>
        
        <div className="flex gap-x-4 mt-[20px]">
          <label className="w-full">
            <div className="flex flex-row font-bold ml-2">
              <MdLocalDrink className="text-black mr-2 mt-1" />
              <p className="text-black mb-1 leading-[1.375rem]">
                Water Intake (liters)
              </p>
            </div>
            <input
              type="number"
              name="waterIntake"
              onChange={changeHandler}
              placeholder="Enter Liters of Water"
              value={formData.waterIntake}
              className="text-white::placeholder placeholder-gray-500 text-black outline-none rounded-[0.5rem]  w-full p-[12px] bg-transparent border-b border-gray-500 focus:border-orange-500"
            />
          </label>

          <label className="w-full">
            <div className="flex flex-row font-bold ml-2">
              <IoFastFood className="text-black mr-2 mt-1" />
              <p className="text-black mb-1 leading-[1.375rem]">Nutrition (Calories)</p>
            </div>
            <input
              type="number"
              name="nutrition"
              onChange={changeHandler}
              placeholder="Enter Number of Calories"
              value={formData.nutrition}
              className="text-white::placeholder placeholder-gray-500 text-black outline-none rounded-[0.5rem]  w-full p-[12px] bg-transparent border-b border-gray-500 focus:border-orange-500"
            />
          </label>
        </div>        

        <div className="flex gap-x-4 mt-[20px]">
          <label className="w-full">
            <div className="flex flex-row font-bold ml-2">
              <MdDirectionsWalk className="text-black mr-2 mt-1" />
              <p className="text-black mb-1 leading-[1.375rem]">Steps </p>
            </div>
            <input
              type="number"
              name="steps"
              onChange={changeHandler}
              value={formData.steps}
              placeholder="Enter Number of Steps"
              className="text-white::placeholder placeholder-gray-500 text-black outline-none rounded-[0.5rem]  w-full p-[12px] bg-transparent border-b border-gray-500 focus:border-orange-500"
            />
          </label>

          <label className="w-full">
            <div className="flex flex-row font-bold ml-2">
              <IoMdBed className="text-black mr-2 mt-1" />
              <p className="text-black mb-1 leading-[1.375rem]">Sleep (Hours)</p>
            </div>
            <input
              type="time"
              name="sleep"
              onChange={changeHandler}
              placeholder="Enter Hours of Sleep"
              value={formData.sleep}
              className="text-white::placeholder placeholder-gray-500 text-black outline-none rounded-[0.5rem]  w-full p-[12px] bg-transparent border-b border-gray-500 focus:border-orange-500"
            />
          </label>
        </div>

        <button className="w-full bg-[#fb5607] rounded-[8px] font-medium text-gray-50 px-[12px] py-[8px] mt-6 hover:bg-orange-600">
          Save Changes
        </button>
      </form>
    </>
  );
};

export default GoalsForm;
