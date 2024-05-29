import MainImage from "../../_components/MainImage";
import ResponsiveSectionContainer from "../../_containers/ResponsiveSectionContainer";
import SpecialOffers from "../../_sections/SpecialOffers";
import {
    SectionTitle_AboutPurchase,
    SectionTitle_RecentPosts,
    SectionTitle_Contact,
    SectionTitle_FAQ_Purchase,
    SectionTitle_OurShops,
    SectionTitle_SpecialOffers,
    SectionTitle_ShopInfo,
} from "@/app/_components/SectionTitles";
import { MAX_DISPLAY_POSTS, SHOP_INFORMATION_Ikebukuro } from "@/app/K";
import ShopInformation from "@/app/_sections/ShopInformation";
import Contacts, { ContactCategory } from "@/app/_sections/Contacts";
import AboutPurchase from "@/app/_sections/AboutPurchase";
import FAQ_Purchase from "@/app/_sections/FAQ_Purchase";
import OurShops from "@/app/_sections/OurShops";
import RecentPosts from "@/app/_sections/RecentPosts";
import StickyNavbar from "@/app/_components/StickyNavbar";

export default function Ikebukuro() {
    return (
        <>
            <StickyNavbar mobileTitle="池袋店">
                <MainImage homeTitleDesktopImgSrc={SHOP_INFORMATION_Ikebukuro.homeTitleDesktopImgSrc} homeTitleTabletImgSrc={SHOP_INFORMATION_Ikebukuro.homeTitleTabletImgSrc} />
                <main className="">
                    <ResponsiveSectionContainer>
                        <SectionTitle_RecentPosts english="NEWS" japanese="新着情報" />
                        <RecentPosts
                            categoryName={SHOP_INFORMATION_Ikebukuro.newsPostCategoryName}
                            first={MAX_DISPLAY_POSTS}
                            baseUri={SHOP_INFORMATION_Ikebukuro.newsPostBaseUri}
                            archivesUri={SHOP_INFORMATION_Ikebukuro.newsPostArchivesUri}
                        />
                    </ResponsiveSectionContainer>

                    <ResponsiveSectionContainer>
                        <SectionTitle_RecentPosts english="BLOGs" japanese="買取 ブログ" />
                        <RecentPosts
                            categoryName={SHOP_INFORMATION_Ikebukuro.blogPostCategoryName}
                            first={MAX_DISPLAY_POSTS}
                            baseUri={SHOP_INFORMATION_Ikebukuro.blogPostBaseUri}
                            archivesUri={SHOP_INFORMATION_Ikebukuro.blogPostArchivesUri}
                        />
                    </ResponsiveSectionContainer>

                    <section id="ask">
                        <ResponsiveSectionContainer>
                            <SectionTitle_ShopInfo english="INFO - Ikebukuro" japanese="池袋店" />
                            <Contacts contactCategory={ContactCategory.ToEachShopPage} shopInfo={SHOP_INFORMATION_Ikebukuro} />
                            <hr className="my-4 border-transparent" />
                            <ShopInformation showAbsHpUrl={true} placeImgRight={false} SHOP_INFORMATION={SHOP_INFORMATION_Ikebukuro} />
                        </ResponsiveSectionContainer>
                    </section>

                    <ResponsiveSectionContainer>
                        <SectionTitle_AboutPurchase />
                        <AboutPurchase />
                    </ResponsiveSectionContainer>

                    <ResponsiveSectionContainer>
                        <SectionTitle_Contact />
                        <Contacts contactCategory={ContactCategory.ToEachShopPage} shopInfo={SHOP_INFORMATION_Ikebukuro} />
                    </ResponsiveSectionContainer>

                    <ResponsiveSectionContainer>
                        <SectionTitle_FAQ_Purchase />
                        <FAQ_Purchase />
                    </ResponsiveSectionContainer>

                    <section id="shops">
                        <ResponsiveSectionContainer>
                            <SectionTitle_OurShops />
                            <OurShops />
                        </ResponsiveSectionContainer>
                    </section>

                    <ResponsiveSectionContainer>
                        <SectionTitle_SpecialOffers />
                        <SpecialOffers />
                    </ResponsiveSectionContainer>
                </main>
            </StickyNavbar>
        </>
    );
}
