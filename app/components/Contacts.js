import FormContacts from './FormContacts';

export default function Contacts() {
  return (
    <section
      id="Contacts"
      className="text-white h-[856px] md:h-[691px] lg:h-[762px] bg-light-gray w-full bg-image-contacts bg-center bg-no-repeat bg-cover pl-5 pr-5 pt-[56px] pb-[56px] md:pl-8 md:pr-8 md:pt-[64px] md:pb-[64px] lg:p-20"
    >
      <div className="lg:p-6 w-[320px] md:w-[768px] lg:w-full mx-auto">
        <h2 className="w-[606px]">
          <span className="text-[40px] md:text-[67px] lg:text-[98px] font-thin uppercase tracking-[-1.6px] md:tracking-[-2.68px] lg:tracking-[-3.92px] leading-[56px] md:leading-[1.2]">
            Contact{' '}
          </span>
          <span className="text-[40px] md:text-[67px] lg:text-[98px] font-medium uppercase tracking-[-1.6px] md:tracking-[-2.68px] lg:tracking-[-3.92px] leading-[56px] md:leading-[1.2]">
            us
          </span>
        </h2>
        <div className="lg:flex lg:justify-between mt-9 lg:mt-[71px]">
          <div className="mb-3 md:mb-[64px] lg:mb-0 md:flex gap-[90px] lg:block">
            <div>
              <div className="flex items-baseline gap-5 mb-[24px] lg:mb-[64px] ml-[42px] md:ml-[64px] lg:ml-[118px]">
                <ul>
                  <li>
                    <p className="text-[14px] md:text-[16px] lg:text-[18px] font-normal leading-6">
                      +38 (098) 12 34 567
                    </p>
                  </li>
                  <li>
                    <p className="text-[14px] md:text-[16px] lg:text-[18px] font-normal leading-6">
                      +38 (073) 12 34 567
                    </p>
                  </li>
                </ul>
                <p className="text-[12px] font-extralight leading-[20px] lg:leading-6">
                  Phone number
                </p>
              </div>
              <div className="flex items-baseline gap-5 mb-[24px] md:mb-0 lg:mb-[124px] ml-[16px] md:ml-[34px] lg:ml-[84px]">
                <p className="text-[14px] md:text-[16px] lg:text-[18px] font-normal leading-6">
                  support@carptravel.com
                </p>
                <p className="text-[12px] font-extralight leading-[20px] lg:leading-6">E-mail</p>
              </div>
            </div>
            <div className="flex items-baseline justify-center lg:flex-row-reverse gap-5 ml-[72px] md:ml-0 lg:ml-[176px]">
              <p className="text-[12px] font-extralight leading-[20px] lg:leading-6">Follow us</p>
              <ul>
                <li>
                  <p className="text-[14px] md:text-[16px] lg:text-[18px] font-normal leading-6">
                    facebook
                  </p>
                </li>
                <li>
                  <p className="text-[14px] md:text-[16px] lg:text-[18px] font-normal leading-6">
                    instagram
                  </p>
                </li>
                <li>
                  <p className="text-[14px] md:text-[16px] lg:text-[18px] font-normal leading-6">
                    youtube
                  </p>
                </li>
                <li>
                  <p className="text-[14px] md:text-[16px] lg:text-[18px] font-normal leading-6">
                    tiktok
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <FormContacts />
        </div>
      </div>
    </section>
  );
}
