import { Outlet } from "react-router-dom";
import React, { useContext } from "react";
import { AppNavbar } from "../components";
import BalanceWidget from "../components/BalanceWidget";

import { ThemeContext } from "../context/ThemeModeContext";

const AppPage = () => {
    const { theme } = useContext(ThemeContext);
    return (
        <div className={`absolute inset-0 ${theme}`}>
            <div className="bg-gray-100 dark:bg-gray-900 min-h-full">
                <AppNavbar />
                <BalanceWidget></BalanceWidget>
                <div className="flex justify-center">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};
export default AppPage;
