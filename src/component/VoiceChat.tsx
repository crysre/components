import { useState } from "react";
import one from "../Assets/one.jpg";
import { ChevronDown, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";

const PARTICIPANTS = [
  { id: "u1", avatar: one },
  { id: "u2", avatar: one },
  { id: "u3", avatar: one },
  { id: "u4", avatar: one },
  { id: "u5", avatar: one },
  { id: "u6", avatar: one },
  { id: "u7", avatar: one },
];

const visibleInCollapsed = 4;

export const VoiceChat = ({ participants = PARTICIPANTS }) => {
  const [open, setOpen] = useState(false);
  const visible = participants.slice(0, visibleInCollapsed);
  const overflowCount = Math.max(0, participants.length - visibleInCollapsed);

  return (
    <div className="flex justify-center items-center h-200 w-full bg-white">
      <AnimatePresence>
        {!open ? (
          <motion.div
            layoutId="voiceCard"
            key="pill"
            className=" border border-neutral-200 flex h-20  pl-6 pr-4 items-center py-1 rounded-l-full shadow-2xl rounded-r-full "
          >
            <motion.div layoutId="avatars" className="flex items-center">
              {visible.map((p, i) => {
                return (
                  <ImgCard
                    key={p.id}
                    participant={p}
                    className={i > 0 ? "-ml-4" : ""}
                  />
                );
              })}

              {overflowCount > 0 && (
                <button
                  onClick={() => {
                    setOpen(true);
                  }}
                  className="flex cursor-pointer items-center justify-center text-neutral-400 transition-colors hover:text-neutral-600"
                >
                  <span className="pl-2 text-2xl">+{overflowCount}</span>
                  <ChevronDown />
                </button>
              )}
            </motion.div>
          </motion.div>
        ) : (
          <motion.div
            layoutId="voiceCard"
            key="expanded"
            className=" relative h-116 w-108 overflow-hidden shadow-2xl rounded-4xl"
          >
            <motion.div
              key="header"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.15 }}
              exit={{ opacity: 0 }}
              className="h-[15%] flex border-b border-neutral-200 justify-center items-center bg-neutral-100"
            >
              <p className=" text-2xl text-neutral-600">Voice Chat</p>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close voice chat"
                className="absolute right-4 size-8 cursor-pointer rounded-full bg-neutral-200 p-1 text-neutral-600 transition-colors hover:bg-neutral-300"
              >
                <X />
              </button>
            </motion.div>
            <motion.div
              layoutId="avatars"
              className=" h-[55%] p-8 gap-6 flex-wrap flex"
            >
              {participants.map((p) => {
                return <ImgCard key={p.id} participant={p} />;
              })}
            </motion.div>
            <motion.div
              key="footer"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.15 }}
              exit={{ opacity: 0 }}
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
      </AnimatePresence>
    </div>
  );
};

const ImgCard = ({ participant, className = "" }) => {
  return (
    <motion.img
      layoutId={`pfp-${participant.id}`}
      className={` shadow-md  h-16 border-neutral-100 border-4 rounded-full ${className}`}
      src={one}
      alt=""
    />
  );
};
