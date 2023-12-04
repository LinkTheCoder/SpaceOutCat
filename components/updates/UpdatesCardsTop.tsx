"use client"

import React, { useState, useEffect } from 'react';
import { BsCircleFill } from 'react-icons/bs';
import { auth, firestore } from '../../firebaseConfig'; // Import your Firebase config

const UpdatesCardsTop = (props) => {
  const [updateState, setUpdateState] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        const userRef = firestore.collection('users').doc(currentUser.uid);
        const doc = await userRef.get();
        if (doc.exists) {
          const data = doc.data();
          setUpdateState(data.notification === true);
        } else {
          setUpdateState(false);
        }
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  useEffect(() => {
    // Add a new effect to update updateState when user data changes
    if (user) {
      const userRef = firestore.collection('users').doc(user.uid);
      userRef.onSnapshot((doc) => {
        if (doc.exists) {
          const data = doc.data();
          setUpdateState(data.notification === true);
        }
      });
    }
  }, [user]); // Listen for changes in the user object

  const handleCardClick = () => {
    if (user && updateState) {
      const userRef = firestore.collection('users').doc(user.uid);
      userRef.update({ notification: false });
    }
  };

  return (
    <div
      className="relative max-w-sm p-4 mx-auto mt-10 mb-4 border-2 rounded-lg border-primary"
      onClick={handleCardClick}
    >
      <details>
        <summary className="text-lg font-black cursor-pointer text-primary">{props.title}</summary>
        <ul className="pl-6 mt-2 list-disc text-primary">
          <li>{props.note1}</li>
          <li>{props.note2}</li>
        </ul>
      </details>
      {updateState && (
        <div className="absolute top-0 right-0 p-2">
          <BsCircleFill className="text-primary" />
        </div>
      )}
    </div>
  );
};

export default UpdatesCardsTop;
