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

export type ILoginPayload = {
  email: string;
  password: string;
  strategy?: string;
};

export type ILoginSuccessResponse = {
  accessToken: string;
  user: { id: string };
};

export type IValidateCardPayload = {
  card_holder_name: string;
  card_number: string;
  exp_month: string;
  exp_year: string;
  cvv: string;
  action: string;
};

export type ICreateCardForUserPayload = {
  card_holder_name: string;
  card_number: string;
  exp_month: string;
  exp_year: string;
  cvv: string;
  userId: number;
};

export type ICreateUserPayload = {
  email: string;
  firstName: string;
  lastName?: string;
  phone: string;
  companyName: string;
};

export type ISubscriptionPayload = {
  action: string;
  plan: string;
  companyLedger: boolean;
  packageName: string;
  paperlink: number;
  publicProfile: boolean;
  teamMembers: number;
  cc: number;
  isWhiteGloveService: boolean;
  userId: number | null;
  fillablePdf: number;
};
