import CatNaut from '../../public/img/CatNaut.gif';
import { useState, useEffect } from 'react';
import { auth } from '../../firebaseConfig';
import Image from 'next/image';

export default function Avatar() {
  const [displayName, setDisplayName] = useState('');
  const [loading, setLoading] = useState(true); // Add loading state

  useEffect(() => {
    // Firebase listener to check if the user is logged in
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        // Fetch the displayName when the user object is available
        setDisplayName(user.displayName);
        setLoading(false); // Update the loading state once the displayName is fetched
      } else {
        setLoading(false); // Update the loading state even when there's no user
      }
    });

    // Unsubscribe from the auth listener when the component unmounts
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <>
      <div className="px-6 py-4 text-center">
        <div className="mb-2 text-3xl font-bold text-primary">
          {loading ? (
            <div>Loading name...</div>
          ) : (
            <input
              type="text"
              value={displayName}
              readOnly
              className="w-48 pt-2 pb-2 text-xl text-3xl font-bold text-center bg-transparent border-2 border-b-4 outline-none border-primary lg:text-3xl lg:w-72 md:w-60 md:text-2xl sm:"
            />
          )}
        </div>
        <Image
          src={CatNaut}
          alt="..."
          className="block mx-auto mt-8 lg:w-3/5 sm:max-w-full"
        />
      </div>
<div className="px-6 pt-4 pb-2 text-center mb-7 md:mb-0"></div>
    </>
  );
}
