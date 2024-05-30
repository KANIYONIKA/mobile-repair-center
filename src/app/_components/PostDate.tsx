"use client";
import { FadeIn } from "./FadeIn";

export const PostDate: React.FC<{ date: string; modified: string }> = (props) => {
    return (
        <>
            <FadeIn>
                <div className="my-10">
                    <p className="text-xs text-primary-text2">投稿日: {props.date}</p>
                    <p className="text-xs text-primary-text2">更新日: {props.modified}</p>
                </div>
            </FadeIn>
        </>
    );
};
export default PostDate;
