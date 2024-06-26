import { SHOP_INFORMATION_Ikebukuro, SHOP_INFORMATION_Koenji, SHOP_INFORMATION_TakadanobabaMain } from "@/app/K";
import Archives from "@/app/_components/Archives";
import PageTitle from "@/app/_components/PageTitle";
import PostBody from "@/app/_components/PostBody";
import PostDate from "@/app/_components/PostDate";
import PostFeaturedImage from "@/app/_components/PostFeaturedImage";
import { SectionTitle_NEWS } from "@/app/_components/SectionTitles";
import StickyNavbar from "@/app/_components/StickyNavbar";
import ToArchives from "@/app/_components/ToArchives";
import ResponsiveSectionContainer from "@/app/_containers/ResponsiveSectionContainer";
import { Post, fetchPostsOnlyHeader, fetchPostsWithContent, filterPostByDatabaseId } from "@/app/_lib/wordpress";

enum SlugForShopName {
    takadanobabaMain = "takadanobaba-main",
    ikebukuro = "ikebukuro",
    koenji = "koenji",
}

enum SlugForPostType {
    news = "news",
    blog = "blog",
}

type StaticParam = {
    shopname: SlugForShopName;
    posttype: SlugForPostType;
    slug: string;
};

export async function generateStaticParams(): Promise<StaticParam[]> {
    const staticParams: StaticParam[] = [];

    const postHeaders_TakNews: Post[] = await fetchPostsOnlyHeader(SHOP_INFORMATION_TakadanobabaMain.newsPostCategoryName);
    const postHeaders_TakBlog: Post[] = await fetchPostsOnlyHeader(SHOP_INFORMATION_TakadanobabaMain.blogPostCategoryName);
    const postHeaders_IkeNews: Post[] = await fetchPostsOnlyHeader(SHOP_INFORMATION_Ikebukuro.newsPostCategoryName);
    const postHeaders_IkeBlog: Post[] = await fetchPostsOnlyHeader(SHOP_INFORMATION_Ikebukuro.blogPostCategoryName);
    const postHeaders_KoeNews: Post[] = await fetchPostsOnlyHeader(SHOP_INFORMATION_Koenji.newsPostCategoryName);
    const postHeaders_KoeBlog: Post[] = await fetchPostsOnlyHeader(SHOP_INFORMATION_Koenji.blogPostCategoryName);

    function pushToStaticParams(posts: Post[], slugForShopName: SlugForShopName, slugForPostType: SlugForPostType) {
        posts.forEach((post) => {
            console.log("------pushToStaticParams----");
            console.log(post);
            staticParams.push({ shopname: slugForShopName, posttype: slugForPostType, slug: post.databaseId.toString() });
        });
    }

    // This is for PostDetails
    pushToStaticParams(postHeaders_TakNews, SlugForShopName.takadanobabaMain, SlugForPostType.news);
    pushToStaticParams(postHeaders_TakBlog, SlugForShopName.takadanobabaMain, SlugForPostType.blog);
    pushToStaticParams(postHeaders_IkeNews, SlugForShopName.ikebukuro, SlugForPostType.news);
    pushToStaticParams(postHeaders_IkeBlog, SlugForShopName.ikebukuro, SlugForPostType.blog);
    pushToStaticParams(postHeaders_KoeNews, SlugForShopName.koenji, SlugForPostType.news);
    pushToStaticParams(postHeaders_KoeBlog, SlugForShopName.koenji, SlugForPostType.blog);

    // This is for Archives
    staticParams.push({ shopname: SlugForShopName.takadanobabaMain, posttype: SlugForPostType.news, slug: "archives" });
    staticParams.push({ shopname: SlugForShopName.takadanobabaMain, posttype: SlugForPostType.blog, slug: "archives" });
    staticParams.push({ shopname: SlugForShopName.ikebukuro, posttype: SlugForPostType.news, slug: "archives" });
    staticParams.push({ shopname: SlugForShopName.ikebukuro, posttype: SlugForPostType.blog, slug: "archives" });
    staticParams.push({ shopname: SlugForShopName.koenji, posttype: SlugForPostType.news, slug: "archives" });
    staticParams.push({ shopname: SlugForShopName.koenji, posttype: SlugForPostType.blog, slug: "archives" });

    console.log("-------------------------------------------");
    console.log("[slug]/page.tsx", staticParams);
    return staticParams;
}

