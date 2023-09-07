import { useEffect, useState } from "react";
import Modal from "../../../components/modal";
import Accordion from "../../../components/Accordion";
import Tabs from "../../../components/Tabs";
import { motion } from "framer-motion";
import { useLocation, useNavigate } from "react-router-dom";
import ModalContents from "./ModalContent";
import NotificationModal from "../../../components/NotificationModal";
import { useGetAllFaqQuery } from "../../../api/services/api.service";
import { useAppContext } from "../../../context";
import Loader from "../../../components/Loader";

function ContactUsComponents() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isNotificationModaOpen, setIsNotificationModaOpen] =
    useState<boolean>(false);

  const { isChatBoxOpen } = useAppContext();

  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabId: number) => {
    setActiveTab(tabId);
    if (tabId !== 1) {
      setActiveTab(1);
      return setIsNotificationModaOpen(!isNotificationModaOpen);
    }
  };

  const { data, isLoading } = useGetAllFaqQuery();

  const [activeAccordionId, setActiveAccordionId] = useState<any>(null);

  const toggleAccordion = (id: number) => {
    if (activeAccordionId === id) {
      setActiveAccordionId(null);
    } else {
      setActiveAccordionId(id);
    }
  };

  useEffect(() => {
    if (isLoading === false) {
      setTimeout(() => {
        setIsModalOpen(true);
      }, 500);
    }
  }, []);

  const location = useLocation();
  const path = location?.state?.path;
  const navigate = useNavigate();

  const scrollToSection = () => {
    navigate(location.pathname, {});
  };

  useEffect(() => {
    if (path) {
      setTimeout(() => scrollToSection(), 500);
      setIsModalOpen(!isModalOpen);
    }
  }, [path]);

  useEffect(() => {
    if (isChatBoxOpen) {
      setIsModalOpen(false);
    }
  }, [isChatBoxOpen]);

  if (isLoading) return <Loader />;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <h1 className="text-primary text-center max-sm:text-xl font-bold text-5xl max-sm:mt-24 max-sm:mb-10 my-20 mt-40">
        Frequently asked questions
      </h1>

      <Tabs activeTab={activeTab} handleTabClick={handleTabClick} />

      <div className="flex flex-col gap-5 mb-10">
        {data &&
          data?.map(({ id, answer, question }) => (
            <Accordion
              key={id}
              open={activeAccordionId === id}
              title={question}
              description={answer}
              toggleOpenAccordion={() => toggleAccordion(id)}
            />
          ))}
      </div>
      <Modal
        isModalOpen={isModalOpen}
        toggleOpenModal={() => setIsModalOpen(!isModalOpen)}
      >
        <ModalContents />
      </Modal>
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

export default ContactUsComponents;
