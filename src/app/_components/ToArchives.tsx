"use client";
import React from "react";
import Link from "next/link";
import { FadeIn } from "./FadeIn";

const ToArchives: React.FC<{ archivesUri: string; literal: string }> = (props) => {
    return (
        <>
            <FadeIn>
                <div className="mt-3">
                    <Link className="text-xs italic text-primary-text2 underline" href={props.archivesUri}>
                        {props.literal}
                    </Link>
                </div>
            </FadeIn>
        </>
    );
};

export default ToArchives;
