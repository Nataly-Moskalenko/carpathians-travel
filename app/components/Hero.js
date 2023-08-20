'use client';

import { Link } from 'react-scroll';

export default function Hero() {
  return (
    <section className="p-0 lg:p-6 text-white relative md:flex md:justify-between w-[280px] md:w-full m-auto md:m-0">
      <h1 className="relative ml-auto md:absolute top-0 right-0 lg:top-3 lg:right-6 w-[113px] md:w-[221px] lg:w-[295px]">
        <span className="text-[37px] leading-[1.2] font-medium md:text-[67px] lg:text-[98px] tracking-normal">
          7
        </span>
        <span className="text-[37px] tracking-[1.665px] leading-[1.2] font-thin uppercase md:text-[67px] md:tracking-[8.71px] lg:text-[98px] lg:tracking-[0]">
          days{' '}
        </span>
        <span className="text-[12px] tracking-[9.48px] leading-[1.2] md:text-[14px] lg:text-[16px] font-light uppercase md:tracking-[25.9px] lg:tracking-[36.48px]">
          journey
        </span>
      </h1>
      <div className="flex flex-col mt-[24px] md:mt-0 md:justify-between">
        <h2 className="w-[280px] md:w-[426px] lg:w-[646px]">
          <span className="text-[40px] md:text-[67px] lg:text-[98px] font-medium uppercase tracking-[-1.6px] md:tracking-[-2.68px] lg:tracking-[-3.92px] leading-[56px] md:leading-[1.2]">
            Uncover{' '}
          </span>
          <span className="text-[40px] md:text-[67px] lg:text-[98px] font-thin uppercase tracking-[-1.6px] md:tracking-[-2.68px] lg:tracking-[-3.92px] leading-[56px] md:leading-[1.2]">
            Carpathian’s Secrets
          </span>
        </h2>
        <p className="w-[157px] text-[10px] leading-[16px] md:w-[264px] md:text-[14px] md:tracking-[1.26px] lg:w-[608px] lg:text-[16px] font-extralight lg:tracking-[1.44px] mt-[24px] md:mt-[68px] lg:mt-[148px]">
          Hoverla / Yaremche / Zakarpattia / Vorokhta / Synevyr Lake / Bukovel
        </p>
      </div>
      <div className="mt-6 md:mt-[144px] lg:mt-[304px] w-[280px] md:w-[230px] lg:w-[294px]">
        <p className="text-[14px] font-extralight leading-[20px] md:text-[16px] lg:text-[18px] leading-[24px]">
          We offer you unforgettable trips to the most beautiful parts of the Carpathians. Enjoy
          stunning views, exciting expeditions, and the best service!
        </p>
        <button
          type="button"
          className="mt-[24px] md:mt-[28px] bg-gray h-[53px] md:h-[50px] lg:h-[71px]"
        >
          <p className="pt-[18px] pb-[18px] md:pt-[14px] md:pb-[14px] lg:pt-[16px] lg:pb-[16px] pr-[64px] pl-[64px] lg:text-[32px] font-bold uppercase">
            <Link
              // activeClass="active"
              to="Contacts"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              Join now
            </Link>
          </p>
        </button>
      </div>
    </section>
  );
}
