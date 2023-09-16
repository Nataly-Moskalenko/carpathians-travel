'use client';

import { Link } from 'react-scroll';

import IconLeftMobile from 'public/icons/buttonHeroLeftMobile.svg';
import IconRightMobile from 'public/icons/buttonHeroRightMobile.svg';
import IconLeftTablet from 'public/icons/buttonHeroLeftTablet.svg';
import IconRightTablet from 'public/icons/buttonHeroRightTablet.svg';
import IconLeftDesktop from 'public/icons/buttonHeroLeftDesktop.svg';
import IconRightDesktop from 'public/icons/buttonHeroRightDesktop.svg';

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
      <IconLeftMobile className="md:hidden absolute bottom-0" />
      <IconRightMobile className="md:hidden absolute bottom-0 right-0" />

      <IconLeftTablet className="hidden md:block lg:hidden absolute bottom-0" />
      <IconRightTablet className="hidden md:block lg:hidden absolute bottom-0 right-0" />

      <IconLeftDesktop className="hidden lg:block absolute bottom-6" />
      <IconRightDesktop className="hidden lg:block absolute bottom-6 right-6" />
    </>
  );
}
