import CatNaut from '../../public/img/CatNaut.gif';
import {RiArrowGoBackFill} from 'react-icons/ri';
import Link from 'next/link';
import Image from 'next/image';

function Privacy() {
  
  return (

     <><Image
      src={CatNaut}
      alt="..."
      className="block mx-auto lg:max-w-sm sm:max-w-full mt-8" />
      <div className="lg:mx-80 md:mx-48 sm:mx-12">

      <h1 className="mt-5 text-2xl uppercase font-bold text-center text-primary">Privacy policy</h1>

        <p className="mt-5 uppercase font-semibold text-center text-gray-400">Data collection</p>

        <p className="mt-5 text-center text-gray-400">Space Out Cat collects information from two primary sources, Google (through the OAuth sign-in process) and the application itself.
          From Google, we collect a name, email when you sign in.
          Your name are used to identify you in the app.
          <br /><br />
          Your email will be used for email outreach.
          Your email will never be sold to third parties for any reason.
          <br /><br />
          From the application, we collect session notes, browser information and text input.
          This information is to able to store the users progress and data.
          Your data will only be accessible by the developers for developing purpose.
        </p>

        <p className="mt-5 uppercase font-semibold text-center text-gray-400">Service providers</p>

        <p className="mt-5 text-center text-gray-400">Space Out Cat uses several third party service providers to help with running the site such as Vercel, Github, Firebase and more.
          Your data may be shared with these service providers when required. <br /><br />
          These service providers are obligated not to sell or disclose this information.</p>
      </div>

      <p className="mt-5 uppercase font-semibold text-center text-gray-400">Request Account Deletion</p>
        <p className="mt-5 text-center text-gray-400">Please click the link below to send a email with request of deletion.</p>

        <div className="mt-5 text-center">
  <a className="text-primary" href="mailto:linkhaggman@gmail.com?subject=Account Deletion&body=Hello! I want to request for deletion of my account. My email is username@gmail.com">
    Delete Account
  </a>
</div>
              
      <Link href="/login" className="flex justify-center">
  <div>
    <button className="mt-10 mb-20 hover:opacity-50 duration-150" id="start">
      <RiArrowGoBackFill color="#ba68c8" size="2em" />
    </button>
  </div>
</Link>
      </>
  );
}

export default Privacy;
