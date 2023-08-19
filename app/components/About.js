export default function About() {
  return (
    <section
      id="About"
      className="text-white h-[826px] bg-light-gray w-full bg-image-about bg-center bg-no-repeat bg-cover p-20"
    >
      <div className="p-6">
        <div className="flex gap-6">
          <h2>
            <span className="text-[98px] font-thin uppercase tracking-[-3.92px]">Who </span>
            <span className="text-[98px] font-medium uppercase tracking-[-3.92px]">we are</span>
          </h2>
          <div className="w-[292px] pt-6">
            <p className="text-[18px] font-extralight leading-6 mb-6">
              <span className="font-normal">a team of enthusiasts </span>who are fully committed to
              the mission of creating unforgettable and extraordinary trips to the most beautiful
              parts of the Carpathians. Our goal is not just to show you the natural wonders of the
              mountains, but to provide you with a deep immersion in their magical atmosphere.
            </p>
            <p className="text-[18px] font-extralight leading-6">
              <span className="font-normal">We believe </span>that nature has the power to inspire,
              strengthen character and provide new perspectives. Therefore, each of our tours is
              aimed at unlocking your potential, enriching your spiritual world and creating
              unforgettable memories.
            </p>
          </div>
        </div>
        <div className="flex mt-[72px] flex-row-reverse justify-between">
          <div>
            <p className="text-[18px] font-normal uppercase">From vacationers</p>
            <p className="text-[18px] font-normal uppercase">to active travelers</p>
            <p className="text-[18px] font-extralight leading-6">we have a tour for everyone.</p>
          </div>
          <p className="text-[18px] font-extralight leading-6 w-[605px] \">
            <span className="font-normal">We use methods </span>that are time-tested and proven. Our
            expert guides with in-depth knowledge of the Carpathian landscapes lead you safely
            through the mysteries of these mountains.
          </p>
        </div>
      </div>
    </section>
  );
}
