import Header from './Header';
import Hero from './Hero';

export default function Home() {
  return (
    <div className="pt-6 pr-20 pb-20 pl-20 bg-image-home bg-center bg-no-repeat bg-cover h-[763px] bg-light-gray w-full">
      <Header />
      <Hero />
    </div>
  );
}
