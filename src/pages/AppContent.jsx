import { useContext, useState } from "react";
import { TransactionContext } from "../context/TransactionContext";

import { SiBinance } from "react-icons/si";
import { BsInfoCircle } from "react-icons/bs";

import InfoTooltip from "../components/ui/InfoTooltip";

const Input = ({ placeholder, type, value, handleChange }) => (
    <input
        placeholder={placeholder}
        type={type}
        step="0.0001"
        value={value}
        onChange={(e) => handleChange(e)}
        className="my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism"
    />
);

const AppContent = () => {
    const [walletInfoShow, setWalletInfoShow] = useState(false);

    const {
        connectWallet,
        currentAccount,
        handleStakeChange,
        handleUnstakeChange,
        handleSubmit,
        stakeFormAmount,
        unstakeFormAmount,
    } = useContext(TransactionContext);

    return (
        <div className="white-glassmorphism m-6 md:m-20 flex flex-col items-center ">
            {!currentAccount && (
                <button
                    type="button"
                    onClick={connectWallet}
                    className="my-5 bg-[#C3FBD8] p-3 rounded-full cursor-pointer hover:bg-[#76bd80] hover:text-white font-semibold"
                >
                    Connect Wallet
                </button>
            )}

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
                        <p className="text-white font-light text-sm">
                            {currentAccount
                                ? `${currentAccount.substr(0, 4)}. . .${currentAccount.substr(-4, 4)}`
                                : null}
                        </p>
                        <p className="text-white font-semibold text-base mt-1">BSC</p>
                    </div>
                </div>
            </div>

            <div className="flex flex-col md:w-96 w-72">
                <div className="p-5 flex flex-col justify-start items-center blue-glassmorphism ">
                    <Input
                        placeholder="Amount"
                        name="amount"
                        type="number"
                        handleChange={handleStakeChange}
                        value={stakeFormAmount}
                    />
                    <div className="h-[1px] w-full bg-gray-400 my-2"></div>
                    <div className="flex w-full">
                        <button
                            type="button"
                            onClick={handleSubmit}
                            disabled={+stakeFormAmount > 0 ? false : true}
                            className={`text-white w-full mt-2 border-[1px] p-2 border-[#3d4f7c] rounded-full cursor-pointer disabled:text-gray-500 mr-2`}
                        >
                            Stake
                        </button>
                        <button
                            type="button"
                            onClick={handleSubmit}
                            className="text-white w-full mt-2 border-[1px] p-2 border-[#3d4f7c] rounded-full cursor-pointer"
                        >
                            Stake All
                        </button>
                    </div>
                </div>
                <div className="p-5 mt-5 flex flex-col justify-start items-center blue-glassmorphism">
                    <Input
                        placeholder="Amount"
                        name="amount"
                        type="number"
                        handleChange={handleUnstakeChange}
                        value={unstakeFormAmount}
                    />
                    <div className="h-[1px] w-full bg-gray-400 my-2"></div>
                    <div className="flex w-full">
                        <button
                            type="button"
                            onClick={handleSubmit}
                            disabled={+unstakeFormAmount > 0 ? false : true}
                            className="text-white w-full mt-2 border-[1px] p-2 border-[#3d4f7c] rounded-full cursor-pointer disabled:text-gray-500 mr-2"
                        >
                            Unstake
                        </button>
                        <button
                            type="button"
                            onClick={handleSubmit}
                            className="text-white w-full mt-2 border-[1px] p-2 border-[#3d4f7c] rounded-full cursor-pointer"
                        >
                            Unstake All
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default AppContent;
