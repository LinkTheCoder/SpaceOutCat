"use client";

import React, { useState, useEffect } from 'react';
import { auth, firestore } from '../../firebaseConfig.js';

function SleepTracker() {
  const [user, setUser] = useState(null);
  const [sleep, setSleep] = useState(null); // Use null for initial state

  useEffect(() => {
    // Check if a user is logged in on component mount
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
      if (user) {
        fetchSleep(user);
      }
    });

    return () => unsubscribe();
  }, []);

  const fetchSleep = async (user) => {
    try {
      const userRef = firestore.collection('users').doc(user.uid);
      const sleepDocRef = userRef.collection('sleepData').doc('sleepData');

      const doc = await sleepDocRef.get();

      if (doc.exists) {
        const data = doc.data();
        if (data.sleep) {
          setSleep(data.sleep);
        } else {
          setSleep([
            { day: 'Monday', sleep: '' },
            { day: 'Tuesday', sleep: '' },
            { day: 'Wednesday', sleep: '' },
            { day: 'Thursday', sleep: '' },
            { day: 'Friday', sleep: '' },
            { day: 'Saturday', sleep: '' },
            { day: 'Sunday', sleep: '' },
          ]);
        }
      } else {
        await sleepDocRef.set({ sleep });
      }
    } catch (error) {
      console.error('Error fetching data from Firebase Firestore:', error);
    }
  };

  const saveSleep = async () => {
    if (!user || sleep === null) return; // Don't save if the user is not logged in or the data is not ready
    try {
      const userRef = firestore.collection('users').doc(user.uid);
      const sleepDocRef = userRef.collection('sleepData').doc('sleepData');

      // Ensure the sleep document exists before updating
      await sleepDocRef.set({ sleep }, { merge: true });
    } catch (error) {
      console.error('Error saving sleep data:', error);
    }
  };

  useEffect(() => {
    if (sleep !== null) {
      // Only save data once it's fetched to avoid overwriting it with the initial null state
      saveSleep();
    }
  }, [sleep, user]);

  const handleSleepChange = (index, newValue) => {
    const newSleep = [...sleep];
    newSleep[index].sleep = newValue;
    setSleep(newSleep);
  };

  if (sleep === null) {
    return <div className='text-primary'>Loading...</div>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4 mt-10">
      {sleep.map((sleepDay, index) => (
        <div key={index} className="p-4 m-2 border rounded-md w-1/7 border-primary">
          <h3 className="font-bold text-center text-primary">{sleepDay.day}</h3>
          <select
            value={sleepDay.sleep}
            onChange={(e) => handleSleepChange(index, e.target.value)}
            className="w-full mt-4 bg-transparent border rounded-md text-primary border-primary focus:outline-none focus:border-violet-400 focus:ring-1 focus:ring-violet-400"
          >
            <option value="">Select</option>
            <option value="😴">😴</option>
            <option value="🥱">🥱</option>
            <option value="🦉">🦉</option>
          </select>
        </div>
      ))}
    </div>
  );
}

export default SleepTracker;
