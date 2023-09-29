import { TabType } from "../../types/tab-type";
import { motion } from "framer-motion";

interface Props {
  activeTab: number;
  handleTabClick: (tabId: number) => void;
}

function Tabs({ activeTab, handleTabClick }: Props) {
  const tabItem: TabType[] = [
    { id: 1, tabTitle: "PaperLink" },
    { id: 2, tabTitle: "SigninLink" },
    { id: 3, tabTitle: "TimeLink" },
    { id: 4, tabTitle: "HostLink" },
  ];

  const tabVariants = {
    initial: { opacity: 0, y: -10 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -10 },
  };

  return (
    <div className="border border-primary rounded-2xl  max-xsm:rounded-lg  px-5 py-3 max-md:p-2 flex text-center justify-center items-center mx-40 my-20 max-md:mx-5 max-xsm:my-10  max-xsm:mx-2  max-md:my-10 ">
      <div className="bg-[#F4F4F4] p-4 max-md:p-3  w-full rounded-xl max-xsm:rounded-md flex justify-around items-center">
        {tabItem.map(({ tabTitle, id }: TabType) => (
          <motion.div
            key={id}
            className={`relative cursor-pointer max-sm:text-sm max-xsm:text-[0.5rem]  ${
              activeTab === id ? "text-primary font-bold " : "text-gray-700"
            }`}
            onClick={() => handleTabClick(id)}
            variants={tabVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className={`${
                activeTab === id
                  ? "absolute w-full h-0.5 top-[50px] max-sm:top-10 left-0 max-sm:text-sm max-xsm:text-[0.1rem] bg-[#23254B] transition-all duration-300"
                  : "hidden"
              }`}
              initial={{ width: "-100%" }}
              animate={{ width: "100%" }}
              exit={{ width: "0%" }}
              transition={{ duration: 0.3 }}
            />
            {tabTitle}
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Tabs;
