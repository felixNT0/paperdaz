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
      className="p-10 max-sm:p-5 mt-7 mx-20 max-sm:mx-5 max-xsm:mx-0"
      id="paperdaz-link"
    >
      <h3 className="text-[#77C360] text-center text-[30px] font-bold">
        What is <span className="text-black">Paperlink?</span>
      </h3>
      <div className="mt-10 flex flex-col lg:flex-row lg:justify-around max-lg:justify-center items-center">
        <img
          src={connectIcon}
          alt="connectIcon"
          className="mb-3 md:mb-0 md:mr-3 max-sm:mb-5 w-[200px]  md:w-[250px]"
        />
        <p className="text-[#645E76]  max-sm:w-full md:max-w-[30%]">
          Paperdaz can turn every PDF file into a Paperlink allowing clients,
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
      <div className="flex flex-row max-lg:flex-col items-center max-lg:justify-center justify-around mt-[50px] mb-10">
        <Card
          icon={checkbox}
          title="Complete"
          description="Annotations, name, date, signature and initial stickers makes completing a file so fast!"
        />
        <div className="sm:mb-[70px]">
          <img src={arrowUp} alt="checkboxIcon" />
        </div>

        <Card
          icon={signIcon}
          title="Sign"
          description="Signing and initialing  a document fast and simple with Paperlink stickers."
        />
        <div className="sm:mb-[50px]">
          <img src={arrowDown} alt="checkboxIcon" className="sm:mb-10" />
        </div>

        <Card
          icon={confirm}
          title="Confirm"
          size={"30"}
          description="Signature, date and time user confirmed file will be stamped on each page of file."
        />
      </div>
    </div>
  );
}

export default WhatPaperdazaLinkDoes;
