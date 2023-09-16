'use client';

import { React, useRef, useState } from 'react';
import Image from 'next/image';
import { Navigation, A11y, Autoplay, EffectCoverflow } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';

import Gallery1 from '@/public/images/gallery1.jpg';
import Gallery2 from '@/public/images/gallery2.jpg';
import Gallery3 from '@/public/images/gallery3.jpg';

const galeryImages = [
  { id: 1, src: Gallery1, title: 'Carpathian mountains' },
  { id: 2, src: Gallery2, title: 'Carpathian lake' },
  { id: 3, src: Gallery3, title: 'Carpathian forest' },
  { id: 4, src: Gallery1, title: 'Carpathian mountains' },
  { id: 5, src: Gallery2, title: 'Carpathian lake' },
  { id: 6, src: Gallery3, title: 'Carpathian forest' },
];

const galeryImagesMobile = [
  { id: 1, src: Gallery1, title: 'Carpathian mountains' },
  { id: 2, src: Gallery2, title: 'Carpathian lake' },
  { id: 3, src: Gallery3, title: 'Carpathian forest' },  
];

export default function Gallery() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [_, setInit] = useState();
  return (
    <section
      id="Gallery"
      className="text-white h-[801px] md:h-[575px] lg:h-[788px] bg-light-gray w-full bg-image-gallery bg-center bg-no-repeat bg-cover px-5 pt-[56px] pb-[56px] md:px-8 md:pt-[64px] md:pb-[64px] lg:p-20"
    >
      <div className="max-w-[1440px] lg:mx-auto">
        <h2 className="mb-6 md:mb-[72px] text-center lg:text-left lg:m-6">
          <span className="text-[40px] md:text-[67px] lg:text-[98px] font-thin uppercase tracking-[-1.6px] md:tracking-[-2.68px] lg:tracking-[-3.92px] leading-[56px] md:leading-[1.2]">
            Our{' '}
          </span>
          <span className="text-[40px] md:text-[67px] lg:text-[98px] font-medium uppercase tracking-[-1.6px] md:tracking-[-2.68px] lg:tracking-[-3.92px] leading-[56px] md:leading-[1.2]">
            gallery
          </span>
        </h2>
        <ul className="flex flex-col gap-6 md:hidden">
          {galeryImagesMobile.map((image) => (
            <li key={image.id}>
              <Image className="w-[280px] h-[187px] mx-auto" src={image.src} alt={image.title} />
            </li>
          ))}
        </ul>
        <div className="hidden md:block">
          <Swiper
            modules={[Navigation, A11y, Autoplay, EffectCoverflow]}            
            slidesPerView={3}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            onInit={() => setInit(true)}
            autoplay={true}
            loop={true}
            centeredSlides={true}
            effect={'coverflow'}
            grabCursor={true}
            coverflowEffect={{
              rotate: 0,              
              scale: 0.5,
              modifier: 1,
              slideShadows: true,
            }}
          >
            {galeryImages.map((image) => (
              <SwiperSlide key={image.id} className="md:w-[415px] md:h-[294px] lg:w-[606px] lg:h-[429px] mx-auto">
                <Image                 
                  src={image.src}
                  alt={image.title}
                  width={606}
                  height={294}
                />
              </SwiperSlide>
            ))}
            <button
              type="button"
              ref={prevRef}
              className="text-[33px] font-thin hover:font-medium focus:font-medium uppercase leading-[1.2]"
            >
              <p className="">Back</p>
            </button>
            <button
              type="button"
              className="absolute right-0 bottom-0 text-[33px] font-thin hover:font-medium focus:font-medium uppercase leading-[1.2]"
              ref={nextRef}
            >
              <p className="">Next</p>
            </button>
          </Swiper>
        </div>
      </div>
    </section>
  );
}
