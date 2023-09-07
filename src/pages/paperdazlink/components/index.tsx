import { motion } from "framer-motion";
import AboutPaperdazLink from "../../../components/AboutPaperdazLink";
import AllPaperdazLinks from "../../../components/AllPaperdazLinks";
import ImageBody from "../../../components/ImageBody";
import PaperLinkFeatures from "../../../components/PaperLinkFeatures";
import PaperdazProductsTable from "../../../components/PaperdazProductsTable";
import WhatPaperdazaLinkDoes from "../../../components/WhatPaperdazLinkDoes";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import PaperLinkServiceMenu from "./paperlink-service-menu";
import PaperLinkServiceMenuModal from "./paperlink-service-menu/modal";

function AllPaperdazLinkComponents() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const location = useLocation();
  const path = location?.state?.path;
  const navigate = useNavigate();

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const yOffset = -100;
      const y =
        section.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
      navigate(location.pathname, {});
    }
  };

  useEffect(() => {
    if (path) {
      setTimeout(() => scrollToSection(path), 100);
    }
  }, [path]);
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="max-sm:overflow-x-hidden"
    >
      <ImageBody />
      <AllPaperdazLinks />
      <WhatPaperdazaLinkDoes />
      <PaperLinkFeatures />
      <AboutPaperdazLink />
      <PaperdazProductsTable
        toggleOpenModal={() => setIsModalOpen(!isModalOpen)}
      />
      <PaperLinkServiceMenuModal
        isModalOpen={isModalOpen}
        toggleOpenModal={() => setIsModalOpen(!isModalOpen)}
      >
        <PaperLinkServiceMenu />
      </PaperLinkServiceMenuModal>
    </motion.div>
  );
}

export default AllPaperdazLinkComponents;
