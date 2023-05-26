import { FC } from "react";
import { signIn } from "next-auth/react";

const LoginForm: FC = () => {
  return (
    <>
      Not signed in <br />
      <button
        onClick={() =>
          signIn("", {
            callbackUrl: "/admin",
          })
        }
      >
        Sign in
      </button>
    </>
  );
};

export default LoginForm;
