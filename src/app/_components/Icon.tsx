"use client";
import React from "react";
import Image from "next/image";

interface IconProps {
    src: string;
    alt: string;
    linkText: string;
    link?: string;
    newTab: boolean;
}

const Icon: React.FC<IconProps> = (iconProps) => {
    return (
        <>
            <img src={iconProps.src} alt={iconProps.alt} className="mx-auto h-8 w-8" />
            <a href={iconProps.link} className="font-s mt-2 block text-xs text-primary-text1 underline" target={iconProps.newTab ? "_blank" : "_self"}>
                {iconProps.linkText}
            </a>
        </>
    );
};

export default Icon;
