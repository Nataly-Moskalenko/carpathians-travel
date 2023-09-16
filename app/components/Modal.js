'use client';
import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-scroll';

const sections = ['About', 'Services', 'Gallery', 'Contacts'];

export default function Modal({ onClick }) {
  return ReactDOM.createPortal(
    <div className="z-70 fixed h-screen w-[100vw] top-0 left-0 bg-light-gray">
      <div className="text-white max-w-[320px] h-full bg-modal z-77 mx-auto relative">
        <button
          onClick={onClick}
          type="button"
          className="uppercase text-[14px] font-normal tracking-[1.4px] absolute right-[20px] top-[36px] hover:font-bold focus:font-bold"
        >
          Close
        </button>
        <nav className="pt-[170px] text-center flex flex-col gap-[48px] text-[18px] font-normal leading-[1.2] tracking-[1.8px]">
          {sections.map((section) => (
            <Link
              key={section}
              className="cursor-pointer hover:underline"
              to={section}
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              onClick={onClick}
            >
              {section}
            </Link>
          ))}
        </nav>
      </div>
    </div>,
    document.getElementById('modal-root')
  );
}
