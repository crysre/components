import { useState } from "react";
import one from "../Assets/one.jpg";
import { ChevronDown, X } from "lucide-react";
import { motion } from "motion/react";
export const VoiceChat = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex justify-center items-center h-200 w-full bg-white">
      {!open ? (
        <motion.div
          layoutId="voiceCard"
          className=" border-1 border-neutral-200 flex h-20  pl-6 pr-4 items-center py-1 rounded-l-full shadow-2xl rounded-r-full "
        >
          <motion.div
            layoutId="header"
            className="h-[15%] hidden border-b border-neutral-200 justify-center items-center bg-neutral-100"
          >
            <p className=" text-2xl text-neutral-600">Voice Chat</p>
            <X
              onClick={() => {
                setOpen(!open);
              }}
              className="text-neutral-600 cursor-pointer size-8 p-1 bg-neutral-200 rounded-full absolute right-4"
            />
          </motion.div>
          <motion.div layoutId="container" className="flex items-center">
            <ImgCard pfpNo="1" className=" -ml-4" />
            <ImgCard pfpNo="2" className=" -ml-4" />
            <ImgCard pfpNo="3" className=" -ml-4" />
            <ImgCard pfpNo="4" className=" -ml-4" />
            <ImgCard className="hidden" pfpNo="5" />
            <ImgCard className="hidden" pfpNo="5" />
            <ImgCard className="hidden" pfpNo="6" />
            <ImgCard className="hidden" pfpNo="7" />
            <motion.div
              layoutId="plus"
              onClick={() => {
                setOpen(!open);
              }}
              className="flex cursor-pointer text-neutral-400 justify-center items-center"
            >
              <p className=" text-2xl  pl-2">+3</p>
              <ChevronDown className="" />
            </motion.div>
          </motion.div>
          <motion.div
            layoutId="footer"
            className=" h-[30%]  hidden flex-col justify-center items-center"
          >
            <button className=" w-[88%] h-[50%] rounded-2xl bg-neutral-950 text-xl  text-neutral-200">
              Join Now
            </button>
            <p className="text-lg text-neutral-600  mt-2 ">
              Mic would be muted initially
            </p>
          </motion.div>
        </motion.div>
      ) : (
        <motion.div
          layoutId="voiceCard"
          className=" relative h-116 w-108 overflow-hidden shadow-2xl rounded-4xl"
        >
          <motion.div
            layoutId="header"
            className="h-[15%] flex border-b border-neutral-200 justify-center items-center bg-neutral-100"
          >
            <p className=" text-2xl text-neutral-600">Voice Chat</p>
            <X
              onClick={() => {
                setOpen(!open);
              }}
              className="text-neutral-600 cursor-pointer size-8 p-1 bg-neutral-200 rounded-full absolute right-4"
            />
          </motion.div>
          <motion.div
            layoutId="container"
            className=" h-[55%] p-8 gap-6 flex-wrap flex"
          >
            <ImgCard pfpNo="1" />
            <ImgCard pfpNo="2" />
            <ImgCard pfpNo="3" />
            <ImgCard pfpNo="4" />
            <ImgCard pfpNo="5" />
            <ImgCard pfpNo="6" />
            <ImgCard pfpNo="7" />
            <motion.div
              layoutId="plus"
              onClick={() => {
                setOpen(!open);
              }}
              className=" hidden cursor-pointer text-neutral-400 justify-center items-center"
            >
              <p className=" text-2xl  pl-2">+3</p>
              <ChevronDown className="" />
            </motion.div>
          </motion.div>
          <motion.div
            layoutId="footer"
            className=" h-[30%]  flex flex-col justify-center items-center"
          >
            <button className=" w-[88%] h-[50%] rounded-2xl bg-neutral-950 text-xl  text-neutral-200">
              Join Now
            </button>
            <p className="text-lg text-neutral-600  mt-2 ">
              Mic would be muted initially
            </p>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

const ImgCard = ({ className = "", pfpNo = "" }) => {
  return (
    <motion.img
      layoutId={`pfp${pfpNo}`}
      className={` shadow-md  h-16 border-neutral-100 border-4 rounded-full ${className}`}
      src={one}
      alt=""
    />
  );
};
