"use client"

import React, { useState, useEffect } from 'react';
import { auth, firestore } from '../../firebaseConfig.js';

function PeriodTracker() {
  const [user, setUser] = useState(null);
  const [periods, setPeriods] = useState(null); // Use null for initial state

  useEffect(() => {
    // Check if a user is logged in on component mount
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
      if (user) {
        fetchPeriods(user);
      }
    });

    return () => unsubscribe();
  }, []);

  const fetchPeriods = async (user) => {
    try {
      const userRef = firestore.collection('users').doc(user.uid);
      const periodsDocRef = userRef.collection('periodsData').doc('periodsData');

      const doc = await periodsDocRef.get();

      if (doc.exists) {
        const data = doc.data();
        if (data.periods) {
          setPeriods(data.periods);
        } else {
       
          setPeriods([
            { day: 'Monday', period: '' },
            { day: 'Tuesday', period: '' },
            { day: 'Wednesday', period: '' },
            { day: 'Thursday', period: '' },
            { day: 'Friday', period: '' },
            { day: 'Saturday', period: '' },
            { day: 'Sunday', period: '' },
          ]);
        }
      } else {
        
        await periodsDocRef.set({ periods });
      }
    } catch (error) {
      console.error('Error fetching data from Firebase Firestore:', error);
    }
  };

  const savePeriods = async () => {
    if (!user || periods === null) return; // Don't save if the user is not logged in or the data is not ready
    try {
      const userRef = firestore.collection('users').doc(user.uid);
      const periodsDocRef = userRef.collection('periodsData').doc('periodsData');

      // Ensure the periods document exists before updating
      await periodsDocRef.set({ periods }, { merge: true });
    } catch (error) {
      console.error('Error saving period data:', error);
    }
  };

  useEffect(() => {
    savePeriods();
  }, [periods, user]);

  const handlePeriodChange = (index, newValue) => {
    const newPeriods = [...periods];
    newPeriods[index].period = newValue;
    setPeriods(newPeriods);
  };

  if (periods === null) {

    return <div className='text-primary'>Loading...</div>;
  }

  return (
    <div className="flex flex-wrap justify-center mt-10">
      {periods.map((period, index) => (
        <div key={index} className="p-4 m-2 border rounded-md w-1/7 border-primary">
          <h3 className="font-bold text-center text-primary">{period.day}</h3>
          <select
            value={period.period}
            onChange={(e) => handlePeriodChange(index, e.target.value)}
            className="w-full mt-4 bg-transparent border rounded-md text-primary border-primary focus:outline-none focus:border-violet-400 focus:ring-1 focus:ring-violet-400"
          >
            <option value="">Select Flow</option>
            <option value="🩸">🩸</option>
            <option value="🩸🩸">🩸🩸</option>
            <option value="🩸🩸🩸">🩸🩸🩸</option>
            <option value="🩸🩸🩸🩸">🩸🩸🩸🩸</option>
          </select>
        </div>
      ))}
    </div>
  );
}

export default PeriodTracker;
