import React, { useState } from "react";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { IoIosSunny } from "react-icons/io";
import { IoFastFoodOutline, IoRestaurantOutline } from "react-icons/io5";
import Veg from "../assets/Veg.jpg";
import NonVeg from "../assets/Nonveg.jpg";
import Egg from "../assets/egg.webp";
import North from "../assets/NorthIndian.jpg";
import South from "../assets/SouthIndian.jpg";
import East from "../assets/EastIndian.jpg";
import West from "../assets/WestIndia.jpeg";
import Chinese from "../assets/Chinese.jpg";
import Continental from "../assets/Continental.webp";
import Recipe1Image from "../assets/Veg.jpg";

const MyFood = () => {
  const userData = {
    dietPreference: "Vegetarian",
    preferredCuisine: ["North Indian", "South Indian", "Chinese", "Continental"],
  };

  const { dietPreference, preferredCuisine } = userData;
  const [currentCuisineIndex, setCurrentCuisineIndex] = useState(0);
  const [showForm, setShowForm] = useState(false);
  const [meals, setMeals] = useState({
    "Break Fast": [],
    Lunch: [],
    "Evening Snacks": [],
    Dinner: [],
  });

  const handleNextCuisine = () => {
    setCurrentCuisineIndex((prevIndex) =>
      prevIndex === preferredCuisine.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrevCuisine = () => {
    setCurrentCuisineIndex((prevIndex) =>
      prevIndex === 0 ? preferredCuisine.length - 1 : prevIndex - 1
    );
  };

  const handleAddMeal = () => {
    setShowForm(true);
  };

  const handleAddMealForm = (mealData) => {
    setMeals((prevMeals) => ({
      ...prevMeals,
      [mealData.meal]: [...prevMeals[mealData.meal], mealData],
    }));
    setShowForm(false);
  };

  const renderMealSection = (mealType, message) => {
    const mealItems = meals[mealType];
    if (mealItems.length === 0) {
      return (
        <div className="bg-zinc-800 rounded-lg p-2 m-2 text-orange-600">
          {message}
        </div>
      );
    } else {
      return mealItems.map((meal, index) => (
        <div
          key={index}
          className="bg-zinc-800 rounded-lg p-2 m-2 text-orange-600"
        >
          <span>{meal.foodItem}</span> - {meal.amount} grams
        </div>
      ));
    }
  };

  const renderRecipeCard = () => {
    return (
      <div className="w-full sm:w-1/2 bg-zinc-800 text-white rounded-lg shadow-lg overflow-hidden flex flex-col mr-5 h-auto">
        <div className="p-4 h-5/6">
          <img
            src={Recipe1Image}
            alt="Recipe 1"
            className="w-full h-40 object-cover rounded-lg shadow-lg overflow-hidden"
          />
          <div className="flex justify-between items-center">
            <h1 className="text-2xl text-orange-600 font-bold mt-4">
              Recipe 1
            </h1>
            <button className="bg-orange-500 text-white font-bold py-1 px-2 rounded shadow hover:bg-orange-600 transition duration-300">
              View Recipe
            </button>
          </div>
          <div className="flex flex-row mt-4 justify-between">
            <div>
              <p className="text-sm flex items-center font-semibold">
                <span className="rounded-full h-4 w-4 bg-green-500 mr-2" /> Protein: 20g
              </p>
              <p className="text-sm flex items-center font-semibold">
                <span className="rounded-full h-4 w-4 bg-yellow-500 mr-2" /> Fat: 15g
              </p>
              <p className="text-sm flex items-center font-semibold">
                <span className="rounded-full h-4 w-4 bg-red-500 mr-2" /> Carb: 30g
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="h-auto flex flex-col">
      <div>
        <h1 className="text-2xl text-orange-600 font-bold py-4">
          Your Food Preference
        </h1>
        <div className="flex flex-col sm:flex-row justify-between gap-5">
          <div className="w-full sm:w-1/2 bg-zinc-800  rounded-lg shadow-lg overflow-hidden flex flex-col h-80 mb-5 sm:mb-0">
            <div className="p-4 h-5/6 ">
              <img
                src={
                  dietPreference === "Vegetarian"
                    ? Veg
                    : dietPreference === "Non Vegetarian"
                      ? NonVeg
                      : Egg
                }
                alt={dietPreference}
                className="w-full h-full object-cover rounded-lg"
              />
              <h1 className="text-2xl text-white font-bold m-2">
                {dietPreference}
              </h1>
            </div>
          </div>

          <div className="w-full sm:w-1/2 bg-zinc-800 rounded-lg shadow-lg overflow-hidden flex flex-col relative">
            {preferredCuisine.length > 1 && (
              <>
                <button
                  className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-100 text-orange-800 rounded-full p-2 hover:bg-gray-300 hover:text-gray-800 transition duration-300 border border-gray-300"
                  onClick={handlePrevCuisine}
                >
                  <BsArrowLeft />
                </button>
                <button
                  className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-100 text-orange-800 rounded-full p-2 hover:bg-gray-300 hover:text-gray-800 transition duration-300 border border-gray-300"
                  onClick={handleNextCuisine}
                >
                  <BsArrowRight />
                </button>
              </>
            )}
            <div className="h-80">
              <div className="p-4 h-5/6 ">
                <img
                  src={
                    preferredCuisine[currentCuisineIndex] === "North Indian"
                      ? North
                      : preferredCuisine[currentCuisineIndex] === "South Indian"
                        ? South
                        : preferredCuisine[currentCuisineIndex] === "East Indian"
                          ? East
                          : preferredCuisine[currentCuisineIndex] === "West Indian"
                            ? West
                            : preferredCuisine[currentCuisineIndex] === "Chinese"
                              ? Chinese
                              : Continental
                  }
                  alt={preferredCuisine[currentCuisineIndex]}
                  className="w-full h-full object-cover rounded-lg "
                />
                <h1 className="text-2xl  font-bold m-2 text-white">
                  {preferredCuisine[currentCuisineIndex]}
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      <hr className="my-10" />

      <div className="flex flex-col gap-4">
        <div className="flex justify-between items-center py-4">
          <h1 className="text-2xl text-orange-600 font-bold">Todays Intake</h1>
          <button
            className="flex items-center bg-orange-500 text-white font-bold py-1 px-4 rounded-full shadow hover:bg-orange-600 transition duration-300"
            onClick={handleAddMeal}
          >
            <IoFastFoodOutline className="text-xl mr-2" />
            Add Meal
          </button>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <div className="w-full sm:w-1/2 bg-zinc-800 rounded-lg shadow-lg overflow-hidden flex flex-col">
            <h1 className="text-xl text-white font-bold p-2 flex flex-row">
              <IoIosSunny className="mt-1 mr-2 ml-2" />
              Breakfast
            </h1>
            {renderMealSection("Break Fast", "Breakfast is a perfect way to fuel your morning and start the day!")}
          </div>
          <div className="w-full sm:w-1/2 bg-zinc-800 rounded-lg shadow-lg overflow-hidden flex flex-col">
            <h1 className="text-xl text-white font-bold p-2 flex flex-row">
              <IoRestaurantOutline className="mt-1 mr-2 ml-2" />
              Lunch
            </h1>
            {renderMealSection("Lunch", "Lunch should satisfying & balanced to power through the rest of your day!")}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <div className="w-full sm:w-1/2 bg-zinc-800 rounded-lg shadow-lg overflow-hidden flex flex-col">
            <h1 className="text-xl text-white font-bold p-2 flex flex-row">
              <IoFastFoodOutline className="mt-1 mr-2 ml-2" />
              Evening Snacks
            </h1>
            {renderMealSection("Evening Snacks", "Evening Snacks is a light and healthy snack to keep you going until dinner!")}
          </div>
          <div className="w-full sm:w-1/2 bg-zinc-800 rounded-lg shadow-lg overflow-hidden flex flex-col">
            <h1 className="text-xl text-white font-bold p-2 flex flex-row">
              <IoRestaurantOutline className="mt-1 mr-2 ml-2" />
              Dinner
            </h1>
            {renderMealSection("Dinner", "Dinner is to end your day with a satisfying and nutritious to refuel and relax!")}
          </div>
        </div>
      </div>

      <hr className="my-10" />

      <div className="flex flex-col ">
        <h1 className="text-2xl  text-orange-600 font-bold py-4">Our Recipes</h1>

        <div className="flex flex-row justify-between text-black">
          {renderRecipeCard()}
        </div>
      </div>

      {showForm && (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold mb-4">Add Meal</h2>
            <form>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Meal
                </label>
                <select
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="meal"
                >
                  <option>Break Fast</option>
                  <option>Lunch</option>
                  <option>Evening Snacks</option>
                  <option>Dinner</option>
                </select>
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Food Item (Name)
                </label>
                <input
                  type="text"
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="foodItem"
                  placeholder="Enter Food Item"
                />
              </div>
              <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Amount (grams)
                </label>
                <input
                  type="text"
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="amount"
                  placeholder="Enter Amount"
                />
              </div>
              <div className="flex justify-end">
                <button
                  className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="button"
                  onClick={() =>
                    handleAddMealForm({
                      meal: document.getElementById("meal").value,
                      foodItem: document.getElementById("foodItem").value,
                      amount: document.getElementById("amount").value,
                    })
                  }
                >
                  Add
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyFood;
