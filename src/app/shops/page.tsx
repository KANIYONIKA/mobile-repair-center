"use client";
import { useState } from "react";
import ResponsiveSectionContainer from "../_containers/ResponsiveSectionContainer";
import PageTitle from "../_components/PageTitle";
import Contacts from "@/app/_sections/Contacts";
import { ContactCategory } from "@/app/common/enum";
import { SHOP_INFORMATION_Ikebukuro, SHOP_INFORMATION_Koenji, SHOP_INFORMATION_TakadanobabaMain } from "../K";
import ShopInformation from "../_sections/ShopInformation";
import StickyNavbar from "../_components/StickyNavbar";
import { SectionTitle_ShopInfo } from "../_components/SectionTitles";
import OpenShopPage from "../_components/OpenShopPage";
import { FadeIn } from "../_components/FadeIn";

export default function Shops() {
    // 各店舗の詳細表示状態を管理
    const [showTakadanobaba, setShowTakadanobaba] = useState(false);
    const [showIkebukuro, setShowIkebukuro] = useState(false);
    const [showKoenji, setShowKoenji] = useState(false);

    return (
        <>
            <StickyNavbar mobileTitle="">
                <main className="">
                    <ResponsiveSectionContainer>
                        <PageTitle literal="どちらの店舗をご希望ですか？" />
                    </ResponsiveSectionContainer>

                    {/* 高田馬場本店 */}
                    <ResponsiveSectionContainer>
                        <OpenShopPage shopInformation={SHOP_INFORMATION_TakadanobabaMain} />
                        <FadeIn>
                            <a className="mt-2 inline-flex cursor-pointer items-center text-primary-text2" onClick={() => setShowTakadanobaba(!showTakadanobaba)}>
                                <span className={`mr-1 transition-transform ${showTakadanobaba ? "rotate-90" : "rotate-0"}`}>▶</span>
                                {showTakadanobaba ? "店舗詳細を閉じる " : "店舗情報を表示する "}
                            </a>
                        </FadeIn>
                        {showTakadanobaba && (
                            <>
                                <SectionTitle_ShopInfo english="Takadanobaba Main" japanese="高田馬場本店" />
                                <Contacts contactCategory={ContactCategory.ToEachShopPage} shopInfo={SHOP_INFORMATION_TakadanobabaMain} />
                                <hr className="my-4 border-transparent" />
                                <ShopInformation showAbsHpUrl={false} placeImgRight={false} SHOP_INFORMATION={SHOP_INFORMATION_TakadanobabaMain} />
                            </>
                        )}
                    </ResponsiveSectionContainer>

                    {/* 池袋店 */}
                    <ResponsiveSectionContainer>
                        <OpenShopPage shopInformation={SHOP_INFORMATION_Ikebukuro} />
                        <FadeIn>
                            <a className="mt-2 inline-flex cursor-pointer items-center text-primary-text2" onClick={() => setShowIkebukuro(!showIkebukuro)}>
                                <span className={`mr-1 transition-transform ${showIkebukuro ? "rotate-90" : "rotate-0"}`}>▶</span>
                                {showIkebukuro ? "店舗詳細を閉じる " : "店舗情報を表示する "}
                            </a>
                        </FadeIn>
                        {showIkebukuro && (
                            <>
                                <SectionTitle_ShopInfo english="Ikebukuro" japanese="池袋店" />
                                <Contacts contactCategory={ContactCategory.ToEachShopPage} shopInfo={SHOP_INFORMATION_Ikebukuro} />
                                <hr className="my-4 border-transparent" />
                                <ShopInformation showAbsHpUrl={false} placeImgRight={false} SHOP_INFORMATION={SHOP_INFORMATION_Ikebukuro} />
                            </>
                        )}
                    </ResponsiveSectionContainer>

                    {/* 高円寺店 */}
                    <ResponsiveSectionContainer>
                        <OpenShopPage shopInformation={SHOP_INFORMATION_Koenji} />
                        <FadeIn>
                            <a className="mt-2 inline-flex cursor-pointer items-center text-primary-text2" onClick={() => setShowKoenji(!showKoenji)}>
                                <span className={`mr-1 transition-transform ${showKoenji ? "rotate-90" : "rotate-0"}`}>▶</span>
                                {showKoenji ? "店舗詳細を閉じる " : "店舗情報を表示する "}
                            </a>
                        </FadeIn>
                        {showKoenji && (
                            <>
                                <SectionTitle_ShopInfo english="Koenji" japanese="高円寺店" />
                                <Contacts contactCategory={ContactCategory.ToEachShopPage} shopInfo={SHOP_INFORMATION_Koenji} />
                                <hr className="my-4 border-transparent" />
                                <ShopInformation showAbsHpUrl={false} placeImgRight={false} SHOP_INFORMATION={SHOP_INFORMATION_Koenji} />
                            </>
                        )}
                    </ResponsiveSectionContainer>
                </main>
            </StickyNavbar>
        </>
    );
}
