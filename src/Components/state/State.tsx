
import { useState } from "react";

type authenticate = {
    name: string
    email: string
}



function State(){
    const [state, setstate] = useState<authenticate | null>(null)

    const handleLogin = ()=> {
        setstate({
            name: "jaii",
            email: "jaii@gmail.com"
        })
    }

    const handleLogout = () => {
        setstate(null)
    }

    return(
        <div>
          <button onClick = {handleLogin}>log in</button>
          <button onClick = {handleLogout}>log out</button>
          <div>user name:{state?.name}</div>
          <div>user email:{state?.email}</div>
        </div>
    )
}

export default State;