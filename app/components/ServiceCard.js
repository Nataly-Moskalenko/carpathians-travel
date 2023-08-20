import Image from 'next/image';

export default function ServiceCard({ card }) {
  return (
    <div className="h-[851px] md:h-[621px] lg:h-[779px]">
      <h2 className="">
        <span className="text-[40px] md:text-[67px] lg:text-[98px] font-thin uppercase tracking-[-1.6px] md:tracking-[-2.68px] lg:tracking-[-3.92px] leading-[56px] md:leading-[1.2]">
          We{' '}
        </span>
        <span className="text-[40px] md:text-[67px] lg:text-[98px] font-medium uppercase tracking-[-1.6px] md:tracking-[-2.68px] lg:tracking-[-3.92px] leading-[56px] md:leading-[1.2]">
          offer
        </span>
      </h2>
      <p>
        <span>{card.number}</span>
        <span>/05</span>
      </p>
      <Image
        className="w-[280px] h-[213px] md:w-[463px] md:h-[370px] lg:w-[607px] lg:h-[429px]"
        src={card.image}
        alt={card.title}
      />
      <p>{card.text}</p>
      <ul>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
      <p>{card.description}</p>
    </div>
  );
}
