function PaperLinkFeaturesCard({
  defaultColor,
  title,
  description,
  icon,
  addPadding,
  h,
}: any) {
  return (
    <div
      className={` ${
        defaultColor ? "bg-[#77C360]" : "bg-[#FFFFFF] "
      } rounded-[15px] lg:h-[350px] lg:w-[370px] md:w-[310px] md:h-auto max-sm:h-auto max-sm:w-auto  text-center p-5`}
    >
      <div
        className={`text-center flex items-center justify-center my-10 max-md:my-5 max-sm:my-3`}
      >
        <div
          className={` ${
            addPadding
              ? `p-5 ${
                  defaultColor ? "bg-white" : "bg-[#E1F2DC]"
                } rounded-full ${h} flex items-center justify-center`
              : ""
          }`}
        >
          <img src={icon} alt={title} className="" />
        </div>
      </div>
      <h3
        className={`${
          !defaultColor ? "text-black" : "text-white"
        } mb-5  font-bold text-[20px]`}
      >
        {title}
      </h3>
      <p className={`${!defaultColor ? "text-black" : "text-white"}`}>
        {description}
      </p>
    </div>
  );
}

export default PaperLinkFeaturesCard;
