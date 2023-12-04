import React from 'react';

const CardsSleepSounds = (props) => {
  return (
    <div>
    <h2 className="mt-6 flex justify-center items-center text-2xl text-primary font-bold mb-2">
      {props.title}
    </h2>
    <audio controls loop className='mx-auto'>
      <source src={props.sound} type="audio/mp3"></source>
      Your browser does not support the audio element.
    </audio>
  </div>
  );
};

export default CardsSleepSounds;