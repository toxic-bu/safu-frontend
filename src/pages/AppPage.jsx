import { Outlet } from "react-router-dom";
import React from "react";
import { AppNavbar } from "../components";
import BalanceWidget from "../components/BalanceWidget";
const AppPage = () => {
    return (
        <div className="absolute inset-0">
            <div className="blue-bg h-full">
                <AppNavbar />
                <BalanceWidget></BalanceWidget>
                <div className="mt-12 flex flex-col items-center ">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};
export default AppPage;
