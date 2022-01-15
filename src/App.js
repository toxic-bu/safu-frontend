import React from "react";
import { Routes, Route } from "react-router-dom";

import { MainPage, AppPage, RoadmapPage, ProfilePage } from "./pages";

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
