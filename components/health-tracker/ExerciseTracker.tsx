"use client";

import React, { useState, useEffect } from 'react';
import { auth, firestore } from '../../firebaseConfig.js';

function ExerciseTracker() {
  const [user, setUser] = useState(null);
  const [exercises, setExercises] = useState(null); // Use null for initial state

  useEffect(() => {
    // Check if a user is logged in on component mount
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
      if (user) {
        fetchExercises(user);
      }
    });

    return () => unsubscribe();
  }, []);

  const fetchExercises = async (user) => {
    try {
      const userRef = firestore.collection('users').doc(user.uid);
      const exerciseDocRef = userRef.collection('exerciseData').doc('exerciseData');

      const doc = await exerciseDocRef.get();

      if (doc.exists) {
        const data = doc.data();
        if (data.exercises) {
          setExercises(data.exercises);
        } else {
          setExercises([
            { day: 'Monday', exercise: '' },
            { day: 'Tuesday', exercise: '' },
            { day: 'Wednesday', exercise: '' },
            { day: 'Thursday', exercise: '' },
            { day: 'Friday', exercise: '' },
            { day: 'Saturday', exercise: '' },
            { day: 'Sunday', exercise: '' },
          ]);
        }
      } else {
        await exerciseDocRef.set({ exercises });
      }
    } catch (error) {
      console.error('Error fetching data from Firebase Firestore:', error);
    }
  };

  const saveExercises = async () => {
    if (!user || exercises === null) return; // Don't save if the user is not logged in or the data is not ready
    try {
      const userRef = firestore.collection('users').doc(user.uid);
      const exerciseDocRef = userRef.collection('exerciseData').doc('exerciseData');

      // Ensure the exercise document exists before updating
      await exerciseDocRef.set({ exercises }, { merge: true });
    } catch (error) {
      console.error('Error saving exercise data:', error);
    }
  };

  useEffect(() => {
    if (exercises !== null) {
      // Only save data once it's fetched to avoid overwriting it with the initial null state
      saveExercises();
    }
  }, [exercises, user]);

  const handleExerciseChange = (index, newValue) => {
    const newExercises = [...exercises];
    newExercises[index].exercise = newValue;
    setExercises(newExercises);
  };

  if (exercises === null) {
    return <div className='text-primary'>Loading...</div>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4 mt-10">
      {exercises.map((exercise, index) => (
        <div key={index} className="p-4 m-2 border rounded-md w-1/7 border-primary">
          <h3 className="font-bold text-center text-primary">{exercise.day}</h3>
          <select
            value={exercise.exercise}
            onChange={(e) => handleExerciseChange(index, e.target.value)}
            className="w-full mt-4 bg-transparent border rounded-md text-primary border-primary focus:outline-none focus:border-violet-400 focus:ring-1 focus:ring-violet-400"
          >
            <option value="">Select</option>
            <option value="💪">💪</option>
            <option value="🏃">🏃</option>
            <option value="🧘">🧘</option>
            <option value="🚴">🚴</option>
            <option value="🏊">🏊</option>
            <option value="🥅">🥅</option>
            <option value="🥊">🥊</option>
            <option value="🥋">🥋</option>
            <option value="⛳">⛳</option>
            <option value="🎾">🎾</option>
          </select>
        </div>
      ))}
    </div>
  );
}

export default ExerciseTracker;
