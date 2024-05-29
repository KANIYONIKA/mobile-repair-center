"use client";
import React from "react";
import ResponsiveNoScrollContainer from "../_containers/ResponsiveNoScrollContainer";
import { FadeIn } from "../_components/FadeIn";

const AboutPurchase: React.FC = () => {
    const imageSrc = "/img/bnr-about-purchase.png";
    const imageAlt = "買取について";
    const title = "スマホ買取キャンペーン実施中！";
    const description = `
    <p class="mb-3">画面が割れてしまったスマートフォンや起動しないスマホでも、当店では買取可能でございます。</p>
    <p class="mb-3">最新の機種から古い機種までどんなスマホも即現金化が可能です。</p>
    <p class="mb-3">データ削除につきましては、専門のプロがサポートさせていただきますので安心してお任せください。</p>
    <p class="mb-3">当店はお客様のスマートフォンを可能な限り高額で買取することをお約束いたします。</p>
    <p class="mb-3"><strong>買取に関する詳細やその他のご質問は、店舗までお問い合わせください。</strong></p>
    `;

    return (
        <>
            <FadeIn>
                <ResponsiveNoScrollContainer imageSrc={imageSrc} imageAlt={imageAlt} title={title} description={description} />
            </FadeIn>
        </>
    );
};

export default AboutPurchase;
