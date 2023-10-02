import connectIcon from "../../assets/connect.svg";
import paperdazLinkIcon from "../../assets/PaperlinkIcon.svg";
import arrowUp from "../../assets/line Arrow-up.svg";
import arrowDown from "../../assets/line Arrow-down.svg";
import checkbox from "../../assets/checkbox.svg";
import signIcon from "../../assets/signIcon.svg";
import confirm from "../../assets/confirm.svg";
import Card from "./Card";

function WhatPaperdazaLinkDoes() {
  return (
    <div
      className="p-10 max-sm:p-5 mt-7 mx-24 max-sm:mx-5 max-xsm:mx-0"
      id="paperdaz-link"
    >
      <h3 className="text-[#77C360] text-center text-[30px] font-bold">
        What is a <span className="text-black">PaperLink?</span>
      </h3>
      <div className="mt-10 flex flex-col lg:flex-row  lg:justify-around max-lg:justify-center items-center">
        <img
          src={connectIcon}
          alt="connectIcon"
          className="mb-5  md:mr-3 max-sm:mb-5 w-[200px] max-md:mb-10  md:w-[250px]"
        />
        <p className="text-[#645E76]  max-sm:w-full md:max-w-[30%]">
          Paperdaz can turn every PDF file into a PaperLink allowing clients,
          patients, and employees to complete, sign, or confirm a file anytime
          anywhere on a mobile device. This will save time and money for
          business and the end user.
        </p>
        <img
          src={paperdazLinkIcon}
          alt="paperdazLinkIcon"
          className="w-[250px] md:w-[350px]"
        />
      </div>
      <div className="flex justify-center items-center">
        <div className="flex max-md:flex-col md:flex-row  md:gap-0 max-md:items-center items-start justify-center mt-[50px] mb-10 max-md:mt-5">
          <Card
            icon={checkbox}
            title="Complete"
            description="Annotations, name, date, signature and initial stickers makes completing a file so fast!"
          />
          <div className="sm:mb-[70px] md:hidden 2xl:block lg:mt-24">
            <img
              src={arrowUp}
              alt="checkboxIcon"
              className="max-sm:w-full  max-lg:max-w-10"
            />
          </div>

          <Card
            icon={signIcon}
            title="Sign"
            description="Signing and initialing  a document fast and simple with PaperLink stickers."
          />
          <div className="sm:mb-[50px] md:hidden 2xl:block lg:mt-24">
            <img
              src={arrowDown}
              alt="checkboxIcon"
              className="sm:mb-10  max-lg:max-w-10 max-sm:w-full"
            />
          </div>

          <Card
            icon={confirm}
            title="Confirm"
            size={"30"}
            description="Signature, date and time user confirmed file will be stamped on each page of file."
          />
        </div>
      </div>
    </div>
  );
}

export default WhatPaperdazaLinkDoes;
