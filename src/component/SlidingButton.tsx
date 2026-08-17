import { Moon, Sun } from "lucide-react";

export const SlidingButton = () => {
  return (
    <div className="h-screen w-full flex justify-center items-center">
      <div className="flex flex-col justify-center items-center">
        <div className=" bg-[#0F1015] relative shadow-xl/50 transition duration-600 hover:bg-[#eff2f5] flex group w-84 h-20 rounded-full">
          <p className=" absolute scale-100 group-hover:scale-0 duration-600 text-2xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[#C5C3C6]">
            Dark
          </p>
          <p className=" absolute scale-0 group-hover:scale-100 duration-600 text-2xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[#131313]">
            Light
          </p>
          <div className="h-full relative w-20 transition flex justify-center items-center  duration-600 ease-in-out group-hover:translate-x-64 rounded-full bg-[#C5C3C6] group-hover:bg-[#0079E5]">
            <Moon
              className="size-16 absolute scale-80  transition transform group-hover:rotate-180 duration-300 ease-in-out group-hover:scale-0 "
              fill="black"
            />
            <Sun className="size-16 absolute  scale-0 transition transform group-hover:rotate-180 duration-600 ease-in-out group-hover:scale-80" />
          </div>
        </div>
        <p className=" text-2xl mt-8">Hover ;)</p>
      </div>
    </div>
  );
};
