import { useContext } from "react";

import { TransactionContext } from "../context/TransactionContext";
const BalanceWidget = () => {
    const { rvBalance, stBalance, totalBalance } = useContext(TransactionContext);
    return (
        <div className="flex justify-end mt-2 px-3">
            <ul className="bg-[#fff] py-1.5 border-2 border-white rounded-2xl cursor-pointer hover:bg-gray-200 text-black text-xs  shadow-slate-500 shadow-md ml-auto">
                <li>Reflection: {Number(rvBalance).toFixed(2)}</li>
                <li> Staking: {Number(stBalance).toFixed(2)}</li>
                <li> Total: {Number(totalBalance).toFixed(2)}</li>
            </ul>
        </div>
    );
};

export default BalanceWidget;
