import React from "react";
import { MdFitnessCenter } from "react-icons/md";
import { GiBodyHeight } from "react-icons/gi";
import { MdLocalDrink } from "react-icons/md";
import { IoFastFoodOutline } from "react-icons/io5";
import { MdDirectionsWalk } from "react-icons/md";
import { IoBedOutline } from "react-icons/io5";

const MyReports = () => {
  const goals = [
    {
      title: "Weight",
      icon: <MdFitnessCenter className="text-2xl text-orange-800 mb-2" />,
      value: "75 kg",
    },
    {
      title: "Height",
      icon: <GiBodyHeight className="text-2xl text-orange-800 mb-2" />,
      value: "190 cm",
    },
    {
      title: "Water",
      icon: <MdLocalDrink className="text-2xl text-orange-800 mb-2" />,
      value: "2 liters",
    },
    {
      title: "Nutritional",
      icon: <IoFastFoodOutline className="text-2xl text-orange-800 mb-2" />,
      value: "1000 cal",
    },
    {
      title: "Steps",
      icon: <MdDirectionsWalk className="text-2xl text-orange-800 mb-2" />,
      value: "10,000 steps",
    },
    {
      title: "Sleep",
      icon: <IoBedOutline className="text-2xl text-orange-800 mb-2" />,
      value: "7:30 Hours",
    },
  ];

  return (
    <div className="h-auto flex flex-col">
      <h1 className="text-orange-600 text-2xl font-bold p-3">Your Goals</h1>
      <div className="flex flex-row">
        {goals.map((goal, index) => (
          <div className="flex justify-center w-full p-2 md:w-1/4" key={index}>
            <div className="w-full flex flex-col">
              <div className="bg-zinc-800  rounded-lg shadow-lg overflow-hidden mb-8 flex-grow">
                <div className="p-3 flex-grow flex flex-col">
                  <span className="flex flex-row ml-2">
                    {goal.icon}
                    <h1 className="text-l font-bold ml-2 text-white mb-4">{goal.title}</h1>
                  </span>
                  <div className="bg-zinc-800 rounded-lg p-4 mb-4 flex flex-row">
                    <p className="font-bold text-orange-200">{goal.value}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyReports;
