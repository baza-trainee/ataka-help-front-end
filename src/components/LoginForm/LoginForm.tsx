import { FC, useState } from "react";
import { signIn } from "next-auth/react";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Title } from "../Common";
import {
  Button,
  ErrorMessage,
  FlexContainer,
  Form,
  Input,
  InputLabel,
  MessageWrapper,
  ParentContainer,
} from "./LoginForm.styled";

import router from "next/router";
import Link from "next/link";

import { LoginSchema } from "@/schemas/LoginScheme";
import { ILoginForm } from "@/types/ILoginForm";

const LoginForm: FC = () => {
  const [authError, setAuthError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginForm>({
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "onTouched",
    resolver: yupResolver(LoginSchema),
  });

  const handleLogin = async (data: ILoginForm) => {
    const { email, password } = data;

    const result = await signIn("credentials", {
      redirect: false,
      username: email,
      password,
    });

    if (result?.error) {
      console.log("Authentication failed:", result.error);
      setAuthError("Помилка авторизації. Будь ласка, перевірте свої дані.");
    } else {
      router.push("/admin");
    }
  };

  return (
    <ParentContainer>
      <FlexContainer>
        <Title>Вхід</Title>
      </FlexContainer>
      <Form onSubmit={handleSubmit(handleLogin)}>
        <FlexContainer>
          <InputLabel>
            Email*
            <Input
              type="email"
              autoComplete="off"
              // value={username}
              {...register("email")}
              className={errors.email && "invalid"}
              // onChange={e => setUsername(e.target.value)}
            />
            {errors.email && (
              <MessageWrapper>
                <ErrorMessage>{errors.email?.message}</ErrorMessage>
              </MessageWrapper>
            )}
          </InputLabel>
        </FlexContainer>
        <FlexContainer>
          <InputLabel>
            Пароль*
            <Input
              type="password"
              autoComplete="off"
              // value={password}
              {...register("password")}
              className={errors.password && "invalid"}
              // onChange={e => setPassword(e.target.value)}
            />
            {errors.password && (
              <MessageWrapper>
                <ErrorMessage>{errors.password?.message}</ErrorMessage>
              </MessageWrapper>
            )}
          </InputLabel>
        </FlexContainer>
        {authError && (
          <FlexContainer>
            <ErrorMessage>{authError}</ErrorMessage>
          </FlexContainer>
        )}
        <FlexContainer>
          <Button type="submit">Вхід</Button>
        </FlexContainer>

        <FlexContainer>
          <Link href="/">Забули пароль?</Link>
        </FlexContainer>
      </Form>
    </ParentContainer>
  );
};

export default LoginForm;
