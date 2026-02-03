import { motion } from "motion/react"
import { useState } from "react"
import { Bolt } from "lucide-react"

export const TodoCard = ()=>{ 
    
    const [open, setOpen] = useState(true)
    
    return <div className="h-screen w-screen flex justify-center items-center" >
        {open ?<motion.div
    layoutId="card"
    onClick={()=>{setOpen(!open)}}
    className=" flex flex-col justify-between w-60 h-20 p-2 rounded-2xl shadow-2xl bg-white">
        
       <div className="flex justify-between items-center" >
         <div className=" inline-flex justify-between items-center gap-1 bg-neutral-200 px-2 py-1 rounded-xl " >
            <div className="bg-white rounded-md" ><Bol className=" bg-white rounded-md " /></div>
            <p className=" text-xs tracking-tight">Design System</p>
        </div>

        <div className="w-24 flex justify-center items-center gap-1 ">
            <div className=" w-full h-2 bg-neutral-200 rounded-md" >
                <div className="w-[75%] h-full bg-[#20be4b]" ></div>
            </div>
            <p className="text-xs" >75%</p>
        </div>
       </div>

       <div className="bg-red-400 w-full h-[40%]" >

       </div>

    </motion.div> : <motion.div
    layoutId="card"
    onClick={()=>{setOpen(!open)}}
    className="w-60 h-60 p-2 rounded-2xl shadow-2xl bg-white">

    </motion.div>}


    </div>
}



// const Card = ()=>{
//     return 
// }

// const ExpandedCard = ()=>{
//     return 
// }



//@ts-ignore
const Bol = ({className})=>{
    //@ts-ignore
    return <svg className={className} xmlns="http://www.w3.org/2000/svg" width="" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-bolt-icon lucide-bolt"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><circle cx="12" cy="12" r="4"/></svg>
}

//@ts-ignore
const Flag = ()=>{
    //@ts-ignore
    return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-flag-triangle-right-icon lucide-flag-triangle-right"><path d="M6 22V2.8a.8.8 0 0 1 1.17-.71l11.38 5.69a.8.8 0 0 1 0 1.44L6 15.5"/></svg>
}