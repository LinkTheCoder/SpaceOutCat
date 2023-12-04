"use client"

import React, { useState, useEffect } from 'react';
import { FaHourglassStart } from 'react-icons/fa';
import { HiRefresh } from 'react-icons/hi';
import { auth, firestore } from '../../../firebaseConfig.js';

const Counter = () => {
  const [startDate, setStartDate] = useState(null);
  const [daysCount, setDaysCount] = useState(0);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        fetchData(user);
      }
    });

    return () => unsubscribe();
  }, []);

  const fetchData = async (user) => {
    try {
      const counterRef = firestore.collection('users').doc(user.uid).collection('counters').doc('counterData');
      const doc = await counterRef.get();

      if (doc.exists) {
        const data = doc.data();
        setStartDate(data.startDate.toDate());
        setDaysCount(data.daysCount);
      } else {
        // If the counter document doesn't exist, create it with initial data
        await counterRef.set({
          startDate: null,
          daysCount: 0,
          SNSBadge: false, // Initialize SNSBadge to false
        });
      }
    } catch (error) {
      console.error('Error fetching data from Firebase Firestore:', error);
    }
  };

  const startCounter = () => {
    setStartDate(new Date());
    setDaysCount(0);
  };

  const refreshCounter = () => {
    setStartDate(new Date());
    setDaysCount(0);
  };

  useEffect(() => {
    if (startDate && daysCount >= 0) {
      const user = auth.currentUser;
      if (user) {
        const counterRef = firestore.collection('users').doc(user.uid).collection('counters').doc('counterData');
        counterRef.set(
          {
            startDate: startDate,
            daysCount: daysCount,
            SNSBadge: daysCount >= 7, // Set SNSBadge to true if daysCount is 7 or more
          },
          { merge: true }
        ).then(() => {
          console.log('Counter data and SNSBadge saved to Firestore successfully!');
        }).catch((error) => {
          console.error('Error saving counter data and SNSBadge to Firebase Firestore:', error);
        });
      }
    }
  }, [startDate, daysCount]);

  return (
    <div>
      <p className='text-4xl mb-6'>Days of detoxing: <span className='font-bold text-primary text-5xl'>{daysCount}</span></p>

      <button className="mx-3 hover:opacity-50 duration-150" onClick={startCounter}>
        <FaHourglassStart color="#ba68c8" size="2em" />
      </button>

      <button className="mx-3 hover:opacity-50 duration-150" onClick={refreshCounter}>
        <HiRefresh color="#ba68c8" size="2em" />
      </button>
    </div>
  );
};

export default Counter;
