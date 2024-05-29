"use client";
import React from "react";
import { SHOP_INFORMATION } from "../K";
import { FadeIn } from "../_components/FadeIn";
import Image from "next/image";

interface ShopInfoProps {
    showAbsHpUrl: boolean;
    placeImgRight: boolean;
    SHOP_INFORMATION: SHOP_INFORMATION;
}

const ShopInformation: React.FC<ShopInfoProps> = (props) => {
    const TABLE_ROWS = [
        {
            category: "店舗名",
            value: props.SHOP_INFORMATION.longName,
        },
        {
            category: "営業時間",
            value: props.SHOP_INFORMATION.hours,
        },
        {
            category: "定休日",
            value: props.SHOP_INFORMATION.holiday,
        },
        {
            category: "事業形体",
            value: props.SHOP_INFORMATION.divisions,
        },
        {
            category: "最寄駅",
            value: props.SHOP_INFORMATION.station,
        },
        {
            category: "住所",
            value: props.SHOP_INFORMATION.address,
        },
        {
            category: "電話",
            value: `<a class="underline" href="tel:${props.SHOP_INFORMATION.tel}"><div class="flex"><img src="/img/icon-reserve.svg" class="w-4 h-auto mr-2">${props.SHOP_INFORMATION.tel}</div></a>`,
        },
        {
            category: "LINE",
            value: `<a class="underline" href="${props.SHOP_INFORMATION.lineURL}" target="_blank"><div class="flex"><img src="/img/icon-line.svg" class="w-4 h-auto mr-2">友だち登録</div></a>`,
        },
        {
            category: "WEB予約",
            value: `<a class="underline" href="${props.SHOP_INFORMATION.reserveURL}" target="_blank"><div class="flex"><img src="/img/icon-reserve.svg" class="w-4 h-auto mr-2">Web予約</div></a>`,
        },
        {
            category: "HP",
            value: `<a class="underline" href="${props.SHOP_INFORMATION.hpURLRel}" target="_blank"><div class="flex"><img src="/img/earth.svg" class="w-3 h-auto mr-2">${props.showAbsHpUrl ? props.SHOP_INFORMATION.hpURLAbs : "店舗ページへ"}</div></a>`,
        },
        {
            category: "e-Mail",
            value: `<div class="flex"><img src="/img/icon-email.svg" class="w-3 h-auto mr-2"><span class="underline">${props.SHOP_INFORMATION.email}</span></div>`,
        },
        {
            category: "MAP",
            value: `
            <details class="text-primary-text2 underline">
                <summary class="">Mapを開く</summary>
                    <iframe
                        src="${props.SHOP_INFORMATION.mapURL}"
                        width="400"
                        height="400"
                        loading="lazy"
                    ></iframe>
            </details>
        `,
        },
    ];

    return (
        <>
            <FadeIn>
                <div className={`flex flex-col items-center border-l border-white md:flex-row md:border-0 ${props.placeImgRight ? "md:flex-row-reverse" : "md:flex-row"} pr4 md:items-start md:pr-0`}>
                    {/* 画像部分 */}
                    <div className={`mb-4 w-full flex-shrink-0 md:aspect-square md:w-1/3 ${props.placeImgRight ? "md:ml-4" : "md:mr-4"}`}>
                        <img src={props.SHOP_INFORMATION.shopImgSrc} alt={props.SHOP_INFORMATION.shopImgAlt} className="h-full w-full object-cover" />
                    </div>

                    {/* テキスト部分 */}
                    <div className="w-full pl-4 md:pl-0">
                        <table className="w-full text-left" style={{ tableLayout: "fixed" }}>
                            <tbody>
                                {TABLE_ROWS.map(({ category, value }, index) => {
                                    return (
                                        <tr key={category} className="">
                                            <td className="w-1/3 break-all pb-2 align-top">
                                                <p className="font-serif text-primary-text1">{category}</p>
                                            </td>
                                            <td className="w-2/3 break-all pb-2 align-top">
                                                <div
                                                    className="font-notoSansJP text-primary-text2"
                                                    dangerouslySetInnerHTML={{
                                                        __html: value,
                                                    }}
                                                />
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </FadeIn>
        </>
    );
};

export default ShopInformation;
