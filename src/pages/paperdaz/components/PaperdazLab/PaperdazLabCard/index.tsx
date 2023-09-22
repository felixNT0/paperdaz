interface Props {
  icon: any;
  title: string;
  description: string;
  iconWidth?: string;
}

function PaperdazLabCard({ icon, title, description, iconWidth }: Props) {
  return (
    <div className="bg-[#FFFFFF] p-5 w-[300px] h-[200px] rounded-[20px] max-sm:w-full max-sm:h-auto">
      <div className="flex flex-row item-center gap-5 mb-3">
        <img
          src={icon}
          alt={`${icon}`}
          className={`shadow-lg ${iconWidth ? iconWidth : "w-12"}`}
        />
        <h3 className="mt-3">{title}</h3>
      </div>
      <p className="text-[#736F6F] ">{description}</p>
    </div>
  );
}

export default PaperdazLabCard;
