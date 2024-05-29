"use client";
import { FadeIn } from "../_components/FadeIn";
import Icon from "../_components/Icon";
import ResponsiveXScrollContainer from "../_containers/ResponsiveXScrollContainer";

const DevicesForPurchase: React.FC = () => {
    const icons = [
        {
            src: "/img/icon-iphone.svg",
            alt: "iPhone",
            linkText: "iPhone",
            link: "/shops",
            newTab: false,
        },
        {
            src: "/img/icon-ipad.svg",
            alt: "iPad",
            linkText: "iPad",
            link: "/shops",
            newTab: false,
        },
        {
            src: "/img/icon-android.svg",
            alt: "Android",
            linkText: "Android",
            link: "/shops",
            newTab: false,
        },
        {
            src: "/img/icon-tablet.svg",
            alt: "Tablet",
            linkText: "Tablet",
            link: "/shops",
            newTab: false,
        },
        {
            src: "/img/icon-mac.svg",
            alt: "MAC",
            linkText: "MAC",
            link: "/shops",
            newTab: false,
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

export default DevicesForPurchase;
