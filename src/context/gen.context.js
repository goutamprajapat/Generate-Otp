import { createContext, useContext, useState } from "react";

const genNumberContext = createContext();

export const GentNumberProvider = ({ children }) => {
  const [number, setNumber] = useState([]);

  const generateNumber = (e) => {
    // print only 4 digits number
     const num = Math.floor(Math.random() * (9999 - 1000) + 1000).toString();

    // print max number and min number
    // const num = Math.floor(Math.random() * 9999).toString();

    setNumber([...number, num]);
  };

  const shareValue = {
    generateNumber,
    number,
  };
  return (
    <genNumberContext.Provider value={shareValue}>
      {children}
    </genNumberContext.Provider>
  );
};

export const useContextNumber = () => {
  return useContext(genNumberContext);
};
