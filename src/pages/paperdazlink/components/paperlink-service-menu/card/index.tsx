interface Props {
  icon: any;
  title: string;
  description: string;
  number: string;
  charges: string;
  price: string;
  type?: string;
  defaulColor?: boolean;
  style?: React.CSSProperties;
}

function Card({
  icon,
  title,
  description,
  number,
  charges,
  price,
  type,
  defaulColor,
  style,
}: Props) {
  const cardColor = defaulColor ? "border-[#FF7900]" : "border-[#19bad7]";
  const bgColor = defaulColor ? "bg-[#FF7900]" : "bg-[#19bad7]";
  const textColor = defaulColor ? "text-[#FF7900]" : "text-[#19bad7]";

  return (
    <div
      style={style}
      className={`relative rounded-lg border ${cardColor} border-2 p-3 m-3 max-xsm:w-[250px] max-sm:w-[300px] w-[450px] h-[220px] flex flex-col justify-around max-md:h-auto max-xsm:mt-5`}
    >
      <div
        className={`absolute -left-[0.45rem] top-16 max-md:top-16 bottom-0 w-3 h-20 max-sm:top-10 ${bgColor} rounded-lg`}
      />
      <div className="flex justify-between items-center">
        <h1 className="text-xl max-md:text-lg max-sm:text-[0.7rem] font-bold">
          {title}
        </h1>
        <h1
          className={`text-5xl max-md:text-3xl max-sm:text-lg font-bold ${textColor}`}
        >
          {number}
        </h1>
      </div>
      <div>
        <div className="border border-t-1 bg-slate-500 my-3" />
        <p className="text-sm">{description}</p>
        <div className="border border-t-1 bg-slate-500 my-3" />
      </div>
      <div className="flex justify-between items-center">
        <div className="flex gap-3 items-center">
          <img src={icon} alt="businessIcon" className="w-7" />
          <p className={`text-[0.8rem] ${textColor}`}>{charges}</p>
        </div>
        <div className="flex gap-1 items-center">
          <h1 className="text-2xl max-md:text-lg max-sm:text-[0.7rem] font-bold">
            {price}
          </h1>
          <p className="max-md:text-md max-sm:text-sm">{type}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
