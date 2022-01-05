import { useRef, useEffect } from "react";


function Dom(){
const contentRef = useRef<HTMLInputElement>(null)

useEffect(()=> {
    contentRef.current?.focus();
},[])


return(
    <div>
        
     <input ref={contentRef}></input>
     {console.log(contentRef.current?.value)}
    </div>
)

}

export default Dom;

 
