'use client';

import { useForm } from 'react-hook-form';

export default function FormContacts() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <form onSubmit={handleSubmit((data) => console.log(data))} className="flex flex-col">
      <label htmlFor="fullname">Full name</label>
      <input
        {...register('fullName', {
          required: true,
          minLength: 1,
          maxLength: 20,
        })}
        name="fullName"
        placeholder="John Smith"
        type="text"
      />
      {errors.fullName && <p>Incorrect name</p>}
      <label htmlFor="email">E-mail</label>
      <input
        {...register('email', {
          required: true,
          validate: (input) => isEmail(input),
        })}
        name="email"
        type="email"
        placeholder="johnsmith@email.com"
      />
      {errors.email && <p>Invalid email</p>}
      <label htmlFor="message">Message</label>
      <textarea
        {...register('message', {
          required: true,
        })}
        name="message"
      />
      <button type="submit">Send</button>
    </form>
  );
}
