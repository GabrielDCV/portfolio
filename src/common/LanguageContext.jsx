import { createContext } from "react";
import pt from "../Languages/pt";

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const texts = pt;

  return (
    <LanguageContext.Provider value={{ texts }}>
      {children}
    </LanguageContext.Provider>
  );
};