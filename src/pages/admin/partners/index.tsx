import Head from "next/head";
import type { NextPage } from "next";
import Link from "next/link";

import { deletePartner, getPartners } from "@/services";

const Cards: NextPage = () => {
  const getPartnersList = async () => {
    try {
      const response: any = await getPartners();
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteOnePartner = async (id: string) => {
    try {
      const response = await deletePartner(id);
      console.log(response);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <>
      <Head>
        <title>Partners</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        Partners page
        <hr />
        <p style={{ color: "red" }}>Отримати партнерів</p>
        <button onClick={getPartnersList}>Get logo</button>
        <button
          style={{ backgroundColor: "red", color: "white", marginLeft: "30px" }}
          onClick={() => deleteOnePartner("")}
        >
          Delete partner
        </button>
        <br />
        <Link
          href={"/admin/partners/form"}
          style={{
            color: "blue",
            textDecoration: "underline",
            display: "block",
          }}
        >
          Add partner
        </Link>
      </main>
    </>
  );
};

export default Cards;
