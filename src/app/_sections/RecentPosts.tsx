import React from "react";
import Link from "next/link";
import { FadeIn } from "../_components/FadeIn";
import { fetchPostsOnlyHeader } from "../_lib/wordpress";
import ToArchives from "../_components/ToArchives";

interface RecentPostsProps {
    categoryName: string;
    first: number;
    baseUri: string;
    archivesUri: string;
}

const RecentPosts: React.FC<RecentPostsProps> = async (props) => {
    const posts = await fetchPostsOnlyHeader(props.categoryName, props.first);

    return (
        <>
            <FadeIn>
                <div className="border-l border-white pl-4 text-primary-text2">
                    {posts.map((post, index) => (
                        <div className="mt-1 flex" key={post.databaseId}>
                            <p className="mr-7">{post.date.substring(0, 10)}</p>
                            <Link href={props.baseUri + "/" + post.databaseId}>
                                <p className="hover:underline">{post.title}</p>
                            </Link>
                        </div>
                    ))}
                    <ToArchives archivesUri={props.archivesUri} literal="さらに読む" />
                </div>
            </FadeIn>
        </>
    );
};

export default RecentPosts;
