'use client';

import { React } from 'react';
import { Pagination, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

import ServiceCard from './ServiceCard';
import data from '../data/data.json';

const cards = data.cards;
const menu = Object.values(cards.map((card) => card.title));

export default function Services() {
  return (
    <section
      id="Services"
      className="text-white h-[851px] md:h-[621px] lg:h-[779px] bg-light-gray w-full bg-image-services bg-center bg-no-repeat bg-cover px-5 pt-[56px] pb-[56px] md:px-8 md:pt-[64px] md:pb-[64px] lg:p-20"
    >
      <div className="w-[280px] md:w-full mx-auto relative z-0 max-w-[1440px] lg:mx-auto">
        <Swiper
          modules={[Pagination, A11y, Autoplay, EffectFade]}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          spaceBetween={50}
          slidesPerView={1}
          autoplay={true}
          loop={true}
          pagination={{
            el: '.swiper-pagination',
            clickable: true,
            renderBullet: function (index, className) {
              return '<div class="' + className + '">' + menu[index] + '</div>';
            },
          }}
        >
          {cards.map((card) => (
            <SwiperSlide key={card.number}>
              <ServiceCard card={card} />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="swiper-pagination absolute w-[188px] md:w-[204px] lg:w-[254px] flex flex-col gap-4 lg:gap-6 uppercase text-[20px] md:text-[22px] lg:text-[24px] font-[500] leading-[17px] md:leading-[18px] lg:leading-[24px]">
          {menu.map((i, el) => (
            <div
              key={i}
              className="text-[20px] md:text-[22px] lg:text-[24px] font-[500] leading-[17px] md:leading-[18px] lg:leading-[24px] w-[188px] md:w-[204px] lg:w-[254px]"
            >
              {el}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
