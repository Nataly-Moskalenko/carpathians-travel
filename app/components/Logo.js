import Image from 'next/image';
import Link from 'next/link';

import LogoImage from '@/public/images/logo.png';

export default function Logo() {
  return (
    <Link href="#">
      <Image
        className="w-[59px] h-[21px] lg:w-[61px] lg:h-[22px]"
        src={LogoImage}
        alt="Logo CarpTravel"
        priority
      />
      <p className="font-[Karantina] text-[14px] font-[400] leading-[1.2]">CarpTravel</p>
    </Link>
  );
}
