import React from 'react';
import { BsCircleFill } from 'react-icons/bs';

const UpdatesCards = (props) => {
  return (
    <div
      className="relative max-w-sm p-4 mx-auto mt-10 mb-4 border-2 rounded-lg border-primary"
    >
      <details>
        <summary className="text-lg font-black cursor-pointer text-primary">{props.title}</summary>
        <ul className="pl-6 mt-2 list-disc text-primary">
          <li>{props.note1}</li>
          <li>{props.note2}</li>
        </ul>
      </details>
    </div>
  );
};

export default UpdatesCards;
