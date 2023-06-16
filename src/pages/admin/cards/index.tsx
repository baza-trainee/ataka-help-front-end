import type { NextPage } from "next";


import AdminLayout from "@/components/AdminPanel/AdminLayout";


import AdminCardsGallery from "@/components/AdminPanel/AdminCardsGallery/AdminCardsGallery";


const Cards: NextPage = () => {
  return <AdminLayout title="Cards"><AdminCardsGallery /></AdminLayout>;

};

export default Cards;
