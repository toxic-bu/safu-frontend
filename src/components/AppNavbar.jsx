import { useState } from "react";
import { Link } from "react-router-dom";

import { useContext } from "react";
import { TransactionContext } from "../context/TransactionContext";

import logo from "../img/brand.png";

const AppNavbarTab = ({ link, label, setActive, activeTab }) => {
    const props = " bg-gray-300 rounded";

    return (
        <Link to={link}>
            <button className={`${activeTab === label ? props : null}`} onClick={() => setActive(label)}>
                {label}
            </button>
        </Link>
    );
};

const AppNavbar = () => {
    const { connectWallet, currentAccount } = useContext(TransactionContext);
    const [activeTab, setActiveTab] = useState("Info");

    return (
        <nav className="flex justify-between items-center md:pt-2 md:px-20 pt-1">
            <div className="z-10 pl-1">
                <Link to="/">
                    <img src={logo} alt="logo" className="w-12 cursor-pointer" />
                </Link>
            </div>

            <div className="bg-white rounded-full px-2 py-1 w-24 flex justify-between">
                <AppNavbarTab link="/app/info" label="Info" activeTab={activeTab} setActive={setActiveTab} />
                <AppNavbarTab link="/app/stake" label="Stake" activeTab={activeTab} setActive={setActiveTab} />
            </div>

            {currentAccount ? (
                <div className="bg-[#fff] px-3 border-2 border-white rounded-full cursor-pointer hover:bg-[#C3FBD8] text-black text-sm">
                    {currentAccount.substr(0, 5)}. .{currentAccount.substr(-5, 5)}
                </div>
            ) : (
                <button
                    type="button"
                    onClick={connectWallet}
                    className="bg-[#fff] px-3 border-2 border-white rounded-full cursor-pointer hover:bg-[#C3FBD8] text-black text-sm"
                >
                    Connect wallet
                </button>
            )}
        </nav>
    );
};

export default AppNavbar;
