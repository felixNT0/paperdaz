import Header from "../../components/Header";
import NotFoundIllustration from "../../assets/not-found.svg";

function NotFoundPage() {
  return (
    <>
      <Header />
      <div className="min-h-screen gap-8 flex flex-col justify-center items-center bg-primary">
        <p className="text-white text-2xl max-md:text-md px-10 text-center font-bold">
          Oops, sorry the file you are looking for is no longer available!
        </p>
        <img
          src={NotFoundIllustration}
          alt="NotFoundIllustration"
          className="max-w-[500px] max-md:w-[300px]"
        />
      </div>
    </>
  );
}

export default NotFoundPage;
