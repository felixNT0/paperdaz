import PaperLinkFeaturesCard from "./Card";
import businessIcon from "../../assets/businessIcon.svg";
import fileIcon from "../../assets/fileIcon.svg";
import stickerIcon from "../../assets/stickerIcon.svg";
import teamIcon from "../../assets/groupIcon.svg";
import shareIcon from "../../assets/shareIcon.svg";
import Icon from "../Icon";

function PaperLinkFeatures() {
  const cards = [
    {
      id: 1,
      title: "Business Page",
      icon: businessIcon,
      defaultColor: true,
      description:
        "Paid account has a Business Page to display all PaperLinks for patients, clients and employee access.",
    },
    {
      id: 2,
      title: "File Manager",
      icon: fileIcon,
      addPadding: true,
      description:
        "Paid account simply click to upload a file, and set file to one of three actions, paper to link in minutes.",
      h: "h-[80px]",
    },
    {
      id: 3,
      title: "Stickers",
      icon: stickerIcon,
      description:
        "Place stickers for Full Name, First Name, Last Name, Date, Signature and Initial so users don’t have to type repetitive information.",
    },
    {
      id: 4,
      title: "Team member",
      icon: teamIcon,
      addPadding: true,
      description: "Add a team member to manage files.",
      h: "h-[85px]",
    },
    {
      id: 5,
      title: "Share",
      icon: shareIcon,
      addPadding: true,
      description:
        "Paper files are now paperLinks. Share it to clients, patients, employees access via email, link, QR code.",
    },
  ];
  return (
    <div className="lg:relative bg-[#EDFCE987]">
      <div className="absolute max-lg:hidden  top-20 left-0 transform max-sm:translate-x-1/4 translate-x-3/4 -translate-y-1/4 w-20 ">
        <Icon />
      </div>
      <div className="lg:pb-10 lg:mx-20">
        <div className="flex justify-center items-center">
          <div className="p-20 max-sm:flex max-sm:flex-col max-sm:p-5 max-2xl:grid max-2xl:grid-cols-2 max-2xl:gap-10 2xl:grid 2xl:grid-cols-3 2xl:gap-14 ">
            <div>
              <h1 className="text-black text-[30px]  max-sm:text-center max-[992px]:mb-10">
                PaperLink <span className="text-primary">Features</span>
              </h1>
              <p className="text-black font-bold mt-5 max-sm:text-center">
                Don’t hand paper at the office provide a link.
              </p>
            </div>
            {cards.map(
              ({
                title,
                description,
                defaultColor,
                icon,
                id,
                addPadding,
                h,
              }) => (
                <PaperLinkFeaturesCard
                  key={id}
                  title={title}
                  icon={icon}
                  addPadding={addPadding}
                  h={h}
                  defaultColor={defaultColor}
                  description={description}
                />
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PaperLinkFeatures;
