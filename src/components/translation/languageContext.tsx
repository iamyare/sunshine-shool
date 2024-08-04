import {
  createContext,
  useContext,
  ReactNode,
} from "react";
import { useTranslation } from "react-i18next";

import { i18n } from "i18next";

interface LanguageContextType {
  t: (key: string) => string;
  i18n: i18n;
  onClickLanguageChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  languages: { [key: string]: { nativeName: string } };
}

export const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageContextProvider = ({ children }: { children: ReactNode }) => {
  const languages = {
    en: { nativeName: "English" },
    es: { nativeName: "Spanish" },
  };
  const { t, i18n } = useTranslation();

  const onClickLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const language = e.target.value;
    i18n.changeLanguage(language); //change the language
  };

  return (
    <LanguageContext.Provider
      value={{ t, i18n, onClickLanguageChange, languages }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguageContext = () => {
    const context = useContext(LanguageContext);
    if (!context) {
      throw new Error("useLanguageContext must be used within a LanguageContextProvider");
    }
    return context;
  };