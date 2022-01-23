import { useContext, useState } from "react";
import { TransactionContext } from "../context/TransactionContext";

const Input = ({ type, value, handleChange, handleAll }) => (
    <div className="bg-gray-50 dark:bg-gray-100 rounded-2xl mt-3 text-3xl px-4 pt-2 pb-5 flex">
        <input
            placeholder="0.0"
            type={type}
            value={value}
            onChange={(e) => handleChange(e.target.value)}
            className="rounded-sm bg-transparent text-black border-none outline-none font-medium w-full"
        />

        <button className="text-base text-indigo-800 " onClick={handleAll}>
            max
        </button>
    </div>
);

const TabButton = ({ label, setTab, currentTab }) => {
    const classProps = currentTab === label ? `text-gray-300` : ``;

    return (
        <button className={`${classProps} font-medium mr-2 last:mr-0`} onClick={() => setTab(label)}>
            {label}
        </button>
    );
};

const StakeForm = () => {
    const [tab, setTab] = useState("Stake");
    const {
        setStakeFormAmount,
        setUnstakeFormAmount,
        handleStake,
        handleUnstake,
        stakeFormAmount,
        unstakeFormAmount,
        handleSetAllUnstake,
        handleSetAllStake,
    } = useContext(TransactionContext);

    return (
        <main className="bg-gray-400 dark:bg-gray-700 md:w-main rounded-3xl p-2 text-md mx-2">
            <div className="text-sm mt-1 ml-1">
                <TabButton label="Stake" setTab={setTab} currentTab={tab} />
                <TabButton label="Unstake" setTab={setTab} currentTab={tab} />
            </div>
            <Input
                type="number"
                handleChange={tab === "Stake" ? setStakeFormAmount : setUnstakeFormAmount}
                value={tab === "Stake" ? stakeFormAmount : unstakeFormAmount}
                handleAll={tab === "Stake" ? handleSetAllStake : handleSetAllUnstake}
            />

            <button
                type="button"
                onClick={tab === "Stake" ? handleStake : handleUnstake}
                className={`text-black font-medium w-full mt-2 bg-gray-300 dark:bg-gray-400 p-3 rounded-2xl cursor-pointer disabled:text-gray-300 mt-5`}
            >
                {tab}
            </button>
        </main>
    );
};
export default StakeForm;
