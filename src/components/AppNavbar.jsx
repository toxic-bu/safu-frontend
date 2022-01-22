import { useState } from "react";
import { Link } from "react-router-dom";

import { useContext } from "react";
import { TransactionContext } from "../context/TransactionContext";

import logo from "../img/brand.png";

const AppNavbarTab = ({ link, label, setActive, activeTab }) => {
    const props = " bg-gray-200 rounded-xl text-black ";

    return (
        <Link to={link} onClick={() => setActive(label)}>
            <button
                className={`${activeTab === label ? props : null} transition-all mr-2 last:mr-0 px-3 py-1 font-medium`}
            >
                {label}
            </button>
        </Link>
    );
};

const AppNavbar = () => {
    const { connectWallet, currentAccount } = useContext(TransactionContext);
    const [activeTab, setActiveTab] = useState("Info");

    return (
        <nav className="flex justify-between items-center md:pt-3 px-3 pt-1 font-medium">
            <div className="z-10 ml-1 mr-3 sm:basis-40">
                <Link to="/">
                    <img src={logo} alt="logo" className="w-10 sm:w-12 cursor-pointer" />
                </Link>
            </div>

            <div className="fixed sm:static bottom-8 left-1/2 -translate-x-1/2 sm:translate-x-0 bg-white rounded-2xl p-0.5 flex justify-between  shadow-slate-500 shadow-md  text-stone-700">
                <AppNavbarTab link="/app/info" label="Info" activeTab={activeTab} setActive={setActiveTab} />
                <AppNavbarTab link="/app/stake" label="Staking" activeTab={activeTab} setActive={setActiveTab} />
            </div>

            <div className="text-right sm:basis-40">
                <span className="bg-[#fff] px-3 py-1.5 border-2 border-white rounded-2xl cursor-pointer hover:bg-gray-200 text-black text-md  shadow-slate-500 shadow-md ml-auto">
                    {currentAccount ? (
                        `${currentAccount.substr(0, 4)}. .${currentAccount.substr(-3, 3)}`
                    ) : (
                        <button type="button" onClick={connectWallet}>
                            Connect wallet
                        </button>
                    )}
                </span>
            </div>
        </nav>
    );
};

export default AppNavbar;
