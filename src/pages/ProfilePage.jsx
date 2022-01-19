import { Navbar, Footer } from "../components";

const ProfilePage = () => {
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
export default ProfilePage;
