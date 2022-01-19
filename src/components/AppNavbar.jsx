import { useState } from "react";
import { Link } from "react-router-dom";

import { useContext } from "react";
import { TransactionContext } from "../context/TransactionContext";

import logo from "../img/brand.png";

const AppNavbarTab = ({ link, label, setActive, activeTab }) => {
    const props = " bg-gray-300 rounded-md";

    return (
        <Link to={link}>
            <button className={`${activeTab === label ? props : null} transition-all`} onClick={() => setActive(label)}>
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
            <div className="fixed bg-white rounded-full px-2 w-24 flex justify-between  left-2/4 -translate-x-1/2 md:top-3 top-full -translate-y-12 md:translate-y-0 mf:translate-y-2 shadow-slate-500 shadow-md">
                <AppNavbarTab link="/app/info" label="Info" activeTab={activeTab} setActive={setActiveTab} />
                <AppNavbarTab link="/app/stake" label="Stake" activeTab={activeTab} setActive={setActiveTab} />
            </div>

            <div className="z-10 pl-1 ">
                <Link to="/">
                    <img src={logo} alt="logo" className="w-8 mf:w-12 cursor-pointer " />
                </Link>
            </div>
            {currentAccount ? (
                <div className="bg-[#fff] px-3 border-2 border-white rounded-full cursor-pointer hover:bg-[#C3FBD8] text-black text-sm mr-2 shadow-slate-500 shadow-md">
                    {currentAccount.substr(0, 5)}. .{currentAccount.substr(-5, 5)}
                </div>
            ) : (
                <button
                    type="button"
                    onClick={connectWallet}
                    className="bg-[#fff] px-3 border-2 border-white rounded-full cursor-pointer hover:bg-[#C3FBD8] text-black text-sm mr-2 shadow-slate-500 shadow-md"
                >
                    Connect wallet
                </button>
            )}
        </nav>
    );
};

export default AppNavbar;
