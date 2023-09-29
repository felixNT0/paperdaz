import bg from "../../assets/image-body.svg";

function ImageBody() {
  return (
    <>
      <div className="relative mt-20">
        <img
          src={bg}
          alt="bg"
          className="w-full rounded-none xl:min-h-[80vh] max-sm:min-h-[30vh] h-auto "
        />
        <div className="absolute lg:-top-32 lg:left-20 left-32 max-sm:left-0 max-[280]:-left-10 max-md:left-7 max-xsm:left-0 md:left-0 inset-0 flex flex-col justify-center items-start p-8 text-white">
          <h3 className="text-[70px] max-lg:text-[40px] max-[280]:text-sm max-sm:text-lg max-xsm:text-sm font-bold z-10">
            <span className="">It's easy to go </span>
            <br />
            <span className="text-[#77C360] max-sm:text-lg">
              Paperless
            </span>{" "}
            with <br />
            <span className="text-[#17282F]  max-sm:text-lg">Paperdaz!</span>
          </h3>
        </div>
        <div className="absolute inset-0 bg-black opacity-40 rounded-none"></div>
      </div>
    </>
  );
}

export default ImageBody;
