"use client";

import { FadeIn } from "../_components/FadeIn";

const RepairPriceTable_Battery: React.FC = () => {
    const css_parent = "mx-auto mb-5 w-full text-center text-sm text-primary-text2";

    const css_tbody_tr_td_1 = "border border-white py-2 pl-5 text-left";
    const css_tbody_tr_td_2 = "border border-white py-2";

    return (
        <FadeIn>
            <div className={css_parent}>
                <table className="w-full border-collapse">
                    <thead>
                        <tr className="bg-primary-tableHeaderBg">
                            <th className="border border-white py-4 text-primary-text1" colSpan={3}>
                                iPhone 充電
                                <br />
                                （バッテリー交換 | 充電口修理）
                            </th>
                        </tr>
                        <tr className="bg-primary-tableHeaderBg">
                            <th className="w-1/3 border border-white py-2 ">モデル</th>
                            <th className="w-1/3 border border-white py-2">バッテリー交換</th>
                            <th className="w-1/3 border border-white py-2">充電口修理</th>
                        </tr>
                    </thead>
                    <tbody>

                        {/* 17シリーズ */}
                        <tr>
                            <td className={css_tbody_tr_td_1}>
                                <p>17シリーズ</p>
                            </td>
                            <td className={css_tbody_tr_td_2}>お問い合わせください</td>
                            <td className={css_tbody_tr_td_2}>お問い合わせください</td>
                        </tr>

                        {/* 15シリーズ */}
                        <tr>
                            <td className={css_tbody_tr_td_1}>
                                <p>16ProMax</p>
                                <p>16Pro</p>
                            </td>
                            <td className={css_tbody_tr_td_2}>お問い合わせください</td>
                            <td className={css_tbody_tr_td_2}>16,500円</td>
                        </tr>
                        <tr>
                            <td className={css_tbody_tr_td_1}>
                                <p>16Plus</p>
                                <p>16</p>
                            </td>
                            <td className={css_tbody_tr_td_2}>お問い合わせください</td>
                            <td className={css_tbody_tr_td_2}>16,500円</td>
                        </tr>

                        {/* 15シリーズ */}
                        <tr>
                            <td className={css_tbody_tr_td_1}>
                                <p>15ProMax</p>
                                <p>15Pro</p>
                            </td>
                            <td className={css_tbody_tr_td_2}>13,200円</td>
                            <td className={css_tbody_tr_td_2}>15,400円</td>
                        </tr>
                        <tr>
                            <td className={css_tbody_tr_td_1}>
                                <p>15Plus</p>
                                <p>15</p>
                            </td>
                            <td className={css_tbody_tr_td_2}>12,600円</td>
                            <td className={css_tbody_tr_td_2}>15,400円</td>
                        </tr>

                        {/* 14シリーズ */}
                        <tr>
                            <td className={css_tbody_tr_td_1}>
                                <p>14ProMax</p>
                                <p>14Pro</p>
                            </td>
                            <td className={css_tbody_tr_td_2}>11,000円</td>
                            <td className={css_tbody_tr_td_2}>14,300円</td>
                        </tr>
                        <tr>
                            <td className={css_tbody_tr_td_1}>
                                <p>14Plus</p>
                                <p>14</p>
                            </td>
                            <td className={css_tbody_tr_td_2}>9,900円</td>
                            <td className={css_tbody_tr_td_2}>14,300円</td>
                        </tr>

                        {/* 13シリーズ */}
                        <tr>
                            <td className={css_tbody_tr_td_1}>
                                <p>13ProMax</p>
                                <p>13Pro</p>
                            </td>
                            <td className={css_tbody_tr_td_2}>8,800円</td>
                            <td className={css_tbody_tr_td_2}>13,200円</td>
                        </tr>
                        <tr>
                            <td className={css_tbody_tr_td_1}>
                                <p>13</p>
                                <p>13mini</p>
                            </td>
                            <td className={css_tbody_tr_td_2}>7,700円</td>
                            <td className={css_tbody_tr_td_2}>13,200円</td>
                        </tr>

                        {/* 12シリーズ */}
                        <tr>
                            <td className={css_tbody_tr_td_1}>
                                <p>12ProMax</p>
                                <p>12Pro</p>
                            </td>
                            <td className={css_tbody_tr_td_2}>6,600円</td>
                            <td className={css_tbody_tr_td_2}>12,100円</td>
                        </tr>
                        <tr>
                            <td className={css_tbody_tr_td_1}>
                                <p>12</p>
                                <p>12mini</p>
                            </td>
                            <td className={css_tbody_tr_td_2}>6,600円</td>
                            <td className={css_tbody_tr_td_2}>12,100円</td>
                        </tr>

                        {/* 11シリーズ */}
                        <tr>
                            <td className={css_tbody_tr_td_1}>
                                <p>11ProMax</p>
                                <p>11Pro</p>
                                <p>11</p>
                            </td>
                            <td className={css_tbody_tr_td_2}>5,500円</td>
                            <td className={css_tbody_tr_td_2}>10,230円</td>
                        </tr>

                        {/* Xシリーズ */}
                        <tr>
                            <td className={css_tbody_tr_td_1}>
                                <p>XSMax</p>
                                <p>XS</p>
                                <p>X</p>
                                <p>XR</p>
                            </td>
                            <td className={css_tbody_tr_td_2}>5,280円</td>
                            <td className={css_tbody_tr_td_2}>8,250円</td>
                        </tr>


                        {/* SE2 | 3 | 8 | 7 */}
                        <tr>
                            <td className={css_tbody_tr_td_1}>
                                <p>SE3 | SE2</p>
                                <p>8 | 8Plus</p>
                                <p>7 | 7Plus</p>
                            </td>
                            <td className={css_tbody_tr_td_2}>4,400円</td>
                            <td className={css_tbody_tr_td_2}>60,50円</td>
                        </tr>


                        {/* 6s以下 */}
                        <tr>
                            <td className={css_tbody_tr_td_1}>
                                <p>6s | 6sPlus</p>
                                <p>6 | 6Plus</p>
                                <p>5S | 5C | 5 | SE</p>
                            </td>
                            <td className={css_tbody_tr_td_2}>4,400円</td>
                            <td className={css_tbody_tr_td_2}>4,400円</td>
                        </tr>

                    </tbody>
                </table>
            </div>

            <div className="border-l border-white pl-5 text-sm text-primary-text2">
                <p className="mb-2">＊価格は税込です。</p>
                <p className="mb-2">＊ iPad | Android | NintendoSwitch など、その他の機種については、店舗までお問い合わせください。</p>
                <p className="mb-2">＊ 起動不良 | 水没 | カメラ | スピーカー | 背面割れ など、その他の修理については、店舗までお問い合わせください。</p>
                <p className="mb-2">＊ 表示価格からキャンペーンによる割引をご利用できます！詳細は、店舗までお問い合わせください。</p>
            </div>
        </FadeIn>
    );
};

export default RepairPriceTable_Battery;
