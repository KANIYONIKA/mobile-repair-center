"use client";
import React from "react";
import { Accordion, AccordionHeader, AccordionBody } from "@material-tailwind/react";

interface QAContentProps {
    num: number;
    q: string;
    a: string;
}

const QAContent: React.FC<QAContentProps> = (props) => {
    const [open, setOpen] = React.useState(1);

    const handleOpen = (value: React.SetStateAction<number>) => setOpen(open === value ? 0 : value);

    return (
        <div className="flex flex-col border-l border-white  pb-5 last:pb-0 md:flex-row md:items-start">
            <details>
                <summary className="pl-4 font-notoSansJP text-sm font-bold text-primary-text1">
                    <span className="underline">
                        Q{props.num} - {props.q}
                    </span>
                </summary>
                <p className="py-2 pl-4 text-sm text-primary-text2">{props.a}</p>
            </details>
        </div>
    );
};

export default QAContent;
