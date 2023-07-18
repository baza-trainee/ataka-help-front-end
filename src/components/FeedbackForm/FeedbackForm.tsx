import { FC, useRef, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import ReCAPTCHA from "react-google-recaptcha";
import { toast } from "react-toastify";

import { IFeedbackForm } from "@/types";
import { FeedbackSchema } from "@/schemas";
import { axiosPublic } from "@/services/axios";

import { Section, Container, Title } from "../Common";
import {
  FormWrapper,
  Form,
  Input,
  Comment,
  InputLabel,
  Wrapper,
  Button,
  ErrorMessage,
  MessageWrapper,
  CaptchaWrapper,
} from "./FeedbackForm.styled";

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
      name: "",
      email: "",
      token: "",
      comment: "",
    },
    mode: "onTouched",
    resolver: yupResolver(FeedbackSchema),
  });

  useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset();
    }
  }, [formState.isSubmitSuccessful, reset]);

  const sendFeedback = async (data: IFeedbackForm) => {
    const token = captchaRef.current?.getValue();

    const formData = {
      name: data.name.trim(),
      email: data.email.trim(),
      token: token,
      comment: data.comment.trim(),
    };
    if (!token) {
      toast.success("Підтвердіть, що Ви не робот.");
      setIsChecked(false);
    }

    if (token) {
      try {
        await axiosPublic.post(`/feedback`, formData);

        toast.success("Дякуємо за Ваш відгук!");
      } catch (error) {
        toast.error("Сталася помилка... Спробуйте пізніше!");
      }
      captchaRef.current?.reset();
      setIsChecked(false);
    }
  };

  const handleCaptcha = () => {
    if (captchaRef.current?.getValue()) {
      setIsChecked(true);
    } else {
      setIsChecked(false);
    }
  };

  return (
    <Section pbd="100">
      <Container>
        <FormWrapper>
          <Title>Зворотний зв`язок</Title>
          <Form onSubmit={handleSubmit(sendFeedback)}>
            <Wrapper>
              <InputLabel data-testid="NameLabel">
                Ім`я*
                <Input
                  type="name"
                  autoComplete="off"
                  {...register("name")}
                  className={errors.name && "invalid"}
                />
                {errors.name && (
                  <MessageWrapper>
                    <ErrorMessage>{errors.name?.message}</ErrorMessage>
                  </MessageWrapper>
                )}
              </InputLabel>
              <InputLabel data-testid="EmailLabel">
                Email*
                <Input
                  type="email"
                  autoComplete="off"
                  {...register("email")}
                  className={errors.email && "invalid"}
                />
                {errors.email && (
                  <MessageWrapper>
                    <ErrorMessage>{errors.email?.message}</ErrorMessage>
                  </MessageWrapper>
                )}
              </InputLabel>
            </Wrapper>
            <InputLabel data-testid="MessageLabel">
              Повідомлення*
              <Comment
                data-testid="MessageInput"
                autoComplete="off"
                {...register("comment")}
                className={errors.comment && "invalid"}
              />
              {errors.comment && (
                <MessageWrapper>
                  <ErrorMessage>{errors.comment?.message}</ErrorMessage>
                </MessageWrapper>
              )}
            </InputLabel>

            <CaptchaWrapper>
              <ReCAPTCHA
                sitekey={`${process.env.NEXT_PUBLIC_SITE_KEY} `}
                size={"normal"}
                ref={captchaRef}
                onChange={handleCaptcha}
                data-testid="Captcha"
              />
            </CaptchaWrapper>
            <Button
              type="submit"
              disabled={!isChecked}
              onClick={() => sendFeedback}
            >
              Надіслати
            </Button>
          </Form>
        </FormWrapper>
      </Container>
    </Section>
  );
};

export default FeedbackForm;
