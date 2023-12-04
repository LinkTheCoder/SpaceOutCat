"use client"

import React, { useState, useEffect } from 'react';
import { auth, firestore } from '../../firebaseConfig.js';

function DigestionTracker() {
  const [user, setUser] = useState(null);
  const [digestions, setDigestions] = useState(null); // Use null for initial state

  useEffect(() => {
    // Check if a user is logged in on component mount
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
      if (user) {
        fetchDigestions(user);
      }
    });

    return () => unsubscribe();
  }, []);

  const fetchDigestions = async (user) => {
    try {
      const userRef = firestore.collection('users').doc(user.uid);
      const digestionDocRef = userRef.collection('digestionsData').doc('digestionsData');

      const doc = await digestionDocRef.get();

      if (doc.exists) {
        const data = doc.data();
        if (data.digestions) {
          setDigestions(data.digestions);
        } else {
       
          setDigestions([
            { day: 'Monday', digestion: '' },
            { day: 'Tuesday', digestion: '' },
            { day: 'Wednesday', digestion: '' },
            { day: 'Thursday', digestion: '' },
            { day: 'Friday', digestion: '' },
            { day: 'Saturday', digestion: '' },
            { day: 'Sunday', digestion: '' },
          ]);
        }
      } else {
        
        await digestionDocRef.set({ digestions });
      }
    } catch (error) {
      console.error('Error fetching data from Firebase Firestore:', error);
    }
  };

  const saveDigestions = async () => {
    if (!user || digestions === null) return; // Don't save if the user is not logged in or the data is not ready
    try {
      const userRef = firestore.collection('users').doc(user.uid);
      const digestionDocRef = userRef.collection('digestionsData').doc('digestionsData');

      // Ensure the digestion document exists before updating
      await digestionDocRef.set({ digestions }, { merge: true });
    } catch (error) {
      console.error('Error saving digestion data:', error);
    }
  };

  useEffect(() => {
    if (digestions !== null) {
      // Only save data once it's fetched to avoid overwriting it with the initial null state
      saveDigestions();
    }
  }, [digestions, user]);

  const handleDigestionChange = (index, newValue) => {
    const newDigestions = [...digestions];
    newDigestions[index].digestion = newValue;
    setDigestions(newDigestions);
  };

  if (digestions === null) {
    return <div className='text-primary'>Loading...</div>;
  }

  return (
    <div className="flex flex-wrap justify-center mt-10">
      {digestions.map((digestion, index) => (
        <div key={index} className="p-4 m-2 border rounded-md w-1/7 border-primary">
          <h3 className="font-bold text-center text-primary">{digestion.day}</h3>
          <select
            value={digestion.digestion}
            onChange={(e) => handleDigestionChange(index, e.target.value)}
            className="w-full mt-4 bg-transparent border rounded-md text-primary border-primary focus:outline-none focus:border-violet-400 focus:ring-1 focus:ring-violet-400"
          >
            <option value="">Select Digestion</option>
            <option value="💧">💧</option>
            <option value="💩">💩</option>
            <option value="🪨">🪨</option>
          </select>
        </div>
      ))}
    </div>
  );
}

export default DigestionTracker;
