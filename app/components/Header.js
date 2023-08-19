'use client';

import { Link } from 'react-scroll';

export default function Header() {
  return (
    <header className="flex justify-between h-6 pr-6 pl-6 mb-9 md:mb-16 lg:mb-12 text-white w-[320px] md:w-full m-auto md:m-0">
      <div>CarpTravel</div>
      <button className='md:hidden uppercase'>Menu</button>
      <nav className="hidden md:flex md:gap-x-6 lg:gap-x-14 text-[14px] font-normal tracking-[1.4px]">
        <Link
          // activeClass="active"
          to="About"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
        >
          About
        </Link>

        <Link
          // activeClass="active"
          to="Services"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
        >
          Services
        </Link>
        <Link
          // activeClass="active"
          to="Career"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
        >
          Career
        </Link>
        <Link
          // activeClass="active"
          to="Gallery"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
        >
          Gallery
        </Link>
        <Link
          // activeClass="active"
          to="Contacts"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
        >
          Contacts
        </Link>
      </nav>
    </header>
  );
}
