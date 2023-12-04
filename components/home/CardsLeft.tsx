import React from 'react';

const CardsLeft = (props) => {
  return (
    <div className="rounded overflow-hidden lg:mt-8 lg:ml-48">
    <div className="px-6 py-4 text-center lg:text-left">
      <div className="text-primary font-black uppercase text-3xl mb-2">{props.title}</div>
      <p className="text-gray font-base text-lg">
       {props.description}
      </p>
      <ul className='mt-4 text-primary font-base text-lg'>
        <li>{props.list1}</li>
        <li>{props.list2}</li>
        <li>{props.list3}</li>
        <li>{props.list4}</li>
      </ul>
    </div>
    <div className="mb-7 px-6 pt-4 pb-2 text-center md:mb-0">
    </div>
  </div>
  );
};

export default CardsLeft;
