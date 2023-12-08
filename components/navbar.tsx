"use client"

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaSmileBeam, FaUserAstronaut, FaSpa } from 'react-icons/fa';
import { GiNightSleep } from 'react-icons/gi';
import { VscBellDot, VscBell } from 'react-icons/vsc';
import { auth, firestore } from '../firebaseConfig';

export default function Nav() {
  const pathname = usePathname();

  // Conditionally render based on the route
  const shouldRenderNav = pathname !== '/' && pathname !== '/login';

  const [notificationState, setNotificationState] = useState(false);

  useEffect(() => {
    if (auth.currentUser) {
      const userRef = firestore.collection('users').doc(auth.currentUser.uid);
      const unsubscribe = userRef.onSnapshot((doc) => {
        if (doc.exists) {
          const data = doc.data();
          setNotificationState(data.notification === true);
        } else {
          setNotificationState(false);
        }
      });

      return () => {
        unsubscribe();
      };
    }
  }, []);

  // Conditionally render the component
  if (!shouldRenderNav) {
    return null; // Return null to don't render the Nav component
  }
  
  return (
    <footer className="fixed bottom-0">
      <nav className="fixed bottom-0 w-full z-50 backdrop-blur-sm bg-secondary/50">
        <div className="flex py-2 md:py-4">
          <div className="flex mx-auto space-x-7">
            <Link href="/mindfulness">
              <div>
                <button className="duration-150 hover:opacity-50" id="start">
                  <FaSpa color="#ba68c8" size="2em" />
                </button>
              </div>
            </Link>
            <Link href="/health-tracker">
              <div>
                <button className="duration-150 hover:opacity-50" id="start">
                  <FaSmileBeam color="#ba68c8" size="2em" />
                </button>
              </div>
            </Link>
            <Link href="/sleep-sounds">
              <div>
                <button className="duration-150 hover:opacity-50" id="start">
                  <GiNightSleep color="#ba68c8" size="2em" />
                </button>
              </div>
            </Link>
            <Link href="/profile">
              <div>
                <button className="duration-150 hover:opacity-50" id="start">
                  <FaUserAstronaut color="#ba68c8" size="2em" />
                </button>
              </div>
            </Link>
            <Link href="/updates">
              <div>
                {notificationState ? (
                  <button className="duration-150 hover:opacity-50" id="start">
                    <VscBellDot color="#ba68c8" size="2em" />
                  </button>
                ) : (
                  <button className="duration-150 hover:opacity-50" id="start">
                    <VscBell color="#ba68c8" size="2em" />
                  </button>
                )}
              </div>
            </Link>
          </div>
        </div>
      </nav>
    </footer>
  );
}
