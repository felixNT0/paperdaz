import { useQuery } from "react-query";
import ApiAxiosInstance from "../index";

const GET_ALL_FAQ_DATA = "GET_ALL_FAQ_DATA";
const GET_ALL_CATEGORIES_PAPERLINK_QUESTIONS =
  "GET_ALL_CATEGORIES_PAPERLINK_QUESTIONS";

export type GetAllFaqType = {
  id: number;
  question: string;
  answer: string;
  position: any | null;
  createdAt: string;
  updatedAt: string;
  categoryId: number | null;
};

export type GetCategoriesFaqType = {
  id: number;
  name: string;
  position: number | null;
  createdAt: string;
  updatedAt: string;
  faqs: GetAllFaqType[];
};

const getAllFAQ = async (): Promise<GetAllFaqType[]> => {
  const response = await ApiAxiosInstance.get<GetAllFaqType[]>(`/faq`);
  return response.data;
};

export const useGetAllFaqQuery = () => {
  return useQuery([GET_ALL_FAQ_DATA], getAllFAQ);
};

const getCategoriesPaperLinkQuestions = async (): Promise<
  GetCategoriesFaqType[]
> => {
  const response = await ApiAxiosInstance.get<GetCategoriesFaqType[]>(
    `/categories`
  );
  return response.data;
};

export const useGetCategoriesPaperLinkQuestions = () => {
  return useQuery(
    [GET_ALL_CATEGORIES_PAPERLINK_QUESTIONS],
    getCategoriesPaperLinkQuestions
  );
};
