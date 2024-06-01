"use client";
import { FadeIn } from "./FadeIn";
import "@/app/_styles/postStyle.css";

export const PostBody: React.FC<{ body: string }> = (props) => {
    return (
        <>
            <FadeIn>
                <div
                    className="mb-10 font-notoSansJP text-primary-text2"
                    dangerouslySetInnerHTML={{
                        __html: props.body,
                    }}
                />
            </FadeIn>
        </>
    );
};

export default PostBody;
