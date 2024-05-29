"use client";

import { FadeIn } from "../_components/FadeIn";

const RepairPriceTable_Screen: React.FC = () => {
    const css_parent =
        "mx-auto mb-5 w-full text-center text-sm text-primary-text2";

    const css_tbody_tr_td_1 = "border border-white py-2 pl-5 text-left ";
    const css_tbody_tr_td_2 = "border border-white py-2";

    return (
        <>
            <FadeIn>
                <div className={css_parent}>
                    <table className="w-full border-collapse">
                        <thead>
                            <tr className="bg-primary-tableHeaderBg">
                                <th
                                    className="border border-white py-4 text-primary-text1 "
                                    colSpan={3}
                                >
                                    iPhone 画面
                                    <br />
                                    （軽度 / 重度）
                                </th>
                            </tr>
                            <tr className="bg-primary-tableHeaderBg">
                                <th className="w-1/3 border border-white py-2">
                                    モデル
                                </th>
                                <th className="w-1/3 border border-white py-2">
                                    軽度
                                </th>
                                <th className="w-1/3 border border-white py-2">
                                    重度
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
                                        13 / 13Pro / 13mini
                                    </span>
                                    <span className="block md:hidden">
                                        13
                                        <br />
                                        13Pro
                                        <br />
                                        13mini
                                    </span>
                                </td>
                                <td className={css_tbody_tr_td_2}>
                                    30,000円〜
                                </td>
                                <td className={css_tbody_tr_td_2}>
                                    34,000円〜
                                </td>
                            </tr>
                            <tr>
                                <td className={css_tbody_tr_td_1}>
                                    <span className="hidden md:block">
                                        12ProMax
                                    </span>
                                    <span className="block md:hidden">
                                        12ProMax
                                    </span>
                                </td>
                                <td className={css_tbody_tr_td_2}>
                                    26,800円〜
                                </td>
                                <td className={css_tbody_tr_td_2}>
                                    30,800円〜
                                </td>
                            </tr>
                            <tr>
                                <td className={css_tbody_tr_td_1}>
                                    <span className="hidden md:block">
                                        12 / 12Pro / 12mini
                                    </span>
                                    <span className="block md:hidden">
                                        12
                                        <br />
                                        12Pro
                                        <br />
                                        12mini
                                    </span>
                                </td>
                                <td className={css_tbody_tr_td_2}>
                                    21,800円〜
                                </td>
                                <td className={css_tbody_tr_td_2}>
                                    24,800円〜
                                </td>
                            </tr>
                            <tr>
                                <td className={css_tbody_tr_td_1}>
                                    <span className="hidden md:block">
                                        11ProMax
                                    </span>
                                    <span className="block md:hidden">
                                        11ProMax
                                    </span>
                                </td>
                                <td className={css_tbody_tr_td_2}>
                                    15,800円〜
                                </td>
                                <td className={css_tbody_tr_td_2}>
                                    18,800円〜
                                </td>
                            </tr>
                            <tr>
                                <td className={css_tbody_tr_td_1}>
                                    <span className="hidden md:block">
                                        11Pro
                                    </span>
                                    <span className="block md:hidden">
                                        11Pro
                                    </span>
                                </td>
                                <td className={css_tbody_tr_td_2}>
                                    13,000円〜
                                </td>
                                <td className={css_tbody_tr_td_2}>
                                    16,500円〜
                                </td>
                            </tr>
                            <tr>
                                <td className={css_tbody_tr_td_1}>
                                    <span className="hidden md:block">
                                        11 / XR
                                    </span>
                                    <span className="block md:hidden">
                                        11
                                        <br />
                                        XR
                                    </span>
                                </td>
                                <td className={css_tbody_tr_td_2}>9,300円〜</td>
                                <td className={css_tbody_tr_td_2}>
                                    11,000円〜
                                </td>
                            </tr>
                            <tr>
                                <td className={css_tbody_tr_td_1}>
                                    <span className="hidden md:block">
                                        XS MAX
                                    </span>
                                    <span className="block md:hidden">
                                        XS MAX
                                    </span>
                                </td>
                                <td className={css_tbody_tr_td_2}>
                                    11,000円〜
                                </td>
                                <td className={css_tbody_tr_td_2}>
                                    15,300円〜
                                </td>
                            </tr>
                            <tr>
                                <td className={css_tbody_tr_td_1}>
                                    <span className="hidden md:block">XS</span>
                                    <span className="block md:hidden">XS</span>
                                </td>
                                <td className={css_tbody_tr_td_2}>8,300円〜</td>
                                <td className={css_tbody_tr_td_2}>
                                    10,300円〜
                                </td>
                            </tr>
                            <tr>
                                <td className={css_tbody_tr_td_1}>
                                    <span className="hidden md:block">X</span>
                                    <span className="block md:hidden">X</span>
                                </td>
                                <td className={css_tbody_tr_td_2}>6,800円〜</td>
                                <td className={css_tbody_tr_td_2}>8,800円〜</td>
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
                                <td className={css_tbody_tr_td_2}>5,800円〜</td>
                                <td className={css_tbody_tr_td_2}>8,800円〜</td>
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
                                <td className={css_tbody_tr_td_2}>5,800円〜</td>
                                <td className={css_tbody_tr_td_2}>8,800円〜</td>
                            </tr>
                            <tr>
                                <td className={css_tbody_tr_td_1}>
                                    <span className="hidden md:block">
                                        7 / 7Plus / 6s / 6sPlus
                                    </span>
                                    <span className="block md:hidden">
                                        7 / 7Plus
                                        <br />
                                        6s / 6sPlus
                                    </span>
                                </td>
                                <td className={css_tbody_tr_td_2}>3,800円〜</td>
                                <td className={css_tbody_tr_td_2}>6,800円〜</td>
                            </tr>
                            <tr>
                                <td className={css_tbody_tr_td_1}>
                                    <span className="hidden md:block">
                                        6 / 6Plus / SE / 5S / 5 / 5c
                                    </span>
                                    <span className="block md:hidden">
                                        6 / 6Plus
                                        <br />
                                        SE
                                        <br />
                                        5S / 5 / 5c
                                    </span>
                                </td>
                                <td className={css_tbody_tr_td_2}>3,800円〜</td>
                                <td className={css_tbody_tr_td_2}>6,800円〜</td>
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

export default RepairPriceTable_Screen;
