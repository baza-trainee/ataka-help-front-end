import { useRouter } from "next/router";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import { useEffect } from "react";

import type { NextPage } from "next";

const Admin: NextPage = () => {
  const { data: session } = useSession();

  const router = useRouter();

  const handleSignOut = async () => {
    await signOut({ callbackUrl: "/login" });
  };
  useEffect(() => {
    router.push("/admin/cards");
  }, [router]);
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
        {/* <>
            Signed in as {session?.user?.name} <br />
            <button onClick={handleSignOut}>Sign out</button>
          </> */}
      </>
      {/* )} */}
    </>
  );
};

export default Admin;
