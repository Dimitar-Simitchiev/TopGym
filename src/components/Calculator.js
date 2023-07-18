import React, { useState } from 'react';
import './CalorieCalculator.css';
const CalorieCalculator = () => {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('male');
  const [activityLevel, setActivityLevel] = useState('sedentary');
  const [calorieIntake, setCalorieIntake] = useState(null);

  const calculateCalories = () => {
    // Constants for calorie calculations
    const caloriesPerKgMale = 10;
    const caloriesPerKgFemale = 9.5;
    const activityFactors = {
      sedentary: 1.2,
      lightlyActive: 1.375,
      moderatelyActive: 1.55,
      veryActive: 1.725,
      extraActive: 1.9
    };

    // Calculate basal metabolic rate (BMR) based on gender
    let bmr;
    if (gender === 'male') {
      bmr = caloriesPerKgMale * weight;
    } else {
      bmr = caloriesPerKgFemale * weight;
    }

    // Adjust BMR based on activity level
    const activityFactor = activityFactors[activityLevel];
    const tdee = bmr * activityFactor;

    // Calculate daily calorie intake
    const calorieIntake = tdee;

    setCalorieIntake(calorieIntake);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    calculateCalories();
  };

  return (
    <div className="calorie-calculator" id='calculator'>
      <h1>Calorie Calculator</h1>
      <form onSubmit={handleFormSubmit}>
        <div>
          <label>Weight (in kilograms):</label>
          <input
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
        </div>
        <div>
          <label>Height (in centimeters):</label>
          <input
            type="number"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />
        </div>
        <div>
          <label>Age:</label>
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </div>
        <div>
          <label>Gender:</label>
          <select value={gender} onChange={(e) => setGender(e.target.value)}>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
        <div>
          <label>Activity Level:</label>
          <select value={activityLevel} onChange={(e) => setActivityLevel(e.target.value)}>
            <option value="sedentary">Sedentary</option>
            <option value="lightlyActive">Lightly Active</option>
            <option value="moderatelyActive">Moderately Active</option>
            <option value="veryActive">Very Active</option>
            <option value="extraActive">Extra Active</option>
          </select>
        </div>
        <button type="submit" className="btn-calculate">Calculate</button>
      </form>
      {calorieIntake !== null && (
        <div>
          <h2>Daily Calorie Intake:</h2>
          <p>{calorieIntake} calories</p>
        </div>
      )}
    </div>
  );
};

export default CalorieCalculator;