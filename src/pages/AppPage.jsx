import { Outlet } from "react-router-dom";

import { AppNavbar } from "../components";

const AppPage = () => {
    return (
        <div className="min-h-screen gradient-bg-welcome ">
            <div className="min-h-screen blue-bg">
                <AppNavbar />
                <div className="m-6 md:m-20 flex flex-col items-center ">
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};
export default AppPage;
