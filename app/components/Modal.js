'use client';
import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-scroll';

export default function Modal({ onClick }) {
  return ReactDOM.createPortal(
    <div className="z-70 fixed h-screen w-full top-0 left-0 bg-light-gray">
      <div className="text-white w-[320px] h-full bg-modal z-77 absolute left-[50%] translate-x-[-50%]">
        <button
          onClick={onClick}
          type="button"
          className="m-0 p-0 uppercase text-[14px] font-normal tracking-[1.4px] absolute right-[20px] top-[36px]"
        >
          Close
        </button>
        <nav className="mt-[170px] text-center flex flex-col gap-[48px] text-[18px] font-normal leading-[1.2] tracking-[1.8px]">
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
      </div>
    </div>,
    document.getElementById('modal-root')
  );
}
