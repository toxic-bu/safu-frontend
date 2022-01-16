import React from "react";

const InfoTooltip = ({ active }) => {
    const classProps = active ? "" : "hidden";
    return (
        <div className={`absolute ${classProps} text-xs bg-white p-1 rounded right-0 w-32`}>Wallet Info blah blah</div>
    );
};
export default InfoTooltip;
