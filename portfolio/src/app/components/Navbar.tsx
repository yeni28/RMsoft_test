import React from 'react';
import Link from 'next/link';
import './Navbar.module.css'

function Navbar() {
  return (
    <nav className='fixed mx-[3.75rem] p-3 py-8 top-0 right-10 z-30 w-full"'>
      <ul className="flex space-x-[2.3rem] font-PreB text-[18px] h-[4rem]">
        <li className="text-black hover:text-blue-500">
          <Link href="/">HOME</Link>
        </li>
        <li className="text-black hover:text-blue-500">
          <Link href="/profile">PROFILE</Link>
        </li>
        <li className="text-black hover:text-blue-500">
          <Link href="/project">PROJECT</Link>
        </li>
        <li className="text-black hover:text-blue-500">
          <Link href="/contact">CONTACT</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;