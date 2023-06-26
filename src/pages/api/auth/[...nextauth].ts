import { loginUser } from "@/services";
import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",

      credentials: {
        login: { label: "Login", type: "text", placeholder: "" },
        password: { label: "Password", type: "password" },
      },

      authorize: async credentials => {
        const { login, password } = credentials as any;

        const response = await loginUser({ login, password });

        if (response.status === 200 && response.data) {
          return response.data;
        } else {
          return null;
        }
      },
    }),
  ],

  pages: {
    signIn: "/login",
  },
};

export default NextAuth(authOptions);
