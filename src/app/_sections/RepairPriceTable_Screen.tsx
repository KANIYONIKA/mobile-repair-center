"use client";

import { FadeIn } from "../_components/FadeIn";

const RepairPriceTable_Screen: React.FC = () => {
    const css_parent = "mx-auto mb-5 w-full text-center text-sm text-primary-text2";

    const css_tbody_tr_td_1 = "border border-white py-2 pl-5 text-left ";
    const css_tbody_tr_td_2 = "border border-white py-2";

    return (
        <FadeIn>
                <div className={css_parent}>
                    <table className="w-full border-collapse">
                        <thead>
                            <tr className="bg-primary-tableHeaderBg">
                                <th className="border border-white py-4 text-primary-text1 " colSpan={3}>
                                    iPhone 画面
                                    <br />
                                    （軽度 | 重度）
                                </th>
                            </tr>
                            <tr className="bg-primary-tableHeaderBg">
                                <th className="w-1/3 border border-white py-2">モデル</th>
                                <th className="w-1/3 border border-white py-2">軽度</th>
                                <th className="w-1/3 border border-white py-2">重度</th>
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

                            {/* 16シリーズ */}
                            <tr>
                                <td className={css_tbody_tr_td_1}>
                                    <span className="hidden md:block">16ProMax</span>
                                    <span className="block md:hidden">16ProMax</span>
                                </td>
                                <td className={css_tbody_tr_td_2}>
                                    （LCDパネル）45,100円
                                    <br />
                                    （有機EL）90,200円
                                </td>
                                <td className={css_tbody_tr_td_2}>
                                    （LCDパネル）61,380円
                                    <br />
                                    （有機EL）97,900円
                                </td>
                            </tr>
                            <tr>
                                <td className={css_tbody_tr_td_1}>
                                    <span className="hidden md:block">16Pro</span>
                                    <span className="block md:hidden">16Pro</span>
                                </td>
                                <td className={css_tbody_tr_td_2}>
                                    （LCDパネル）42,900円
                                    <br />
                                    （有機EL）82,500円
                                </td>
                                <td className={css_tbody_tr_td_2}>
                                    （LCDパネル）52,800円
                                    <br />
                                    （有機EL）86,900円
                                </td>
                            </tr>
                            <tr>
                                <td className={css_tbody_tr_td_1}>
                                    <span className="hidden md:block">16 | 16Plus</span>
                                    <span className="block md:hidden">16<br />16Plus</span>
                                </td>
                                <td className={css_tbody_tr_td_2}>
                                    （LCDパネル）32,780円
                                    <br />
                                    （有機EL）60,500円
                                </td>
                                <td className={css_tbody_tr_td_2}>
                                    （LCDパネル）37,180円
                                    <br />
                                    （有機EL）71,500円
                                </td>
                            </tr>
                            <tr>
                                <td className={css_tbody_tr_td_1}>
                                    <span className="hidden md:block">16e</span>
                                    <span className="block md:hidden">16e</span>
                                </td>
                                <td className={css_tbody_tr_td_2}>
                                    （LCDパネル）25,300円
                                    <br />
                                    （有機EL）41,800円
                                </td>
                                <td className={css_tbody_tr_td_2}>
                                    （LCDパネル）33,000円
                                    <br />
                                    （有機EL）48,400円
                                </td>
                            </tr>
                            <tr>
                                <td className={css_tbody_tr_td_1}>
                                    <span className="hidden md:block">15ProMax</span>
                                    <span className="block md:hidden">15ProMax</span>
                                </td>
                                <td className={css_tbody_tr_td_2}>
                                    （LCDパネル）27,500円
                                    <br />
                                    （有機EL）41,800円
                                </td>
                                <td className={css_tbody_tr_td_2}>
                                    （LCDパネル）38,500円
                                    <br />
                                    （有機EL）60,500円
                                </td>
                            </tr>
                            <tr>
                                <td className={css_tbody_tr_td_1}>
                                    <span className="hidden md:block">15Pro</span>
                                    <span className="block md:hidden">15Pro</span>
                                </td>
                                <td className={css_tbody_tr_td_2}>
                                    （LCDパネル）25,300円
                                    <br />
                                    （有機EL）35,200円
                                </td>
                                <td className={css_tbody_tr_td_2}>
                                    （LCDパネル）38,500円
                                    <br />
                                    （有機EL）52,800円
                                </td>
                            </tr>
                            <tr>
                                <td className={css_tbody_tr_td_1}>
                                    <span className="hidden md:block">15 | 15Plus</span>
                                    <span className="block md:hidden">15<br />5Plus</span>
                                </td>
                                <td className={css_tbody_tr_td_2}>
                                    （LCDパネル）23,100円
                                    <br />
                                    （有機EL）27,500円
                                </td>
                                <td className={css_tbody_tr_td_2}>
                                    （LCDパネル）35,200円
                                    <br />
                                    （有機EL）46,200円
                                </td>
                            </tr>
                            <tr>
                                <td className={css_tbody_tr_td_1}>
                                    <span className="hidden md:block">14ProMax</span>
                                    <span className="block md:hidden">14ProMax</span>
                                </td>
                                <td className={css_tbody_tr_td_2}>
                                    （LCDパネル）26,400円
                                    <br />
                                    （有機EL）33,000円
                                </td>
                                <td className={css_tbody_tr_td_2}>
                                    （LCDパネル）38,500円
                                    <br />
                                    （有機EL）53,900円
                                </td>
                            </tr>
                            <tr>
                                <td className={css_tbody_tr_td_1}>
                                    <span className="hidden md:block">14Pro</span>
                                    <span className="block md:hidden">14Pro</span>
                                </td>
                                <td className={css_tbody_tr_td_2}>
                                    （LCDパネル）24,200円
                                    <br />
                                    （有機EL）30,800円
                                </td>
                                <td className={css_tbody_tr_td_2}>
                                    （LCDパネル）30,800円
                                    <br />
                                    （有機EL）46,200円
                                </td>
                            </tr>
                            <tr>
                                <td className={css_tbody_tr_td_1}>
                                    <span className="hidden md:block">14 | 14Plus</span>
                                    <span className="block md:hidden">14<br />14Plus</span>
                                </td>
                                <td className={css_tbody_tr_td_2}>
                                    （LCDパネル）14,300円
                                    <br />
                                    （有機EL）19,800円
                                </td>
                                <td className={css_tbody_tr_td_2}>
                                    （LCDパネル）37,400円
                                    <br />
                                    （有機EL）26,400円
                                </td>
                            </tr>
                            <tr>
                                <td className={css_tbody_tr_td_1}>
                                    <span className="hidden md:block">13ProMax</span>
                                    <span className="block md:hidden">13ProMax</span>
                                </td>
                                <td className={css_tbody_tr_td_2}>
                                    （LCDパネル）18,150円
                                    <br />
                                    （有機EL）27,500円
                                </td>
                                <td className={css_tbody_tr_td_2}>
                                    （LCDパネル）38,500円
                                    <br />
                                    （有機EL）49,500円
                                </td>
                            </tr>
                            <tr>
                                <td className={css_tbody_tr_td_1}>
                                    <span className="hidden md:block">13Pro</span>
                                    <span className="block md:hidden">13Pro</span>
                                </td>
                                <td className={css_tbody_tr_td_2}>
                                    （LCDパネル）13,750円
                                    <br />
                                    （有機EL）24,200円
                                </td>
                                <td className={css_tbody_tr_td_2}>
                                    （LCDパネル）28,600円
                                    <br />
                                    （有機EL）36,300円
                                </td>
                            </tr>
                            <tr>
                                <td className={css_tbody_tr_td_1}>
                                    <span className="hidden md:block">13mini</span>
                                    <span className="block md:hidden">13mini</span>
                                </td>
                                <td className={css_tbody_tr_td_2}>
                                    （LCDパネル）12,180円
                                    <br />
                                    （有機EL）19,800円
                                </td>
                                <td className={css_tbody_tr_td_2}>
                                    （LCDパネル）19,800円
                                    <br />
                                    （有機EL）33,000円
                                </td>
                            </tr>
                            <tr>
                                <td className={css_tbody_tr_td_1}>
                                    <span className="hidden md:block">13</span>
                                    <span className="block md:hidden">13</span>
                                </td>
                                <td className={css_tbody_tr_td_2}>
                                    （LCDパネル）11,880円
                                    <br />
                                    （有機EL）18,700円
                                </td>
                                <td className={css_tbody_tr_td_2}>
                                    （LCDパネル）18,700円
                                    <br />
                                    （有機EL）31,900円
                                </td>
                            </tr>
                            <tr>
                                <td className={css_tbody_tr_td_1}>
                                    <span className="hidden md:block">12ProMax</span>
                                    <span className="block md:hidden">12ProMax</span>
                                </td>
                                <td className={css_tbody_tr_td_2}>
                                    （LCDパネル）15,400円
                                    <br />
                                    （有機EL）22,000円
                                </td>
                                <td className={css_tbody_tr_td_2}>
                                    （LCDパネル）16,500円
                                    <br />
                                    （有機EL）23,980円
                                </td>
                            </tr>
                            <tr>
                                <td className={css_tbody_tr_td_1}>
                                    <span className="hidden md:block">12 | 12Pro | 12mini</span>
                                    <span className="block md:hidden">
                                        12
                                        <br />
                                        12Pro
                                        <br />
                                        12mini
                                    </span>
                                </td>
                                <td className={css_tbody_tr_td_2}>
                                    （LCDパネル）11,000円
                                    <br />
                                    （有機EL）16,500円
                                </td>
                                <td className={css_tbody_tr_td_2}>
                                    （LCDパネル）13,200円
                                    <br />
                                    （有機EL）19,800円
                                </td>
                            </tr>
                            <tr>
                                <td className={css_tbody_tr_td_1}>
                                    <span className="hidden md:block">11ProMax</span>
                                    <span className="block md:hidden">11ProMax</span>
                                </td>
                                <td className={css_tbody_tr_td_2}>
                                    （LCDパネル）7,700円
                                    <br />
                                    （有機EL）15,180円
                                </td>
                                <td className={css_tbody_tr_td_2}>
                                    （LCDパネル）14,080円
                                    <br />
                                    （有機EL）26,080円
                                </td>
                            </tr>
                            <tr>
                                <td className={css_tbody_tr_td_1}>
                                    <span className="hidden md:block">XR | 11 | 11Pro</span>
                                    <span className="block md:hidden">XR<br />11<br />11Pro</span>
                                </td>
                                <td className={css_tbody_tr_td_2}>
                                    （LCDパネル）66,000円
                                    <br />
                                    （有機EL）13,200円
                                </td>
                                <td className={css_tbody_tr_td_2}>
                                    （LCDパネル）10,780円
                                    <br />
                                    （有機EL）19,800円
                                </td>
                            </tr>
                            <tr>
                                <td className={css_tbody_tr_td_1}>
                                    <span className="hidden md:block">XS MAX</span>
                                    <span className="block md:hidden">XS MAX</span>
                                </td>
                                <td className={css_tbody_tr_td_2}>
                                    （LCDパネル）8,250円
                                    <br />
                                    （有機EL）12,100円
                                </td>
                                <td className={css_tbody_tr_td_2}>
                                    （LCDパネル）12,980円
                                    <br />
                                    （有機EL）16,280円
                                </td>
                            </tr>
                            <tr>
                                <td className={css_tbody_tr_td_1}>
                                    <span className="hidden md:block">X | XS</span>
                                    <span className="block md:hidden">X <br />XS</span>
                                </td>
                                <td className={css_tbody_tr_td_2}>
                                    （LCDパネル）6,050円
                                    <br />
                                    （有機EL）9,900円
                                </td>
                                <td className={css_tbody_tr_td_2}>
                                    （LCDパネル）9,680円
                                    <br />
                                    （有機EL）12,980円
                                </td>
                            </tr>
                            <tr>
                                <td className={css_tbody_tr_td_1}>
                                    <span className="hidden md:block">SE2 | SE3</span>
                                    <span className="block md:hidden">SE2<br />SE3</span>
                                </td>
                                <td className={css_tbody_tr_td_2}>（LCDパネル）6,050円</td>
                                <td className={css_tbody_tr_td_2}>（LCDパネル）7,700円</td>
                            </tr>
                            <tr>
                                <td className={css_tbody_tr_td_1}>
                                    <span className="hidden md:block">8 | 8Plus</span>
                                    <span className="block md:hidden">8<br />8Plus</span>
                                </td>
                                <td className={css_tbody_tr_td_2}>（LCDパネル）6,050円</td>
                                <td className={css_tbody_tr_td_2}>（LCDパネル）7,700円</td>
                            </tr>
                            <tr>
                                <td className={css_tbody_tr_td_1}>
                                    <span className="hidden md:block">7 | 7Plus | 6s | 6sPlus | 6 | 6Plus | SE | 5S | 5 | 5c</span>
                                    <span className="block md:hidden">7 | 7Plus <br /> 6s | 6sPlus <br /> 6 | 6Plus <br /> SE | 5S <br /> 5 | 5c</span>
                                </td>
                                <td className={css_tbody_tr_td_2}>（LCDパネル）4,950円</td>
                                <td className={css_tbody_tr_td_2}>（LCDパネル）7,700円</td>
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

export default RepairPriceTable_Screen;
