import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import loginIcon from "../../assets/loginIcon.svg";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { useAppContext } from "../../context";
import Modal from "../../components/modal";
import { useLoginUserMutation } from "../../api/services/api.service";
import { ILoginPayload } from "../../types";

const Login = () => {
  const initialValues = {
    email: "",
    password: "",
  };

  const { mutate, isSuccess, data } = useLoginUserMutation();

  const { isLoginModalOpen, toggleLoginModal } = useAppContext();

  const [showPassword, setShowPassword] = useState(false);

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  const handleSubmit = (values: ILoginPayload) => {
    const payload = { ...values, strategy: "local" };
    mutate(payload);
  };

  useEffect(() => {
    if (isSuccess) {
      const url = `https://dev.paperlink.app/?paperlinkAccessToken=${data?.accessToken}`;
      window.location.href = url;
    }
  }, [isSuccess]);

  return (
    <Modal
      isModalOpen={isLoginModalOpen}
      toggleOpenModal={toggleLoginModal}
      width="w-[500px]"
    >
      <div className="flex items-center justify-center px-3 py-3 max-sm:pb-5 rounded-lg">
        <div className="w-full">
          <div className="flex flex-row gap-3 items-center justify-center">
            <img src={loginIcon} alt="loginIcon" className="w-10 max-xsm:w-7" />
            <h2 className="text-center text-3xl max-sm:text-lg text-primary">
              Paper<span className="text-black">Link</span> Console
            </h2>
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
                    htmlFor="email"
                    className="text-[#222529] mb-5 max-sm:text-sm"
                  >
                    Email
                  </label>
                  <Field
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="Email address"
                    className="appearance-none rounded-lg relative block w-full max-sm:py-2 py-3 px-4 border text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-opacity-50 focus:ring-primary focus:border-primary sm:text-sm mb-5"
                  />
                  <ErrorMessage
                    name="email"
                    component="p"
                    className="mt-2 text-sm text-red-600 mb-3"
                  />
                </div>
                <div className="mt-4">
                  <label
                    htmlFor="password"
                    className=" text-[#222529] mb-5 max-sm:text-sm"
                  >
                    Password
                  </label>
                  <div className="relative">
                    <Field
                      id="password"
                      name="password"
                      type={showPassword ? "text" : "password"}
                      autoComplete="current-password"
                      placeholder="Password"
                      className={`appearance-none rounded-lg max-sm:py-2 relative block w-full py-3 px-4 border text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-opacity-50 focus:ring-primary focus:border-primary sm:text-sm mb-5`}
                    />
                    <button
                      type="button"
                      className="password-toggle absolute top-2 right-3 max-sm:top-3.5 cursor-pointer"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      <FontAwesomeIcon
                        icon={showPassword ? faEyeSlash : faEye}
                        color="#777"
                      />
                    </button>
                  </div>
                  <ErrorMessage
                    name="password"
                    component="p"
                    className="mt-2 text-sm text-red-600 FF7373"
                  />
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Field
                    id="rememberMe"
                    name="rememberMe"
                    type="checkbox"
                    className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded cursor-pointer outline-none"
                  />
                  <label
                    htmlFor="rememberMe"
                    className="ml-2 block text-sm text-gray-900 max-sm:text-[0.6rem]"
                  >
                    Remember me
                  </label>
                </div>
                <div className="text-sm">
                  <a
                    // href="#"
                    className="font-medium max-sm:text-[0.6rem] text-[#FF7373] hover:underline hover:text-[#FF7373] cursor-pointer"
                  >
                    Forgot your password?
                  </a>
                </div>
              </div>
              <div>
                <button
                  type="submit"
                  className="group relative w-full flex justify-center py-3 px-4  text-sm font-medium rounded-md text-white bg-primary hover:bg-primary"
                >
                  Sign In
                </button>
              </div>
            </Form>
          </Formik>
        </div>
      </div>
    </Modal>
  );
};

export default Login;
