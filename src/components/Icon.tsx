import icon1 from "../assets/icon1.svg";
import icon2 from "../assets/icon2.svg";

function Icon() {
  return (
    <div className="relative">
      <img src={icon2} alt="icon2" className="absolute w-[85px] top-5" />
      <img src={icon1} alt="icon1" className="absolute w-[100px]" />
    </div>
  );
}

export default Icon;
