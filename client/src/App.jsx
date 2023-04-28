import { useContext, useState } from "react";
import { createContext } from "react";
import Login from "./components/Login";
import OTPInput from "./components/OTPInput";
import Recovered from "./components/Recovered";
import Reset from "./components/Reset";
import { RecoveryContext } from "./Context";

const App = () => {
  // const [page, setPage] = useState("login");
  // const [email, setEmail] = useState("");
  // const [otp, setOTP] = useState("");
  const {page} = useContext(RecoveryContext);
  console.log(page);
  function NavigateComponents() {
    if (page === "login") return <Login/>
    if (page === "otp") return <OTPInput />
    if (page === "reset") return <Reset />
    return <Recovered/>
  }
  return (
    // <RecoveryContext.Provider value= {{ page, setPage, otp, setOTP, email,setEmail}}>
      <div className="flex justify-center items-center">
        <NavigateComponents/>
      </div>
    // </RecoveryContext.Provider>
  )
}

export default App;
