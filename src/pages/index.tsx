import Head from "next/head";
import { Inter } from "next/font/google";

import UserLayout from "@/components/UserLayout/UserLayout";
import Slider from "@/components/Slider";
import CardsGallery from "@/components/CardsGallery/CardsGallery";
import Donate from "@/components/Donate";

import FileOpenLink from "@/components/FileOpenLink";



const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <UserLayout title="Cases">
      <Slider />
      <CardsGallery />
      <Donate />
      <FileOpenLink path="/M8 FAQ_Russian.pdf" text="text" />
    </UserLayout>
  );
}
