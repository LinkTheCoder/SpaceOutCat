"use client"

import Avatar from '../../components/profile/Avatar';
import Badges from '../../components/profile/Badges';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { auth } from '../../firebaseConfig.js';
import { signOut } from "../../firebaseConfig.js";

export default function Profile() {
  const router = useRouter(); // Use useRouter hook

  const handleSignOut = async () => {
    try {
      await signOut();
      router.push("/login"); // Use router.push for navigation
    } catch (err) {
      alert(err.message);
    }
  };

  const [userLoggedIn, setUserLoggedIn] = useState(false);

  useEffect(() => {
    // Firebase listener to check if user is logged in
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        // User is logged in
        setUserLoggedIn(true);
      } else {
        // User is not logged in, redirect to "/login"
        router.push('/login'); // Use router.push for navigation
      }
    });

    // Clean up the listener when the component unmounts
    return () => unsubscribe();
  }, [router]);

  if (!userLoggedIn) {
    // Show loading spinner or message while checking authentication status
    return <div>Loading...</div>;
  }

  return (
    <div className="grid grid-cols-1 p-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
      <div className="overflow-hidden rounded">
        <Avatar />
      </div>
      <div className="overflow-hidden rounded">
        <Badges />
      </div>
      <button onClick={handleSignOut} className="px-4 py-2 mx-auto mb-5 font-bold text-white rounded-full bg-primary hover:bg-primary/70">
        SIGN OUT
      </button>
    </div>
  );
}
