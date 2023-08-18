import { useForm } from 'react-hook-form';

export default function FormContacts() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <form onSubmit={handleSubmit((data) => console.log(data))} className="flex flex-col">
      <label>
        Full name
        <input
          {...register('fullName', {
            required: true,
            pattern: /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
            placeholder: 'John Smith',
            type: 'text',
            autocomplete: 'off',
            value: 'fullName',
          })}
        />
      </label>
      {errors.fulltName && <p>Incorrect name</p>}
      <label>
        E-mail
        <input
          {...register('email', {
            required: true,
            pattern: /^[a-zA-Z0-9]+@[a-zA-Z]+\.[a-zA-Z]{2,3}$/,
            placeholder: 'johnsmith@email.com',
            type: 'email',
            autocomplete: 'off',
            value: 'email',
          })}
        />
      </label>
      {errors.email && <p>Invalid email</p>}
      <label>
        Message
        <textarea
          {...register('comment', {
            required: true,
            type: 'text',
            autocomplete: 'off',
            value: 'comment',
          })}
        />
      </label>
      <button type="submit">Send</button>
    </form>
  );
}
