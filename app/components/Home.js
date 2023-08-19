import Header from './Header';
import Hero from './Hero';

export default function Home() {
  return (
    <div className="pt-6 md:pr-8 md:pb-16 md:pl-8 lg:pr-20 lg:pb-20 lg:pl-20 bg-image-home bg-center bg-no-repeat bg-cover h-[642px] md:h-[531px] lg:h-[763px] bg-light-gray w-full">
      <Header />
      <Hero />
    </div>
  );
}
