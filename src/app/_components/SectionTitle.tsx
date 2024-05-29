"use client";

import { FadeIn } from "./FadeIn";

interface ArticleHeaderProps {
    english: string;
    japanese: string;
}

const SectionTitle: React.FC<ArticleHeaderProps> = ({ english, japanese }) => {
    return (
        <FadeIn>
            <header className="my-6">
                <h2>
                    <div className="-mb-1.5 font-bentham text-3xl text-primary-text2">{english}</div>

                    <div className="text-1xl font-notoSansJP font-bold text-primary-text1">{japanese}</div>
                </h2>
            </header>
        </FadeIn>
    );
};

export default SectionTitle;
