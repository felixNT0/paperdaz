import Icon from "../../../../components/Icon";
import PaperLinkFeaturesCard from "../../../../components/PaperLinkFeatures/Card";
import scanIcon from "../../../../assets/codeScannerIcon.svg";
import pwaAppIcon from "../../../../assets/pwaAppIcon.svg";
import encryptedIcon from "../../../../assets/encryptedIcon.svg";
import careIcon from "../../../../assets/careIcon.svg";
import appFileIcon from "../../../../assets/appFileIcon.svg";

function KeyFeatures() {
  const cards = [
    {
      id: 1,
      title: "QR code",
      icon: scanIcon,
      defaultColor: true,
      addPadding: true,
      description:
        "All products will have a QR code for end user to scan to have direct access to link.",
    },
    {
      id: 2,
      title: "PWA (Progressive Web App)",
      icon: pwaAppIcon,
      addPadding: true,
      description: "Look and feel like a native app with web technology.",
    },
    {
      id: 3,
      title: "256-bit encryption",
      icon: encryptedIcon,
      addPadding: true,
      description:
        "Safest digital security solution with all the modern algorithms, AES, and SSL",
    },
    {
      id: 4,
      title: "HIPPA Compliant",
      icon: careIcon,
      addPadding: true,
      description:
        "Paperdaz does not connect to client’s customer database.  All content/annotation is stamped on the PDF Read More",
    },
    {
      id: 5,
      title: "Original file",
      icon: appFileIcon,
      addPadding: true,
      description:
        "Account holder receives the same document that would have been handed out at office by email in PDF format.",
    },
  ];
  return (
    <>
      <div className="lg:relative bg-[#EDFCE987]">
        <div className="absolute max-lg:hidden  top-10 left-0 transform max-sm:translate-x-1/4 translate-x-3/4 -translate-y-1/4 w-20 ">
          <Icon />
        </div>
        <div className=" lg:pb-10 lg:mx-20">
          <div className="flex justify-center items-center">
            <div className="p-20 max-sm:flex max-sm:flex-col max-sm:p-5 max-2xl:grid max-2xl:grid-cols-2 max-2xl:gap-10 2xl:grid 2xl:grid-cols-3 2xl:gap-14 ">
              <div>
                <h1 className="text-black text-[30px] max-sm:text-center font-bold">
                  Key <span className="text-primary">Features</span>
                </h1>
                <p className="text-black font-bold mt-5 max-sm:text-center">
                  Paperdaz will replace paper!
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
                }) => (
                  <PaperLinkFeaturesCard
                    key={id}
                    title={title}
                    icon={icon}
                    addPadding={addPadding}
                    defaultColor={defaultColor}
                    description={description}
                  />
                )
              )}
            </div>
          </div>
        </div>
        <div className="absolute max-lg:hidden  right-0 transform -translate-x-3/4 translate-y-1/4 bottom-20 w-20">
          <Icon />
        </div>
      </div>
    </>
  );
}

export default KeyFeatures;
