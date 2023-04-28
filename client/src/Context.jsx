import { useState } from "react";
import { createContext } from "react";

export const RecoveryContext = createContext();
const Context = ( {children}) => {
  const [page, setPage] = useState("login");
  const [email, setEmail] = useState("");
  const [otp, setOTP] = useState("");

  return (
    <RecoveryContext.Provider value= {{ page, setPage, otp, setOTP, email,setEmail}}>
      {children}
    </RecoveryContext.Provider>
  )
}

export default Context;
