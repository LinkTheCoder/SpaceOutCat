import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const CardsMindfulness = (props) => {
  return (
    <Link href={props.path}>
    <div className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer">          
<div className="absolute top-0 left-0 w-full h-full bg-black opacity-40 hover:opacity-20"></div>
        <Image className="object-cover w-full h-36" src={props.bg} alt={props.alt}/>

        <div className="absolute top-0 left-0 px-6 py-4">
            <h4 className="mb-3 text-xl font-semibold tracking-tight text-white">{props.title}</h4>
            <p className="leading-normal text-gray-100">{props.description}</p>
        </div>
    </div>
    </Link>
  );
};

export default CardsMindfulness;