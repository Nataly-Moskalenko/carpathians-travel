'use client';

import { Link } from 'react-scroll';
import Logo from './Logo';
import Modal from './Modal';
import { useState } from 'react';

export default function Header() {
  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => setShowModal(!showModal);
  const sections = ['About', 'Services', 'Gallery', 'Contacts'];

  return (
    <header className="flex justify-between items-center h-6 lg:pr-6 lg:pl-6 mb-9 md:mb-[66px] lg:mb-[72px] text-white w-[280px] md:w-full mx-auto md:m-0">
      <Logo />
      <button
        type="button"
        className="md:hidden uppercase text-[14px] font-normal tracking-[1.4px]"
        onClick={toggleModal}
      >
        Menu
      </button>
      {showModal && <Modal onClick={toggleModal} />}
      <nav className="hidden md:flex md:gap-x-6 lg:gap-x-14 text-[14px] font-normal tracking-[1.4px]">
        {sections.map((section) => (
          <Link
            key={section}
            className="cursor-pointer hover:underline"
            to={section}
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
          >
            {section}
          </Link>
        ))}
      </nav>
    </header>
  );
}
