import RegisterModal from "../../components/modal/register-modal";
import { useAppContext } from "../../context";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useEffect, useState } from "react";
import * as Yup from "yup";
import masterCardIcon from "../../assets/masterCardIcon.svg";
import visaCardIcon from "../../assets/visaCardIcon.svg";
import amexCardIcon from "../../assets/amexCardIcon.svg";
import discoverCardIcon from "../../assets/discoverCardIcon.svg";
import { useAnimation } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faExclamationCircle,
  faSpinner,
} from "@fortawesome/free-solid-svg-icons";
import {
  useCreateCardForUserMutation,
  useCreateSubscriptionForUserMutation,
  useCreateUserMutation,
  useGetUserByEmailQuery,
  useValidateCardMutation,
} from "../../api/services/api.service";
import { useNavigate } from "react-router-dom";
import { ICreateUserPayload } from "../../types";
import navigations from "../../navigations";

function Register() {
  const initialValuesToCreateUser = {
    email: "",
    firstName: "",
    lastName: "",
    phone: "",
    companyName: "",
  };
  const initialValuesToCreateCard = {
    card_holder_name: "",
    card_number: "",
    card_expire: "",
    cvv: "",
    action: "testCard",
    userId: null,
  };
  const {
    mutateAsync,
    isSuccess,
    data,
    isError: ErrorOccured,
  } = useCreateUserMutation();
  const {
    mutate: validateCard,
    isSuccess: cardValidatedSuccessfully,
    isError,
    isLoading,
    error,
  } = useValidateCardMutation();

  const userDetails = localStorage.getItem("userDetails");

  let values: any;

  if (userDetails) {
    values = JSON.parse(userDetails);
  } else {
    values = initialValuesToCreateCard;
  }

  const { data: userEmail, isSuccess: isUserByEmailSuccessful } =
    useGetUserByEmailQuery(ErrorOccured ? values?.email : "");

  const {
    mutateAsync: createCard,
    isSuccess: cardCreatedSuccessfully,
    isLoading: cardCreateCard,
  } = useCreateCardForUserMutation();

  const {
    mutateAsync: createSubscription,
    isSuccess: cardSubscriptionSuccessfully,
    isLoading: cardSubscriptionIsLoading,
  } = useCreateSubscriptionForUserMutation();

  const steps = [{ key: 1 }, { key: 2 }];
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  const { isRegisterModalOpen, toggleRegisterModal, tableSubscriptionPayload } =
    useAppContext();

  const controls = useAnimation();

  const navigate = useNavigate();

  useEffect(() => {
    if (currentStepIndex) {
      controls.start("open");
    }
  }, [currentStepIndex, controls]);

  const validationSchemaToCreateUser = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    firstName: Yup.string().required("firstName is required"),
    companyName: Yup.string().required("Business Name is required"),
    phone: Yup.string().required("phone is required"),
  });

  const validationSchemaToValidateCard = Yup.object().shape({
    card_holder_name: Yup.string().required("card holder name is required"),
    card_number: Yup.string().required("card number is required"),
    cvv: Yup.string().required("cvv is required"),
    card_expire: Yup.string().required("card expire is required"),
  });

  const formatCardNumber = (inputValue: any) => {
    const numericValue = inputValue.replace(/\D/g, "");

    const formattedValue = numericValue.match(/\d{1,4}/g);

    return (formattedValue || []).join("-").substring(0, 19);
  };

  const formatExpirationDate = (inputValue: any) => {
    const numericValue = inputValue.replace(/\D/g, "");

    if (numericValue.length > 4) {
      return numericValue.slice(0, 4);
    }

    if (numericValue.length >= 3) {
      const month = numericValue.slice(0, 2);
      const year = numericValue.slice(2);
      return `${month}/${year}`;
    } else {
      return numericValue;
    }
  };

  const handleSubmitValidateCard = (values: any) => {
    const month = values.card_expire.substring(0, 2);
    const year = values.card_expire.slice(-2);

    const { card_expire, ...others } = values;
    const cardNumberWithoutDashes = others.card_number.replace(/-/g, "");

    const payload = {
      ...others,
      exp_month: month,
      exp_year: year,
      card_number: cardNumberWithoutDashes,
    };
    localStorage.setItem("card", JSON.stringify(payload));
    validateCard(payload);
  };

  const handleNext = (values: ICreateUserPayload) => {
    if (currentStepIndex < steps.length - 1) {
      localStorage.setItem("userDetails", JSON.stringify(values));
      setCurrentStepIndex(currentStepIndex + 1);
    }
  };

  const handleBack = () => {
    if (currentStepIndex > 0) {
      setCurrentStepIndex(currentStepIndex - 1);
    }
  };

  const createUser = async () => {
    await mutateAsync(values);
  };

  const createCardAndSubscription = async () => {
    const cardStored = localStorage.getItem("card");
    const userId = localStorage.getItem("userId") || "";

    let card;

    if (cardStored) {
      card = JSON.parse(cardStored);
    } else {
      card = initialValuesToCreateCard;
    }
    const { action, ...others } = card;
    const newCard = {
      ...others,
      userId: ErrorOccured ? userEmail?.data[0]?.id : userId,
    };

    const { totalAmount, ...subscriptionPayload } = tableSubscriptionPayload;

    await createCard(newCard);
    await createSubscription({
      ...subscriptionPayload,
      userId: ErrorOccured ? userEmail?.data[0]?.id : userId,
    });
  };

  useEffect(() => {
    if (isSuccess) {
      localStorage.setItem("userId", data?.id);
      createCardAndSubscription();
    } else if (ErrorOccured && isUserByEmailSuccessful) {
      createCardAndSubscription();
    }
  }, [isSuccess, isUserByEmailSuccessful, ErrorOccured]);

  useEffect(() => {
    if (cardValidatedSuccessfully) {
      createUser();
    }
  }, [cardValidatedSuccessfully]);

  useEffect(() => {
    if (cardSubscriptionSuccessfully && cardCreatedSuccessfully) {
      navigate(navigations.LANDING_PAGE, {
        state: { subscriptionSuccessful: true },
      });
      toggleRegisterModal();
    }
  }, [cardCreatedSuccessfully, cardSubscriptionSuccessfully]);

  useEffect(() => {
    if (!isRegisterModalOpen) {
      localStorage.removeItem("userId");
      localStorage.removeItem("card");
      localStorage.removeItem("userDetails");
    }
  }, [isRegisterModalOpen]);

  return (
    <RegisterModal
      isModalOpen={isRegisterModalOpen}
      toggleOpenModal={toggleRegisterModal}
      handleBack={handleBack}
      showBackButton={currentStepIndex > 0}
    >
      <div className="flex items-center justify-center w-full px-3 py-3 max-sm:pb-5 rounded-lg">
        {currentStepIndex === 0 && (
          <div className="w-full ">
            <>
              <div className="flex flex-col gap-3 items-center justify-center text-primary ">
                <h2 className="text-center text-3xl max-sm:text-lg">
                  Account Information
                </h2>
                <p className="max-sm:text-sm">
                  Enter the required fields to continue
                </p>
              </div>
              <Formik
                initialValues={initialValuesToCreateUser}
                validationSchema={validationSchemaToCreateUser}
                onSubmit={handleNext}
              >
                {(formik) => {
                  const { isValid, dirty, values, handleChange, handleBlur } =
                    formik;
                  return (
                    <Form className="mt-4 space-y-6">
                      <div className="rounded-md shadow-sm -space-y-px">
                        <div>
                          <label
                            htmlFor="Business name"
                            className="text-[#222529] mb-5 max-sm:text-sm"
                          >
                            Business name
                          </label>
                          <Field
                            value={values.companyName}
                            id="companyName"
                            name="companyName"
                            type="text"
                            onBlur={handleBlur}
                            onChange={handleChange}
                            autoComplete="text"
                            placeholder="Business name"
                            className="appearance-none rounded-lg max-sm:py-2 relative block w-full py-3 px-4 border text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-opacity-50 focus:ring-primary focus:border-primary sm:text-sm mb-5"
                          />
                          <ErrorMessage
                            name="companyName"
                            component="p"
                            className="mt-1 text-sm text-red-600 mb-3"
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="Contact name"
                            className="text-[#222529] mb-5 max-sm:text-sm"
                          >
                            Contact First name
                          </label>
                          <Field
                            id="firstName"
                            name="firstName"
                            type="text"
                            onBlur={handleBlur}
                            onChange={handleChange}
                            value={values.firstName}
                            autoComplete="text"
                            placeholder="Contact First name"
                            className="appearance-none rounded-lg max-sm:py-2 relative block w-full py-3 px-4 border text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-opacity-50 focus:ring-primary focus:border-primary sm:text-sm mb-5"
                          />
                          <ErrorMessage
                            name="firstName"
                            component="p"
                            className="mt-1 text-sm text-red-600 mb-3"
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="Contact name"
                            className="text-[#222529] mb-5 max-sm:text-sm"
                          >
                            Contact Last name
                          </label>
                          <Field
                            id="lastName"
                            name="lastName"
                            type="text"
                            value={values.lastName}
                            onBlur={handleBlur}
                            onChange={handleChange}
                            autoComplete="text"
                            placeholder="Contact Last name"
                            className="appearance-none rounded-lg max-sm:py-2 relative block w-full py-3 px-4 border text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-opacity-50 focus:ring-primary focus:border-primary sm:text-sm mb-5"
                          />
                          <ErrorMessage
                            name="lastName"
                            component="p"
                            className="mt-1 text-sm text-red-600 mb-3"
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="Email address"
                            className="text-[#222529] mb-5 max-sm:text-sm"
                          >
                            Email address
                          </label>
                          <Field
                            id="email"
                            name="email"
                            type="email"
                            value={values.email}
                            onBlur={handleBlur}
                            onChange={handleChange}
                            autoComplete="email"
                            placeholder="Email address"
                            className="appearance-none rounded-lg max-sm:py-2 relative block w-full py-3 px-4 border text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-opacity-50 focus:ring-primary focus:border-primary sm:text-sm mb-5"
                          />
                          <ErrorMessage
                            name="email"
                            component="p"
                            className="mt-1 text-sm text-red-600 mb-3"
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="Contact number"
                            className="text-[#222529] mb-5 max-sm:text-sm"
                          >
                            Contact number
                          </label>
                          <Field
                            id="phone"
                            name="phone"
                            type="tel"
                            value={values.phone}
                            onBlur={handleBlur}
                            onInput={(e: any) => {
                              e.target.value = e.target.value.replace(
                                /\D/g,
                                ""
                              );
                            }}
                            autoComplete="tel"
                            placeholder="Contact number"
                            className="appearance-none rounded-lg relative block w-full max-sm:py-2 py-3 px-4 border text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-opacity-50 focus:ring-primary focus:border-primary sm:text-sm mb-5"
                          />
                          <ErrorMessage
                            name="phone"
                            component="p"
                            className="mt-1 text-sm text-red-600 mb-3"
                          />
                        </div>
                      </div>

                      <div>
                        <button
                          disabled={!isValid || !dirty}
                          type="submit"
                          className={`group relative w-full flex justify-center max-sm:py-2 py-3 px-4  text-sm font-medium rounded-md text-white ${
                            !isValid || !dirty
                              ? "bg-gray-300 cursor-not-allowed"
                              : "bg-primary hover:bg-primary"
                          } `}
                        >
                          Next
                        </button>
                      </div>
                    </Form>
                  );
                }}
              </Formik>
            </>
          </div>
        )}
        {currentStepIndex === 1 && (
          <div className="w-full ">
            <>
              <div className="flex flex-row  items-center justify-between text-black  pb-2 border-b-2 border-b-[#B9B8C1]">
                <h2>Total due</h2>
                <p>
                  {tableSubscriptionPayload?.totalAmount}{" "}
                  <span className="text-[#979797]">
                    {tableSubscriptionPayload?.plan}
                  </span>
                </p>
              </div>
              <div className="flex flex-row items-center justify-between mt-3">
                <h1 className="text-primary text-lg max-sm:text-sm">
                  Credit Card
                </h1>
                <div className="flex items-center justify-center max-sm:grid max-sm:grid-cols-2 gap-1">
                  <img src={masterCardIcon} alt="masterCardIcon" />
                  <img src={visaCardIcon} alt="visaCardIcon" />
                  <img src={amexCardIcon} alt="amexCardIcon" />
                  <img src={discoverCardIcon} alt="discoverCardIcon" />
                </div>
              </div>
              {(isError || isUserByEmailSuccessful) && (
                <div
                  className={`${
                    isUserByEmailSuccessful ? "bg-primary" : "bg-red-500"
                  }  text-white my-3 p-3 rounded-md shadow-md`}
                >
                  <div className="flex items-center">
                    <div className="mr-2">
                      <FontAwesomeIcon icon={faExclamationCircle} />
                    </div>
                    {isError && (
                      <p>{(error as any)?.response?.data?.message}</p>
                    )}
                    {isUserByEmailSuccessful && (
                      <p>Registering Please wait...</p>
                    )}
                  </div>
                </div>
              )}
              <Formik
                initialValues={initialValuesToCreateCard}
                validationSchema={validationSchemaToValidateCard}
                onSubmit={handleSubmitValidateCard}
              >
                {(formik) => {
                  const {
                    isValid,
                    dirty,
                    values,
                    handleBlur,
                    handleChange,
                    setFieldValue,
                  } = formik;
                  return (
                    <Form className="mt-4 space-y-6">
                      <div className="rounded-md shadow-sm -space-y-px">
                        <div>
                          <label
                            htmlFor="Name of the card holder"
                            className="text-[#222529] mb-5 max-sm:text-sm"
                          >
                            Name of the card holder
                          </label>
                          <Field
                            id="card_holder_name"
                            name="card_holder_name"
                            type="text"
                            onBlur={handleBlur}
                            onChange={handleChange}
                            autoComplete="text"
                            placeholder="Name of the card holder"
                            className="appearance-none max-sm:py-2 rounded-lg relative block w-full py-3 px-4 border text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-opacity-50 focus:ring-primary focus:border-primary sm:text-sm mb-5"
                          />
                          <ErrorMessage
                            name="card_holder_name"
                            component="p"
                            className="mt-1 text-sm text-red-600 mb-3"
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="Card number"
                            className="text-[#222529] mb-5 max-sm:text-sm"
                          >
                            Card number
                          </label>
                          <Field
                            id="card_number"
                            name="card_number"
                            type="text"
                            autoComplete="text"
                            placeholder="0000-0000-0000-0000"
                            value={formatCardNumber(values.card_number)}
                            onChange={(e: any) => {
                              const formattedValue = formatCardNumber(
                                e.target.value.replace(/\D/g, "")
                              );
                              setFieldValue("card_number", formattedValue);
                            }}
                            onBlur={handleBlur}
                            className="appearance-none max-sm:py-2 rounded-lg relative block w-full py-3 px-4 border text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-opacity-50 focus:ring-primary focus:border-primary sm:text-sm mb-5"
                          />
                          <ErrorMessage
                            name="card_number"
                            component="p"
                            className="mt-1 text-sm text-red-600 mb-3"
                          />
                        </div>
                        <div className="flex flex-row items-center justify-between">
                          <div>
                            <label
                              htmlFor="Expiration date"
                              className="text-[#222529] mb-5 max-sm:text-sm"
                            >
                              Expiration date
                            </label>
                            <Field
                              id="card_expire"
                              name="card_expire"
                              type="text"
                              onBlur={handleBlur}
                              placeholder="MM/YY"
                              value={formatExpirationDate(values.card_expire)}
                              onChange={(e: any) => {
                                const formattedValue = formatExpirationDate(
                                  e.target.value.replace(/[^\d/]/g, "")
                                );
                                setFieldValue("card_expire", formattedValue);
                              }}
                              className="appearance-none max-sm:py-2 rounded-lg relative block w-full py-3 px-4 border text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-opacity-50 focus:ring-primary focus:border-primary sm:text-sm mb-5"
                            />
                            <ErrorMessage
                              name="card_expire"
                              component="p"
                              className="mt-1 text-sm text-red-600 mb-3"
                            />
                          </div>
                          <div>
                            <label
                              htmlFor="CVV"
                              className="text-[#222529] mb-5 max-sm:text-sm"
                            >
                              CVV
                            </label>
                            <Field
                              id="cvv"
                              name="cvv"
                              type="text"
                              maxLength={3}
                              value={values.cvv}
                              autoComplete="text"
                              placeholder="000"
                              onBlur={handleBlur}
                              onChange={handleChange}
                              className="appearance-none rounded-lg  max-sm:py-2 relative block w-full py-3 px-4 border text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-opacity-50 focus:ring-primary focus:border-primary sm:text-sm mb-5"
                            />
                            <ErrorMessage
                              name="cvv"
                              component="p"
                              className="mt-1 text-sm text-red-600 mb-3"
                            />
                          </div>
                        </div>
                      </div>

                      <div>
                        <button
                          disabled={
                            !isValid ||
                            !dirty ||
                            isLoading ||
                            cardSubscriptionIsLoading ||
                            cardCreateCard
                          }
                          type="submit"
                          className={`group relative w-full flex justify-center items-center max-sm:py-2 py-3 px-4  text-sm font-medium rounded-md text-white ${
                            !isValid ||
                            !dirty ||
                            isLoading ||
                            cardSubscriptionIsLoading ||
                            cardCreateCard
                              ? "bg-gray-300 cursor-not-allowed"
                              : "bg-primary hover:bg-primary"
                          } cursor-pointer `}
                        >
                          {(isLoading ||
                            cardSubscriptionIsLoading ||
                            cardCreateCard) && (
                            <FontAwesomeIcon
                              icon={faSpinner}
                              spin
                              className="mr-3"
                            />
                          )}{" "}
                          Pay
                        </button>
                      </div>
                    </Form>
                  );
                }}
              </Formik>
            </>
          </div>
        )}
      </div>
    </RegisterModal>
  );
}

export default Register;
