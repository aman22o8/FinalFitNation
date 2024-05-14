import React, { useState } from "react";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import ProfileForm from "../components/ProfileForm";
import GoalsForm from "../components/GoalsForm";
import FoodForm from "../components/FoodForm";

const Settings = () => {
  const [activeForm, setActiveForm] = useState(null);

  return (
    <div className={`w-full flex flex-col gap-4 mt-8 ${activeForm ? "h-auto" : "h-screen"}`}>
      <button
        className="w-full h-14 bg-white text-black flex justify-between border border-gray-200 items-center px-4 py-2 rounded-lg shadow-md hover:font-bold transition-colors duration-300"
        onClick={() =>
          setActiveForm((prev) => (prev === "profile" ? null : "profile"))
        }
      >
        <span>Edit Profile</span>
        {activeForm === "profile" ? (
          <MdKeyboardArrowUp />
        ) : (
          <MdKeyboardArrowDown />
        )}
      </button>
      {activeForm === "profile" && <ProfileForm />}

      <button
        className="w-full h-14 bg-white text-black flex justify-between border border-gray-200 items-center px-4 py-2 rounded-lg shadow-md hover:font-bold transition-colors duration-300"
        onClick={() =>
          setActiveForm((prev) => (prev === "goals" ? null : "goals"))
        }
      >
        <span>Change Goals</span>
        {activeForm === "goals" ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
      </button>
      {activeForm === "goals" && <GoalsForm />}

      <button
        className="w-full h-14 bg-white text-black flex justify-between border border-gray-200 items-center px-4 py-2 rounded-lg shadow-md hover:font-bold transition-colors duration-300"
        onClick={() =>
          setActiveForm((prev) => (prev === "food" ? null : "food"))
        }
      >
        <span>Change Food Preferences</span>
        {activeForm === "food" ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
      </button>
      {activeForm === "food" && <FoodForm />}
    </div>
  );
};

export default Settings;
