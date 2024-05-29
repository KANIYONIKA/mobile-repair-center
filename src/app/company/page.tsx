import ResponsiveSectionContainer from "../_containers/ResponsiveSectionContainer";
import PageTitle from "../_components/PageTitle";
import { SectionTitle_Company } from "../_components/SectionTitles";
import { FadeIn } from "../_components/FadeIn";
import { SHOP_INFORMATION_Ikebukuro, SHOP_INFORMATION_Koenji, COMPANY_INFORMATION_LingRise, SHOP_INFORMATION_TakadanobabaMain } from "../K";
import StickyNavbar from "../_components/StickyNavbar";

export default function Company() {
    const TABLE_ROWS = [
        {
            category: "社名",
            value: COMPANY_INFORMATION_LingRise.japaneseName,
        },
        {
            category: "所在地",
            value: COMPANY_INFORMATION_LingRise.postCode + " " + COMPANY_INFORMATION_LingRise.address,
        },
        {
            category: "代表電話",
            value: COMPANY_INFORMATION_LingRise.tel,
        },
        {
            category: "役員",
            value: COMPANY_INFORMATION_LingRise.president,
        },
        {
            category: "資本金",
            value: COMPANY_INFORMATION_LingRise.capital,
        },
        {
            category: "事業目的",
            value: `
                <ul class="list-disc ml-4">
                    <li>輸出入貿易業</li>
                    <li>通信販売・子供服・衣服物品販売業</li>
                    <li>通訳・翻訳業</li>
                    <li>携帯端末修理</li>
                    <li>部品及び関連商品販売、買取</li>
                    <li>古物の売買 東京都公安委員会 第３０４３７１５０８１０４号</li>
                </ul>`,
        },
        {
            category: "店舗",
            value: `
                <ul class="list-decimal ml-4">
                    <li class="mb-2">
                        ${SHOP_INFORMATION_TakadanobabaMain.longName}<br>
                        ${SHOP_INFORMATION_TakadanobabaMain.postCode} ${SHOP_INFORMATION_TakadanobabaMain.address}<br>
                        TEL ${SHOP_INFORMATION_TakadanobabaMain.tel}<br>
                    </li>
                    <li class="mb-2">
                        ${SHOP_INFORMATION_Ikebukuro.longName}<br>
                        ${SHOP_INFORMATION_Ikebukuro.postCode} ${SHOP_INFORMATION_Ikebukuro.address}<br>
                        TEL ${SHOP_INFORMATION_Ikebukuro.tel}<br>
                </li>
                    <li class="mb-2">
                        ${SHOP_INFORMATION_Koenji.longName}<br>
                        ${SHOP_INFORMATION_Koenji.postCode} ${SHOP_INFORMATION_Koenji.address}<br>
                        TEL ${SHOP_INFORMATION_Koenji.tel}<br>
                </li>
                </ul>`,
        },
        {
            category: "取引銀行",
            value: "楽天銀行　第一営業支店 ゆうちょ銀行　０１８支店 三井住友銀行　高円寺支店 東京信用金庫　高円寺支店",
        },
        {
            category: "従業員数",
            value: "正社員14名",
        },
    ];

    return (
        <>
            <StickyNavbar mobileTitle="">
                <main className="">
                    <FadeIn>
                        <ResponsiveSectionContainer>
                            <PageTitle literal="運営会社" />
                        </ResponsiveSectionContainer>

                        <ResponsiveSectionContainer>
                            <SectionTitle_Company />
                            <div className="">
                                <table className="w-full text-left" style={{ tableLayout: "fixed" }}>
                                    <tbody>
                                        {TABLE_ROWS.map(({ category, value }, index) => {
                                            return (
                                                <tr key={category} className="">
                                                    <td className="w-28 break-all pb-2 align-top">
                                                        <p className="font-serif text-primary-text1">{category}</p>
                                                    </td>
                                                    <td className="break-all pb-2 align-top">
                                                        <div
                                                            className="font-notoSansJP text-primary-text2"
                                                            dangerouslySetInnerHTML={{
                                                                __html: value,
                                                            }}
                                                        />
                                                    </td>
                                                </tr>
                                            );
                                        })}
                                    </tbody>
                                </table>
                            </div>
                        </ResponsiveSectionContainer>
                    </FadeIn>
                </main>
            </StickyNavbar>
        </>
    );
}
