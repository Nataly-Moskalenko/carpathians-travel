import FormContacts from './FormContacts';

export default function Contacts() {
  return (
    <section
      id="Contacts"
      className="text-white h-[762px] bg-light-gray w-full bg-image-contacts bg-center bg-no-repeat bg-cover p-20"
    >
      <div className="p-6">
        <h2 className="w-[606px]">
          <span className="text-[40px] md:text-[67px] lg:text-[98px] font-thin uppercase tracking-[-1.6px] md:tracking-[-2.68px] lg:tracking-[-3.92px] leading-[56px] md:leading-[1.2]">
            Contact{' '}
          </span>
          <span className="text-[40px] md:text-[67px] lg:text-[98px] font-medium uppercase tracking-[-1.6px] md:tracking-[-2.68px] lg:tracking-[-3.92px] leading-[56px] md:leading-[1.2]">
            us
          </span>
        </h2>
        <div className="flex justify-between mt-[71px]">
          <div className="w-[311px]">
            <div className="flex gap-5 mb-[64px]">
              <ul>
                <li>
                  <p className="text-lg font-normal leading-6">+38 (098) 12 34 567</p>
                </li>
                <li>
                  <p className="text-lg font-normal leading-6">+38 (073) 12 34 567</p>
                </li>
              </ul>
              <p className="text-[12px] font-extralight leading-6">Phone number</p>
            </div>
            <div className="flex  gap-5 mb-[124px]">
              <p className="text-lg font-normal leading-6">support@carptravel.com</p>
              <p className="text-[12px] font-extralight leading-6">E-mail</p>
            </div>
            <div className="flex justify-center flex-row-reverse gap-5">
              <p className="text-[12px] font-extralight leading-6">Follow us</p>
              <ul>
                <li>
                  <p className="text-lg font-normal leading-6">facebook</p>
                </li>
                <li>
                  <p className="text-lg font-normal leading-6">instagram</p>
                </li>
                <li>
                  <p className="text-lg font-normal leading-6">youtube</p>
                </li>
                <li>
                  <p className="text-lg font-normal leading-6">tiktok</p>
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
