import { Url } from "next/dist/shared/lib/router/router";

// 投稿のカテゴリーの型定義
export interface Category {
    slug: string;
}

// 投稿のアイキャッチ画像の型定義
export interface FeaturedImage {
    altText: string;
    sourceUrl: string;
}

// 投稿の型定義
export interface Post {
    databaseId: string;
    title: string;
    link: string;
    date: string;
    modified: string;
    content: string;
    featuredImage: {
        node: FeaturedImage;
    };
    categories: {
        nodes: Category[];
    };
}

// GraphQLクエリのレスポンス全体の型定義
interface PostsResponse {
    data: {
        posts: {
            nodes: Post[];
        };
    };
    extensions?: {
        debug?: {
            type: string;
            message: string;
        }[];
    };
}

export function filterPostByDatabaseId(posts: Post[], targetDatabaseId: string): Post | undefined {
    const foundPost = posts.find((post) => {
        return post.databaseId.toString() === targetDatabaseId;
    });
    if (!foundPost) {
        console.log(`No post found with databaseId: ${targetDatabaseId}`);
    }
    return foundPost;
}

export function filterPostsByCategorySlug(posts: Post[], targetSlug: string): Post[] {
    return posts.filter((post) => post.categories.nodes.some((category) => category.slug === targetSlug));
}

export function getFirstNPosts(posts: Post[], count: number): Post[] {
    return posts.slice(0, count);
}

export const fetchPostsWithContent = async (byCategoryName: string): Promise<Post[]> => {
    const query = `
        query PostsWithContentByCategoryName {
            posts( where: {orderby: {order: DESC, field: DATE}, categoryName: "${byCategoryName}"}) {
                nodes {
                    databaseId title date modified content
                    featuredImage {
                        node {
                          altText
                          sourceUrl(size: LARGE)
                        }
                    }
                }
            }
            serverTime
        }
    `;
    const debugMsg = "\nfetchPostsWithContent\nbyCategoryName: " + byCategoryName;
    return fetchPosts(query, debugMsg);
};

export const fetchAllPostsWithContent = async (): Promise<Post[]> => {
    const query = `
        query AllPostsWithContent {
            posts(where: {orderby: {order: DESC, field: DATE}}, first: 2000) {
                nodes {
                    databaseId title date modified content
                    featuredImage {
                        node {
                          altText
                          sourceUrl(size: LARGE)
                        }
                    }
                    categories {
                        nodes {
                            name
                            slug
                        }
                    }
                }
            }
            serverTime
        }
    `;
    const debugMsg = "\nfetchAllPostsWithContent\n ";
    return fetchPosts(query, debugMsg);
};

export const fetchPostsOnlyHeader = async (byCategoryName: string, first: number = 2000): Promise<Post[]> => {
    const query = `
        query AllPosts {
            posts( where: {orderby: {order: DESC, field: DATE}, categoryName: "${byCategoryName}"} ${first > 0 ? "first: " + first : ""}) {
                nodes {
                    databaseId title date modified
                }
            }
            serverTime
        }
    `;
    const debugMsg = "\nfetchPostsOnlyHeader\nbyCategoryName: " + byCategoryName + "\nfirst: " + first;
    return fetchPosts(query, debugMsg);
};

export const fetchPosts = async (query: string, debugMsg: string): Promise<Post[]> => {
    try {
        process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
        const api_url = process.env.GRAPHQL_API_URL;

        if (!api_url) {
            throw new Error("GRAPHQL_API_URL is not defined");
        }

        const response = await fetch(api_url, {
            // next: { revalidate: 1 },
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                query: query,
            }),
        });

        const text = await response.text();

        if (!text) {
            throw new Error("Response text is undefined or null");
        }

        const result: PostsResponse = JSON.parse(text);
        if (response.ok) {
            return result.data.posts.nodes.map((post) => post);
        } else {
            console.error("\nError response:", result.extensions?.debug);
            console.log("\nRaw response: ", text); // デバッグ用にレスポンスをログに出力
            return [];
        }
    } catch (error) {
        console.error("\nFetch error:", error);
        if (error instanceof Error) {
            console.error("Error message: ", error.message);
        }
        return [];
    }
};
