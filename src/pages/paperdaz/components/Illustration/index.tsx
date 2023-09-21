import paperdazIllustration from "../../../../assets/paperdazillustration.svg";
import leftIllustrationIcon from "../../../../assets/hero-shape-left.svg";

function Illustration() {
  return (
    <>
      <div className=" bg-white lg:relative">
        <h1 className="m-20 max-sm:m-10 max-lg:mt-20 text-black text-5xl max-sm:text-lg text-center">
          Which office will you be,{" "}
          <span className="text-primary">PAPER or PAPERLESS?</span>
        </h1>
        <div className="absolute left-0 -bottom-10 max-lg:hidden">
          <img
            src={leftIllustrationIcon}
            alt="rightIllustrationIcon"
            className="w-16"
          />
        </div>
      </div>
      <div>
        <img
          src={paperdazIllustration}
          alt="paperdazIllustration"
          className="w-full"
        />
      </div>
    </>
  );
}

export default Illustration;
