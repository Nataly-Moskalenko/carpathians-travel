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
          <div className="flex flex-col md:flex-col-reverse lg:block">
            <p className="self-end md:self-start mb-6 md:mb-0 md:mt-6 lg:hidden text-[12px] font-extralight leading-6 tracking-[2.4px]">
              {card.text}
            </p>
            <ul className="flex flex-col gap-4 lg:gap-6">
              <li className="lg:flex justify-between">
                <h3 className="text-[20px] md:text-[22px] lg:text-[28px] font-[200] uppercase leading-[17px] md:leading-[18px] lg:leading-[24px]">
                  ATVs Traveling
                </h3>
                <p className="hidden lg:block text-[12px] font-extralight leading-6 tracking-[2.4px] lg:w-[293px]">
                  Feel the adrenaline rush
                </p>
              </li>
              <li className="lg:flex justify-between">
                <h3 className="text-[20px] md:text-[22px] lg:text-[28px] font-[200] uppercase leading-[17px] md:leading-[18px] lg:leading-[24px]">
                  Rock climbing
                </h3>
                <p className="hidden lg:block text-[12px] font-extralight leading-6 tracking-[2.4px] lg:w-[293px]">
                  Destroy your limitations
                </p>
              </li>
              <li className="lg:flex justify-between">
                <h3 className="w-[133px] text-[20px] md:text-[22px] lg:text-[28px] font-[200] uppercase leading-[17px] md:leading-[18px] lg:leading-[24px]">
                  Hot air ballooning
                </h3>
                <p className="hidden lg:block text-[12px] font-extralight leading-6 tracking-[2.4px] lg:w-[293px]">
                  Get inspired
                </p>
              </li>
              <li className="lg:flex justify-between">
                <h3 className="text-[20px] md:text-[22px] lg:text-[28px] font-[200] uppercase leading-[17px] md:leading-[18px] lg:leading-[24px]">
                  Skydiving
                </h3>
                <p className="hidden lg:block text-[12px] font-extralight leading-6 tracking-[2.4px] lg:w-[293px]">
                  Overcome your fears
                </p>
              </li>
              <li className="lg:flex justify-between">
                <h3 className="text-[20px] md:text-[22px] lg:text-[28px] font-[200] uppercase leading-[17px] md:leading-[18px] lg:leading-[24px]">
                  Rafting
                </h3>
                <p className="hidden lg:block text-[12px] font-extralight leading-6 tracking-[2.4px] lg:w-[293px]">
                  Trust the flow
                </p>
              </li>
            </ul>
          </div>
          <p className="w-[280px] md:w-[221px] lg:w-[293px] mt-[34px] text-[14px] md:text-[13px] lg:text-[18px] font-[200] leading-[20px] lg:leading-[24px] lg:ml-auto">
            {card.description}
          </p>
        </div>
      </div>
    </div>
  );
}
