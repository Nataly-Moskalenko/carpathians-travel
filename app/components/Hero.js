export default function Hero() {
  return (
    <section className="p-6 grid grid-rows-2 grid-flow-col">
      {/* <h1 className="fixed top-32 right-24 w-80"> */}
      <h1 className="order-3 w-80">
        <span className="text-8xl font-medium text-white">7</span>
        <span className="text-8xl font-thin text-white uppercase">days </span>
        <span className="text-base font-light text-white uppercase tracking-widest">journey</span>
      </h1>
      <h2 className="text-8xl text-white uppercase">
        <span className="text-8xl font-medium text-white uppercase">Uncover </span>
        <span className="text-8xl font-thin text-white uppercase tracking-tight">
          Carpathian’s Secrets
        </span>
      </h2>
      <p className="text-base font-extralight text-white tracking-wider mt-36">
        Hoverla / Yaremche / Zakarpattia / Vorokhta / Synevyr Lake / Bukovel
      </p>
      <div className="order-4 text-lg text-white font-extralight leading-6 w-80">
        <p>
          We offer you unforgettable trips to the most beautiful parts of the Carpathians. Enjoy
          stunning views, exciting expeditions, and the best service!
        </p>
        <button type="button" className="mt-7 pt-4 pb-4 pr-16 pl-16">
          Join now
        </button>
      </div>
    </section>
  );
}
