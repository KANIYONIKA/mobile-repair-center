"use client";
import { FadeIn } from "../_components/FadeIn";
import Icon from "../_components/Icon";
import ResponsiveXScrollContainer from "../_containers/ResponsiveXScrollContainer";

const FromMalfunctions: React.FC = (props) => {
    const icons = [
        {
            src: "/img/icon-battery.svg",
            alt: "電池の持ちが悪い",
            linkText: "電池の持ちが悪い",
            link: "/shops",
            newTab: false,
        },
        {
            src: "/img/icon-screen.svg",
            alt: "画面が割れた",
            linkText: "画面が割れた",
            link: "/shops",
            newTab: false,
        },
        {
            src: "/img/icon-start.svg",
            alt: "起動しない",
            linkText: "起動しない",
            link: "/shops",
            newTab: false,
        },
        {
            src: "/img/icon-others.svg",
            alt: "その他",
            linkText: "その他",
            link: "/shops",
            newTab: false,
        },
        {
            src: "/img/icon-ask.svg",
            alt: "プロに聞きたい",
            linkText: "プロに聞きたい",
            link: "/shops",
            newTab: false,
        },
    ];

    const nodes = icons.map((icon, index) => (
        <Icon
            key={index}
            src={icon.src}
            alt={icon.alt}
            link={icon.link}
            linkText={icon.linkText}
            newTab={icon.newTab}
        />
    ));

    return (
        <>
            <FadeIn>
                <ResponsiveXScrollContainer
                    widthClass="w-[40em]"
                    nodes={nodes}
                />
            </FadeIn>
        </>
    );
};

export default FromMalfunctions;
