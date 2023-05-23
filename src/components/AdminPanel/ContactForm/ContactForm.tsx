import { FC } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { IContactForm } from '@/types';
import { ContactScheme } from '@/schemas';

const ContactForm: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IContactForm>({
    mode: 'all',
    resolver: yupResolver(ContactScheme),
    defaultValues: {
      number: '',
    },
  });

  const onSubmitHandler: SubmitHandler<IContactForm> = async (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmitHandler)}>
      <input type="text" {...register('number')} />
      {errors.number && <p>{errors.number.message}</p>}
      <button>Submit</button>
    </form>
  );
};

export default ContactForm;
