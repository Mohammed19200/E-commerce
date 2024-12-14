import { createContext, useState } from "react";

export let Usercontext = createContext();

export default function Usercontextprovider(props) {
  const [usertoken, setusertoken] = useState("");

  return (
    <Usercontext.Provider value={{ usertoken, setusertoken }}>
      {props.children}
    </Usercontext.Provider>
  );
}
