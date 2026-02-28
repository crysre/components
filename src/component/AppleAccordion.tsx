import { AnimatePresence, easeInOut, motion } from "motion/react";
import { useState, type ReactNode } from "react";
import colors_blue from "../Assets/appleImage/colors_blue__ct0n7mo30vwy_medium.jpg";
import unibody from "../Assets/appleImage/unibody__eublzdgtajo2_large_2x.jpg";
import ceramic_shield from "../Assets/appleImage/ceramic_shield__de0653vp43cm_large_2x.jpg";
import camera_control from "../Assets/appleImage/camera_control__cy5kilwa0kwi_large_2x.jpg";
import pro_display from "../Assets/appleImage/pro_display__c0jmzc5emcae_large_2x.jpg";
import vapor_chamber from "../Assets/appleImage/vapor_chamber__b47ohuu3w8eu_large_2x.jpg";
import action_button from "../Assets/appleImage/viewer_action_button_endframe__d34dse8308uq_large_2x.jpg";

const imagesObj: Record<string, string> = {
  Colors: colors_blue,
  "Aluminium unibody": unibody,
  "Vapour chamber": vapor_chamber,
  "Ceramic Shield": ceramic_shield,
  "Immersive pro display": pro_display,
  "Camera Control": camera_control,
  "Action button": action_button,
};

export const AppleAccordion = () => {
  const [open, setOpen] = useState<string | null>(null);
  return (
    <div className=" w-full h-screen  flex flex-col justify-center items-center bg-[#0f0f10]">
      <p className="text-white font-bold text-6xl tracking-wide w-[92%] pb-12 pl-24">
        Take a closer look
      </p>
      <AnimatePresence>
        <div className=" overflow-hidden relative w-[94%] h-[80%] rounded-4xl  bg-black  ">
          <motion.img
            key={open}
            initial={{
              x: -100,
              opacity: 0,
              scale: 0.85,
              filter: "blur(10px)",
            }}
            animate={{
              x: 0,
              opacity: 1,
              scale: 1,
              filter: "blur(0px)",
            }}
            exit={{
              x: 120,
              opacity: 0,
              scale: 0.98,
              filter: "blur(10px)",
            }}
            transition={{
              duration: 0.5,
              ease: easeInOut,
            }}
            className="w-full"
            src={open ? imagesObj[open] : ""}
            alt=""
          />

          <div className=" w-[24%] absolute bottom-20 left-22">
            {accordionArray.map((x, index) => (
              <SpecsCard
                open={open}
                setOpen={setOpen}
                key={index}
                icon={<PlusIcon />}
                title={x.title}
                description={x.description}
              />
            ))}
          </div>
        </div>
      </AnimatePresence>
    </div>
  );
};

const accordionArray = [
  {
    title: "Colors",
    description:
      "Choose from three bold finishes. iPhone 17 Pro shown in Deep Blue.",
    image: colors_blue,
  },
  {
    title: "Aluminium unibody",
    description:
      "Optimised for performance and battery. Aluminium alloy is remarkably light and has exceptional thermal conductivity.",
    image: unibody,
  },
  {
    title: "Vapour chamber",
    description:
      "Optimised for performance and battery. Aluminium alloy is remarkably light and has exceptional thermal conductivity.",
    image: vapor_chamber,
  },
  {
    title: "Ceramic Shield",
    description:
      "Colours. Choose from three bold finishes. iPhone 17 Pro shown in Deep Blue.",
    image: ceramic_shield,
  },
  {
    title: "Immersive pro display",
    description:
      "Colours. Choose from three bold finishes. iPhone 17 Pro shown in Deep Blue.",
    image: pro_display,
  },
  {
    title: "Camera Control",
    description:
      "Colours. Choose from three bold finishes. iPhone 17 Pro shown in Deep Blue.",
    image: camera_control,
  },
  {
    title: "Action button",
    description:
      "Colours. Choose from three bold finishes. iPhone 17 Pro shown in Deep Blue.",
    image: action_button,
  },
];

interface SpecsCardInterface {
  icon: string | ReactNode;
  title: string;
  description: string;
  open: string | null;
  setOpen: (value: string | null) => void;
}

const SpecsCard = ({
  icon,
  title,
  open,
  setOpen,
  description,
}: SpecsCardInterface) => {
  return open != title ? (
    <motion.div
      layoutId={title}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 25,
      }}
      onClick={() => setOpen(open === title ? null : title)}
      className=" my-2 hover:bg-[#272729] flex w-fit transition-all duration-300 ease-in-out   bg-[#1e1e20] rounded-4xl  px-4 pr-10  justify-center items-center py-4 font-bold tracking-wide text-xl text-[#f5f5f7]"
    >
      <motion.p
        initial={{
          opacity: 0,
          scale: 0.98,
          filter: "blur(10px)",
        }}
        animate={{
          opacity: 1,
          scale: 1,
          filter: "blur(0px)",
        }}
        exit={{
          opacity: 0,
          scale: 0.98,
          filter: "blur(10px)",
        }}
        transition={{
          duration: 0.1,
          ease: easeInOut,
        }}
        className="w-full cursor-pointer gap-4 flex"
      >
        {icon} {title}
      </motion.p>
    </motion.div>
  ) : (
    <motion.div
      layoutId={title}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 25,
      }}
      //   onClick={() => setOpen(open === title ? null : title)}
      className=" my-2 py-10 backdrop-blur-2xl inline-flex  bg-gray-500/20 rounded-4xl px-8  text-xl text-[#f5f5f7]"
    >
      <p>
        <span className=" font-bold">{title}.</span> {description}
      </p>
    </motion.div>
  );
};

const PlusIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="size-8"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
      />
    </svg>
  );
};
