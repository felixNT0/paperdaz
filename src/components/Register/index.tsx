import RegisterModal from "../../components/modal/register-modal";
import { useAppContext } from "../../context";
import { Formik, Form, Field } from "formik";
import { useEffect, useState } from "react";
import * as Yup from "yup";
import masterCardIcon from "../../assets/masterCardIcon.svg";
import visaCardIcon from "../../assets/visaCardIcon.svg";
import amexCardIcon from "../../assets/amexCardIcon.svg";
import discoverCardIcon from "../../assets/discoverCardIcon.svg";
import { useAnimation } from "framer-motion";

function Register() {
  const initialValues = {
    email: "",
    password: "",
    business_name: "",
    cardNumber: "",
    expirationDate: "",
    cvv: "",
  };
  const steps = [{ key: 1 }, { key: 2 }];
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  const { isRegisterModalOpen, toggleRegisterModal } = useAppContext();

  const controls = useAnimation();

  useEffect(() => {
    if (currentStepIndex) {
      controls.start("open");
    }
  }, [currentStepIndex, controls]);

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string().required("Password is required"),
    business_name: Yup.string().required("Name of the card holder is required"),
    cardNumber: Yup.string()
      .required("Card number is required")
      .matches(/^\d{4}-\d{4}-\d{4}-\d{4}$/, "Invalid card number"),
    expirationDate: Yup.string()
      .required("Expiration date is required")
      .matches(/^(0[1-9]|1[0-2])\/\d{2}$/, "Invalid expiration date"),
    cvv: Yup.string()
      .required("CVV is required")
      .matches(/^\d{3}$/, "Invalid CVV"),
  });

  const formatCardNumber = (inputValue: any) => {
    const formattedValue = inputValue
      .replace(/\D/g, "")
      .replace(/(\d{4})/g, "$1-");
    return formattedValue.substring(0, 19);
  };

  const formatExpirationDate = (inputValue: any) => {
    const formattedValue = inputValue
      .replace(/\D/g, "")
      .replace(/(\d{2})/, "$1/");
    return formattedValue.substring(0, 5);
  };

  const handleSubmit = () => {
    // console.log(values);
  };

  const handleNext = () => {
    if (currentStepIndex < steps.length - 1) {
      setCurrentStepIndex(currentStepIndex + 1);
    }
  };

  const handleBack = () => {
    if (currentStepIndex > 0) {
      setCurrentStepIndex(currentStepIndex - 1);
    }
  };

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
                  Enter the required inforation to continue
                </p>
              </div>
              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
              >
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
                        id="business_name"
                        name="business_name"
                        type="text"
                        autoComplete="text"
                        placeholder="Business name"
                        className="appearance-none rounded-lg max-sm:py-2 relative block w-full py-3 px-4 border text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-opacity-50 focus:ring-primary focus:border-primary sm:text-sm mb-5"
                      />
                      {/* <ErrorMessage
                        name="business_name"
                        component="p"
                        className="mt-2 text-sm text-red-600 mb-3"
                      /> */}
                    </div>
                    <div>
                      <label
                        htmlFor="Contact name"
                        className="text-[#222529] mb-5 max-sm:text-sm"
                      >
                        Contact name
                      </label>
                      <Field
                        id="contact_name"
                        name="contact_name"
                        type="text"
                        autoComplete="text"
                        placeholder="Contact name"
                        className="appearance-none rounded-lg max-sm:py-2 relative block w-full py-3 px-4 border text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-opacity-50 focus:ring-primary focus:border-primary sm:text-sm mb-5"
                      />
                      {/* <ErrorMessage
                        name="contact_name"
                        component="p"
                        className="mt-2 text-sm text-red-600 mb-3"
                      /> */}
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
                        autoComplete="email"
                        placeholder="Email address"
                        className="appearance-none rounded-lg max-sm:py-2 relative block w-full py-3 px-4 border text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-opacity-50 focus:ring-primary focus:border-primary sm:text-sm mb-5"
                      />
                      {/* <ErrorMessage
                        name="email"
                        component="p"
                        className="mt-2 text-sm text-red-600 mb-3"
                      /> */}
                    </div>
                    <div>
                      <label
                        htmlFor="Contact number"
                        className="text-[#222529] mb-5 max-sm:text-sm"
                      >
                        Contact number
                      </label>
                      <Field
                        id="contact_number"
                        name="contact_number "
                        type="text"
                        autoComplete="text"
                        placeholder="Contact number "
                        className="appearance-none rounded-lg relative block w-full max-sm:py-2 py-3 px-4 border text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-opacity-50 focus:ring-primary focus:border-primary sm:text-sm mb-5"
                      />
                      {/* <ErrorMessage
                        name="contact_number"
                        component="p"
                        className="mt-2 text-sm text-red-600 mb-3"
                      /> */}
                    </div>
                  </div>

                  <div>
                    <button
                      onClick={handleNext}
                      type="button"
                      className="group relative w-full flex justify-center max-sm:py-2 py-3 px-4  text-sm font-medium rounded-md text-white bg-primary hover:bg-primary"
                    >
                      Next
                    </button>
                  </div>
                </Form>
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
                  $22 <span className="text-[#979797]">monthly</span>
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
              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
              >
                {(formik) => {
                  const { isValid, dirty, values, setFieldValue } = formik;
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
                            id="business_name"
                            name="business_name"
                            type="text"
                            autoComplete="text"
                            placeholder="Name of the card holder"
                            className="appearance-none max-sm:py-2 rounded-lg relative block w-full py-3 px-4 border text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-opacity-50 focus:ring-primary focus:border-primary sm:text-sm mb-5"
                          />
                          {/* <ErrorMessage
                        name="business_name"
                        component="p"
                        className="mt-2 text-sm text-red-600 mb-3"
                      /> */}
                        </div>
                        <div>
                          <label
                            htmlFor="Card number"
                            className="text-[#222529] mb-5 max-sm:text-sm"
                          >
                            Card number
                          </label>
                          <Field
                            id="contact_name"
                            name="contact_name"
                            type="text"
                            autoComplete="text"
                            placeholder="0000-0000-0000-0000"
                            value={formatCardNumber(values.cardNumber)}
                            onChange={(e: any) => {
                              const formattedValue = formatCardNumber(
                                e.target.value
                              );
                              setFieldValue("cardNumber", formattedValue);
                            }}
                            className="appearance-none max-sm:py-2 rounded-lg relative block w-full py-3 px-4 border text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-opacity-50 focus:ring-primary focus:border-primary sm:text-sm mb-5"
                          />
                          {/* <ErrorMessage
                        name="contact_name"
                        component="p"
                        className="mt-2 text-sm text-red-600 mb-3"
                      /> */}
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
                              id="email"
                              name="email"
                              type="email"
                              placeholder="MM/YY"
                              value={formatExpirationDate(
                                values.expirationDate
                              )}
                              onChange={(e: any) => {
                                const formattedValue = formatExpirationDate(
                                  e.target.value
                                );
                                setFieldValue("expirationDate", formattedValue);
                              }}
                              className="appearance-none max-sm:py-2 rounded-lg relative block w-full py-3 px-4 border text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-opacity-50 focus:ring-primary focus:border-primary sm:text-sm mb-5"
                            />
                            {/* <ErrorMessage
                          name="email"
                          component="p"
                          className="mt-2 text-sm text-red-600 mb-3"
                        /> */}
                          </div>
                          <div>
                            <label
                              htmlFor="CVV"
                              className="text-[#222529] mb-5 max-sm:text-sm"
                            >
                              CVV
                            </label>
                            <Field
                              id="contact_number"
                              name="contact_number "
                              type="text"
                              maxLength={3}
                              autoComplete="text"
                              placeholder="000"
                              className="appearance-none rounded-lg  max-sm:py-2 relative block w-full py-3 px-4 border text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-opacity-50 focus:ring-primary focus:border-primary sm:text-sm mb-5"
                            />
                            {/* <ErrorMessage
                          name="contact_number"
                          component="p"
                          className="mt-2 text-sm text-red-600 mb-3"
                        /> */}
                          </div>
                        </div>
                      </div>

                      <div>
                        <button
                          // onClick={handleNext}
                          disabled={!isValid || !dirty}
                          type="button"
                          className="group relative w-full flex justify-center max-sm:py-2 py-3 px-4  text-sm font-medium rounded-md text-white bg-primary hover:bg-primary"
                        >
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
