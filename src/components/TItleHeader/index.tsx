import vector from "../../assets/vector.svg";
import titleHeader from "../../assets/titleHeaderIcon.svg";

interface Prop {
  title: string;
  subTitle: string;
}

function TitleHeader({ title, subTitle }: Prop) {
  return (
    <div className="bg-primary rounded-bl-[30px] rounded-br-[30px] h-[350px] max-sm:h-[250px]  relative">
      <img
        src={vector}
        alt="vector"
        className="absolute top-0 left-0 h-full w-full object-cover"
      />

      <div className="absolute inset-0 flex max-sm:mt-10 justify-center items-center">
        <h1 className="text-center text-white font-bold text-5xl max-sm:text-3xl">
          {title}
        </h1>
      </div>
      <div className="absolute inset-0 flex mt-40 max-sm:mt-24 max-xsm:mt-40 justify-center items-center">
        <p className="text-center text-white text-sm">{subTitle}</p>
      </div>

      <div className="absolute max-md:hidden bottom-0 left-0 p-4">
        <img src={titleHeader} alt="titleHeader" className="w-28" />
      </div>

      <div className="absolute max-md:hidden top-20 right-0 p-4">
        <img src={titleHeader} alt="titleHeader" className="w-28" />
      </div>
    </div>
  );
}

export default TitleHeader;
