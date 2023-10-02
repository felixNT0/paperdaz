import logo from "../../../../assets/logo.png";
import Card from "./card";
import serviceIcon from "../../../../assets/business-service-menu-icon.svg";
import whiteIcon from "../../../../assets/white_glove_service.svg";
import fillablePdfIcon from "../../../../assets/fillable_pdf_icon.svg";
import teamMemberIcon from "../../../../assets/team_member_icon.svg";
import paperLinkIcon from "../../../../assets/service_menu_paperlink.svg";

function PaperLinkServiceMenu() {
  const serviceMenu = [
    {
      icon: serviceIcon,
      title: "Business Page",
      description:
        "PWA Business Page is included with every account, and displays all PaperLink files.",
      number: "1",
      charges: "Monthly charge",
      price: "$10",
      defaulColor: true,
    },
    {
      icon: teamMemberIcon,
      title: "Team Member",
      description:
        "Each team member has access to manage files on File Manager.",
      number: "2",
      charges: "Monthly charge",
      price: "$2",
      type: "/User",
      defaulColor: true,
    },
    {
      icon: paperLinkIcon,
      title: "PaperLink",
      description:
        "Turn paper into a PaperLink in minutes, simply upload a file for users to complete, sign, or confirm.",
      number: "3",
      charges: "Monthly charge",
      price: "$2",
      type: "/Page",
      defaulColor: true,
    },
    {
      icon: fillablePdfIcon,
      title: "Fillable PDF",
      description:
        "We turn regular PDFs into Fillable PDFs so clients can navigate each line with ease.",
      number: "4",
      charges: "One Time Charge",
      price: "$5",
      type: "/Page",
    },
    {
      icon: whiteIcon,
      title: "White Glove Service",
      description:
        "Provide us all of your forms and we will take care of the rest! We will select the best action, and place all necessary stickers for each file. Our team will have all of your PaperLinks ready to go! ",
      number: "5",
      charges: "One Time Charge",
      price: "$1",
      type: "/Page",
    },
  ];
  return (
    <div className="p-3 max-sm:my-3 border border-slate-500">
      <div className="flex gap-5 items-center justify-center">
        <div className="flex gap-2 max-sm:gap-1 items-center">
          <img src={logo} alt="logo" className="w-12 max-xsm:w-8" />
          <h3 className="text-5xl max-md:text-2xl max-sm:text-lg ">
            Paper<span className="font-bold">Link</span>
          </h3>
        </div>
        <h6 className="text-3xl max-md:text-2xl max-sm:text-lg text-primary font-bold">
          Service Menu
        </h6>
      </div>

      <div className="flex items-center justify-around font-bold mb-3">
        <div className="flex flex-col mt-7 max-sm:mx-3 mx-10">
          <h3 className="text-black max-md:text-md max-sm:text-sm max-xsm:text-[0.5rem]">
            Mandatory with account
          </h3>
          <div className="w-[13rem] max-sm:w-[11.5rem] max-xsm:w-[6.5rem] h-0.5 bg-[#FF7900] mt-0.5" />
        </div>
        <div className="flex flex-col mt-7 max-sm:mx-3 mx-10">
          <h3 className="text-black max-md:text-lg max-sm:text-sm max-xsm:text-[0.5rem]">
            Optional Features
          </h3>
          <div className="w-[9.5rem] max-sm:w-[8.5rem] max-xsm:w-[4.5rem] h-0.5 bg-[#19bad7] mt-0.5" />
        </div>
      </div>
      <div
        style={{ justifyContent: "center", alignItems: "center" }}
        className="grid grid-cols-2 gap-5 max-md:flex max-md:gap-2 max-md:flex-col items-center h-[500px] max-md:h-[350px] overflow-y-scroll custom-scrollbar"
      >
        {serviceMenu.map((item, index) => (
          <Card
            key={item.number}
            {...item}
            style={
              index === serviceMenu.length - 1
                ? { gridColumn: "span 2", margin: "auto" }
                : {}
            }
          />
        ))}
      </div>
    </div>
  );
}

export default PaperLinkServiceMenu;
