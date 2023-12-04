"use client"

import React, { useEffect } from 'react';
import Header from '../../components/header';
import CardsSleepSounds from '../../components/sleep-sounds/CardsSleepSounds';

export default function SleepSounds() {
  useEffect(() => {
    let wakeLock = null;

    const requestWakeLock = async () => {
      try {
        wakeLock = await navigator.wakeLock.request('screen');
        console.log('Screen wake lock acquired');
      } catch (err) {
        console.error('Error acquiring wake lock:', err);
      }
    };

    requestWakeLock();

    // Release wake lock when the component is unmounted
    return () => {
      if (wakeLock) {
        wakeLock.release();
        console.log('Screen wake lock released');
      }
    };
  }, []); // Empty dependency array ensures the effect runs only once on mount

  return (
    <>
      <Header />
      <div className="grid grid-cols-1 gap-4 mt-6 md:grid-cols-3">
      <CardsSleepSounds title="Rain 🌧️" sound="/sound/Rain.mp3" />
        <CardsSleepSounds title="Waves 🌊" sound="/sound/Ocean.mp3" />
        <CardsSleepSounds title="Birds 🐦" sound="/sound/Birds.mp3" />
        <CardsSleepSounds title="Soft Music 🎵" sound="/sound/Relax.mp3" />
        <CardsSleepSounds title="Crickets 🦗" sound="/sound/Crickets.mp3" />
        <CardsSleepSounds title="Tumbler 💨" sound="/sound/Tumbler.mp3" />
        <div className='mt-20'></div>
      </div>
    </>
  );
}
