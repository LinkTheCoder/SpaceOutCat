import {FaChrome, FaGithub, FaEdge, FaWindows, FaLinux, FaApple, FaAndroid} from 'react-icons/fa';


export default function CardPWA() {
    return ( 
      
<div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">

<div className="rounded overflow-hidden">
  <div className="px-6 py-4 text-center">
    <div className="text-primary text-3xl mb-5 flex justify-center space-x-3">
    <FaChrome color="#ba68c8"/>
    <FaEdge color="#ba68c8"/>
    <FaWindows color="#ba68c8"/>
    <FaLinux color="#ba68c8"/>
    <FaApple color="#ba68c8"/>
    <FaAndroid color="#ba68c8"/>
    </div>

    <div className="text-primary font-bold text-3xl mb-2">Get it on Desktop & Android!</div>
    <p className="text-gray text-base">
    Download the app by using Chrome or Edge on Windows, Linux, Mac or Android.
    </p>
    
    <button id="installApp" className="mt-5 bg-fuchsia-700 hover:bg-fuchsia-800 text-white font-bold py-2 px-4 rounded" >Install</button>
  
  </div>
  <div className="mb-7 px-6 pt-4 pb-2 text-center md:mb-0">
  </div>
</div>
<div className="rounded overflow-hidden">
  <div className="px-6 py-4 text-center">
  <div className="text-3xl mb-5 flex justify-center space-x-3">
  <FaApple color="#ba68c8"/>
    </div>

    <div className="text-primary font-bold text-3xl mb-2">Get it on iOS!</div>
    <p className="text-gray text-base">
    <li>Open the Share menu.</li>
 <li>Click Add to Home Screen.</li>
<li>Confirm the name of the app; the name is user-editable.</li>
<li>Click Add. On iOS and iPadOS, bookmarks to websites and PWAs look the same on the home screen.</li>
    </p>
  </div>
  <div className="mb-7 px-6 pt-4 pb-2 text-center md:mb-0">
  </div>
</div>

<div className="rounded overflow-hidden">
  <div className="px-6 py-4 text-center">
    <div className="text-3xl mb-5 flex justify-center space-x-3">
    <FaGithub color="#ba68c8"/>
    </div>

    <div className="text-primary font-bold text-3xl mb-2">Follow Me!</div>
    <p className="text-gray text-base">
If you want to follow my other works feel free to visit me on Github: @LinkTheCoder</p>
  </div>
  <div className="mb-7 px-6 pt-4 pb-2 text-center md:mb-0">
  </div>
</div>

</div>
  )
}