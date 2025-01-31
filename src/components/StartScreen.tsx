import { useDisplay } from "../contexts/DisplayContext";
import Logo from "./Logo";

const StartScreen = () => {
  const { isDarkMode } = useDisplay();

  return (
    <div className="flex flex-col items-center justify-center gap-4 px-12 pt-28 text-center mobile:px-0">
      <Logo />
      <h1
        className={`pt-12 text-[2.4rem] font-bold text-2D2D2D transition-all duration-500 ${
          isDarkMode ? "text-white" : "text-2D2D2D"
        }`}
      >
        Welcome to&nbsp;
        <span className="text-a445ed">
          <a href="https://github.com/roobiwebdev" target="_blank">
            DevNerd's
          </a>
        </span>
        &nbsp;Dictionary App
      </h1>
      <p className="pt-3 text-[1.8rem] text-757575">
        Just type a word into the search field to find its comprehensive
        definitions, explore various synonyms, and obtain further details,
        allowing you to enhance your knowledge of the selected term.
      </p>
    </div>
  );
};

export default StartScreen;
