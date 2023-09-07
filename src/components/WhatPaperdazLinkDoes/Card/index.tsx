interface Props {
  icon: any;
  title: string;
  description: string;
  size?: string;
}

function Card({ icon, title, description, size }: Props) {
  return (
    <div className="p-5 w-[300px] text-center flex flex-col justify-center items-center mt-5 h-auto">
      <div className="bg-[#A5FE8A54] rounded-full p-13  flex justify-center items-center mb-3">
        <img
          src={icon}
          alt={title}
          className={`${size ? size : ""} ${size ? "" : "m-5"}`}
        />
      </div>
      <h5 className="text-black font-bold text-lg mb-3">{title}</h5>
      <p className="text-[#645E76] text-sm">{description}</p>
    </div>
  );
}

export default Card;
