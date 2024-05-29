"use client";

import { FadeIn } from "../_components/FadeIn";

const RepairPriceTable_Substrate: React.FC = () => {
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
                                    データ復旧
                                    <br />
                                    （水没修理 / 起動不良）
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
                                    <span className="hidden md:block">iPhone</span>
                                    <span className="block md:hidden">iPhone</span>
                                </td>
                                <td className={css_tbody_tr_td_2}>29,800円〜</td>
                                <td className={css_tbody_tr_td_2}>29,800円〜</td>
                            </tr>
                            <tr>
                                <td className={css_tbody_tr_td_1}>
                                    <span className="hidden md:block">Android</span>
                                    <span className="block md:hidden">Android</span>
                                </td>
                                <td className={css_tbody_tr_td_2}>29,800円〜</td>
                                <td className={css_tbody_tr_td_2}>29,800円〜</td>
                            </tr>
                            <tr>
                                <td className={css_tbody_tr_td_1}>
                                    <span className="hidden md:block">iPad</span>
                                    <span className="block md:hidden">iPad</span>
                                </td>
                                <td className={css_tbody_tr_td_2}>29,800円〜</td>
                                <td className={css_tbody_tr_td_2}>29,800円〜</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="border-l border-white pl-5 text-sm text-primary-text2">
                    <p className="mb-2">＊価格は税抜です。</p>
                </div>
            </FadeIn>
        </>
    );
};

export default RepairPriceTable_Substrate;
