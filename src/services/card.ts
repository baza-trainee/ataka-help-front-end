import { AxiosResponse } from "axios";
import { cache } from "react";
import { axiosPublic, axiosPrivateFormData } from "./axios";
type Cards = {
  cards: [
    {
      id: number;
      title: string;
      thumb: string;
      alt: string;
      description: string[];
    },
  ];
  total: number;
};
export const getCards = async (): Promise<Cards> => {
  const { data }: AxiosResponse<Cards> = await axiosPublic.get("/");
  console.log(data);
  return data;
};

export const fetchCards = async () => {
  const res = await fetch("https://atakhelp.onrender.com/");
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
};
