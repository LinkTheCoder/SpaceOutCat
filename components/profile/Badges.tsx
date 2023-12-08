import React, { useState, useEffect } from 'react';
import { auth, firestore } from '../../firebaseConfig.js';
import DiaryBadgeImageGray from '../../public/img/DiaryBadgeGray.png';
import DiaryBadgeImage from '../../public/img/DiaryBadge.png';
import SNSBadgeImageGray from '../../public/img/SNSBadgeGray.png';
import SNSBadgeImage from '../../public/img/SNSBadge.png';
import Image from 'next/image';

export default function Badges() {
  const [user, setUser] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState('');

  const [diaryBadgeState, setDiaryBadgeState] = useState(false);
  const [snsBadge, setSnsBadge] = useState(false);
  const [loading, setLoading] = useState(true);

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
      const userRef = firestore.collection('users').doc(user.uid);
      const doc = await userRef.get();

      if (doc.exists) {
        const data = doc.data();

        // Check if diaryBadge is true
        const diaryDataRef = userRef.collection('diaryData').doc('diaryEntry');
        const diaryDataDoc = await diaryDataRef.get();

        if (diaryDataDoc.exists) {
          const diaryData = diaryDataDoc.data();
          setDiaryBadgeState(diaryData.diaryBadge === true);
        } else {
          // If the diary entry doesn't exist, set initial values for the diary entry
          await diaryDataRef.set({
            diaryBadge: false,
          });
          setDiaryBadgeState(false);
        }

        // Check if SNSBadge is true
        const counterRef = userRef.collection('counters').doc('counterData');
        const counterDoc = await counterRef.get();

        if (counterDoc.exists) {
          const counterData = counterDoc.data();
          setSnsBadge(counterData.SNSBadge === true);
        } else {
          // If the counter document doesn't exist, create it with initial data
          await counterRef.set({
            SNSBadge: false,
          });
          setSnsBadge(false);
        }
      }
    } catch (error) {
      console.error('Error getting user data:', error);
    } finally {
      setLoading(false); // Set loading to false when the data fetching is done
    }
  };

  const handleImageClick = (badgeType) => {
    setModalOpen(true);

    if (badgeType === 'diary') {
      setModalContent('diary');
    } else if (badgeType === 'sns') {
      setModalContent('sns');
    }
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <>
     <div className="px-6 py-4 text-center">
  <div className="border-2 border-b-4 pt-2 pb-2 border-primary text-primary font-bold mb-2 lg:text-3xl lg:w-72 md:w-60 md:text-2xl sm: w-48 text-xl mx-auto">
    Achievements
  </div>

  {!loading && (
    <div className="flex justify-center mx-auto">
      <div className="flex">
        <Image
          src={diaryBadgeState ? DiaryBadgeImage : DiaryBadgeImageGray}
          alt="..."
          className="block w-20 mt-8 cursor-pointer mr-2"
          onClick={() => handleImageClick('diary')}
        />

        <Image
          src={snsBadge ? SNSBadgeImage : SNSBadgeImageGray}
          alt="..."
          className="block w-20 mt-8 cursor-pointer"
          onClick={() => handleImageClick('sns')}
        />
      </div>
    </div>
        )}
      </div>

      {modalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-80">
          <div className="bg-transparent rounded-lg p-8">
            {modalContent === 'diary' ? (
              <>
                <h2 className="text-center text-xl text-primary font-bold mb-4">DIARY BADGE</h2>
                <p className="text-center font-bold text-primary mb-4">Unlocked by writing in the thought diary</p>
                <Image src={diaryBadgeState ? DiaryBadgeImage : DiaryBadgeImageGray} alt="..." className="block mx-auto w-1/3 lg:w-1/3 sm:w-2/3" />
              </>
            ) : modalContent === 'sns' ? (
              <>
                <h2 className="text-center text-xl text-primary font-bold mb-4">SNS DETOX BADGE</h2>
                <p className="text-center font-bold text-primary mb-4">Unlocked by SNS detoxing for a week</p>
                <Image src={snsBadge ? SNSBadgeImage : SNSBadgeImageGray} alt="..." className="block mx-auto w-1/3 lg:w-1/3 sm:w-2/3" />
              </>
            ) : null}

            <div className="flex justify-center">
              <button
                className="content-center bg-primary text-white px-4 py-2 mt-4 rounded"
                onClick={handleCloseModal}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="mb-7 px-6 pt-4 pb-2 text-center md:mb-0"></div>
    </>
  );
}
