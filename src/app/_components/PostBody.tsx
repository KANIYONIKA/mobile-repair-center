"use client";
import { FadeIn } from "./FadeIn";

export const PostBody: React.FC<{ body: string; date: string; modified: string }> = (props) => {
    return (
        <>
            <FadeIn>
                <div className="my-10">
                    <p className="text-xs text-primary-text2">投稿日: {props.date}</p>
                    <p className="text-xs text-primary-text2">更新日: {props.modified}</p>
                </div>
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
