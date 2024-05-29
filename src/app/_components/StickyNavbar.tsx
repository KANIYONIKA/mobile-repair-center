"use client";
import React, { ReactNode, useState, useEffect } from "react";
import { Navbar, Collapse, IconButton } from "@material-tailwind/react";
import Link from "next/link";

interface StickyNavbarProps {
    children: ReactNode;
    mobileTitle: string;
}

export const StickyNavbar: React.FC<StickyNavbarProps> = ({ children, mobileTitle: burgerTitle }) => {
    const [openNav, setOpenNav] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 960) {
                setOpenNav(false);
            }
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const handleLinkClick = () => {
        setOpenNav(false);
    };

    const navList = (
        <div className="mb-4 mt-2 flex flex-col items-end gap-2 text-primary-text2 xl:mb-0 xl:mt-0 xl:flex-row xl:items-center xl:gap-6">
            <p className="p-1">
                <Link href="/" className="flex" onClick={handleLinkClick}>
                    ホーム
                </Link>
            </p>
            <p className="p-1 ">
                <Link href="/shops" className="flex" onClick={handleLinkClick}>
                    店舗一覧
                </Link>
            </p>
            <p className="p-1 font-normal">
                <Link href="/shops/takadanobaba-main" className="flex" onClick={handleLinkClick}>
                    高田馬場本店
                </Link>
            </p>
            <p className="p-1 font-normal">
                <Link href="/shops/ikebukuro" className="flex" onClick={handleLinkClick}>
                    池袋店
                </Link>
            </p>
            <p className="p-1 font-normal">
                <Link href="/shops/koenji" className="flex" onClick={handleLinkClick}>
                    高円寺店
                </Link>
            </p>
            <p className="p-1 font-normal">
                <Link href="/company" className="flex" onClick={handleLinkClick}>
                    運営会社
                </Link>
            </p>
        </div>
    );

    return (
        <div className="">
            <Navbar className="sticky top-0 z-10 h-max max-w-full rounded-none border-0 bg-primary-400 px-4 py-2 xl:px-8 xl:py-4" shadow={false}>
                <div className="py-1.2 flex items-center justify-between text-primary-text2">
                    <p className="">
                        <Link href={"/"}>
                            <img src="/img/logo.png" className="h-auto w-10" alt="Logo" />
                        </Link>
                    </p>

                    {/* set Title for only mobile. data is from context. */}
                    {/* <p className="md:hidden">{useBurgerMenuTitleValue()}</p> */}
                    <p className="md:hidden">{burgerTitle}</p>
                    <div className="flex items-center gap-4">
                        <div className="mr-4 hidden xl:block">{navList}</div>
                        <IconButton
                            variant="text"
                            className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent xl:hidden"
                            ripple={false}
                            onClick={() => setOpenNav(!openNav)}
                        >
                            {openNav ? (
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" className="h-6 w-6" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            )}
                        </IconButton>
                    </div>
                </div>
                <Collapse open={openNav}>{navList}</Collapse>
            </Navbar>
            {children}
        </div>
    );
};

export default StickyNavbar;
