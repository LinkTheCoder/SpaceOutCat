'use client'

import CatNaut from '../../public/img/CatNaut.gif';
import { FaGlobe, FaGooglePlay } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {  
  return ( 
    <>
      <div className="m-2 text-center lg:text-left lg:flex lg:grid-rows-2 justify-evenly sm:flex grid grid-rows-1">
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
    </>
  );
}
