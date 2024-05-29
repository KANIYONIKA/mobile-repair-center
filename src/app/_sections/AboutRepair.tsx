"use client";
import React from "react";
import ResponsiveNoScrollContainer from "../_containers/ResponsiveNoScrollContainer";
import { FadeIn } from "../_components/FadeIn";

const AboutRepair: React.FC = () => {
    const imageSrc = "/img/bnr-about-repair.png";
    const imageAlt = "修理について";
    const title = "他店で修理できないと言われてもご相談ください。";
    const description = `
    <p class="mb-3">バッテリー交換や画面修理は、モバイル修理センターであれば最短20分で完了いたします。</p>
    <p class="mb-3">他のお店で修理が難しいとされたデバイスでも、ぜひ当店にご相談ください。国内トップクラスの技術力を持つ専門スタッフが丁寧に対応いたします。</p>
    <p class="mb-3">皆様の大切なスマートフォンを最高の状態でお返しすることをお約束します。修理に関するご質問や、ご相談も随時承っておりますので、どうぞお気軽にお問い合わせください。</p>
    `;

    return (
        <>
            <FadeIn>
                <ResponsiveNoScrollContainer imageSrc={imageSrc} imageAlt={imageAlt} title={title} description={description} />
            </FadeIn>
        </>
    );
};

export default AboutRepair;
