"use client";
import React from "react";
import { Post } from "../_lib/wordpress";
import Link from "next/link";
import { FadeIn } from "./FadeIn";

interface ArchivesProps {
    posts: Post[];
    baseUri: string; // ex /shops/koneji/news/
}

const Archives: React.FC<ArchivesProps> = (props) => {
    return (
        <>
            <FadeIn>
                {props.posts.length > 0 ? (
                    <div className="text-primary-text1">
                        <ul>
                            {props.posts.map((post) => (
                                <li key={post.databaseId} className="mb-2">
                                    <Link href={props.baseUri + "/" + post.databaseId} className="hover:underline">
                                        <span className="mr-4">{post.date.substring(0, 10)}</span>
                                        <span>{post.title}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                ) : (
                    <p>Can not get posts...</p>
                )}
            </FadeIn>
        </>
    );
};

export default Archives;
