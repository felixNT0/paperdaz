import { useMutation, useQuery } from "react-query";
import {
  GetAllFaqType,
  GetCategoriesFaqType,
  ICreateCardForUserPayload,
  ICreateUserPayload,
  ILoginPayload,
  ILoginSuccessResponse,
  ISubscriptionPayload,
  IValidateCardPayload,
} from "../../types";
import { DevApiAxiosInstance } from "../../api";

const GET_ALL_FAQ_DATA = "GET_ALL_FAQ_DATA";
const GET_USER_BY_EMAIL = "GET_USER_BY_EMAIL";
const GET_ALL_CATEGORIES_PAPERLINK_QUESTIONS =
  "GET_ALL_CATEGORIES_PAPERLINK_QUESTIONS";

const getUserByEmail = async (email: string): Promise<any> => {
  const response = await DevApiAxiosInstance.get<any>(`/users?email=${email}`);
  return response.data;
};

export const useGetUserByEmailQuery = (email: string) => {
  return useQuery([GET_USER_BY_EMAIL, email], () => getUserByEmail(email), {
    enabled: !!email && email.trim() !== "",
  });
};

const getAllFAQ = async (): Promise<GetAllFaqType[]> => {
  const response = await DevApiAxiosInstance.get<GetAllFaqType[]>(`/faq`);
  return response.data;
};

export const useGetAllFaqQuery = () => {
  return useQuery([GET_ALL_FAQ_DATA], getAllFAQ);
};

const getCategoriesPaperLinkQuestions = async (): Promise<
  GetCategoriesFaqType[]
> => {
  const response = await DevApiAxiosInstance.get<GetCategoriesFaqType[]>(
    `/categories?$sort[position]=1&for=paperlink`
  );
  return response.data;
};

export const useGetCategoriesPaperLinkQuestions = () => {
  return useQuery(
    [GET_ALL_CATEGORIES_PAPERLINK_QUESTIONS],
    getCategoriesPaperLinkQuestions
  );
};

export const loginUser = async (payload: ILoginPayload) => {
  const response = await DevApiAxiosInstance.post<ILoginSuccessResponse | any>(
    `/authentication`,
    payload
  );
  return response.data;
};

export const useLoginUserMutation = () => {
  return useMutation(loginUser);
};

export const createCardForUser = async (payload: ICreateCardForUserPayload) => {
  const response = await DevApiAxiosInstance.post<any>(`/cards`, payload);
  return response.data;
};

export const useCreateCardForUserMutation = () => {
  return useMutation(createCardForUser);
};

export const validateCard = async (payload: IValidateCardPayload) => {
  const response = await DevApiAxiosInstance.post<any>(`/cards`, payload);
  return response.data;
};

export const useValidateCardMutation = () => {
  return useMutation(validateCard);
};

export const createUser = async (payload: ICreateUserPayload) => {
  const response = await DevApiAxiosInstance.post<any>(`/users`, payload);
  return response.data;
};

export const useCreateUserMutation = () => {
  return useMutation(createUser);
};

export const createSubscriptionForUser = async (
  payload: ISubscriptionPayload
) => {
  const response = await DevApiAxiosInstance.post<any>(
    `/subscriptions`,
    payload
  );
  return response.data;
};

export const useCreateSubscriptionForUserMutation = () => {
  return useMutation(createSubscriptionForUser);
};
