import Card from "../../../../components/WhatPaperdazLinkDoes/Card";
import arrowUp from "../../../../assets/line Arrow-up.svg";
import arrowDown from "../../../../assets/line Arrow-down.svg";
import registerIcon from "../../../../assets/registerIcon.svg";
import uploadIcon from "../../../../assets/uploadIcon.svg";
import shareIcon from "../../../../assets/shareIcon.svg";
import arrowIllustration from "../../../../assets/arrowIllustration.svg";
import VideoPlay from "../../../../components/VideoPlay";

function BriefDetails() {
  return (
    <div className="p-10 mt-10 max-sm:mt-5 max-xsm:mx-0 max-xsm:p-2 max-sm:pt-7 lg:mx-10 xl:mx-24">
      <div className="lg:relative mt-5 mb-10 flex flex-col md:flex-row  justify-around items-center">
        <h3 className="text-[#77C360] text-start max-md:text-center text-[30px] font-bold max-md:mb-10">
          Paper to LINKS <br />{" "}
          <span className="text-black ">in less than 10 minutes</span>
        </h3>
        <img
          src={arrowIllustration}
          alt="arrowIllustration"
          className="absolute top-12 mr-48 max-lg:hidden w-16 "
        />
        <div className="text-center">
          <VideoPlay />
        </div>
      </div>
      <div className="flex justify-center items-center">
        <div className="flex max-md:flex-col md:flex-row  md:gap-0 max-md:items-center items-start justify-center mt-[50px] mb-10 max-md:mt-5">
          <Card
            icon={registerIcon}
            title="Three minutes to register"
            description="Register, select the number of papers to create a link.  An email with a direct link to  Business Page for clients, patients, or employees to complete, sign, or confirm files on any size devices."
          />
          <div className="sm:mb-[70px] md:hidden xl:block lg:mt-24">
            <img
              src={arrowUp}
              alt="checkboxIcon"
              className="max-sm:w-full  max-lg:max-w-10"
            />
          </div>

          <Card
            icon={uploadIcon}
            title="Upload PDF files"
            description="Login to admin console, click on PaperLink Page to upload PDF files that is normally printed and handed out.  Paperdaz API will automatically create links for each file uploaded. Each upload takes seconds to process."
          />
          <div className="sm:mb-[50px] md:hidden xl:block lg:mt-24">
            <img
              src={arrowDown}
              alt="checkboxIcon"
              className="sm:mb-10  max-lg:max-w-10 max-sm:w-full"
            />
          </div>

          <div>
            <Card
              icon={shareIcon}
              title="Share PaperLink"
              description="Paper files are now paperLinks.  Share it to clients, patients, employees access via email, link, QR code. "
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default BriefDetails;
