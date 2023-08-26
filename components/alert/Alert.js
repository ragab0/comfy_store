import Close from "@/assets/svgs/toast/close";
import Success from "@/assets/svgs/toast/success";
import Failed from "@/assets/svgs/toast/failed";
import Warning from "@/assets/svgs/toast/warning";
import { useEffect, useRef } from "react";
import "./Alert.css";



export default function Toast({type, message, id}) {
  const myToast = useRef(null);
  const types = {
    success: {
      Ico: Success,
      currentStyle: "text-green-500 after:bg-green-500 border-green-500/10 bg-green-100 dark:bg-emerald-900",
    }, 
    failed : {
      Ico: Failed,
      currentStyle: "text-red-500 after:bg-red-500 border-red-500/10 bg-red-100 dark:bg-[#3e2d24]",
    }, 
    warning : {
      Ico: Warning,
      currentStyle: "text-yellow-600 after:bg-yellow-600 border-yellow-600/10 bg-[#fff1d1] dark:bg-[#3c382e]",
    }
  }


  // Extracting from the current type and setting the default if none exists;
  const { Ico, currentStyle } = type ? types[type] : types.success;
  function closeHandler({currentTarget}) {
    setCurrentChangableToast(currentTarget.parentElement);
  }


  function closeHandler() {
    myToast.current.style.display="none";
  }


  useEffect(function() {
    const timer = setTimeout(function() {
      myToast.current.style.display = "none";
    }, 5000)
    return function() {
      clearTimeout(timer);
    }
  })


  return (
    <div ref={myToast} id={id} className={`toast relative top-4 left-4 mb-2 z-10 border-b-[6px] p-2 pl-4 min-w-[300px] inline-flex items-center 
                     justify-between gap-8 rounded-md ${currentStyle}`
    }> 
      <div className="inline-flex items-center gap-3">
        <Ico color="currentColor"  width={22} height={22} />
        <span>{message}</span>
      </div>
      <button aria-label="Close"
              onClick={closeHandler} 
              className="p-4 rounded-full hover:bg-black/10" >
        <Close width={11} height={11} />
      </button>
    </div>
  )
}