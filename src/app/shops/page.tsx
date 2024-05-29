import ResponsiveSectionContainer from "../_containers/ResponsiveSectionContainer";
import PageTitle from "../_components/PageTitle";
import Contacts from "@/app/_sections/Contacts";
import { ContactCategory } from "@/app/common/enum";
import { SHOP_INFORMATION_Ikebukuro, SHOP_INFORMATION_Koenji, SHOP_INFORMATION_TakadanobabaMain } from "../K";
import ShopInformation from "../_sections/ShopInformation";
import StickyNavbar from "../_components/StickyNavbar";
import { SectionTitle_ShopInfo } from "../_components/SectionTitles";

export default function Shops() {
    return (
        <>
            <StickyNavbar mobileTitle="">
                <main className="">
                    <ResponsiveSectionContainer>
                        <PageTitle literal="どちらの店舗をご希望ですか？" />
                    </ResponsiveSectionContainer>

                    <ResponsiveSectionContainer>
                        <SectionTitle_ShopInfo english="Takadanobaba Main" japanese="高田馬場本店" />
                        <Contacts contactCategory={ContactCategory.ToEachShopPage} shopInfo={SHOP_INFORMATION_TakadanobabaMain} />
                        <hr className="my-4 border-transparent" />
                        <ShopInformation showAbsHpUrl={false} placeImgRight={false} SHOP_INFORMATION={SHOP_INFORMATION_TakadanobabaMain} />
                    </ResponsiveSectionContainer>

                    <ResponsiveSectionContainer>
                        <SectionTitle_ShopInfo english="Ikebukuro" japanese="池袋店" />
                        <Contacts contactCategory={ContactCategory.ToEachShopPage} shopInfo={SHOP_INFORMATION_Ikebukuro} />
                        <hr className="my-4 border-transparent" />
                        <ShopInformation showAbsHpUrl={false} placeImgRight={false} SHOP_INFORMATION={SHOP_INFORMATION_Ikebukuro} />
                    </ResponsiveSectionContainer>

                    <ResponsiveSectionContainer>
                        <SectionTitle_ShopInfo english="Koenji" japanese="高円寺店" />
                        <Contacts contactCategory={ContactCategory.ToEachShopPage} shopInfo={SHOP_INFORMATION_Koenji} />
                        <hr className="my-4 border-transparent" />
                        <ShopInformation showAbsHpUrl={false} placeImgRight={false} SHOP_INFORMATION={SHOP_INFORMATION_Koenji} />
                    </ResponsiveSectionContainer>
                </main>
            </StickyNavbar>
        </>
    );
}
