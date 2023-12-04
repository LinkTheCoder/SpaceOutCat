"use client"

import { useState, useEffect } from 'react';
import { FaPlay, FaPause, FaBackward } from 'react-icons/fa';

export default function Timer() {
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [tens, setTens] = useState(0);
  const [intervalId, setIntervalId] = useState(null);

  useEffect(() => {
    // clear interval on component unmount
    return () => clearInterval(intervalId);
  }, [intervalId]);

  const startTimer = () => {
    setTens((prevTens) => {
      let newTens = prevTens + 1;
      if (newTens > 99) {
        setSeconds((prevSeconds) => {
          let newSeconds = prevSeconds + 1;
          if (newSeconds > 59) {
            setMinutes((prevMinutes) => prevMinutes + 1);
            newSeconds = 0;
          }
          setSeconds(newSeconds);
          return newSeconds;
        });
        newTens = 0;
      }
      setTens(newTens);
      return newTens;
    });
  };

  const handleStart = () => {
    clearInterval(intervalId);
    const newIntervalId = setInterval(startTimer, 10);
    setIntervalId(newIntervalId);
  };

  const handleStop = () => {
    clearInterval(intervalId);
    setIntervalId(null);
  };

  const handleReset = () => {
    clearInterval(intervalId);
    setMinutes(0);
    setSeconds(0);
    setTens(0);
    setIntervalId(null);
  };

  return (
    <>
      <p className="time">
        <span id="minutes">{minutes.toString().padStart(2, '0')}</span>:
        <span id="seconds">{seconds.toString().padStart(2, '0')}</span>:
        <span id="tens">{tens.toString().padStart(2, '0')}</span>
      </p>
      <button className="mx-3 hover:opacity-50 duration-150" onClick={handleStart}>
        <FaPlay color="#ba68c8" size="2em" />
      </button>
      <button className="mx-3 hover:opacity-50 duration-150" onClick={handleStop}>
        <FaPause color="#cdcdcd" size="2em" />
      </button>
      <button className="mx-3 hover:opacity-50 duration-150" onClick={handleReset}>
        <FaBackward color="#ba68c8" size="2em" />
      </button>
    </>
  );
}
