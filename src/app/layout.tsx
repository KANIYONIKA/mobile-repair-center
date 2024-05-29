import type { Metadata } from "next";
import { Noto_Sans_JP, Noto_Serif_JP, Bentham } from "next/font/google";
import "./globals.css";
import Footer from "./_sections/Footer";

const notoSansJP = Noto_Sans_JP({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-noto-sans-jp",
});

const notoSerifJP = Noto_Serif_JP({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-noto-serif-jp",
    weight: "200",
});

const bentham = Bentham({
    weight: "400",
    subsets: ["latin"],
    display: "swap",
    variable: "--font-bentham",
});

const baseURL = process.env.BASE_URL || "http://localhost:3000";
export const metadata: Metadata = {
    title: "iPhone修理と買取のモバイル修理センター！",
    description:
        "iPhone修理と買取ならモバイル修理センターにお任せください！iPhone（アイフォン）、iPadなどの修理（基板修理）・不具合や高額買取はモバイル修理センターで即日解決。 安さ･技術･部品品質で地域No.1を目指しています。",
    openGraph: {
        type: "website",
        images: baseURL + "/img/og.png",
        title: "モバイル修理センター",
        description:
            "iPhone修理と買取ならモバイル修理センターにお任せください！iPhone（アイフォン）、iPadなどの修理（基板修理）・不具合や高額買取はモバイル修理センターで即日解決。 安さ･技術･部品品質で地域No.1を目指しています。",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ja" className={`${notoSansJP.variable} ${notoSerifJP.variable} ${bentham.variable}`}>
            <body className="box-sizing font-notoSansJP">
                {children}
                <Footer />
            </body>
        </html>
    );
}
