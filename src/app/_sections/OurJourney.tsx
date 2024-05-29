"use client";
import React from "react";
import ResponsiveNoScrollContainer from "../_containers/ResponsiveNoScrollContainer";
import { FadeIn } from "../_components/FadeIn";

const OurJourney: React.FC = (props) => {
    const imageSrc = "";
    const imageAlt = "";
    const title = "2017年に開業いたしました。";
    const description = `
    <p class="mb-3">モバイル 修理センターは、修理業務、買取業務を主な事業としながら、修理代行業務、さらには修理用交換パーツの卸販売も行ってまいりました。 その結果、多くのお客様や会社様にご愛顧いただき、累計修理台数は1万台を突破いたしました。モバイル修理センターはこれら事業で培ったノウハウを活かし、「高品質・低価格・即時対応」を実現しております。 当店なら、他店では修理出来なかった故障でも修理が可能です。公式LINEやお電話にて、無料相談・無料お見積りを受け付けております。ぜひお気軽にご利用ください。</P>
    `;

    return (
        <>
            <FadeIn>
                <ResponsiveNoScrollContainer
                    imageSrc={"/img/bnr-our-journey.webp"}
                    imageAlt={"私たちの歩み"}
                    title={title}
                    description={description}
                />
            </FadeIn>
        </>
    );
};

export default OurJourney;
