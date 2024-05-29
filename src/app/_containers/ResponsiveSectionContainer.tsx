"use client";
import React from "react";

interface ResponsiveContainerProps {
    children: React.ReactNode;
}

const ResponsiveSectionContainer: React.FC<ResponsiveContainerProps> = ({ children }) => {
    return <div className="mx-auto my-[5em] px-8 md:w-4/5 xl:max-w-4xl">{children}</div>;
};

export default ResponsiveSectionContainer;
