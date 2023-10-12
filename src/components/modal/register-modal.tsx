import { motion, AnimatePresence } from "framer-motion";

interface Props {
  isModalOpen: boolean;
  toggleOpenModal: () => void;
  handleBack: () => void;
  showBackButton: boolean;
  children?: any;
}

function RegisterModal({
  isModalOpen,
  toggleOpenModal,
  children,
  handleBack,
  showBackButton,
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
          className="fixed top-5 max-sm:top-5 left-0 w-full  h-full flex justify-center items-center bg-gray-900 bg-opacity-70 z-40 backdrop-blur-sm"
        >
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.5, opacity: 0 }}
            transition={{ ease: "easeInOut" }}
            className="bg-white lg:w-[700px] max-h-[620px] overflow-y-auto rounded-lg p-4 z-80 max-sm:p-1 max-sm:m-3 max-sm:py-0 md:m-4 "
          >
            <div className="flex flex-row justify-between item-center max-sm:pt-3 max-sm:px-2">
              <div>
                {showBackButton && (
                  <button
                    onClick={handleBack}
                    type="button"
                    className="group relative w-full flex justify-center py-2 px-4  text-sm font-medium rounded-md text-white bg-primary hover:bg-primary"
                  >
                    Back
                  </button>
                )}
              </div>
              <div
                onClick={closeModal}
                className="p-2 bg-primary text-white rounded-full h-8 w-8 text-center flex items-center justify-center cursor-pointer"
              >
                X
              </div>
            </div>
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default RegisterModal;
