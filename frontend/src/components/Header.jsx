import { useState } from 'react';
import { UserIcon } from './Icons';
import { SearchBar } from './SearchBar';

export function Header() {
   const [registered, setRegistered] = useState(false);

   return (
      <header className="flex flex-col items-center w-full mt-12">
         <div className="flex w-full justify-between px-[8%] items-center">
            <h2 className="phone:text-xl sm:text-2xl font-semibold lg:text-3xl">
               LayRes
            </h2>
            <a href="#">
               {registered ? (
                  <div className="flex items-center gap-3">
                     <UserIcon />
                  </div>
               ) : (
                  <span className="phone:text-sm phoneLand:text-md md:text-lg lg:text-xl hover:text-lightBlue">
                     Registrarse
                  </span>
               )}
            </a>
         </div>

         <SearchBar />
      </header>
   );
}
