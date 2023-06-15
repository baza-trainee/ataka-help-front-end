import Head from "next/head";
import type { NextPage } from "next";
import Link from "next/link";
import { deleteCard, getCards } from "@/services";

const Cards: NextPage = () => {
  const getCardsList = async () => {
    try {
      const response: any = await getCards();
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteOneCard = async (id: string) => {
    try {
      const response = await deleteCard(id);
      console.log(response);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <>
      <Head>
        <title>Cards</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>Сторінка карток</h1>
        <hr />
        <p style={{ color: "red" }}>Отримати список карток</p>
        <button onClick={getCardsList}>Get cards</button>
        <p style={{ color: "red" }}>Видалити картку</p>
        <button
          style={{ backgroundColor: "red", color: "white", marginLeft: "30px" }}
          onClick={() => deleteOneCard("868f6297-e44d-4567-8912-1d4873275bfa")}
        >
          Delete card
        </button>
        <hr />
        <hr />
        <Link
          href={"/admin/cards/form"}
          style={{
            color: "blue",
            textDecoration: "underline",
            display: "block",
          }}
        >
          Додати картку
        </Link>
      </main>
    </>
  );
};

export default Cards;
