import Icon from "../../../../components/Icon";
import paperdazLabIcon from "../../../../assets/paperdazlabIcon.svg";
import PaperdazLabCard from "./PaperdazLabCard";
import SigninLinkIcon from "../../../../assets/SigninlinkIcon.svg";
import HostLinkIcon from "../../../../assets/Hostlink.svg";
import TimeLinkIcon from "../../../../assets/TimelinkIcon.svg";
import RxLinkIcon from "../../../../assets/RxLInkIcon.svg";

function PaperdazLap() {
  const cardItems = [
    {
      id: 1,
      icon: SigninLinkIcon,
      title: "SigninLink",
      description:
        "SigninLink visitors can sign in on a tablet, instead of a sheet of paper.",
    },
    {
      id: 2,
      icon: HostLinkIcon,
      title: "HostLink",
      description:
        "Allow restaurateurs to put their name on HostLink with their mobile device instead of writing on a paper.",
    },
    {
      id: 3,
      icon: TimeLinkIcon,
      title: "TimeLink",
      description:
        "Time sheet is too much of a hassle. Employees can clock in and out via mobile device on TimeLink.",
    },
    {
      id: 4,
      icon: RxLinkIcon,
      title: "RxLink",
      iconWidth: "w-10",
      description:
        "Patient information on a digital device through RxLink is more secure than patients writing personal information on paper sheets.",
    },
  ];
  return (
    <div id="paperdaz-card">
      <div className="mx-20 mt-20 max-sm:mx-7 mb-10 bg-white">
        <h1 className="text-black max-lg:text-[30px] font-semibold text-5xl text-center">
          Paperdaz <span className="text-primary">Lab</span>
        </h1>
      </div>
      <div className="lg:relative ">
        <div className="absolute max-lg:hidden top-20 left-0 transform max-sm:translate-x-1/4 translate-x-3/4 -translate-y-1/4 w-20 ">
          <Icon />
        </div>
        <div className="bg-[#EDFCE987] lg:pb-20 max-sm:pb-10 max-xl:pb-20 item-center ">
          <div className="flex flex-row max-sm:flex-col max-sm:gap-10 gap-20 justify-center items-center py-20 max-sm:py-10">
            <img
              src={paperdazLabIcon}
              alt="paperdazLabIcon"
              className="w-1/3 max-sm:w-10/12"
            />
            <p className="text-[#787777]  text-lg  w-1/4 max-sm:w-10/12">
              We are brewing these products in our lab to reduce more paper
              usage at your office. Visit our social media accounts for updates
              on the launch of each of these products!
            </p>
          </div>
          <div className="flex flex-row max-lg:grid max-lg:grid-cols-2 max-xl:grid  max-xl:grid-cols-2 max-sm:mx-5  max-sm:flex max-sm:flex-col justify-center gap-10 items-center  ">
            {cardItems.map(({ icon, title, description, id, iconWidth }) => (
              <div key={id} className="flex justify-center items-center">
                <PaperdazLabCard
                  key={id}
                  icon={icon}
                  title={title}
                  description={description}
                  iconWidth={iconWidth}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="absolute max-lg:hidden  right-0 transform -translate-x-3/4 translate-y-1/4 bottom-20 w-20">
          <Icon />
        </div>
      </div>
    </div>
  );
}

export default PaperdazLap;
