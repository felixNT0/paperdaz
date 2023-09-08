import { motion, AnimatePresence } from "framer-motion";

interface Props {
  isModalOpen: boolean;
  toggleOpenModal: () => void;
  children?: any;
}

function PaperLinkServiceMenuModal({
  isModalOpen,
  toggleOpenModal,
  children,
}: Props) {
  const closeModal = (event: any) => {
    if (event.target === event.currentTarget) {
      toggleOpenModal();
    }
  };

  return (
    <AnimatePresence>
      {isModalOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          onClick={closeModal}
          className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-900 bg-opacity-70 z-50"
        >
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.5, opacity: 0 }}
            transition={{ ease: "easeInOut" }}
            className="relative bg-white rounded-lg p-4 z-80 max-sm:p-1 max-sm:m-5 max-sm:py-0 md:m-4 "
          >
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default PaperLinkServiceMenuModal;
