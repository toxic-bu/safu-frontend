import { Navbar, Footer, Roadmap } from "../components";

const RoadmapPage = () => {
    return (
        <div className="min-h-screen gradient-bg-welcome ">
            <div className="">
                <Navbar />
            </div>
            <Roadmap />
            <Footer />
        </div>
    );
};
export default RoadmapPage;
