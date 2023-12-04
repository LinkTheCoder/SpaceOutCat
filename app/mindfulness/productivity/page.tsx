import Image from 'next/image';
import CatNaut from '../../../public/img/CatNaut.gif';
import ToDo from '../../../components/mindfulness/productivity/Todo'

export default function Productivity() {
  return (

      <><div className="mt-5 text-center text-white">
          <Image
              src={CatNaut}
              alt="..."
              className="block mx-auto lg:max-w-sm sm:max-w-full mt-8 mb-10" />
      </div>
<div>
  <ToDo/>
</div>
      <div className="mb-16 px-6 pt-4 pb-2 text-center"></div></>

  );
}