export default async function PostDetails({ params }: { params: { shopname: string; posttype: string; slug: string } }) {
    let sectionTitleEn = "";
    let sectionTitleJp = "";
    let eachPostBaseUri = "";
    let filteredPosts: Post[] = [];
    let archivesUri = "";

    // Common
    if (params.posttype == SlugForPostType.news) {
        if (params.shopname === SlugForShopName.takadanobabaMain) {
            sectionTitleEn = "Takadanobaba - NEWS";
            sectionTitleJp = "高田馬場本店 - NEWS";
            eachPostBaseUri = SHOP_INFORMATION_TakadanobabaMain.newsPostBaseUri;
            filteredPosts = await fetchPostsWithContent(SHOP_INFORMATION_TakadanobabaMain.newsPostCategoryName);
            archivesUri = SHOP_INFORMATION_TakadanobabaMain.newsPostArchivesUri;
        }
        if (params.shopname === SlugForShopName.ikebukuro) {
            sectionTitleEn = "Ikebukuro - NEWS";
            sectionTitleJp = "池袋店 - NEWS";
            eachPostBaseUri = SHOP_INFORMATION_Ikebukuro.newsPostBaseUri;
            filteredPosts = await fetchPostsWithContent(SHOP_INFORMATION_Ikebukuro.newsPostCategoryName);
            archivesUri = SHOP_INFORMATION_Ikebukuro.newsPostArchivesUri;
        }
        if (params.shopname === SlugForShopName.koenji) {
            sectionTitleEn = "Koenji - NEWS";
            sectionTitleJp = "高円寺店 - NEWS";
            eachPostBaseUri = SHOP_INFORMATION_Koenji.newsPostBaseUri;
            filteredPosts = await fetchPostsWithContent(SHOP_INFORMATION_Koenji.newsPostCategoryName);
            archivesUri = SHOP_INFORMATION_Koenji.newsPostArchivesUri;
        }
    }
    if (params.posttype == SlugForPostType.blog) {
        if (params.shopname === SlugForShopName.takadanobabaMain) {
            sectionTitleEn = "Takadanobaba - Blog";
            sectionTitleJp = "高田馬場本店 - 買取ブログ";
            eachPostBaseUri = SHOP_INFORMATION_TakadanobabaMain.blogPostBaseUri;
            filteredPosts = await fetchPostsWithContent(SHOP_INFORMATION_TakadanobabaMain.blogPostCategoryName);
            archivesUri = SHOP_INFORMATION_TakadanobabaMain.blogPostArchivesUri;
        }
        if (params.shopname === SlugForShopName.ikebukuro) {
            sectionTitleEn = "Ikebukuro - Blog";
            sectionTitleJp = "池袋店 - 買取ブログ";
            eachPostBaseUri = SHOP_INFORMATION_Ikebukuro.blogPostBaseUri;
            filteredPosts = await fetchPostsWithContent(SHOP_INFORMATION_Ikebukuro.blogPostCategoryName);
            archivesUri = SHOP_INFORMATION_Ikebukuro.blogPostArchivesUri;
        }
        if (params.shopname === SlugForShopName.koenji) {
            sectionTitleEn = "Koenji - Blog";
            sectionTitleJp = "高円寺店 - 買取 & 修理 ブログ";
            eachPostBaseUri = SHOP_INFORMATION_Koenji.blogPostBaseUri;
            filteredPosts = await fetchPostsWithContent(SHOP_INFORMATION_Koenji.blogPostCategoryName);
            archivesUri = SHOP_INFORMATION_Koenji.blogPostArchivesUri;
        }
    }

    // This is for Archives (news & blogs)
    if (params.slug === "archives") {
        return (
            <>
                <StickyNavbar mobileTitle="">
                    <ResponsiveSectionContainer>
                        <SectionTitle_NEWS english={sectionTitleEn} japanese={sectionTitleJp} />
                        <Archives posts={filteredPosts} baseUri={eachPostBaseUri} />
                    </ResponsiveSectionContainer>
                </StickyNavbar>
            </>
        );
    }

    if (params.slug !== "archives") {
        const post = filterPostByDatabaseId(filteredPosts, params.slug);

        if (post) {
            return (
                <StickyNavbar mobileTitle="">
                    <ResponsiveSectionContainer>
                        <SectionTitle_NEWS english={sectionTitleEn} japanese={sectionTitleJp} />
                        <PostDate date={post.date.substring(0, 10)} modified={post.modified.substring(0, 10)} />
                        {post.featuredImage ? <PostFeaturedImage sourceUrl={post.featuredImage.node.sourceUrl} altText={post.featuredImage.node.altText} /> : null}
                        <PageTitle literal={post.title} />
                        <div className="border-l border-white py-2 pl-4">
                            <PostBody body={post.content} />
                        </div>
                        <ToArchives archivesUri={archivesUri} literal="他の記事を読む" />
                    </ResponsiveSectionContainer>
                </StickyNavbar>
            );
        } else {
            <StickyNavbar mobileTitle="">
                <ResponsiveSectionContainer>
                    <div>no post...</div>
                    <ToArchives archivesUri={archivesUri} literal="他の記事を読む" />
                </ResponsiveSectionContainer>
            </StickyNavbar>;
        }
    }
}
