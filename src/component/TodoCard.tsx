import { motion } from "motion/react";
import { useState } from "react";
import skull from "../Assets/skull.jpg";
import one from "../Assets/one.jpg";
import two from "../Assets/two.jpg";

export const TodoCard = () => {
  const [open, setOpen] = useState(true);

  return (
    <div className="h-screen w-full flex justify-center items-center">
      {open ? (
        <motion.div
          layoutId="card"
          onClick={() => {
            setOpen(!open);
          }}
          className=" flex flex-col justify-between w-66 h-20 p-2 rounded-2xl shadow-2xl bg-[#fefefe]"
        >
          <motion.div
            layoutId="header"
            className="flex justify-between items-center"
          >
            <motion.div
              layoutId="title"
              className=" inline-flex justify-between items-center gap-1 bg-neutral-200 px-2 py-1 rounded-xl "
            >
              <div className="bg-white rounded-md">
                <Bol className=" bg-white rounded-md " />
              </div>
              <p className=" text-xs tracking-tight">Design System</p>
            </motion.div>

            <motion.div
              layoutId="progress"
              className="w-24 flex justify-center items-center gap-1 "
            >
              <motion.div
                layoutId="progress-1"
                className=" w-full h-2 bg-neutral-200 rounded-md"
              >
                <motion.div
                  layoutId="progress-2"
                  className="w-[75%] h-full bg-[#20be4b]"
                ></motion.div>
              </motion.div>
              <motion.p
                layoutId="progress-3"
                className="text-xs text-neutral-400"
              >
                75%
              </motion.p>
            </motion.div>
          </motion.div>

          <div className=" flex items-center justify-between w-full h-[40%]">
            <div className="flex">
              <div className="flex items-center">
                <motion.div layoutId="icon-1">
                  <Flag />
                </motion.div>{" "}
                <motion.div
                  layoutId="priority"
                  className="text-xs text-neutral-600 tracking-tight"
                >
                  Urgent
                </motion.div>
              </div>
              <div className="flex items-center">
                <motion.div layoutId="icon-2">
                  <SandGlass />
                </motion.div>{" "}
                <motion.div
                  layoutId="status"
                  className="text-xs text-neutral-600 tracking-tight"
                >
                  In Progress
                </motion.div>
              </div>
            </div>

            <motion.div layoutId="avatar-card" className="flex ">
              <motion.div
                layoutId="avatar-1"
                className="border-2 rounded-full border-white shadow-2xl"
              >
                <Avatar className="" src={one} />
              </motion.div>
              <motion.div
                layoutId="avatar-2"
                className="border-2 rounded-full border-white shadow-2xl"
              >
                <Avatar className="" src={skull} />
              </motion.div>
              <motion.div
                layoutId="avatar-3"
                className="border-2 rounded-full border-white shadow-2xl"
              >
                <Avatar className="" src={two} />
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      ) : (
        <motion.div
          layoutId="card"
          onClick={() => {
            setOpen(!open);
          }}
          className="w-66 h-80 p-2 py-4 rounded-2xl shadow-2xl bg-white"
        >
          <div className="flex">
            <motion.div layoutId="header" className="flex flex-col items-start">
              <motion.div
                layoutId="title"
                className=" flex justify-between mx-2 h-6 items-center gap-2 py-1 rounded-xl "
              >
                <div className="bg-white border-2 border-neutral-200 rounded-md">
                  <Bol className=" h-6 bg-white rounded-md " />
                </div>
                <p className=" font-bold ">Design System</p>
              </motion.div>

              <div className="relative flex mx-2 mt-2  gap-2 items-center border rounded-2xl  border-neutral-200 ">
                <div className="flex gap-1 p-1 items-center">
                  <Tick className={""} />
                  <p className="text-xs tracking-tight text-neutral-400">
                    3 of 4
                  </p>
                </div>
                <motion.div
                  layoutId="progress"
                  className="w-24 flex justify-center items-center gap-1 px-1 "
                >
                  <motion.div
                    layoutId="progress-1"
                    className=" w-full h-2 bg-neutral-200 rounded-md"
                  >
                    <motion.div
                      layoutId="progress-2"
                      className="w-[75%] h-full bg-[#20be4b]"
                    ></motion.div>
                  </motion.div>
                  <motion.p
                    layoutId="progress-3"
                    className="text-xs text-neutral-400"
                  >
                    75%
                  </motion.p>
                </motion.div>
              </div>
            </motion.div>

            <div className=" border-2 ml-8 h-[50%] border-neutral-200 rounded-md">
              <DottedMenu />
            </div>
          </div>

          <div className=" flex">
            <div className=" overflow-hidden  relative     mx-2 w-8 h-22">
              <div className=" w-10  h-6 border-l-2 border-neutral-200 absolute left-3 -top-2 rounded-md border-b-2"></div>
              <div className=" w-10  h-12 border-l-2 border-neutral-200 absolute left-3 -top-2 rounded-md border-b-2"></div>
              <div className=" w-10  h-18 border-l-2 border-neutral-200 absolute left-3 -top-2 rounded-md border-b-2"></div>
              <div className=" w-10  h-24 border-l-2 border-neutral-200 absolute left-3 -top-2 rounded-md border-b-2"></div>
            </div>

            <div className=" flex flex-col-reverse gap-2  -mx-2 h-24 w-full">
              <div className="flex items-center gap-1">
                <Tick className={""} />{" "}
                <p className="text-xs text-neutral-500">Design Token</p>
              </div>
              <div className="flex items-center gap-1">
                <Tick className={""} />{" "}
                <p className="text-xs text-neutral-500">Color System</p>
              </div>
              <div className="flex items-center gap-1">
                <Tick className={""} />{" "}
                <p className="text-xs text-neutral-500">Type System</p>
              </div>
              <div className="flex items-center gap-1">
                <Tick className={""} />{" "}
                <p className="text-xs text-neutral-500">Documentation</p>
              </div>
            </div>
          </div>

          <div className="flex justify-start items-center mt-2 p-2 gap-4">
            <div className="flex flex-col gap-4">
              <div className="flex">
                <motion.div layoutId="icon-1">
                  <Flag />
                </motion.div>{" "}
                <p className="text-xs text-neutral-600 font-bold tracking-tight">
                  Priority
                </p>
              </div>
              <div className="flex">
                <motion.div layoutId="icon-2">
                  <SandGlass />
                </motion.div>
                <p className="text-xs text-neutral-600 font-bold tracking-tight">
                  Status
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <motion.div
                layoutId="priority"
                className="inline-flex justify-center items-center text-xs p-1 text-red-950  rounded-md gap-2  bg-red-200"
              >
                Urgent <Arrow />
              </motion.div>
              <motion.div
                layoutId="status"
                className="inline-flex justify-center items-center text-xs p-1 text-red-950  rounded-md gap-2  bg-yellow-200"
              >
                In Progress <Arrow />
              </motion.div>
            </div>
          </div>

          <motion.div layoutId="avatar-card" className="flex mt-2 ml-2 gap-1">
            <motion.div
              layoutId="avatar-1"
              className="border flex justify-center items-center rounded-full p-1 pr-2 gap-1 border-neutral-300 shadow-2xl"
            >
              <Avatar className="" src={one} />{" "}
              <p className="text-xs text-neutral-400">Chloe</p>
            </motion.div>
            <motion.div
              layoutId="avatar-2"
              className="border flex justify-center items-center rounded-full p-1 pr-2 gap-1 border-neutral-300 shadow-2xl"
            >
              <Avatar className="" src={skull} />
              <p className="text-xs text-neutral-400">Anna</p>{" "}
            </motion.div>
            <motion.div
              layoutId="avatar-3"
              className="border flex justify-center items-center rounded-full p-1 pr-2 gap-1 border-neutral-300 shadow-2xl"
            >
              <Avatar className="" src={two} />{" "}
              <p className="text-xs text-neutral-400">Saoirse</p>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

const Avatar = ({ src, className }: { src: string; className: string }) => {
  return <img className={` rounded-full h-5 ${className}`} src={src} alt="" />;
};

// const Card = ()=>{
//     return
// }

// const ExpandedCard = ()=>{
//     return
// }

//@ts-ignore
const Bol = ({ className }) => {
  //@ts-ignore
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width=""
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#737373"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      className={`${className} lucide lucide-bolt-icon lucide-bolt`}
    >
      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
      <circle cx="12" cy="12" r="4" />
    </svg>
  );
};

//@ts-ignore
const Flag = () => {
  //@ts-ignore
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="18"
      viewBox="0 0 24 24"
      fill="#adacb9"
      stroke="#adacb9"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      className="lucide lucide-flag-triangle-right-icon lucide-flag-triangle-right"
    >
      <path d="M6 22V2.8a.8.8 0 0 1 1.17-.71l11.38 5.69a.8.8 0 0 1 0 1.44L6 15.5" />
    </svg>
  );
};

//@ts-ignore
const SandGlass = () => {
  //@ts-ignore
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#adacb9"
      strokeWidth="1.25"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-hourglass"
    >
      <path d="M5 22h14" />
      <path d="M5 2h14" />
      <path
        d="M17 22v-4.172a2 2 0 0 0-.586-1.414L12 12l-4.414 4.414A2 2 0 0 0 7 17.828V22"
        fill="#adacb9"
        stroke="none"
      />
      <path d="M7 2v4.172a2 2 0 0 0 .586 1.414L12 12l4.414-4.414A2 2 0 0 0 17 6.172V2" />
    </svg>
  );
};

const DottedMenu = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      className="size-6"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
      />
    </svg>
  );
};

//@ts-ignore
const Tick = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="#adacb9"
      className={`size-4 ${className}`}
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
      />
    </svg>
  );
};

const Arrow = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="size-4 bg-neutral-200 rounded-md"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m19.5 8.25-7.5 7.5-7.5-7.5"
      />
    </svg>
  );
};
