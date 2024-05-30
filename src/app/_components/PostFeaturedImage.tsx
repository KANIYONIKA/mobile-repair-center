"use client";
import { FadeIn } from "./FadeIn";

export const PostFeaturedImage: React.FC<{ altText: string; sourceUrl: string }> = (props) => {
    return (
        <>
            <FadeIn>
                <div className="mb-10 h-auto w-full" />
                <img src={props.sourceUrl} alt={props.altText} />
            </FadeIn>
        </>
    );
};

export default PostFeaturedImage;
