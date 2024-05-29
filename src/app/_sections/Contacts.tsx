"use client";
import Icon from "../_components/Icon";
import ResponsiveXScrollContainer from "../_containers/ResponsiveXScrollContainer";
import React from "react";
import { SHOP_INFORMATION } from "../K";
import { FadeIn } from "../_components/FadeIn";

export enum ContactCategory {
    ToShopsPage = 0,
    ToEachShopPage = 1,
}

interface ContactsProps {
    contactCategory: ContactCategory;
    shopInfo: SHOP_INFORMATION | null;
}

const Contacts: React.FC<ContactsProps> = (props) => {
    const icons = [
        {
            src: "/img/icon-line.svg",
            alt: "LINE",
            linkText: "LINEする",
            link: props.contactCategory === ContactCategory.ToShopsPage ? "/shops" : props.shopInfo?.lineURL,
            newTab: props.contactCategory === ContactCategory.ToShopsPage ? false : true,
        },
        {
            src: "/img/icon-reserve.svg",
            alt: "予約",
            linkText: "予約する",
            link: props.contactCategory === ContactCategory.ToShopsPage ? "/shops" : props.shopInfo?.reserveURL,
            newTab: props.contactCategory === ContactCategory.ToShopsPage ? false : true,
        },
        {
            src: "/img/icon-tel.svg",
            alt: "電話",
            linkText: "電話する",
            link: props.contactCategory === ContactCategory.ToShopsPage ? "/shops" : "tel:" + props.shopInfo?.tel,
            newTab: props.contactCategory === ContactCategory.ToShopsPage ? false : true,
        },
    ];

    const nodes = icons.map((icon, index) => <Icon key={index} src={icon.src} alt={icon.alt} link={icon.link} linkText={icon.linkText} newTab={icon.newTab} />);

    return (
        <>
            <FadeIn>
                <ResponsiveXScrollContainer widthClass="w-[40em]" nodes={nodes} />
            </FadeIn>
        </>
    );
};

export default Contacts;
