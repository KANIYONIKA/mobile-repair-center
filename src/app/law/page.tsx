import ResponsiveSectionContainer from "../_containers/ResponsiveSectionContainer";
import PageTitle from "../_components/PageTitle";
import { SectionTitle_Company } from "../_components/SectionTitles";
import { FadeIn } from "../_components/FadeIn";
import { COMPANY_INFORMATION_LingRise } from "../K";
import StickyNavbar from "../_components/StickyNavbar";

export default function Law() {
    const TABLE_ROWS = [
        {
            category: "サービス名",
            value: "モバイル修理センター",
        },
        {
            category: "事業者名",
            value: COMPANY_INFORMATION_LingRise.japaneseName,
        },
        {
            category: "代表代表取締役",
            value: COMPANY_INFORMATION_LingRise.president,
        },
        {
            category: "URL",
            value: COMPANY_INFORMATION_LingRise.webUrl,
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
            category: "営業時間",
            value: "11時〜20時（年末年始を除く）",
        },
        {
            category: "サービス内容",
            value: "iPhone修理、買い取り、その他グッズ販売",
        },
        {
            category: "返品・交換・キャンセル等",
            value: "サービスの性質上、返品・返金はお受けしておりません。",
        },
        {
            category: "個人情報の保護",
            value: `<a class="underline" href="/privacy-policy">プライバシーポリシー</a>` + "をご参照ください。",
        },
        {
            category: "免責事項",
            value: "当サイトは、予告なしに内容を変更または削除することがありますので、あらかじめご了承下さい。当サイトを利用して発生したいかなる問題も当サイトは一切責任を負うものではありません。 また、本サービスを利用した効果や品質を保証する物ではありません。御客様のご承諾頂けない場合は、お問い合わせに対するご回答、ご依頼には応じられませんので、ご了承ください。 当サイトの情報によって起こったお客様個人の事由による損害等に関しましては、当社は一切責任を負いませんのでご了承ください。 ※弊社ではご登録頂いた個人情報の保護に関する法令その他の規範の遵守と一層の改善に努めてまいります。",
        },
    ];

    return (
        <>
            <StickyNavbar mobileTitle="">
                <main className="">
                    <FadeIn>
                        <ResponsiveSectionContainer>
                            <PageTitle literal="特定商取引法に基づく表記" />
                        </ResponsiveSectionContainer>

                        <ResponsiveSectionContainer>
                            <SectionTitle_Company />
                            <div className="">
                                <table className="w-full text-left" style={{ tableLayout: "fixed" }}>
                                    <tbody>
                                        {TABLE_ROWS.map(({ category, value }, index) => {
                                            return (
                                                <tr key={category} className="">
                                                    <td className="w-36 break-all pb-2 align-top">
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
