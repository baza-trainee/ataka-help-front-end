import { FC, useRef, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import ReCAPTCHA from 'react-google-recaptcha';
import { IFeedbackForm } from '@/types';
import { FeedbackSchema } from '@/schemas';

import {
  Form,
  Input,
  Comment,
  InputLabel,
  CommentLabel,
  Wrapper,
  Button,
} from './FeedbackForm.styled';

const FeedbackForm: FC = () => {
  const captchaRef = useRef<ReCAPTCHA>(null);
  const [isChecked, setIsChecked] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState,
    formState: { errors },
  } = useForm<IFeedbackForm>({
    defaultValues: {
      name: '',
      email: '',
      token: '',
      comment: '',
    },
    mode: 'onTouched',
    resolver: yupResolver(FeedbackSchema),
  });

  useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset();
    }
  }, [formState.isSubmitSuccessful, reset]);

  const sendFeedback = async (data: IFeedbackForm) => {
    const token = captchaRef.current?.getValue();
    const formData = { ...data, token: token };
    console.log(formData);
    captchaRef.current?.reset();
    setIsChecked(false);
  };

  const handleCaptcha = () => {
    if (captchaRef.current?.getValue()) {
      setIsChecked(true);
    }
  };

  return (
    <Form onSubmit={handleSubmit(sendFeedback)}>
      <Wrapper>
        <InputLabel>
          Ім’я
          <Input type="name" autoComplete="off" {...register('name')} />
          {errors.name && (
            <div>
              <p>{errors.name?.message}</p>
            </div>
          )}
        </InputLabel>
        <InputLabel>
          Email
          <Input
            type="email"
            autoComplete="off"
            placeholder="example@gmail.com"
            {...register('email')}
          />
          {errors.name && (
            <div>
              <p>{errors.email?.message}</p>
            </div>
          )}
        </InputLabel>
      </Wrapper>
      <CommentLabel>
        Коментар
        <Comment autoComplete="off" {...register('comment')} />
        {errors.name && (
          <div>
            <p>{errors.comment?.message}</p>
          </div>
        )}
      </CommentLabel>
      <ReCAPTCHA
        sitekey={process.env.NEXT_PUBLIC_SITE_KEY}
        size={'normal'}
        ref={captchaRef}
        onChange={handleCaptcha}
      />
      <Button type="submit" disabled={!isChecked}>
        Надіслати
      </Button>
    </Form>
  );
};

export default FeedbackForm;
