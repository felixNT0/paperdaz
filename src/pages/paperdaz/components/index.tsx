import { useLocation, useNavigate } from "react-router-dom";
import AllPaperdazLinks from "../../../components/AllPaperdazLinks";
import ImageBody from "../../../components/ImageBody";
import AboutUs from "./AboutUs";
import BriefDetails from "./BriefDetails";
import Illustration from "./Illustration";
import KeyFeatures from "./KeyFeatuers";
import PaperdazLap from "./PaperdazLab";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import NotificationMessage from "../../../components/NotificationMessage";

function PaperdazFinalLandingPageComponent() {
  const location = useLocation();
  const path = location?.state?.path;
  const home = location?.state?.home;
  const subscriptionSuccessful = location?.state?.subscriptionSuccessful;

  const navigate = useNavigate();

  const [showNotification, setShowNotification] = useState(false);

  const handleShowNotification = () => {
    setShowNotification(true);

    setTimeout(() => {
      setShowNotification(false);
    }, 5000);
  };
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

  const scrollToHome = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    navigate(location.pathname, {});
  };

  useEffect(() => {
    if (subscriptionSuccessful && subscriptionSuccessful === true) {
      handleShowNotification();
    }
  }, [subscriptionSuccessful]);

  useEffect(() => {
    if (path) {
      setTimeout(() => scrollToSection(path), 100);
    }
  }, [path]);

  useEffect(() => {
    if (home) {
      setTimeout(() => scrollToHome(), 100);
    }
  }, [home]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <ImageBody />
      <AllPaperdazLinks />
      <BriefDetails />
      <KeyFeatures />
      <AboutUs />
      <PaperdazLap />
      <Illustration />
      {showNotification && <NotificationMessage />}
    </motion.div>
  );
}

export default PaperdazFinalLandingPageComponent;
