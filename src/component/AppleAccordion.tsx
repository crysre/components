import { motion } from "motion/react";
import { useState, type ReactNode } from "react";
export const AppleAccordion = () => {
  const [open, setOpen] = useState<string | null>(null);
  return (
    <div className=" w-full h-screen  flex flex-col justify-center items-center bg-[#0f0f10]">
      <p className="text-white font-bold text-6xl tracking-wide w-450 p-24">
        Take a closer look
      </p>
      <div className=" relative w-450 h-237.5 rounded-4xl  bg-black  ">
        <div className=" w-106 absolute bottom-40 left-22">
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
    </div>
  );
};

const accordionArray = [
  {
    title: "Colors",
    description:
      "Choose from three bold finishes. iPhone 17 Pro shown in Deep Blue.",
  },
  {
    title: "Aluminium unibody",
    description:
      "Optimised for performance and battery. Aluminium alloy is remarkably light and has exceptional thermal conductivity.",
  },
  {
    title: "Vapour chamber",
    description:
      "Optimised for performance and battery. Aluminium alloy is remarkably light and has exceptional thermal conductivity.",
  },
  {
    title: "Ceramic Shield",
    description:
      "Colours. Choose from three bold finishes. iPhone 17 Pro shown in Deep Blue.",
  },
  {
    title: "Immersive pro display",
    description:
      "Colours. Choose from three bold finishes. iPhone 17 Pro shown in Deep Blue.",
  },
  {
    title: "Camera Control",
    description:
      "Colours. Choose from three bold finishes. iPhone 17 Pro shown in Deep Blue.",
  },
  {
    title: "Action button",
    description:
      "Colours. Choose from three bold finishes. iPhone 17 Pro shown in Deep Blue.",
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
      layout
      layoutId={title}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 25,
      }}
      onClick={() => setOpen(open === title ? null : title)}
      className=" my-2 gap-4 hover:bg-[#272729] inline-flex transition-all duration-300 ease-in-out cursor-pointer  bg-[#1e1e20] rounded-4xl h-16.25 pl-4 pr-10  justify-center items-center py-4 font-bold tracking-wide text-xl text-[#f5f5f7]"
    >
      {icon} {title}
    </motion.div>
  ) : (
    <motion.div
      layoutId={title}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 25,
      }}
      onClick={() => setOpen(open === title ? null : title)}
      className=" my-2 h-42 w-120    bg-[#1e1e20] rounded-4xl p-8  text-xl text-[#f5f5f7]"
    >
      <span className=" font-bold">{title}.</span> {description}
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
