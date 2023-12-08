import Counter from './Counter'
import CatNaut from '../../../public/img/CatNaut.gif';
import Image from 'next/image';


export default function HeaderSNS() {
    return ( 

        <><><div id="main" className="md:flex grid-rows-1 justify-evenly sm:flex grid">
        <div className="mt-20 text-center text-white"><Counter /></div>
        
        <div className="mt-5 text-center text-white">
            <Image src={CatNaut} alt="..." className="lg:max-w-sm sm:max-w-full mt-8" />
        </div>
    </div>
    </><div>
        </div></>
  )
}
