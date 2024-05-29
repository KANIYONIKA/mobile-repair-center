"use client";
import React from "react";

interface ResponsiveXScrollContainerProps {
    widthClass: string;
    nodes: React.ReactNode[];
}

const ResponsiveXScrollContainer: React.FC<ResponsiveXScrollContainerProps> = ({ widthClass, nodes }) => {
    return (
        <>
            {/* PC & Tablet */}
            <div className="hidden justify-between md:flex">
                {nodes.map((node, index) => (
                    <div key={index} className={`flex-1 border-l border-white py-2 text-center ${index === nodes.length - 1 ? "border-r" : ""}`}>
                        {node}
                    </div>
                ))}
            </div>

            {/* スマホ */}
            <div className="overflow-x-auto md:hidden">
                <div className={`flex ${widthClass} justify-between`}>
                    {nodes.map((node, index) => (
                        <div key={index} className={`flex-1 border-l border-white py-2 text-center ${index === nodes.length - 1 ? "border-r" : ""}`}>
                            {node}
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default ResponsiveXScrollContainer;
