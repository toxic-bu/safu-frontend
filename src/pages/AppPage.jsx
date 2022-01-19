import { Outlet } from "react-router-dom";

import { AppNavbar } from "../components";

const AppPage = () => {
    return (
        <div className="h-screen gradient-bg-welcome flex flex-col">
            <div className="h-full blue-bg">
                <AppNavbar />
                <div className="m-6 md:m-20 flex flex-col items-center ">
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};
export default AppPage;
