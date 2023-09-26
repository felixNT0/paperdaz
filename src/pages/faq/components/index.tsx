import { useState } from "react";
import Accordion from "../../../components/Accordion";
import TitleHeader from "../../../components/TItleHeader";
import Tabs from "../../../components/Tabs";
import { motion } from "framer-motion";
import Modal from "../../../components/modal";
import NotificationModal from "../../../components/NotificationModal";
import { useGetCategoriesPaperLinkQuestions } from "../../../api/services/api.service";
import Loader from "../../../components/Loader";
import { GetAllFaqType } from "../../../types";

function FaqComponents() {
  const [activeTab, setActiveTab] = useState<number>(1);
  const [isNotificationModaOpen, setIsNotificationModaOpen] =
    useState<boolean>(false);
  const [activeAccordionId, setActiveAccordionId] = useState<any>(null);

  const { data, isLoading } = useGetCategoriesPaperLinkQuestions();

  const handleTabClick = (tabId: number) => {
    setActiveTab(tabId);
    if (tabId !== 1) {
      setActiveTab(1);
      return setIsNotificationModaOpen(!isNotificationModaOpen);
    }
  };

  const toggleAccordion = (id: number) => {
    if (activeAccordionId === id) {
      setActiveAccordionId(null);
    } else {
      setActiveAccordionId(id);
    }
  };

  if (isLoading) return <Loader />;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <TitleHeader title={"Question & Answers"} subTitle={"Home - QnA’s"} />

      <Tabs activeTab={activeTab} handleTabClick={handleTabClick} />
      <div className="mb-20">
        <div className="flex flex-col mt-10 mb-7 mx-40 max-md:mx-5 max-xsm:mx-2">
          <h3 className="text-primary ">General Questions</h3>
          <div className="w-40 h-0.5 bg-[#565656] mt-0.5" />
        </div>
        <div className="flex flex-col gap-5 mb-10">
          {data &&
            data[0].name === "General" &&
            data[0]?.faqs?.map(({ id, answer, question }: GetAllFaqType) => (
              <Accordion
                key={id}
                open={activeAccordionId === id}
                title={question}
                description={answer}
                toggleOpenAccordion={() => toggleAccordion(id)}
              />
            ))}
        </div>
      </div>
      <div className="flex flex-col mt-10 mb-7 mx-40 max-md:mx-5 max-xsm:mx-2">
        <h3 className="text-primary ">Billing & Address</h3>
        <div className="w-36 h-0.5 bg-[#565656] mt-0.5" />
      </div>
      <div className="flex flex-col gap-5 mb-10">
        {data &&
          data[1].name === "Billing" &&
          data[1]?.faqs?.map(({ id, answer, question }: GetAllFaqType) => (
            <Accordion
              key={id}
              open={activeAccordionId === id}
              title={question}
              description={answer}
              toggleOpenAccordion={() => toggleAccordion(id)}
            />
          ))}
      </div>
      {isNotificationModaOpen && (
        <Modal
          isModalOpen={isNotificationModaOpen}
          toggleOpenModal={() =>
            setIsNotificationModaOpen(!isNotificationModaOpen)
          }
        >
          <NotificationModal />
        </Modal>
      )}
    </motion.div>
  );
}

export default FaqComponents;
