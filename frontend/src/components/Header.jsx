import { useState } from 'react';
import { UserIcon } from './Icons';
import { SearchBar } from './SearchBar';

export function Header() {
   const [registered, setRegistered] = useState(false);

   return (
      <header className="flex justify-around mt-12">
         <h2 className="font-semibold text-3xl">LayRes</h2>

         <SearchBar />

         <a href="#">
            {registered ? (
               <div className="flex items-center gap-3">
                  <UserIcon />
               </div>
            ) : (
               <span className="text-xl">Registrarse</span>
            )}
         </a>
      </header>
   );
}
