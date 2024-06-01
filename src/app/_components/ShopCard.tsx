"use client";

import { Card, CardFooter, Tooltip } from "@material-tailwind/react";
import React from "react";
import { SHOP_INFORMATION } from "../K";
import Icon from "./Icon";
import Link from "next/link";

const ShopCard: React.FC<SHOP_INFORMATION> = (props) => {
    return (
        <>
            <div>
                <Link href={props.hpURLRel}>
                    <p className="mb-1 text-lg font-bold text-primary-text1">{props.shortName}</p>
                </Link>
                <p className="text-md mb-3 text-primary-text2">{props.divisions}</p>
                <p className="text-md mb-1 text-primary-text2">
                    {props.route}
                    <br />
                    {props.station}
                </p>
                <CardFooter className="flex justify-center gap-7 pt-2">
                    <div>
                        <Icon src="/img/icon-home.svg" alt={props.shortName} linkText={"店舗ページへ"} link={props.hpURLRel} newTab={false} />
                    </div>
                </CardFooter>
                <Icon src="/img/icon-marker.svg" alt={"mapを開く"} linkText={""} link={""} newTab={false} />
                <details className="text-primary-text1 underline">
                    <summary className="text-sm">Mapを開く</summary>
                    <iframe src={props.mapURL} width="400" height="400" loading="lazy"></iframe>
                </details>
            </div>
        </>
    );
};

export default ShopCard;
