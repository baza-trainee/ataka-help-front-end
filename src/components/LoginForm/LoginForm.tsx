import { FC, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/router";

import { LoginSchema } from "@/schemas";
import { ILoginForm } from "@/types";
import { loginUser } from "@/services";

import { Title } from "../Common";
import ButtonSpiner from "../ButtonSpiner";
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
import { toast } from "react-toastify";

const LoginForm: FC = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginForm>({
    defaultValues: {
      login: "",
      password: "",
    },
    mode: "all",
    resolver: yupResolver(LoginSchema),
  });

  const handleLogin = async (data: ILoginForm) => {
    try {
      setIsLoading(true);
      await loginUser(data);
      sessionStorage.setItem(
        `${process.env.NEXT_PUBLIC_SESSION_STORAGE_KEY}`,
        `${process.env.NEXT_PUBLIC_SESSION_STORAGE_VALUE}`,
      );

      router.push("/admin");
    } catch (error: any) {
      if (error.response.status === 401) {
        toast.error("Невірний логін або пароль");
      } else {
        toast.error("Сталася помилка! Спробуйте пізніше");
      }
    } finally {
      setIsLoading(false);
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
            <Input type="email" autoComplete="off" {...register("login")} />
            {errors.login && (
              <MessageWrapper>
                <ErrorMessage>{errors.login?.message}</ErrorMessage>
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
              {...register("password")}
            />
            {errors.password && (
              <MessageWrapper>
                <ErrorMessage>{errors.password?.message}</ErrorMessage>
              </MessageWrapper>
            )}
          </InputLabel>
        </FlexContainer>

        <Button disabled={Object.values(errors).length > 0}>
          {isLoading ? <ButtonSpiner /> : "Вхід"}
        </Button>

        {/* <FlexContainer>
          <Link href="/">Забули пароль?</Link>
        </FlexContainer> */}
      </Form>
    </ParentContainer>
  );
};

export default LoginForm;
