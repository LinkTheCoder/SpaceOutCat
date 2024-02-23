"use client"

import { useState, useEffect } from 'react';
import CatNaut from '../../../public/img/CatNaut.gif';
import { auth, firestore } from '../../../firebaseConfig.js';
import Image from 'next/image';

export default function Mindfulness() {
  const [text, setText] = useState('');
  const [diaryBadge, setDiaryBadge] = useState(false);
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
      if (user) {
        fetchData(user);
      }
    });

    return () => unsubscribe();
  }, []);

  const fetchData = async (user) => {
    try {
      const diaryDataRef = firestore.collection('users').doc(user.uid).collection('diaryData').doc('diaryEntry');
      const doc = await diaryDataRef.get();

      if (doc.exists) {
        const data = doc.data();
        setText(data.text || '');
        setDiaryBadge(data.diaryBadge || false);
      } else {
        await diaryDataRef.set({
          text: '',
          diaryBadge: false,
        });
      }
    } catch (error) {
      console.error('Error fetching data from Firebase Firestore:', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (text.trim().length > 0 && user) {
      const diaryDataRef = firestore.collection('users').doc(user.uid).collection('diaryData').doc('diaryEntry');
      diaryDataRef
        .set({
          text: text,
          diaryBadge: true,
        })
        .then(() => {
          setDiaryBadge(true);
        })
        .catch((error) => {
          console.error('Error saving data to Firebase Firestore:', error);
        });
    }
  }, [text, user]);

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      setText(text + '\n');
    }
  };

  const handleChange = (event) => {
    setText(event.target.value);
  };

  return (
    <>
      <div className="mt-5 text-center text-white">
        <Image
          src={CatNaut}
          alt="..."
          className="block mx-auto lg:max-w-sm sm:max-w-full mt-8 mb-10"
        />
      </div>

      <div className="flex justify-center">
        <textarea
          className="border border-gray-300 p-2 rounded-md w-2/4 resize-none h-40 lg:w-2/4 sm:w-72 sm:h-60"
          value={text}
          onKeyDown={handleKeyDown}
          onChange={handleChange}
          placeholder={isLoading ? "" : " 😣 Write about your worries. \n🤔 Think about how possible is this to happen or what could you do if it does. \n😌 Try to find small solutions to the problem to make you feel slowly more at ease."}
          disabled={isLoading} // Disable textarea while loading
        />
      </div>
      <div className="mb-16 px-6 pt-4 pb-2 text-center"></div>
    </>
  );
}
