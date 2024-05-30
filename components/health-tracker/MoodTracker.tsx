
'use client'

import React, { useState, useEffect } from 'react';
import { auth, firestore } from '../../firebaseConfig.js';

function MoodTracker() {
  const [user, setUser] = useState(null);
  const [moods, setMoods] = useState(null); // Use null for initial state

  useEffect(() => {
    // Check if a user is logged in on component mount
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
      if (user && moods === null) {
        // Fetch data only if the user is logged in and data is not yet fetched
        fetchMoods(user);
      }
    });

    return () => unsubscribe();
  }, [moods]); // Add 'moods' as a dependency

  const fetchMoods = async (user) => {
    try {
      const userRef = firestore.collection('users').doc(user.uid);
      const moodsDocRef = userRef.collection('moodsData').doc('moodsData');

      const doc = await moodsDocRef.get();

      if (doc.exists) {
        const data = doc.data();
        if (data.moods) {
          setMoods(data.moods);
        } else {
          // If the moods array is not found in the subcollection, set it to the initial state
          setMoods([
            { day: 'Monday', mood: '' },
            { day: 'Tuesday', mood: '' },
            { day: 'Wednesday', mood: '' },
            { day: 'Thursday', mood: '' },
            { day: 'Friday', mood: '' },
            { day: 'Saturday', mood: '' },
            { day: 'Sunday', mood: '' },
          ]);
        }
      } else {
        // If the moods document doesn't exist, create it along with the moodsData subcollection
        await moodsDocRef.set({ moods });
      }
    } catch (error) {
      console.error('Error fetching data from Firebase Firestore:', error);
    }
  };

  const saveMoods = async () => {
    if (!user || moods === null) return; // Don't save if the user is not logged in or the data is not ready
    try {
      const userRef = firestore.collection('users').doc(user.uid);
      const moodsDocRef = userRef.collection('moodsData').doc('moodsData');

      // Ensure the moods document exists before updating
      await moodsDocRef.set({ moods }, { merge: true });
    } catch (error) {
      console.error('Error saving mood data:', error);
    }
  };

  useEffect(() => {
    saveMoods();
  }, [moods, user]);

  const handleMoodChange = (index, newValue) => {
    const newMoods = [...moods];
    newMoods[index].mood = newValue;
    setMoods(newMoods);
  };

  if (moods === null) {
    return <div className='text-primary'>Loading...</div>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4 mt-10">
      {moods.map((mood, index) => (
        <div key={index} className="p-4 m-2 border rounded-md border-primary">
          <h3 className="font-bold text-center text-primary">{mood.day}</h3>
          <select
            value={mood.mood}
            onChange={(e) => handleMoodChange(index, e.target.value)}
            className="w-full mt-4 bg-transparent border rounded-md text-primary border-primary focus:outline-none focus:border-violet-400 focus:ring-1 focus:ring-violet-400"
          >
            <option value="">Select</option>
            <option value="🙀">🙀</option>
            <option value="😿">😿</option>
            <option value="😾">😾</option>
            <option value="😸">😸</option>
            <option value="😻">😻</option>
          </select>
        </div>
      ))}
    </div>
  );
}

export default MoodTracker;
