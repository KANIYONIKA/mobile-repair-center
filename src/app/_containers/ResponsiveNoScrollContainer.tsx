"use client";
import React from "react";
import Image from "next/image";

interface ResponsiveNoScrollContainerProps {
    imageSrc: string;
    imageAlt: string;
    title: string;
    description: string;
}

const ResponsiveNoScrollContainer: React.FC<ResponsiveNoScrollContainerProps> = (props) => {
    return (
        <>
            <div className="flex flex-col items-center border-l border-white  md:flex-row md:items-start">
                {/* 画像部分 */}
                {props.imageSrc && (
                    <div className="mb-4 w-full flex-shrink-0 md:mb-0 md:mr-4 md:w-1/3 ">
                        <img src={props.imageSrc} alt={props.imageAlt} className="h-full w-full object-cover" />
                    </div>
                )}

                {/* テキスト部分 */}
                <div className={`flex-grow pl-4 ${props.imageSrc ? "md:pl-0" : "md:pl-4"}`}>
                    <h2 className="mb-2 text-xl font-bold text-primary-text1">{props.title}</h2>
                    <div className="text-primary-text2" dangerouslySetInnerHTML={{ __html: props.description }} />
                </div>
            </div>
        </>
    );
};

export default ResponsiveNoScrollContainer;
