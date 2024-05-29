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
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1153.4158263011!2d139.64894199271242!3d35.706099808065396!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6018f398522e6757%3A0xcd9813e6826d326d!2zaVBob25l5L-u55CGIOODouODkOOCpOODq-S_rueQhuOCu-ODs-OCv-ODvOmrmOWGhuWvuuW6lw!5e0!3m2!1sja!2sjp!4v1709235495977!5m2!1sja!2sjp"
                        width="400"
                        height="400"
                        loading="lazy"
                    ></iframe>
                </details>
            </div>
        </>
    );
};

export default ShopCard;
