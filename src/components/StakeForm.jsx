import { useContext } from "react";
import { TransactionContext } from "../context/TransactionContext";

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

export const Stake = () => {
    const { handleStakeChange, handleSubmit, stakeFormAmount } = useContext(TransactionContext);
    return (
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
    );
};

export const Unstake = () => {
    const { handleUnstakeChange, handleSubmit, unstakeFormAmount } = useContext(TransactionContext);
    return (
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
    );
};
