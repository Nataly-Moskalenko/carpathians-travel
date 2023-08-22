'use client';

import Image from 'next/image';
import { Link } from 'react-scroll';
import Logo from '../../public/logo.png';
import Modal from './Modal';
import { useState } from 'react';

export default function Header() {
  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => setShowModal(!showModal);

  return (
    <header className="flex justify-between items-center h-6 lg:pr-6 lg:pl-6 mb-9 md:mb-[66px] lg:mb-[72px] text-white w-[280px] md:w-full mx-auto md:m-0">
      <div>
        <Image
          className="w-[59px] h-[21px] lg:w-[61px] lg:h-[22px]"
          src={Logo}
          alt="Logo CarpTravel"
        />
        <p className="font-[Karantina] text-[14px] font-[400] leading-[1.2]">CarpTravel</p>
      </div>
      <button type="button" className="md:hidden uppercase text-[14px] font-normal tracking-[1.4px]" onClick={toggleModal}>
        Menu
      </button>
      {showModal && <Modal onClick={toggleModal} />}
      <nav className="hidden md:flex md:gap-x-6 lg:gap-x-14 text-[14px] font-normal tracking-[1.4px]">
        <Link
          className="cursor-pointer hover:underline"
          to="About"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
        >
          About
        </Link>
        <Link
          className="cursor-pointer hover:underline"
          to="Services"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
        >
          Services
        </Link>
        <Link
          className="cursor-pointer hover:underline"
          to="Gallery"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
        >
          Gallery
        </Link>
        <Link
          className="cursor-pointer hover:underline"
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
