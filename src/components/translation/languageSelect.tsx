import { useLanguageContext } from "./languageContext";

const LanguageSelect = () => {
  const { languages, onClickLanguageChange } = useLanguageContext();
  return (
    <select
      style={{
        width: 200,
        position: "absolute",
        top: 10,
        left: 10,
        height: "40px",
      }}
      onChange={onClickLanguageChange}
    >
      {Object.keys(languages).map((lng) => (
        <option key={languages[lng].nativeName} value={lng}>
          {languages[lng].nativeName}
        </option>
      ))}
    </select>
  );
};

export default LanguageSelect;