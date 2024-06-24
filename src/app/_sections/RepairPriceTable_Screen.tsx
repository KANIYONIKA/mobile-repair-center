"use client";

import { FadeIn } from "../_components/FadeIn";

const RepairPriceTable_Screen: React.FC = () => {
    const css_parent = "mx-auto mb-5 w-full text-center text-sm text-primary-text2";

    const css_tbody_tr_td_1 = "border border-white py-2 pl-5 text-left ";
    const css_tbody_tr_td_2 = "border border-white py-2";

    return (
        <>
            <FadeIn>
                <div className={css_parent}>
                    <table className="w-full border-collapse">
                        <thead>
                            <tr className="bg-primary-tableHeaderBg">
                                <th className="border border-white py-4 text-primary-text1 " colSpan={3}>
                                    iPhone 画面
                                    <br />
                                    （軽度 / 重度）
                                </th>
                            </tr>
                            <tr className="bg-primary-tableHeaderBg">
                                <th className="w-1/3 border border-white py-2">モデル</th>
                                <th className="w-1/3 border border-white py-2">軽度</th>
                                <th className="w-1/3 border border-white py-2">重度</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className={css_tbody_tr_td_1}>
                                    <span className="hidden md:block">15Pro / 15ProMax</span>
                                    <span className="block md:hidden">15Pro / 15ProMax</span>
                                </td>
                                <td className={css_tbody_tr_td_2}>（有機EL）65,000円</td>
                                <td className={css_tbody_tr_td_2}>（有機EL）70,000円</td>
                            </tr>
                            <tr>
                                <td className={css_tbody_tr_td_1}>
                                    <span className="hidden md:block">15 / 15Plus</span>
                                    <span className="block md:hidden">15 / 15Plus</span>
                                </td>
                                <td className={css_tbody_tr_td_2}>（有機EL）60,000円</td>
                                <td className={css_tbody_tr_td_2}>（有機EL）65,000円</td>
                            </tr>
                            <tr>
                                <td className={css_tbody_tr_td_1}>
                                    <span className="hidden md:block">14ProMax</span>
                                    <span className="block md:hidden">14ProMax</span>
                                </td>
                                <td className={css_tbody_tr_td_2}>（有機EL）58,000円</td>
                                <td className={css_tbody_tr_td_2}>（有機EL）63,000円</td>
                            </tr>
                            <tr>
                                <td className={css_tbody_tr_td_1}>
                                    <span className="hidden md:block">14Pro</span>
                                    <span className="block md:hidden">14Pro</span>
                                </td>
                                <td className={css_tbody_tr_td_2}>（有機EL）54,000円</td>
                                <td className={css_tbody_tr_td_2}>（有機EL）59,000円</td>
                            </tr>
                            <tr>
                                <td className={css_tbody_tr_td_1}>
                                    <span className="hidden md:block">14Plus</span>
                                    <span className="block md:hidden">14Plus</span>
                                </td>
                                <td className={css_tbody_tr_td_2}>
                                    （LCDパネル）33,000円
                                    <br />
                                    （有機EL）43,000円
                                </td>
                                <td className={css_tbody_tr_td_2}>
                                    （LCDパネル）38,000円
                                    <br />
                                    （有機EL）48,000円
                                </td>
                            </tr>
                            <tr>
                                <td className={css_tbody_tr_td_1}>
                                    <span className="hidden md:block">14</span>
                                    <span className="block md:hidden">14</span>
                                </td>
                                <td className={css_tbody_tr_td_2}>
                                    （LCDパネル）30,000円
                                    <br />
                                    （有機EL）35,000円
                                </td>
                                <td className={css_tbody_tr_td_2}>
                                    （LCDパネル）35,000円
                                    <br />
                                    （有機EL）40,000円
                                </td>
                            </tr>
                            <tr>
                                <td className={css_tbody_tr_td_1}>
                                    <span className="hidden md:block">13ProMax</span>
                                    <span className="block md:hidden">13ProMax</span>
                                </td>
                                <td className={css_tbody_tr_td_2}>
                                    （LCDパネル）33,000円
                                    <br />
                                    （有機EL）43,000円
                                </td>
                                <td className={css_tbody_tr_td_2}>
                                    （LCDパネル）37,000円
                                    <br />
                                    （有機EL）47,000円
                                </td>
                            </tr>
                            <tr>
                                <td className={css_tbody_tr_td_1}>
                                    <span className="hidden md:block">13 / 13Pro / 13mini</span>
                                    <span className="block md:hidden">
                                        13
                                        <br />
                                        13Pro
                                        <br />
                                        13mini
                                    </span>
                                </td>
                                <td className={css_tbody_tr_td_2}>
                                    （LCDパネル）30,000円
                                    <br />
                                    （有機EL）55,000円
                                </td>
                                <td className={css_tbody_tr_td_2}>
                                    （LCDパネル）34,000円
                                    <br />
                                    （有機EL）59,000円
                                </td>
                            </tr>
                            <tr>
                                <td className={css_tbody_tr_td_1}>
                                    <span className="hidden md:block">12ProMax</span>
                                    <span className="block md:hidden">12ProMax</span>
                                </td>
                                <td className={css_tbody_tr_td_2}>
                                    （LCDパネル）26,800円
                                    <br />
                                    （有機EL）35,800円
                                </td>
                                <td className={css_tbody_tr_td_2}>
                                    （LCDパネル）30,800円
                                    <br />
                                    （有機EL）38,800円
                                </td>
                            </tr>
                            <tr>
                                <td className={css_tbody_tr_td_1}>
                                    <span className="hidden md:block">12 / 12Pro / 12mini</span>
                                    <span className="block md:hidden">
                                        12
                                        <br />
                                        12Pro
                                        <br />
                                        12mini
                                    </span>
                                </td>
                                <td className={css_tbody_tr_td_2}>
                                    （LCDパネル）21,800円
                                    <br />
                                    （有機EL）29,800円
                                </td>
                                <td className={css_tbody_tr_td_2}>
                                    （LCDパネル）24,800円
                                    <br />
                                    （有機EL）32,800円
                                </td>
                            </tr>
                            <tr>
                                <td className={css_tbody_tr_td_1}>
                                    <span className="hidden md:block">11ProMax</span>
                                    <span className="block md:hidden">11ProMax</span>
                                </td>
                                <td className={css_tbody_tr_td_2}>
                                    （LCDパネル）15,800円
                                    <br />
                                    （有機EL）23,800円
                                </td>
                                <td className={css_tbody_tr_td_2}>
                                    （LCDパネル）18,800円
                                    <br />
                                    （有機EL）26,500円
                                </td>
                            </tr>
                            <tr>
                                <td className={css_tbody_tr_td_1}>
                                    <span className="hidden md:block">11Pro</span>
                                    <span className="block md:hidden">11Pro</span>
                                </td>
                                <td className={css_tbody_tr_td_2}>
                                    （LCDパネル）13,000円
                                    <br />
                                    （有機EL）18,800円
                                </td>
                                <td className={css_tbody_tr_td_2}>
                                    （LCDパネル）16,500円
                                    <br />
                                    （有機EL）21,800円
                                </td>
                            </tr>
                            <tr>
                                <td className={css_tbody_tr_td_1}>
                                    <span className="hidden md:block">11 / XR</span>
                                    <span className="block md:hidden">
                                        11
                                        <br />
                                        XR
                                    </span>
                                </td>
                                <td className={css_tbody_tr_td_2}>（LCDパネル）9,300円</td>
                                <td className={css_tbody_tr_td_2}>（LCDパネル）11,000円</td>
                            </tr>
                            <tr>
                                <td className={css_tbody_tr_td_1}>
                                    <span className="hidden md:block">XS MAX</span>
                                    <span className="block md:hidden">XS MAX</span>
                                </td>
                                <td className={css_tbody_tr_td_2}>
                                    （LCDパネル）11,000円
                                    <br />
                                    （有機EL）14,800円
                                </td>
                                <td className={css_tbody_tr_td_2}>
                                    （LCDパネル）15,300円
                                    <br />
                                    （有機EL）18,000円
                                </td>
                            </tr>
                            <tr>
                                <td className={css_tbody_tr_td_1}>
                                    <span className="hidden md:block">XS</span>
                                    <span className="block md:hidden">XS</span>
                                </td>
                                <td className={css_tbody_tr_td_2}>
                                    （LCDパネル）8,300円
                                    <br />
                                    （有機EL）10,300円
                                </td>
                                <td className={css_tbody_tr_td_2}>
                                    （LCDパネル）10,300円
                                    <br />
                                    （有機EL）15,300円
                                </td>
                            </tr>
                            <tr>
                                <td className={css_tbody_tr_td_1}>
                                    <span className="hidden md:block">X</span>
                                    <span className="block md:hidden">X</span>
                                </td>
                                <td className={css_tbody_tr_td_2}>
                                    （LCDパネル）6,800円
                                    <br />
                                    （有機EL）8,800円
                                </td>
                                <td className={css_tbody_tr_td_2}>
                                    （LCDパネル）8,800円
                                    <br />
                                    （有機EL）11,800円
                                </td>
                            </tr>
                            <tr>
                                <td className={css_tbody_tr_td_1}>
                                    <span className="hidden md:block">SE2 / SE3</span>
                                    <span className="block md:hidden">SE2 / SE3</span>
                                </td>
                                <td className={css_tbody_tr_td_2}>（LCDパネル）5,800円</td>
                                <td className={css_tbody_tr_td_2}>（LCDパネル）7,800円</td>
                            </tr>

                            <tr>
                                <td className={css_tbody_tr_td_1}>
                                    <span className="hidden md:block">8 / 8Plus</span>
                                    <span className="block md:hidden">8 / 8Plus</span>
                                </td>
                                <td className={css_tbody_tr_td_2}>（LCDパネル）5,800円</td>
                                <td className={css_tbody_tr_td_2}>（LCDパネル）7,800円</td>
                            </tr>
                            <tr>
                                <td className={css_tbody_tr_td_1}>
                                    <span className="hidden md:block">7 / 7Plus / 6s / 6sPlus</span>
                                    <span className="block md:hidden">
                                        7 / 7Plus
                                        <br />
                                        6s / 6sPlus
                                    </span>
                                </td>
                                <td className={css_tbody_tr_td_2}>（LCDパネル）3,800円</td>
                                <td className={css_tbody_tr_td_2}>（LCDパネル）5,800円</td>
                            </tr>
                            <tr>
                                <td className={css_tbody_tr_td_1}>
                                    <span className="hidden md:block">6 / 6Plus / SE / 5S / 5 / 5c</span>
                                    <span className="block md:hidden">
                                        6 / 6Plus
                                        <br />
                                        SE
                                        <br />
                                        5S / 5 / 5c
                                    </span>
                                </td>
                                <td className={css_tbody_tr_td_2}>（LCDパネル）3,800円</td>
                                <td className={css_tbody_tr_td_2}>（LCDパネル）5,800円</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="border-l border-white pl-5 text-sm text-primary-text2">
                    <p className="mb-2">＊価格は税抜です。</p>
                    <p className="mb-2">＊ iPad / Android / NintendoSwitch など、その他の機種については、店舗までお問い合わせください。</p>
                    <p className="mb-2">＊ 起動不良 / 水没 / カメラ / スピーカー / 背面割れ など、その他の修理については、店舗までお問い合わせください。</p>
                    <p className="mb-2">＊ 表示価格からキャンペーンによる割引をご利用できます！詳細は、店舗までお問い合わせください。</p>
                </div>
            </FadeIn>
        </>
    );
};

export default RepairPriceTable_Screen;
