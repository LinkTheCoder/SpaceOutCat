import React from 'react';
import CatNaut from '../public/img/CatNaut.gif';
import Image from 'next/image';

//testing
export default function Header() {
    return ( 
    <div className="mt-5 text-center">
    <Image
      src={CatNaut}
      alt="..."
      className="block mx-auto lg:max-w-sm sm:max-w-full mt-8"
    />
  </div>
  );
};