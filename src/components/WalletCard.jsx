import { useState } from "react";

import { useContext } from "react";
import { TransactionContext } from "../context/TransactionContext";

import { SiBinance } from "react-icons/si";
import { BsInfoCircle } from "react-icons/bs";

import InfoTooltip from "./ui/InfoTooltip";

const WalletCard = () => {
    const [walletInfoShow, setWalletInfoShow] = useState(false);
    const { balance, balance1, balance2 } = useContext(TransactionContext);
    return (
        <div className="p-3 justify-end items-start flex-col rounded-xl h-40 w-72 my-5 bnb-card white-glassmorphism ">
            <div className="flex justify-between flex-col w-full h-full">
                <div className="flex justify-between item-start">
                    <div className="w-10 h-10 rounded-full border-2 border-white flex justify-center items-center">
                        <SiBinance fontSize={21} color="#fff" />
                    </div>
                    <div className="relative">
                        <BsInfoCircle
                            fontSize={17}
                            color="#fff"
                            onMouseEnter={() => setWalletInfoShow(true)}
                            onMouseLeave={() => setWalletInfoShow(false)}
                        />
                        <InfoTooltip active={walletInfoShow} />
                    </div>
                </div>
                <div className="text-sm">
                    <p className="text-white font-semibold text-base mt-1">BSC</p>
                    <p>Total Balance {Number(balance1).toFixed(2)}</p>
                    <p>RV Balance {Number(balance).toFixed(2)}</p>
                    <p>ST Balance {Number(balance2).toFixed(2)}</p>
                </div>
            </div>
        </div>
    );
};
export default WalletCard;
