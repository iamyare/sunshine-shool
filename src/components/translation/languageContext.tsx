import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
  useMemo
} from "react";
import { useTranslation } from "react-i18next";
import { i18n } from "i18next";

interface Language {
  nativeName: string;
  flag: string;
}

interface Languages {
  [key: string]: Language;
}

interface LanguageContextType {
  t: (key: string) => string;
  i18n: i18n;
  onClickLanguageChange: (language: string) => void;
  languages: Languages;
  currentLanguage: string;
}

const languages: Languages = {
  en: { nativeName: "English", flag: "🇺🇸" },
  es: { nativeName: "Español", flag: "🇪🇸" },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageContextProvider = ({ children }: { children: ReactNode }) => {
  const { t, i18n } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState(() => {
    const savedLanguage = localStorage.getItem('language');
    return savedLanguage && languages[savedLanguage] ? savedLanguage : i18n.language;
  });

  const onClickLanguageChange = useMemo(() => (language: string) => {
    if (languages[language]) {
      i18n.changeLanguage(language);
      setCurrentLanguage(language);
      localStorage.setItem('language', language);
    }
  }, [i18n]);

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage && languages[savedLanguage]) {
      onClickLanguageChange(savedLanguage);
    }
  }, [onClickLanguageChange]);

  const value = useMemo(() => ({
    t,
    i18n,
    onClickLanguageChange,
    languages,
    currentLanguage
  }), [t, i18n, onClickLanguageChange, currentLanguage]);

  return (
    <LanguageContext.Provider value={value}>
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