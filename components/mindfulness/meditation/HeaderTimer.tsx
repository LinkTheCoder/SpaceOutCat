import Timer from './Timer'
import CatNaut from '../../../public/img/CatNaut.gif';
import Image from 'next/image';

export default function HeaderTimer() {
    return ( 

        <><><div id="main" className="md:flex grid-rows-1 justify-evenly sm:flex grid grid-rows-1 ">
        <div className="mt-20 text-center text-white"><Timer /></div>
        
        <div className="mt-5 text-center text-white">
            <Image src={CatNaut} alt="..." className="lg:max-w-sm mt-0 sm:max-w-full mt-8" />
        </div>
    </div>
    </><div>
        </div></>
  )
}
