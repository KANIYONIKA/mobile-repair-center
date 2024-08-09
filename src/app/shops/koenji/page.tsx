import MainImage from "../../_components/MainImage";
import ResponsiveSectionContainer from "../../_containers/ResponsiveSectionContainer";
import SpecialOffers from "../../_sections/SpecialOffers";
import {
    SectionTitle_AboutPurchase,
    SectionTitle_AboutRepair,
    SectionTitle_RecentPosts,
    SectionTitle_Contact,
    SectionTitle_FAQ_Purchase,
    SectionTitle_FAQ_Repair,
    SectionTitle_OurShops,
    SectionTitle_RepairPrice_Battery,
    SectionTitle_RepairPrice_Screen,
    SectionTitle_RepairPrice_Substrate,
    SectionTitle_SpecialOffers,
    SectionTitle_ShopInfo,
} from "@/app/_components/SectionTitles";
import { MAX_DISPLAY_POSTS, SHOP_INFORMATION_Koenji } from "@/app/K";
import ShopInformation from "@/app/_sections/ShopInformation";
import Contacts from "@/app/_sections/Contacts";
import { ContactCategory } from "@/app/common/enum";
import AboutPurchase from "@/app/_sections/AboutPurchase";
import AboutRepair from "@/app/_sections/AboutRepair";
import RepairPriceTable_Screen from "@/app/_sections/RepairPriceTable_Screen";
import RepairPriceTable_Battery from "@/app/_sections/RepairPriceTable_Battery";
import FAQ_Purchase from "@/app/_sections/FAQ_Purchase";
import FAQ_Repair from "@/app/_sections/FAQ_Repair";
import OurShops from "@/app/_sections/OurShops";
import RepairPriceTable_Substrate from "@/app/_sections/RepairPriceTable_Substrate";
import RecentPosts from "@/app/_sections/RecentPosts";
import StickyNavbar from "@/app/_components/StickyNavbar";

export default function Koenji() {
    return (
        <>
            <StickyNavbar mobileTitle="高円寺店">
                <MainImage homeTitleDesktopImgSrc={SHOP_INFORMATION_Koenji.homeTitleDesktopImgSrc} homeTitleTabletImgSrc={SHOP_INFORMATION_Koenji.homeTitleTabletImgSrc} />
                <main className="">
                    <ResponsiveSectionContainer>
                        <SectionTitle_RecentPosts english="NEWS" japanese="おしらせ" />
                        <RecentPosts
                            categoryName={SHOP_INFORMATION_Koenji.newsPostCategoryName}
                            first={MAX_DISPLAY_POSTS}
                            baseUri={SHOP_INFORMATION_Koenji.newsPostBaseUri}
                            archivesUri={SHOP_INFORMATION_Koenji.newsPostArchivesUri}
                        />
                    </ResponsiveSectionContainer>

                    {/* <ResponsiveSectionContainer>
                        <SectionTitle_RecentPosts english="BLOGs" japanese="買取 & 修理 ブログ" />
                        <RecentPosts
                            categoryName={SHOP_INFORMATION_Koenji.blogPostCategoryName}
                            first={MAX_DISPLAY_POSTS}
                            baseUri={SHOP_INFORMATION_Koenji.blogPostBaseUri}
                            archivesUri={SHOP_INFORMATION_Koenji.blogPostArchivesUri}
                        />
                    </ResponsiveSectionContainer> */}

                    <section id="ask">
                        <ResponsiveSectionContainer>
                            <SectionTitle_ShopInfo english="INFO - Koenji" japanese="高円寺店" />
                            <Contacts contactCategory={ContactCategory.ToEachShopPage} shopInfo={SHOP_INFORMATION_Koenji} />
                            <hr className="my-4 border-transparent" />
                            <ShopInformation showAbsHpUrl={true} placeImgRight={false} SHOP_INFORMATION={SHOP_INFORMATION_Koenji} />
                        </ResponsiveSectionContainer>
                    </section>

                    <ResponsiveSectionContainer>
                        <SectionTitle_AboutPurchase />
                        <AboutPurchase />
                    </ResponsiveSectionContainer>

                    <ResponsiveSectionContainer>
                        <SectionTitle_AboutRepair />
                        <AboutRepair />
                    </ResponsiveSectionContainer>

                    <ResponsiveSectionContainer>
                        <SectionTitle_RepairPrice_Screen />
                        <RepairPriceTable_Screen />
                    </ResponsiveSectionContainer>

                    <ResponsiveSectionContainer>
                        <SectionTitle_RepairPrice_Battery />
                        <RepairPriceTable_Battery />
                    </ResponsiveSectionContainer>

                    <ResponsiveSectionContainer>
                        <SectionTitle_RepairPrice_Substrate />
                        <RepairPriceTable_Substrate />
                    </ResponsiveSectionContainer>

                    <ResponsiveSectionContainer>
                        <SectionTitle_Contact />
                        <Contacts contactCategory={ContactCategory.ToEachShopPage} shopInfo={SHOP_INFORMATION_Koenji} />
                    </ResponsiveSectionContainer>

                    <ResponsiveSectionContainer>
                        <SectionTitle_FAQ_Purchase />
                        <FAQ_Purchase />
                    </ResponsiveSectionContainer>

                    <ResponsiveSectionContainer>
                        <SectionTitle_FAQ_Repair />
                        <FAQ_Repair />
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
