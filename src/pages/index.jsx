import { Navbar, Footer, Welcome, Services } from "../components";
import RoadmapConent from "./RoadmapConent";
import AppContent from "./AppContent";
export const MainPage = () => {
    return (
        <div className="min-h-screen">
            <div className="gradient-bg-welcome">
                <Navbar />
                <Welcome />
            </div>
            <div className="gradient-bg-footer">
                <Services />
                <Footer />
            </div>
        </div>
    );
};

export const AppPage = () => {
    return (
        <div className="min-h-screen gradient-bg-welcome">
            <div className="min-h-screen">
                <Navbar />
                <AppContent />
            </div>
            <div className="gradient-bg-footer">
                <Footer />
            </div>
        </div>
    );
};

export const RoadmapPage = () => {
    return (
        <div className="min-h-screen gradient-bg-welcome ">
            <div className="">
                <Navbar />
            </div>
            <RoadmapConent />
            <Footer />
        </div>
    );
};

export const ProfilePage = () => {
    return (
        <div className="min-h-screen gradient-bg-welcome">
            <div className="">
                <Navbar />
                <div className="h-screen flex items-center justify-center ">
                    <p className="text-5xl text-white">Profile development</p>
                </div>
            </div>
            <div className="gradient-bg-footer">
                <Footer />
            </div>
        </div>
    );
};
