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
import { MAX_DISPLAY_POSTS, SHOP_INFORMATION_TakadanobabaMain } from "@/app/K";
import ShopInformation from "@/app/_sections/ShopInformation";
import Contacts, { ContactCategory } from "@/app/_sections/Contacts";
import AboutPurchase from "@/app/_sections/AboutPurchase";
import FAQ_Purchase from "@/app/_sections/FAQ_Purchase";
import OurShops from "@/app/_sections/OurShops";
import RecentPosts from "@/app/_sections/RecentPosts";
import StickyNavbar from "@/app/_components/StickyNavbar";

export default function TakadanobabaMain() {
    return (
        <>
            <StickyNavbar mobileTitle="高田馬場本店">
                <MainImage homeTitleDesktopImgSrc={SHOP_INFORMATION_TakadanobabaMain.homeTitleDesktopImgSrc} homeTitleTabletImgSrc={SHOP_INFORMATION_TakadanobabaMain.homeTitleTabletImgSrc} />
                <main className="">
                    <ResponsiveSectionContainer>
                        <SectionTitle_RecentPosts english="NEWS" japanese="新着情報" />
                        <RecentPosts
                            categoryName={SHOP_INFORMATION_TakadanobabaMain.newsPostCategoryName}
                            first={MAX_DISPLAY_POSTS}
                            baseUri={SHOP_INFORMATION_TakadanobabaMain.newsPostBaseUri}
                            archivesUri={SHOP_INFORMATION_TakadanobabaMain.newsPostArchivesUri}
                        />
                    </ResponsiveSectionContainer>

                    <ResponsiveSectionContainer>
                        <SectionTitle_RecentPosts english="BLOGs" japanese="買取 ブログ" />
                        <RecentPosts
                            categoryName={SHOP_INFORMATION_TakadanobabaMain.blogPostCategoryName}
                            first={MAX_DISPLAY_POSTS}
                            baseUri={SHOP_INFORMATION_TakadanobabaMain.blogPostBaseUri}
                            archivesUri={SHOP_INFORMATION_TakadanobabaMain.blogPostArchivesUri}
                        />
                    </ResponsiveSectionContainer>
                    <section id="ask">
                        <ResponsiveSectionContainer>
                            <SectionTitle_ShopInfo english="INFO - Takadanobaba" japanese="高田馬場本店" />
                            <Contacts contactCategory={ContactCategory.ToEachShopPage} shopInfo={SHOP_INFORMATION_TakadanobabaMain} />
                            <hr className="my-4 border-transparent" />
                            <ShopInformation showAbsHpUrl={true} placeImgRight={false} SHOP_INFORMATION={SHOP_INFORMATION_TakadanobabaMain} />
                        </ResponsiveSectionContainer>
                    </section>

                    <ResponsiveSectionContainer>
                        <SectionTitle_AboutPurchase />
                        <AboutPurchase />
                    </ResponsiveSectionContainer>

                    <ResponsiveSectionContainer>
                        <SectionTitle_Contact />
                        <Contacts contactCategory={ContactCategory.ToEachShopPage} shopInfo={SHOP_INFORMATION_TakadanobabaMain} />
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
