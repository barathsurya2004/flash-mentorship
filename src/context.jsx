import { createContext, useState } from "react";

export const UserContext = createContext({
  userId: null,
  password: null,
  logStatus: null,
});

export const UserContextProvider = ({ children }) => {
  const [userId, setUserId] = useState("example123@iith.ac.in");
  const [password, setPassword] = useState("123456");
  const [logStatus, setLogStatus] = useState(false);
  const values = {
    userId,
    setLogStatus,
    setUserId,
    password,
    setPassword,
    logStatus,
  };

  return <UserContext.Provider value={values}>{children}</UserContext.Provider>;
};
