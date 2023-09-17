'use client';

import { useState } from 'react';
import { Link } from 'react-scroll';

import Logo from './Logo';
import Modal from './Modal';
import data from '../data/data.json';

export default function Header() {
  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => setShowModal(!showModal); 

  return (
    <header className="relative max-w-[280px] md:max-w-[1392px] mx-auto">
      <div className="absolute top-[36px] left-0 flex justify-between items-center text-white w-[280px] md:w-full mx-auto px-5 md:px-8 lg:px-[80px]">
        <Logo />
        <button
          type="button"
          className="md:hidden uppercase text-[14px] font-normal tracking-[1.4px] hover:font-bold focus:font-bold"
          onClick={toggleModal}
        >
          Menu
        </button>
        {showModal && <Modal onClick={toggleModal} />}
        <nav className="hidden md:flex md:gap-x-6 lg:gap-x-14 text-[14px] font-normal tracking-[1.4px]">
          {data.sections.map((section) => (
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
      </div>
    </header>
  );
}
