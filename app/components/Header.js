'use client';

import { Link } from 'react-scroll';

export default function Header() {
  return (
    <header className="flex justify-between">
      <div>CarpTravel</div>
      <nav className="flex gap-x-14">
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
