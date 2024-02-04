import React from "react";
import { DollarSign } from "lucide-react";

export const Card = ({ category, children, amount, className = "" }) => {
    return (
        <div
            className={`rounded-md p-6 border border-black flex flex-col shadow-lg ${className}`}
        >
            <div className="flex justify-between mb-2">
                <h3 className="text-sm font-medium tracking-tighter">
                    {category}
                </h3>
                {/* <DollarSign className="w-4 h-4" /> */}
                {children}
            </div>
            <div className="text-2xl font-bold">{`₹${Number(
                amount
            ).toLocaleString("en-IN", {
                style: "decimal",
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
            })}`}</div>
        </div>
    );
};
