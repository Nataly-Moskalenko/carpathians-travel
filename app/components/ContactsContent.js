import data from '../data/data.json';

export default function ContactsContent() {
  return (
    <div className="mb-3 md:mb-[64px] lg:mb-0 md:flex gap-[90px] lg:block">
      <div>
        <div className="flex items-baseline gap-5 mb-[24px] lg:mb-[64px] ml-[42px] md:ml-[64px] lg:ml-[118px]">
          <ul>
            <li>
              <a
                href="tel:+380981234567"
                className="hover:underline text-[14px] md:text-[16px] lg:text-[18px] font-normal leading-6"
              >
                +38 (098) 12 34 567
              </a>
            </li>
            <li>
              <a
                href="tel:+380731234567"
                className="hover:underline text-[14px] md:text-[16px] lg:text-[18px] font-normal leading-6"
              >
                +38 (073) 12 34 567
              </a>
            </li>
          </ul>
          <p className="text-[12px] font-extralight leading-[20px] lg:leading-6">Phone number</p>
        </div>
        <div className="flex items-baseline gap-5 mb-[24px] md:mb-0 lg:mb-[124px] ml-[16px] md:ml-[34px] lg:ml-[84px]">
          <a
            href="mailto:support@carptravel.com"
            className="hover:underline text-[14px] md:text-[16px] lg:text-[18px] font-normal leading-6"
          >
            support@carptravel.com
          </a>
          <p className="text-[12px] font-extralight leading-[20px] lg:leading-6">E-mail</p>
        </div>
      </div>
      <div className="flex items-baseline justify-center lg:flex-row-reverse gap-5 ml-[72px] md:ml-0 lg:ml-[176px]">
        <p className="text-[12px] font-extralight leading-[20px] lg:leading-6">Follow us</p>
        <ul>
          {data.socials.map((social) => (
            <li key={social}>
              <a
                href="#"
                className="hover:underline text-[14px] md:text-[16px] lg:text-[18px] font-normal leading-6"
                target="_blank"
                rel="noopener noreferrer nofollow"
              >
                {social}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
