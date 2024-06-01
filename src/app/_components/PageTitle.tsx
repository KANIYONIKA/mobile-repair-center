"use client";

import { FadeIn } from "./FadeIn";

interface ArticleHeaderProps {
    literal: string;
}

const PageTitle: React.FC<ArticleHeaderProps> = ({ literal }) => {
    return (
        <>
            <FadeIn>
                <header className="my-6">
                    <h2>
                        <div className="-mb-1.5 font-notoSerifJP text-3xl text-primary-text1">{literal}</div>
                    </h2>
                </header>
            </FadeIn>
        </>
    );
};

export default PageTitle;
