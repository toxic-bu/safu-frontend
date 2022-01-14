import React from "react";
import { Footer, Navbar, Services, Welcome } from "./components";
import { Routes, Route } from "react-router-dom";

const MainPage = () => {
    return (
        <div className="min-h-screen">
            <div className="gradient-bg-welcome">
                <Navbar />
                <Welcome />
            </div>
            <Services />
            <Footer />
        </div>
    );
};

const AppPage = () => {
    return (
        <div className="min-h-screen">
            <div className="gradient-bg-welcome">
                <Navbar />
            </div>
            <div className="h-screen gradient-bg-services flex items-center justify-center ">
                <p className="text-5xl text-white">App development</p>
            </div>
            <Footer />
        </div>
    );
};

const RoadmapPage = () => {
    return (
        <div className="min-h-screen">
            <div className="gradient-bg-welcome">
                <Navbar />
            </div>
            <div className="h-screen gradient-bg-services flex items-center justify-center ">
                <p className="text-5xl text-white">Roadmap development</p>
            </div>
            <Footer />
        </div>
    );
};

const ProfilePage = () => {
    return (
        <div className="min-h-screen">
            <div className="gradient-bg-welcome">
                <Navbar />
            </div>
            <div className="h-screen gradient-bg-services flex items-center justify-center ">
                <p className="text-5xl text-white"> Profile development</p>
            </div>
            <Footer />
        </div>
    );
};

const App = () => {
    return (
        <Routes>
            <Route path="/*" element={<MainPage />} />
            <Route path="/app" element={<AppPage />} />
            <Route path="/roadmap" element={<RoadmapPage />} />
            <Route path="/profile" element={<ProfilePage />} />
        </Routes>
    );
};

export default App;
