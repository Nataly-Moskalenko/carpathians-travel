'use client';

import { useForm } from 'react-hook-form';

export default function FormContacts() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <form
      onSubmit={handleSubmit((data) => console.log(data))}
      className="form flex flex-col w-[607px]"
    >
      <div className="flex flex-row">
        <div>
          <label
            htmlFor="fullname"
            className="text-[12px] font-extralight leading-6 tracking-[2.4px]"
          >
            Full name
          </label>
          <input
            {...register('fullName', {
              required: true,
              minLength: 1,
              maxLength: 20,
            })}
            name="fullName"
            placeholder="John Smith"
            type="text"
            className="text-[20px] font-extralight leading-6 bg-gray"
          />
          {errors.fullName && <p>Incorrect name</p>}
        </div>
        <div>
          <label htmlFor="email" className="text-[12px] font-extralight leading-6 tracking-[2.4px]">
            E-mail
          </label>
          <input
            {...register('email', {
              required: true,
              validate: (input) => isEmail(input),
            })}
            name="email"
            type="email"
            placeholder="johnsmith@email.com"
            className="text-[20px] font-extralight leading-6 bg-gray"
          />
          {errors.email && <p>Invalid email</p>}
        </div>
      </div>
      <label
        htmlFor="message"
        className="text-[12px] font-extralight leading-6 tracking-[2.4px] mt-10"
      >
        Message
      </label>
      <textarea
        {...register('message', {
          required: true,
        })}
        name="message"
        className="text-[20px] font-extralight leading-6 bg-gray form-textarea resize-none h-[174px]"
      />
      <button type="submit" className="text-[32px] font-medium uppercase ml-auto mt-6">
        Send
      </button>
    </form>
  );
}
