"use client"

import Link from 'next/link';
import CatNaut from '../../public/img/CatNaut.gif';
import { auth, signInWithGoogle } from '../../firebaseConfig';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

const LogIn = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        router.push("/profile");
      }
      setLoading(false); // Set loading to false when authentication check is complete
    });

    return () => unsubscribe();
  }, [router]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="lg:flex lg:justify-center lg:items-center">
        <div className="p-4 lg:w-1/2">
          <div className="text-center text-primary">
            <h1 className="text-4xl font-black md:mt-80 lg:mt-0">SPACE OUT CAT</h1>
          </div>
          <div className="flex flex-col items-center mt-10">
           
            <button
              className="flex gap-2 px-4 py-2 mb-5 rounded-lg border-slate-200 bg-slate-200 text-slate-700 hover:bg-slate-300"
              onClick={() => signInWithGoogle(router)}
            >
              <Image
                className="w-6 h-6"
                width={20}
                height={30}
                src="https://www.svgrepo.com/show/475656/google-color.svg"
                loading="lazy"
                alt="google logo"
              />
              <h1>Login with Google</h1>
            </button>
            <div className="flex flex-col items-center">
              <Link href="/privacy">
                <p className="text-center text-primary">Privacy Policy</p>
              </Link>
            </div>
          </div>
        </div>
        <div className="lg:w-1/2">
          <div className="mb-5 text-center text-white">
            <Image
              src={CatNaut}
              alt="..."
              className="block mx-auto lg:max-w-sm sm:max-w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LogIn;