import FormContacts from './FormContacts';
import ContactsContent from './ContactsContent';

export default function Contacts() {
  return (
    <section
      id="Contacts"
      className="text-white h-[856px] md:h-[691px] lg:h-[762px] bg-dark-gray w-full bg-image-contacts bg-center bg-no-repeat bg-cover pl-5 pr-5 pt-[56px] pb-[56px] md:pl-8 md:pr-8 md:pt-[64px] md:pb-[64px] lg:p-20"
    >
      <div className="lg:p-6 w-[320px] md:w-[768px] lg:w-full mx-auto max-w-[1440px]">
        <h2 className="w-[606px]">
          <span className="text-[40px] md:text-[67px] lg:text-[98px] font-thin uppercase tracking-[-1.6px] md:tracking-[-2.68px] lg:tracking-[-3.92px] leading-[56px] md:leading-[1.2]">
            Contact{' '}
          </span>
          <span className="text-[40px] md:text-[67px] lg:text-[98px] font-medium uppercase tracking-[-1.6px] md:tracking-[-2.68px] lg:tracking-[-3.92px] leading-[56px] md:leading-[1.2]">
            us
          </span>
        </h2>
        <div className="lg:flex lg:justify-between mt-9 lg:mt-[71px]">
          <ContactsContent />
          <FormContacts />
        </div>
      </div>
    </section>
  );
}
