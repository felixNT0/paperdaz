import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

const NotificationMessage = () => {
  const controls = useAnimation();

  useEffect(() => {
    // Animate the notification message
    controls.start({ y: 0, opacity: 1 });
  }, [controls]);

  return (
    <div
      style={{ zIndex: 99 }}
      className="fixed top-3 lg:top-5 left-0 right-0 w-full flex justify-center items-center"
    >
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={controls}
        transition={{ duration: 0.5 }}
        className="bg-primary px-3 py-2 rounded-lg"
      >
        <p className="text-white font-bold max-md:text-sm max-sm:text-[0.5rem]">
          Check mail for receipt. Verify email and create a password to log into
          console!
        </p>
      </motion.div>
    </div>
  );
};

export default NotificationMessage;
