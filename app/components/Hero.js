export default function Hero() {
  return (
    <section className="p-6 grid grid-rows-3 grid-flow-col text-white ">
      {/* <h1 className="fixed top-32 right-24 w-80"> */}
      <h1 className="order-4 w-80">
        <span className="text-[98px] font-medium">7</span>
        <span className="text-[98px] font-thin uppercase">days </span>
        <span className="text-base font-light uppercase tracking-[36.48px]">
          journey
        </span>
      </h1>
      <h2 className="row-span-2">
        <span className="text-[98px] font-medium uppercase tracking-[-3.92px]">
          Uncover{' '}
        </span>
        <span className="text-[98px] font-thin uppercase tracking-[-3.92px]">
          Carpathian’s Secrets
        </span>
      </h2>
      <p className="text-base font-extralight tracking-[1.44px] mt-36">
        Hoverla / Yaremche / Zakarpattia / Vorokhta / Synevyr Lake / Bukovel
      </p>
      {/* <div className="text-lg text-white font-extralight leading-6 w-80 mt--36px"> */}
      <p className="order-5 text-lg font-extralight leading-6 w-80">
        We offer you unforgettable trips to the most beautiful parts of the Carpathians. Enjoy
        stunning views, exciting expeditions, and the best service!
      </p>
      <button type="button" className="order-6 mt-7 pt-4 pb-4 pr-16 pl-16 text-[32px] font-bold uppercase">
        Join now
      </button>
      {/* </div> */}
    </section>
  );
}
