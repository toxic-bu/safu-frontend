import { useContext, useState } from "react";
import { TransactionContext } from "../context/TransactionContext";

const Input = ({ placeholder, type, value, handleChange }) => (
    <input
        placeholder={placeholder}
        type={type}
        step="0.01"
        value={value}
        onChange={(e) => handleChange(e.target.value)}
        className="my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism"
    />
);

const TabButton = ({ label, setTab, currentTab }) => {
    const classProps = currentTab === label ? `text-gray-600` : ``;

    return (
        <button className={`${classProps}`} onClick={() => setTab(label)}>
            {label}
        </button>
    );
};

const StakeForm = () => {
    const [tab, setTab] = useState("Stake");
    const { setStakeFormAmount, setUnstakeFormAmount, handleStake, handleUnstake, stakeFormAmount, unstakeFormAmount } =
        useContext(TransactionContext);

    return (
        <div>
            <div className="p-5 flex flex-col justify-start items-center blue-glassmorphism">
                <div>
                    <TabButton label="Stake" setTab={setTab} currentTab={tab} />
                    <TabButton label="Unstake" setTab={setTab} currentTab={tab} />
                </div>
                <Input
                    placeholder="Amount"
                    name="amount"
                    type="number"
                    handleChange={tab === "Stake" ? setStakeFormAmount : setUnstakeFormAmount}
                    value={tab === "Stake" ? stakeFormAmount : unstakeFormAmount}
                />

                <button
                    type="button"
                    onClick={tab === "Stake" ? handleStake : handleUnstake}
                    className={`text-white w-full mt-2 border-[1px] p-2 border-[#3d4f7c] rounded-full cursor-pointer disabled:text-gray-500 mr-2`}
                >
                    {tab}
                </button>
            </div>
        </div>
    );
};
export default StakeForm;
