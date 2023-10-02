import aboutLogo from "../../assets/aboutStat.svg";
import rightIllustrationIcon from "../../assets/hero-shape-right.svg";

function AboutPaperdazLink() {
  return (
    <div className="lg:relative" id="about-paper-link">
      <div className="m-16 max-sm:m-10 mb-28 max-sm:mb-12 xl:mx-20 lg:m-10 lg:mx-10 max-md:mx-14 max-sm:mx-5 ">
        <h1 className="text-primary max-lg:text-[30px] font-semibold text-5xl text-center mb-20">
          About <span className="text-black">PaperLink</span>
        </h1>
        <div className="flex justify-center items-center">
          <div className="flex flex-row max-lg:flex-col max-lg:justify-center justify-around items-center xl:mx-20 lg:mx-10 max-md:mx-14 max-sm:mx-3">
            <div className="p-15 bg-[#77C36017] max-sm:mb-16 max-md:mb-20">
              <img
                src={aboutLogo}
                alt="aboutLogo"
                className="min-w-[300px] max-sm:w-[100px] max-w-[500px] "
              />
            </div>

            <div className="xl:mx-20 lg:w-full lg:ml-10 max-md:mx-0">
              <p className="text-[#565656]">
                PaperLink is designed for Small businesses that does not have
                the time to register for a paperless app and configure each
                piece of paper to forms or a generous budget costing hundreds a
                month. Registration for PaperLink is less than 10 minutes, and
                it cost $2.00 for each piece of paper.{" "}
              </p>
              <p className="text-[#565656] mt-7 max-sm:mt-5">
                <span className="border-b-2">Example</span> Apple Dental hands
                patients an average of five pieces of paper, if there are about
                25 patients daily. Referring to the cost of paper illustration
                to the left look at the comparison between Paper and PaperLink.{" "}
              </p>

              <p className="text-[#565656] mt-7 max-sm:mt-5">
                <span className="font-bold">Paper:</span> 5 sheets x $1.68 per x
                25 patients = $210 day x 30 days = $6,300 a month
              </p>
              <p className="text-[#565656] mt-7 max-sm:mt-5">
                <span className="font-bold">PaperLink:</span> 5 sheets x $2 per
                = $10 a month + $10 Business Page = $20 a month
              </p>
              <p className="text-black text-center mt-7">
                20, 200, or 2000 patients can complete the PaperLink for $20 a
                month
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute right-0 bottom-20 max-lg:hidden">
        <img
          src={rightIllustrationIcon}
          alt="rightIllustrationIcon"
          className="w-16"
        />
      </div>
      <h1 className="text-primary text-center max-lg:text-[30px] text-5xl max-sm:text-lg font-bold text-[30px] m-10">
        How much will it cost your office{" "}
        <span className="text-black">to get PaperLink?</span>
      </h1>
    </div>
  );
}

export default AboutPaperdazLink;
