"use client";

import { FadeIn } from "../_components/FadeIn";

const RepairPriceTable_Battery: React.FC = () => {
    const css_parent =
        "mx-auto mb-5 w-full text-center text-sm text-primary-text2";

    const css_tbody_tr_td_1 = "border border-white py-2 pl-5 text-left";
    const css_tbody_tr_td_2 = "border border-white py-2";

    return (
        <>
            <FadeIn>
                <div className={css_parent}>
                    <table className="w-full border-collapse">
                        <thead>
                            <tr className="bg-primary-tableHeaderBg">
                                <th
                                    className="border border-white py-4 text-primary-text1"
                                    colSpan={3}
                                >
                                    iPhone 充電
                                    <br />
                                    （バッテリー交換 / 充電口修理）
                                </th>
                            </tr>
                            <tr className="bg-primary-tableHeaderBg">
                                <th className="w-1/3 border border-white py-2 ">
                                    モデル
                                </th>
                                <th className="w-1/3 border border-white py-2">
                                    バッテリー交換
                                </th>
                                <th className="w-1/3 border border-white py-2">
                                    充電口修理
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className={css_tbody_tr_td_1}>
                                    <span className="hidden md:block">
                                        15シリーズ
                                    </span>
                                    <span className="block md:hidden">
                                        15シリーズ
                                    </span>
                                </td>
                                <td
                                    className="border border-white py-2"
                                    colSpan={2}
                                >
                                    お問い合わせください
                                </td>
                            </tr>
                            <tr>
                                <td className={css_tbody_tr_td_1}>
                                    <span className="hidden md:block">
                                        14シリーズ
                                    </span>
                                    <span className="block md:hidden">
                                        14シリーズ
                                    </span>
                                </td>
                                <td className={css_tbody_tr_td_2} colSpan={2}>
                                    お問い合わせください
                                </td>
                            </tr>
                            <tr>
                                <td className={css_tbody_tr_td_1}>
                                    <span className="hidden md:block">
                                        13シリーズ
                                    </span>
                                    <span className="block md:hidden">
                                        13シリーズ
                                    </span>
                                </td>
                                <td className={css_tbody_tr_td_2} colSpan={2}>
                                    お問い合わせください
                                </td>
                            </tr>
                            <tr>
                                <td className={css_tbody_tr_td_1}>
                                    <span className="hidden md:block">
                                        12シリーズ
                                    </span>
                                    <span className="block md:hidden">
                                        12シリーズ
                                    </span>
                                </td>
                                <td className={css_tbody_tr_td_2}>8,800円</td>
                                <td className={css_tbody_tr_td_2}>14,800円</td>
                            </tr>
                            <tr>
                                <td className={css_tbody_tr_td_1}>
                                    <span className="hidden md:block">
                                        11シリーズ
                                    </span>
                                    <span className="block md:hidden">
                                        11シリーズ
                                    </span>
                                </td>
                                <td className={css_tbody_tr_td_2}>7,800円</td>
                                <td className={css_tbody_tr_td_2}>14,800円</td>
                            </tr>
                            <tr>
                                <td className={css_tbody_tr_td_1}>
                                    <span className="hidden md:block">
                                        XS / XS Max
                                    </span>
                                    <span className="block md:hidden">
                                        XS / XS Max
                                    </span>
                                </td>
                                <td className={css_tbody_tr_td_2}>6,300円</td>
                                <td className={css_tbody_tr_td_2}>12,800円</td>
                            </tr>
                            <tr>
                                <td className={css_tbody_tr_td_1}>
                                    <span className="hidden md:block">
                                        X / XR
                                    </span>
                                    <span className="block md:hidden">
                                        X / XR
                                    </span>
                                </td>
                                <td className={css_tbody_tr_td_2}>6,300円</td>
                                <td className={css_tbody_tr_td_2}>10,800円</td>
                            </tr>
                            <tr>
                                <td className={css_tbody_tr_td_1}>
                                    <span className="hidden md:block">
                                        SE2 / SE3
                                    </span>
                                    <span className="block md:hidden">
                                        SE2 / SE3
                                    </span>
                                </td>
                                <td className={css_tbody_tr_td_2}>6,300円</td>
                                <td className={css_tbody_tr_td_2}>10,800円</td>
                            </tr>
                            <tr>
                                <td className={css_tbody_tr_td_1}>
                                    <span className="hidden md:block">
                                        8 / 8Plus
                                    </span>
                                    <span className="block md:hidden">
                                        8 / 8Plus
                                    </span>
                                </td>
                                <td className={css_tbody_tr_td_2}>5,800円</td>
                                <td className={css_tbody_tr_td_2}>9,800円</td>
                            </tr>
                            <tr>
                                <td className={css_tbody_tr_td_1}>
                                    <span className="hidden md:block">
                                        7 / 7Plus
                                    </span>
                                    <span className="block md:hidden">
                                        7 / 7Plus
                                    </span>
                                </td>
                                <td className={css_tbody_tr_td_2}>5,300円</td>
                                <td className={css_tbody_tr_td_2}>8,800円</td>
                            </tr>
                            <tr>
                                <td className={css_tbody_tr_td_1}>
                                    <span className="hidden md:block">
                                        6s / 6sPlus
                                    </span>
                                    <span className="block md:hidden">
                                        6s / 6sPlus
                                    </span>
                                </td>
                                <td className={css_tbody_tr_td_2}>4,800円</td>
                                <td className={css_tbody_tr_td_2}>7,800円</td>
                            </tr>
                            <tr>
                                <td className={css_tbody_tr_td_1}>
                                    <span className="hidden md:block">
                                        6 / 6Plus
                                    </span>
                                    <span className="block md:hidden">
                                        6 / 6Plus
                                    </span>
                                </td>
                                <td className={css_tbody_tr_td_2}>4,300円</td>
                                <td className={css_tbody_tr_td_2}>6,800円</td>
                            </tr>
                            <tr>
                                <td className={css_tbody_tr_td_1}>
                                    <span className="hidden md:block">
                                        SE / 5s / 5c / 5
                                    </span>
                                    <span className="block md:hidden">
                                        SE
                                        <br />
                                        5s / 5c / 5
                                    </span>
                                </td>
                                <td className={css_tbody_tr_td_2}>4,300円</td>
                                <td className={css_tbody_tr_td_2}>5,800円</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="border-l border-white pl-5 text-sm text-primary-text2">
                    <p className="mb-2">＊価格は税抜です。</p>
                    <p className="mb-2">
                        ＊ iPad / Android / NintendoSwitch
                        など、その他の機種については、店舗までお問い合わせください。
                    </p>
                    <p className="mb-2">
                        ＊ 起動不良 / 水没 / カメラ / スピーカー / 背面割れ
                        など、その他の修理については、店舗までお問い合わせください。
                    </p>
                </div>
            </FadeIn>
        </>
    );
};

export default RepairPriceTable_Battery;
