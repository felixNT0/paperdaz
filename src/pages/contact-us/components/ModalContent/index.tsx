import { BsChatDots } from "react-icons/bs";
import { IoMailOutline } from "react-icons/io5";
import { FiHome } from "react-icons/fi";
import illustrastion from "../../../../assets/illustratin2.svg";
import { useAppContext } from "../../../../context";

function ModalContents() {
  const { toggleChatBox } = useAppContext();
  return (
    <div className="flex flex-row gap-20 max-sm:gap-10  justify-center items-center">
      <div className="p-4 ">
        <h3 className="text-black text-3xl max-xsm:text-sm  max-sm:text-xl font-bold  z-80 max-md:text-center">
          Get In Touch With Us
        </h3>

        <p className="text-[#6A6A6D] my-7 max-xsm:text-[0.7rem]  max-sm:my-3 max-md:text-center">
          Drop us a message, we would love to hear from you.
        </p>
        <div className="flex justify-center items-center md:hidden ">
          <img
            src={illustrastion}
            alt="illustrastion"
            className="w-[150px] text-center max-xsm:w-[100px] "
          />
        </div>
        <div className="flex gap-5 item-center mt-10 mb-5">
          <div className="p-3 max-xsm:p-1.5 rounded-lg item-center bg-primary">
            <BsChatDots color="white" size={30} />
          </div>
          <div>
            <h3 className="text-[#243853] font-extrabold m-0 p-0 max-xsm:text-sm ">
              Chat With Us
            </h3>
            <p
              onClick={() => {
                toggleChatBox(true);
              }}
              className="cursor-pointer text-primary font-bold underline max-xsm:text-[0.7rem] "
            >
              Start Now
            </p>
          </div>
        </div>
        <div className="flex gap-5 item-center mb-5">
          <div className="p-3 max-xsm:p-1.5 rounded-lg item-center bg-primary ">
            <IoMailOutline color="white" size={30} />
          </div>
          <div>
            <h3 className="text-[#243853] font-extrabold max-xsm:text-sm ">
              Email Address
            </h3>
            <p className="text-[#6A6A6D] text-sm max-xsm:text-[0.7rem] ">
              hello@paperdaz.com
            </p>
          </div>
        </div>
        <div className="flex gap-5 item-center mb-1 max-sm:mb-0">
          <div className="p-3 max-xsm:p-1.5 rounded-lg item-center bg-primary max-xsm:max-h-[45px] max-h-[55px]">
            <FiHome color="white" size={30} />
          </div>
          <div>
            <h3 className="text-[#243853] font-extrabold max-xsm:text-sm ">
              Our Location
            </h3>
            <p className="text-[#6A6A6D] text-sm max-xsm:text-[0.7rem]">
              1968 S. Coast Hwy Suite 4302 Laguna Beach, CA 92651
            </p>
          </div>
        </div>
      </div>
      <img
        src={illustrastion}
        alt="illustrastion"
        className="w-[300px] max-md:hidden"
      />
    </div>
  );
}

export default ModalContents;
