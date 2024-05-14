import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineUser, AiOutlineBarChart, AiOutlineSetting, AiOutlineMenu, AiOutlineHome } from "react-icons/ai";
import { BiDumbbell } from "react-icons/bi";
import { IoFastFoodOutline } from "react-icons/io5";
import logo from "../assets/logo.png";
import MyProfile from "../pages/MyProfile";
import Exercise from "../pages/Exercise";
import MyFood from "../pages/MyFood";
import MyReports from "../pages/MyReports";
import Settings from "../pages/Settings";
import userImage from "../assets/logo.png";

const TraineeDashboard = () => {
  const [activeTab, setActiveTab] = useState("profile");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Add isLoggedIn state

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const renderContent = () => {
    switch (activeTab) {
      case "profile":
        return <MyProfile />;
      case "exercise":
        return <Exercise />;
      case "food":
        return <MyFood />;
      case "reports":
        return <MyReports />;
      case "settings":
        return <Settings />;
      default:
        return <MyProfile />;
    }
  };

  return (
    <div className="flex">
      <aside className={`bg-zinc-800  w-1/6 h-screen flex flex-col text-orange-600 items-center py-6 sticky top-0 left-0 z-10 ${isSidebarOpen ? "" : "hidden"}`}>
        <Link to="/" className="mb-6">
          <img src={logo} alt="Logo" className="w-24 h-12 mb-8" />
        </Link>
        <nav className="flex flex-col items-center space-y-4">
          <SidebarOption
            icon={<AiOutlineUser />}
            text="My Profile"
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            name="profile"
          />
          <SidebarOption
            icon={<BiDumbbell />}
            text="Exercise"
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            name="exercise"
          />
          <SidebarOption
            icon={<IoFastFoodOutline />}
            text="My Food"
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            name="food"
          />
          <SidebarOption
            icon={<AiOutlineBarChart />}
            text="My Reports"
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            name="reports"
          />
          <SidebarOption
            icon={<AiOutlineSetting />}
            text="Settings"
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            name="settings"
          />
        </nav>
      </aside>
      <div className="flex-grow bg-black  w-5/6">
        <div className="bg-zinc-800 p-2 flex justify-between items-center shadow-md sticky top-0 z-20">
          <div className="flex items-center ml-2">
            <button
              onClick={toggleSidebar}
              className="mr-4 transition duration-300 transform hover:scale-125"
            >
              <AiOutlineMenu className=" text-2xl font-bold text-white" />
            </button>
          </div>
          <div className="flex items-center mr-10">
            <Link to="/">
              <div className="flex items-center text-orange-600 transition duration-300 transform hover:scale-110  mr-8">
                <AiOutlineHome className="text-2xl font-bold mr-2" />
                <h1 className="text-xl font-bold text-orange-600">Home</h1>
              </div>
            </Link>
          </div>
        </div>
        <div className="p-8 ">{renderContent()}</div>
      </div>
    </div>
  );
};

const SidebarOption = ({ icon, text, activeTab, setActiveTab, name }) => {
  return (
    <div
      className={` flex items-center cursor-pointer px-8 py-2 w-52 hover:bg-orange-400 hover:rounded-md ${activeTab === name ? "text-black-500 font-bold " : "text-orange-600"
        }`}
      onClick={() => setActiveTab(name)}
    >
      <div className={`mr-2 text-lg ${activeTab === name ? "font-bold" : ""}`}>{icon}</div>
      <div className={`transition duration-300 ${activeTab === name ? "text-black-500" : "text-gray-50 "} ${activeTab === name ? "transform scale-110" : ""}`}>{text}</div>
    </div>
  );
};

export default TraineeDashboard;
