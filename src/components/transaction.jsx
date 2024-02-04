"use client";

import { cn } from "@/lib/utils";

export const Transaction = () => {
    return (
        <div
            className={cn(
                "flex items-center justify-center m-4 gap-6 bg-gray-400 rounded-md p-4"
            )}
        >
            <div>
                <p className="text-sm font-medium leading-none">Category</p>
                <p className="text-sm text-gray-700 line-clamp-2 sm:line-clamp-1 space-y-1">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Praesentium, at! Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Magni velit sequi.
                </p>
            </div>
            <div>
                <p>₹2000</p>
            </div>
        </div>
    );
};
