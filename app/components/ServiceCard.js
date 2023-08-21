import Image from 'next/image';

export default function ServiceCard({ card }) {
  return (
    <div className="text-white h-[851px] md:h-[621px] lg:h-[779px]">
      <div className="md:flex justify-between lg:justify-start lg:gap-5">
        <h2 className="mb-6 md:mb-9 lg:mb-5 lg:w-[607px]">
          <span className="text-[40px] md:text-[67px] lg:text-[98px] font-thin uppercase tracking-[-1.6px] md:tracking-[-2.68px] lg:tracking-[-3.92px] leading-[56px] md:leading-[1.2]">
            We{' '}
          </span>
          <span className="text-[40px] md:text-[67px] lg:text-[98px] font-medium uppercase tracking-[-1.6px] md:tracking-[-2.68px] lg:tracking-[-3.92px] leading-[56px] md:leading-[1.2]">
            offer
          </span>
        </h2>
        <p className="ml-[168px] md:ml-0 md:w-[221px] lg:w-[293px] mb-4 md:mb-0 text-[43px] leading-[1.2] font-thin uppercase md:text-[67px] md:leading-[78px] lg:text-[98px] lg:leading-[1.2]">
          <span>{card.number}</span>
          <span className="text-pale">/05</span>
        </p>
      </div>
      <div className="md:flex justify-between lg:justify-start lg:gap-5">
        <Image
          className="mb-3 w-[280px] h-[213px] md:w-[463px] md:h-[370px] lg:w-[607px] lg:h-[429px]"
          src={card.image}
          alt={card.title}
        />
        <div className="lg:grow">
          <div className="flex flex-col md:flex-col-reverse lg:flex-row-reverse lg:justify-between">
            <p className="self-end md:self-start mb-6 md:mb-0 md:mt-[198px] text-[12px] font-extralight leading-6 tracking-[2.4px] lg:w-[293px] lg:mt-0">
              {card.text}
            </p>
            {/* <ul className="w-[188px] md:w-[204px] lg:w-[254px] flex flex-col gap-4 lg:gap-6">
              <li className="relative before:content-[''] before:block before:w-[6px] before:h-[6px] before:rotate-45 before:bg-white before:absolute before:top-1 lg:before:top-2">
                <h3 className="ml-3 text-[20px] md:text-[22px] lg:text-[28px] font-[500] uppercase leading-[17px] md:leading-[18px] lg:leading-[24px]">
                  {card.title}
                </h3>
              </li>
              <li>
                <h3 className="opacity-50 text-[20px] md:text-[22px] lg:text-[28px] font-[200] uppercase leading-[17px] md:leading-[18px] lg:leading-[24px]">
                  {card.subtitles[0]}
                </h3>
              </li>
              <li>
                <h3 className="opacity-50 text-[20px] md:text-[22px] lg:text-[28px] font-[200] uppercase leading-[17px] md:leading-[18px] lg:leading-[24px]">
                  {card.subtitles[1]}
                </h3>
              </li>
              <li>
                <h3 className="opacity-50 text-[20px] md:text-[22px] lg:text-[28px] font-[200] uppercase leading-[17px] md:leading-[18px] lg:leading-[24px]">
                  {card.subtitles[2]}
                </h3>
              </li>
              <li>
                <h3 className="opacity-50 text-[20px] md:text-[22px] lg:text-[28px] font-[200] uppercase leading-[17px] md:leading-[18px] lg:leading-[24px]">
                  {card.subtitles[3]}
                </h3>
              </li>
            </ul> */}
          </div>
          <p className="w-[280px] md:w-[221px] lg:w-[293px] mt-[224px] md:mt-[34px] lg:mt-[244px] text-[14px] md:text-[13px] lg:text-[18px] font-[200] leading-[20px] lg:leading-[24px] lg:ml-auto">
            {card.description}
          </p>
        </div>
      </div>
    </div>
  );
}
