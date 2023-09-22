import globalMapIcon from "../../../../assets/mapimage.svg";
import rightIllustrationIcon from "../../../../assets/hero-shape-right.svg";

function AboutUs() {
  return (
    <div id="about-us" className="lg:relative">
      <div className="m-20 max-sm:m-10  bg-white">
        <h1 className="text-black max-lg:text-[30px] font-semibold text-5xl  text-center">
          About <span className="text-primary">Us</span>
        </h1>
      </div>
      <div className="">
        <div className="lg:relative ">
          <div className="flex max-lg:hidden items-center justify-center ">
            <div className="w-[40%]   h-fit" />

            <div className="w-[60%]   min-h-[460px] max-lg:h-auto bg-[#77C36017]" />
          </div>
          <div className="flex justify-center items-center">
            <div className="lg:absolute  py-10   z-10 top-0  flex flex-row max-sm:flex-col justify-center gap-10 lg:mx-28 items-center">
              <img
                src={globalMapIcon}
                alt="globalMapIcon"
                className="w-1/2 max-sm:w-10/12 max-md:ml-10 max-sm:ml-0"
              />
              <div className="text-[#565656]  text-lg mr-20 max-sm:mr-0 w-[500px] max-sm:w-10/12">
                <p className="py-3">
                  Our vision is every size office will no longer hand paper to
                  clients, patients or employees to fill out. 
                </p>
                <p className="py-2">
                  Our mission is to provide a platform that is easy for business
                  to go paperless and easy for clients, patients and employees
                  to complete on all size mobile device anytime anywhere.
                </p>
                <p className="py-1">
                  Our goal is reduce carbon footprint one piece of paper at a
                  time, one company at a time for a greener safer world for the
                  next generation.  
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute right-0 bottom-0 max-lg:hidden">
        <img
          src={rightIllustrationIcon}
          alt="rightIllustrationIcon"
          className="w-16"
        />
      </div>
    </div>
  );
}

export default AboutUs;
