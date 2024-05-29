"use client";

import { Typography } from "@material-tailwind/react";
import ResponsiveSectionContainer from "../_containers/ResponsiveSectionContainer";
import Link from "next/link";

const values = [
    {
        title: "Company",
        items: ["運営会社", "プライバシーポリシー", "特定商取引法に基づく表記"],
        addresses: ["/company", "/privacy-policy", "/law"],
    },
    {
        title: "Pages",
        items: ["トップページ", "店舗一覧"],
        addresses: ["/", "/shops"],
    },
    {
        title: "Shops",
        items: ["高田馬場本店", "池袋店", "高円寺店"],
        addresses: ["/shops/takadanobaba-main", "/shops/ikebukuro", "/shops/koenji"],
    },
];

const currentYear = new Date().getFullYear();

export function Footer() {
    return (
        <footer className="relative w-full bg-black py-1">
            <ResponsiveSectionContainer>
                <div className="mx-auto w-full max-w-7xl px-8">
                    <div className="grid grid-cols-1 justify-between gap-4 md:grid-cols-2">
                        <Typography variant="h5" className="mb-6 font-bentham text-primary-text4">
                            <Link href="/">Mobile Repair Center</Link>
                        </Typography>
                        <div className="grid grid-cols-3 justify-between gap-4">
                            {values.map(({ title, items, addresses }) => (
                                <ul key={title}>
                                    <Typography variant="small" color="blue-gray" className="mb-3 font-medium text-primary-text4">
                                        {title}
                                    </Typography>
                                    {items.map((item, index) => (
                                        <li key={item}>
                                            <Link href={addresses[index]}>
                                                <Typography className="py-1.5 font-notoSansJP font-normal text-primary-text3 transition-colors">{item}</Typography>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            ))}
                        </div>
                    </div>
                    <div className="my-8 border-t border-white"></div>
                    <Typography variant="small" className="mb-4 text-center font-normal text-primary-text4 md:mb-0">
                        &copy; {currentYear} <Link href="/">モバイル修理センター</Link>
                    </Typography>
                </div>
            </ResponsiveSectionContainer>
        </footer>
    );
}

export default Footer;
