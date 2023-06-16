import { FC, useRef, useEffect, useState, createRef } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import ReCAPTCHA from "react-google-recaptcha";

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
    // resolver: yupResolver(FeedbackSchema),
  });

  useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset();
    }
  }, [formState.isSubmitSuccessful, reset]);

  const sendFeedback = async (data: IFeedbackForm) => {
    const token = captchaRef.current?.getValue();
    console.log(data);
    const formData = {
      name: data.name.trim(),
      email: data.email.trim(),
      token: token,
      comment: data.comment.trim(),
    };
    console.log(formData);
    try {
      const result = await axiosPublic.post(`/feedback`, formData);
      console.log(result);
    } catch (error) {
      console.log(error);
    }
    captchaRef.current?.reset();
    setIsChecked(false);
  };

  const handleCaptcha = () => {
    if (captchaRef.current?.getValue()) {
      setIsChecked(true);
    }
  };

  return (
    <Section pbd="100">
      <Container>    
        <FormWrapper>
          <Title>Зворотний зв`язок</Title>
          <Form onSubmit={handleSubmit(sendFeedback)}>
            <Wrapper>
              <InputLabel>
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
              <InputLabel>
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
            <InputLabel>
              Повідомлення*
              <Comment
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
            
            {/* <CaptchaWrapper>
              <ReCAPTCHA
                sitekey={`${process.env.NEXT_PUBLIC_SITE_KEY} `}
                size={"normal"}
                ref={captchaRef}
                onChange={handleCaptcha}
              />
            </CaptchaWrapper> */}
            <Button
              type="submit"
              // disabled={!isChecked}
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
