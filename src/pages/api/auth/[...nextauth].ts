import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials"; //https://next-auth.js.org/providers/credentials

const isCorrectCredentials = (
  credentials: Record<"username" | "password", string> | undefined,
) =>
  credentials!.username === process.env.NEXTAUTH_USERNAME &&
  credentials!.password === process.env.NEXTAUTH_PASSWORD;

// For more information on each option (and a full list of options) go to
// https://next-auth.js.org/configuration/options
export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. 'Sign in with...')
      name: "Credentials",
      // The credentials is used to generate a suitable form on the sign in page.
      // You can specify whatever fields you are expecting to be submitted.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        username: { label: "Username", type: "text", placeholder: "" },
        password: { label: "Password", type: "password" },
      },

      authorize: async credentials => {
        if (isCorrectCredentials(credentials)) {
          const user = { id: "1", name: "admin" };
          // Any object returned will be saved in `user` property of the JWT
          return Promise.resolve(user);
        } else {
          // If you return null or false then the credentials will be rejected
          return Promise.resolve(null);
          // You can also Reject this callback with an Error or with a URL:
          // return Promise.reject(new Error('error message')) // Redirect to error page
          // return Promise.reject('/path/to/redirect')        // Redirect to a URL
        }
      },
    }),
  ],
  //   callbacks: {
  //     async jwt({ token }) {
  //       token.userRole = 'admin'
  //       return token
  //     },
  //   },
};

export default NextAuth(authOptions);
