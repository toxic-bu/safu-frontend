import React from "react";
import { AiOutlineInfoCircle } from "react-icons/ai";

const Alert = ({ message, options }) => {
    return (
        <div
            className="bg-white border-t-4 border-teal-500 rounded-b px-3 py-1 shadow-md pointer-events-auto mt-1"
            role="alert"
        >
            <div className="flex items-center text-xs">
                <div className="pr-2">
                    <AiOutlineInfoCircle fontSize={24} />
                </div>
                <div>
                    <p className="font-semibold">{message}</p>
                    <p>
                        {options.content}
                        <a href={options.href} target="_blank" rel="noopener noreferrer" className="underline">
                            {options.link}
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Alert;
