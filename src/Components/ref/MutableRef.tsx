import { useRef, useState, useEffect } from "react";

function MutableRef(){

    const [ timer, setTimer] = useState(0)

    const contentRef = useRef<number | null>(null)

  const StopClock = ()=>{
      if(contentRef.current){
        window.clearInterval(contentRef.current)
      }
     
  }

  useEffect(() => {
      contentRef.current = window.setInterval(()=> {
          setTimer(timer => timer+1)
      },1000)
      return () =>{
          StopClock()
      }
  }, [])



    return(
        <div>
           time: {timer}
           <button  onClick={StopClock}>Stop clock</button>
        </div>
    )
}

export default MutableRef;