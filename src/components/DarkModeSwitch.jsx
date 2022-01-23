import { useContext } from "react";
import { ThemeContext } from "../context/ThemeModeContext";
import { MdDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";
const DarkModeSwitch = () => {
    const { theme, setTheme } = useContext(ThemeContext);
    return (
        <>
            {theme === "dark" ? (
                <div className="p-2" onClick={() => setTheme("")}>
                    <MdDarkMode />
                </div>
            ) : (
                <div className="p-2" onClick={() => setTheme("dark")}>
                    <MdLightMode />
                </div>
            )}
        </>
    );
};

export default DarkModeSwitch;
