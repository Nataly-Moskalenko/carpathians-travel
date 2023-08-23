export default function About() {
  return (
    <section
      id="About"
      className="text-white h-[873px] [480px]:h-[833px] md:h-[697px] lg:h-[824px] bg-light-gray w-full bg-image-about480 m:bg-image-about768 bg-center m:bg-left md:bg-image bg-no-repeat bg-cover pl-5 pr-5 pt-[56px] pb-[56px] md:pl-8 md:pr-8 md:pt-[64px] md:pb-[64px] lg:p-20"
    >
      <div className="p:0 lg:p-6">
        <div className="md:flex justify-between lg:gap-6 lg:justify-start">
          <h2 className="w-[280px] md:w-[408px] lg:w-[606px]">
            <span className="text-[40px] md:text-[67px] lg:text-[98px] font-thin uppercase tracking-[-1.6px] md:tracking-[-2.68px] lg:tracking-[-3.92px] leading-[56px] md:leading-[1.2]">
              Who{' '}
            </span>
            <span className="text-[40px] md:text-[67px] lg:text-[98px] font-medium uppercase tracking-[-1.6px] md:tracking-[-2.68px] lg:tracking-[-3.92px] leading-[56px] md:leading-[1.2]">
              we are
            </span>
          </h2>
          <div className="w-[180px] md:w-[220px] lg:w-[292px] mt-2 lg:mt-4">
            <p className="mb-5 md:mb-4 lg:mb-6 text-[14px] font-extralight leading-[20px] md:text-[16px] lg:text-[18px] lg:leading-[24px]">
              <span className="font-normal">a team of enthusiasts </span>who are fully committed to
              the mission of creating unforgettable and extraordinary trips to the most beautiful
              parts of the Carpathians. Our goal is not just to show you the natural wonders of the
              mountains, but to provide you with a deep immersion in their magical atmosphere.
            </p>
            <p className="text-[14px] font-extralight leading-[20px] md:text-[16px] lg:text-[18px] lg:leading-[24px]">
              <span className="font-normal">We believe </span>that nature has the power to inspire,
              strengthen character and provide new perspectives. Therefore, each of our tours is
              aimed at unlocking your potential, enriching your spiritual world and creating
              unforgettable memories.
            </p>
          </div>
        </div>
        <div className="md:flex mt-[40px] md:mt-[64px] lg:mt-[72px] flex-row-reverse justify-between relative">
          <div className="mb-[40px] md:mb-0 w-[180px] md:w-[221px] lg:w-[300px] ml-auto md:absolute md:left-8 md:bottom-[136px] lg:relative lg:left-0 lg:bottom-0 lg:w-[296px] ">
            <p className="text-[14px] font-normal leading-[20px] md:text-[16px] lg:text-[18px] leading-[24px] uppercase">
              From vacationers
            </p>           
            <p className="pl-5 md:pl-[40px] lg:pl-[92px] text-[14px] font-normal leading-[20px] md:text-[16px] lg:text-[18px] leading-[24px] uppercase">
              to active travelers
            </p>           
            <p className="text-[14px] font-extralight leading-[20px] md:text-[16px] lg:text-[18px] leading-[24px] tracking-[-0.14px] md:tracking-[0.32px] lg:tracking-[2.16px]">
              we have a tour for everyone.
            </p>
          </div>
          <p className="text-[14px] font-extralight leading-[20px] md:text-[16px] lg:text-[18px] leading-[24px] min-w-[280px] max-w-[440px] md:max-w-[463px] lg:max-w-[605px]">
            <span className="font-normal">We use methods </span>that are time-tested and proven. Our
            expert guides with in-depth knowledge of the Carpathian landscapes lead you safely
            through the mysteries of these mountains.
          </p>
        </div>
      </div>
    </section>
  );
}
