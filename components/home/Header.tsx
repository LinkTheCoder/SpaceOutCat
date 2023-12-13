'use client'

import CatNaut from '../../public/img/CatNaut.gif';
import { useState} from 'react';
import {IoShareOutline} from 'react-icons/io5';
import { FaGlobe,FaGooglePlay,FaApple,FaPlusSquare} from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {  
  const [showIOSModal, setShowIOSModal] = useState(false);
  const openIOSModal = () => {
    setShowIOSModal(true);
  };

  const closeIOSModal = () => {
    setShowIOSModal(false);
  };

    return ( 
      <><div className="m-2 text-center lg:text-left lg:flex lg:grid-rows-2 justify-evenly sm:flex grid grid-rows-1">
        <div>
          <h1 className="mt-5 lg:mt-20 text-primary text-5xl uppercase font-black">Space Out Cat</h1>
          <p className='mt-10 text-lg'>A meowtastic self-care app</p>
  
          <div className="lg:flex lg:grid-rows-2 md:flex md:grid-rows-1 justify-evenly text-center sm:flex flex-col">
            <div>
  
            <div className="mt-10 flex flex-col sm:flex-row sm:space-x-2">
    <Link href="/login">
      <button className="mx-auto bg-transparent border-dotted border-2 border-primary text-primary hover:bg-primary hover:text-black font-bold py-2 px-4 rounded flex items-center">
        <FaGlobe className="mb-1 mr-2" /> WEB APP
      </button>
    </Link>
  
    <button onClick={openIOSModal} className="mx-auto mt-2 sm:mt-0 bg-transparent border-dotted border-2 border-primary text-primary hover:bg-primary hover:text-black font-bold py-2 px-4 rounded flex items-center">
          <FaApple className="mb-1 mr-2" /> APPLE
        </button>
    </div>
  
  <div className="mt-2 flex flex-col sm:flex-row sm:space-x-2">
        <a href="https://play.google.com/store/apps/details?id=app.netlify.spaceoutcat.twa" className="mx-auto md:mx-0 bg-transparent border-dotted border-2 border-primary text-primary hover:bg-primary hover:text-black font-bold py-2 px-4 rounded flex items-center">
          <FaGooglePlay className="mr-2" /> GOOGLE PLAY
        </a>
  </div>
                </div>
          </div>
        </div>
        <div className="text-center text-white">
        <Image src={CatNaut} alt="CatNaut" className="lg:max-w-sm sm:max-w-full lg:mt-8 sm:mt-4" />
        </div>
      </div>

        {/* iOS Modal */}
        {showIOSModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="fixed inset-0 bg-gray-900 opacity-50"></div>
          <div className="bg-slate-800 p-8 rounded shadow-lg z-10">
            {/* iOS Modal content */}
            <h2 className="text-center text-2xl text-primary mb-4">Download on Iphone & Ipad</h2>
            <ul className="text-center text-gray-400 mb-4 flex items-center list-disc">
  
  <li>Open website on <b>Iphone</b> or <b>Ipad</b></li>
  <FaApple className="ml-1 mb-1" size={24} />
  </ul>
  <ul className="text-gray-400 mb-4 flex items-center list-disc">
  <li>Press <b>Share</b></li>
  <IoShareOutline className="ml-1 mb-1" size={24} />
</ul>
  <ul className="text-gray-400 mb-4 flex items-center list-disc">
  <li>Press <b>Add To Home</b></li>
  <FaPlusSquare className="ml-1 mb-1" size={24} />
</ul>
<ul className="text-gray-400 mb-4 flex items-center list-disc">
  <li>Press <b>Add</b></li>
</ul>
            <div className="flex justify-center">
              <button
                className="bg-gray-500 text-white px-4 py-2 rounded"
                onClick={closeIOSModal}
              >
                Close
              </button>
            </div>
          </div>
        </div>
         )}
    </>
  );
}
