import { Outlet } from "react-router-dom";
import React from "react";
import { AppNavbar } from "../components";

const AppPage = () => {
    return (
        <div className="flex flex-col">
            <div className="h-screen blue-bg">
                <AppNavbar />
                <div className="mt-24 flex flex-col items-center ">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};
export default AppPage;
