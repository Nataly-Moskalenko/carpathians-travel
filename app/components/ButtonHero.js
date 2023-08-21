'use client';

import { Link } from 'react-scroll';

export default function ButtonHero() {
  return (
    <>
      <button
        type="button"
        className="relative mt-[24px] md:mt-[28px] bg-gray w-[280px] md:w-[230px] lg:w-[293px] h-[53px] md:h-[50px] lg:h-[71px] hover:bg-pale"
      >
        <p className="text-[18px] lg:text-[32px] font-bold uppercase">
          <Link to="Contacts" spy={true} smooth={true} offset={50} duration={500}>
            Join now
          </Link>
        </p>
      </button>
      <svg
        width="42"
        height="53"
        viewBox="0 0 42 53"
        fill="none"
        className="md:hidden absolute bottom-0"
      >
        <rect width="0.954545" height="11" fill="white" />
        <rect width="42" height="1" fill="white" />
        <rect width="0.954545" height="11" transform="matrix(1 0 0 -1 0 53)" fill="white" />
        <rect width="42" height="1" transform="matrix(1 0 0 -1 0 53)" fill="white" />
      </svg>
      <svg
        width="42"
        height="53"
        viewBox="0 0 42 53"
        fill="none"
        className="md:hidden absolute bottom-0 right-0"
      >
        <rect width="0.954545" height="11" transform="matrix(-1 0 0 1 42 0)" fill="white" />
        <rect width="42" height="1" transform="matrix(-1 0 0 1 42 0)" fill="white" />
        <rect
          x="42"
          y="53"
          width="0.954545"
          height="11"
          transform="rotate(180 42 53)"
          fill="white"
        />
        <rect x="42" y="53" width="42" height="1" transform="rotate(180 42 53)" fill="white" />
      </svg>

      <svg
        width="35"
        height="50"
        viewBox="0 0 35 50"
        fill="none"
        className="hidden md:block lg:hidden absolute bottom-0"
      >
        <rect width="0.795455" height="11" fill="white" />
        <rect width="35" height="1" fill="white" />
        <rect width="0.795455" height="11" transform="matrix(1 0 0 -1 0 50)" fill="white" />
        <rect width="35" height="1" transform="matrix(1 0 0 -1 0 50)" fill="white" />
      </svg>
      <svg
        width="35"
        height="50"
        viewBox="0 0 35 50"
        fill="none"
        className="hidden md:block lg:hidden absolute bottom-0 right-0"
      >
        <rect width="0.795455" height="11" transform="matrix(-1 0 0 1 35 0)" fill="white" />
        <rect width="35" height="1" transform="matrix(-1 0 0 1 35 0)" fill="white" />
        <rect
          x="35"
          y="50"
          width="0.795455"
          height="11"
          transform="rotate(180 35 50)"
          fill="white"
        />
        <rect x="35" y="50" width="35" height="1" transform="rotate(180 35 50)" fill="white" />
      </svg>

      <svg
        width="44"
        height="71"
        viewBox="0 0 44 71"
        fill="none"
        className="hidden lg:block absolute bottom-6"
      >
        <rect width="1" height="11" fill="white" />
        <rect width="44" height="1" fill="white" />
        <rect width="1" height="11" transform="matrix(1 0 0 -1 0 71)" fill="white" />
        <rect width="44" height="1" transform="matrix(1 0 0 -1 0 71)" fill="white" />
      </svg>
      <svg
        width="44"
        height="71"
        viewBox="0 0 44 71"
        fill="none"
        className="hidden lg:block absolute bottom-6 right-6"
      >
        <rect width="1" height="11" transform="matrix(-1 0 0 1 44 0)" fill="white" />
        <rect width="44" height="1" transform="matrix(-1 0 0 1 44 0)" fill="white" />
        <rect x="44" y="71" width="1" height="11" transform="rotate(180 44 71)" fill="white" />
        <rect x="44" y="71" width="44" height="1" transform="rotate(180 44 71)" fill="white" />
      </svg>
    </>
  );
}
