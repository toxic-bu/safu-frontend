import React from "react";
import { AiOutlineInfoCircle } from "react-icons/ai";

const Alert = ({ message, options }) => {
    return (
        <div class="bg-white border-t-4 border-teal-500 rounded-b px-3 py-1 shadow-md pointer-events-auto" role="alert">
            <div class="flex items-center">
                <div class="pr-2">
                    <AiOutlineInfoCircle fontSize={24} />
                </div>
                <div>
                    <p class="font-semibold">{message}</p>
                    <p class="text-sm">
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
