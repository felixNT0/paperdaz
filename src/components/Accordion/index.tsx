import { motion, AnimatePresence } from "framer-motion";

interface Props {
  open: boolean;
  toggleOpenAccordion: () => void;
  description: string;
  title: string;
  contactUsPage?: boolean;
}

function Accordion({
  open,
  toggleOpenAccordion,
  title,
  description,
  contactUsPage,
}: Props) {
  return (
    <motion.div
      className={` ${
        !open ? "border-[#D0D0D0]" : "border-primary"
      } border  rounded-lg p-6 max-md:p-3 mx-40 max-md:mx-5 max-xsm:mx-2  `}
    >
      <div
        onClick={toggleOpenAccordion}
        className="cursor-pointer flex flex-row justify-between items-center"
      >
        <div className="flex gap-5 max-sm:gap-1 max-xsm:gap-0.5 max-w-[80%]   text-[#727273] max-sm:text-[0.7rem] max-xsm:text-[0.5rem] font-bold">
          <p>Q.</p>
          <motion.p
            className={`${
              open ? "text-primary transition-all duration-500 " : ""
            }`}
          >
            {title}
          </motion.p>
        </div>
        <div className={`relative w-10 h-10 max-sm:w-7 max-sm:h-7  `}>
          <motion.div
            className={`absolute  inset-0 flex transition-all duration-500 justify-center items-center border text-center ${
              !open ? "border-[#D0D0D0]" : "bg-primary"
            } ${open ? "text-white" : "text-primary"} rounded-full`}
          >
            <p className="text-center text-2xl max-sm:text-lg ">
              {contactUsPage ? <span>+</span> : "A"}
            </p>
          </motion.div>
        </div>
      </div>
      <AnimatePresence initial={false} exitBeforeEnter={false}>
        {open && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5 }}
            className={`overflow-hidden ${
              open ? "max-h-[200px] overflow-y-auto" : "max-h-0"
            }`}
          >
            <p className="text-[#4B5563] mt-3  max-sm:text-[0.7rem] max-xsm:text-[0.5rem]">
              {description}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default Accordion;
