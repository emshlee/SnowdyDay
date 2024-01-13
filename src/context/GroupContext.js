import {
    createContext,
    useContext,
    useReducer,
  } from "react";
  import { AuthContext } from "./AuthContext";
  
  export const GroupContext = createContext();
  
  export const GroupContextProvider = ({ children }) => {
    const { currentUser } = useContext(AuthContext);
    

  };