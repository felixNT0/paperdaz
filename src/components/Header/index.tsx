import { useNavigate } from "react-router-dom";
import logo from "../../assets/PaperdazLogo.svg";
import navigations from "../../navigations";
import { useAppContext } from "../../context";

function Header() {
  const navigate = useNavigate();
  const { toggleLoginModal } = useAppContext();
  return (
    <div className="w-full bg-white fixed top-0 left-0 z-50 shadow-md">
      <div className="max-sm:px-1 max-sm:pt-1.5 lg:mx-9 lg:py-2.5 flex flex-row  items-center md:flex-row  justify-between ">
        <img
          onClick={() =>
            navigate(navigations.LANDING_PAGE, { state: { home: "home" } })
          }
          src={logo}
          alt="logo"
          className="w-[120px] md:w-auto cursor-pointer"
        />
        <h6 className="text-center text-lg max-sm:text-sm font-bold mt-3 md:mt-0 lg:mr-10  2xl:mr-20 max-sm:hidden">
          Check our social media accounts to get register for PaperLinks!
        </h6>
        <p
          onClick={toggleLoginModal}
          className="lg:mr-10 max-md:mr-3 cursor-pointer hover:underline hover:text-primary"
        >
          Login
        </p>
      </div>
      <div className="w-full h-0.5  mt-1.5 sm:hidden " />
      <h6 className="text-center text-lg max-sm:text-[0.6rem]  max-xsm:text-[0.5rem] font-bold md:mt-0 sm:hidden">
        Check our social media accounts to get register for PaperLinks!
      </h6>
    </div>
  );
}

export default Header;
