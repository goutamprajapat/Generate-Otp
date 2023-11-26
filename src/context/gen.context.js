import { createContext, useContext, useState } from "react";

const genNumberContext = createContext();

export const GentNumberProvider = ({ children }) => {
  const [number, setNumber] = useState([]);

  const generateNumber = (e) => {
    const num = Math.floor(Math.random() * (9999 - 1000) + 1000).toString();

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
