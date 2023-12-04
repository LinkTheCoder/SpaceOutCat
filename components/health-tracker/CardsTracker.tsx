import React from 'react';

const CardsTracker = (props) => {
  return (
    <div className="rounded overflow-hidden">
    <div className="px-6 py-4 text-center">
      <div className="text-5xl mb-5">{props.emoji}</div>
      <details>
<summary className="text-primary font-bold text-3xl mb-2">{props.summary}</summary>
{props.tracker}
</details>
    </div>
    <div className="mb-7 px-6 pt-4 pb-2 text-center md:mb-0">
    </div>
  </div>
  );
};

export default CardsTracker;