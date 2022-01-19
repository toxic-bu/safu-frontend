import { useContext, useState } from "react";

import { TransactionContext } from "../context/TransactionContext";

import { SiBinance } from "react-icons/si";
import { BsInfoCircle } from "react-icons/bs";

import InfoTooltip from "./ui/InfoTooltip";

const WalletCard = () => {
    const [walletInfoShow, setWalletInfoShow] = useState(false);

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
                <div>
                    <p className="text-white font-semibold text-base mt-1">BSC</p>
                </div>
            </div>
        </div>
    );
};
export default WalletCard;
