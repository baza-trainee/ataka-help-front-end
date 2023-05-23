import { FC } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { IFileForm } from '@/types';
import { FileScheme } from '@/schemas';

const FileForm: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFileForm>({
    mode: 'all',
    resolver: yupResolver(FileScheme),
    defaultValues: {
      thumb: [],
      alt: '',
    },
  });

  const onSubmitHandler: SubmitHandler<IFileForm> = async (data) => {
    const formData = new FormData();
    formData.append('thumb', data.thumb[0]);
    formData.append('alt', data.alt);
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmitHandler)}>
      <input
        type="file"
        accept="image/*,.png,.jpg,.webp,.svg"
        {...register('thumb')}
      />
      {errors.thumb && <p>{errors.thumb.message}</p>}

      <input type="text" {...register('alt')} />
      {errors.alt && <p>{errors.alt.message}</p>}

      <button>Submit</button>
    </form>
  );
};

export default FileForm;
