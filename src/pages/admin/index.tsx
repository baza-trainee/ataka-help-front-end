import { useRouter } from "next/router";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import { useEffect } from "react";
import Head from "next/head";
import type { NextPage } from "next";

const Admin: NextPage = () => {
  const { data: session } = useSession();

  const router = useRouter();

  const handleSignOut = async () => {
    await signOut({ callbackUrl: "/login" });
  };

  // useEffect(() => {
  //   if (session) {
  //     if (!session) {
  //       router.push("/login");
  //     }
  //   } else if (session === null) {
  //     router.push("/login");
  //   }
  // }, [session, router]); //теоретично роутер треба додавати в залежності, але і без нього все ніби працює

  return (
    <>
      {/* {session && ( */}
      <>
        <Head>
          <title>Create Next App</title>
          <meta name="description" content="Generated by create next app" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main>
          <h1>Сторінка адміну</h1>
          <>
            Signed in as {session?.user?.name} <br />
            <button onClick={handleSignOut}>Sign out</button>
          </>
          <br />
          <Link
            href={"/admin/cards"}
            style={{
              color: "blue",
              textDecoration: "underline",
              display: "block",
            }}
          >
            Картки
          </Link>
          <Link
            href={"/admin/partners"}
            style={{
              color: "blue",
              textDecoration: "underline",
              display: "block",
            }}
          >
            Партнери
          </Link>
          <Link
            href={"/admin/slider"}
            style={{
              color: "blue",
              textDecoration: "underline",
              display: "block",
            }}
          >
            Слайдер
          </Link>
          <Link
            href={"/admin/report"}
            style={{
              color: "blue",
              textDecoration: "underline",
              display: "block",
            }}
          >
            Звітність
          </Link>
          <Link
            href={"/admin/contacts"}
            style={{
              color: "blue",
              textDecoration: "underline",
              display: "block",
            }}
          >
            Контакти
          </Link>
        </main>
      </>
      {/* )} */}
    </>
  );
};

export default Admin;
