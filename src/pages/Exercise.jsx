import React, { useState, useEffect } from "react";

const Exercise = () => {
  const [activeTab, setActiveTab] = useState('Muscles');
  const [selectedMuscle, setSelectedMuscle] = useState('Biceps');
  const [selectedEquipment, setSelectedEquipment] = useState('Barbell');
  const [selectedIntensity, setSelectedIntensity] = useState('Beginner');
  const [exercises, setExercises] = useState([]);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchingData = async () => {
      if (!selectedMuscle && !selectedEquipment && !selectedIntensity) return;
      setIsLoading(true);
      try {
        const userData = {
          category: activeTab,
          element: activeTab === 'Muscles' ? selectedMuscle :
            activeTab === 'Equipment' ? selectedEquipment : selectedIntensity
        };
        const options = {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(userData)
        };
        const response = await fetch("https://fitness-server-u793.onrender.com/exercise", options);
        if (!response.ok) throw new Error(`Failed to fetch exercises: ${response.statusText}`);
        const data = await response.json();
        setExercises(data);
        console.log(data);
      } catch (err) {
        setError(err.message);
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchingData();
  }, [activeTab, selectedMuscle, selectedEquipment, selectedIntensity]);

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h1 className="text-3xl text-red-600 font-bold mb-6">Exercise Selector</h1>
      <div className="flex space-x-4 mb-6">
        {['Muscles', 'Equipment', 'Intensity'].map(tab => (
          <button
            key={tab}
            className={`px-6 py-3 text-lg rounded-lg shadow-lg transition-colors duration-300 
                        ${activeTab === tab ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {error && <div className="text-red-500 mb-6">{error}</div>}
      {isLoading && <div>Loading...</div>}

      <div className="mb-6 grid grid-cols-2 gap-4">
        {activeTab === 'Muscles' && ['Biceps', 'Triceps', 'Chest', 'Back', 'Legs', 'Abs'].map(m => (
          <button key={m} className={`px-4 py-2 rounded-lg shadow-lg transition-colors duration-300 
                                      ${selectedMuscle === m ? 'bg-blue-500 text-white' : 'bg-gray-200 hover:bg-gray-300'}`}
            onClick={() => setSelectedMuscle(m)}>{m}</button>
        ))}
        {activeTab === 'Equipment' && ['Barbell', 'Dumbbells', 'EZ-bar', 'Kettlebell', 'Bench'].map(e => (
          <button key={e} className={`px-4 py-2 rounded-lg shadow-lg transition-colors duration-300 
                                      ${selectedEquipment === e ? 'bg-blue-500 text-white' : 'bg-gray-200 hover:bg-gray-300'}`}
            onClick={() => setSelectedEquipment(e)}>{e}</button>
        ))}
        {activeTab === 'Intensity' && ['Beginner', 'Intermediate', 'Expert'].map(i => (
          <button
            key={i}
            className={`px-4 py-2 rounded-lg shadow-lg transition-colors duration-300 
                ${selectedIntensity === i ? 'bg-blue-500 text-white' : 'bg-gray-200 hover:bg-gray-300'}`}
            onClick={() => setSelectedIntensity(i)}>
            {i}
          </button>
        ))}

      </div>

      <div className="w-full h-[600px] overflow-auto p-4 bg-gray-100 rounded-lg">
        {exercises.length > 0 ? exercises.map((exercise, index) => (
          <div key={index} className="mb-6 p-6 bg-white rounded-lg shadow-lg flex items-center space-x-4">
            {exercise.Image && <img src={exercise.Image} alt="Exercise" className="w-32 h-32 object-cover rounded-lg" />}
            <div>
              <h2 className="text-xl font-bold">{exercise.WorkOut}</h2>
              <p><span className="text-red-500">Explanation:</span> {exercise.Explaination}</p>
              <p className="text-gray-900"><span className="text-red-500">Equipment:</span> {exercise.Equipment || "No specific info available"}</p>
              <p className="text-gray-900">Sets: {exercise.Intensity_Level}</p>
              <a href={exercise.Video} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700">Watch Video</a>
            </div>
          </div>
        )) : <p className="text-center text-gray-800">No exercises found.</p>}
      </div>
    </div>
  );
};

export default Exercise;