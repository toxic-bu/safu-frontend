import { Navbar, Footer, Welcome, Services } from "../components";

const MainPage = () => {
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
export default MainPage;
