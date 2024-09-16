import { useState } from 'react';
import { GitHubIcon } from './Icons';
import { SearchBar } from './SearchBar';

export function Header() {
  return (
    <header className="flex flex-col items-center w-full mt-12">
      <div className="flex w-full justify-between px-[8%] items-center">
        <h2 className="phone:text-xl sm:text-2xl font-semibold lg:text-3xl">
          LayRes
        </h2>
        <a
          href="https://github.com/JuanFelipeRomero/Layout-resources"
          target="_blank"
        >
          <GitHubIcon />
        </a>
      </div>

      <SearchBar />
    </header>
  );
}
