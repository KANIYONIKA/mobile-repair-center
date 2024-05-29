"use client";
import { FadeIn } from "../_components/FadeIn";
import QAContent from "../_components/QAContent";

const FAQ_Purchase: React.FC = () => {
    return (
        <>
            <FadeIn>
                <QAContent
                    num={1}
                    q="買取の流れを教えてください。"
                    a="店頭にてスマートフォンの査定を行います。査定後、提示された買取価格に同意いただけた場合、本人確認書類のご提示と簡単な手続きの後、現金にて買取金額をお支払いいたします。"
                />

                <QAContent
                    num={2}
                    q="買取の際に必要なものは何ですか？"
                    a="有効な身分証明書（運転免許証、パスポートなど）と、スマートフォン本体が必要です。可能であれば、充電器や箱などの付属品も一緒にお持ちください。"
                />

                <QAContent
                    num={3}
                    q="壊れていても買取可能ですか？"
                    a="画面割れやバッテリーの不具合など、状態に関わらず査定いたします。状態によっては買取価格が下がる場合もありますのでご了承ください。"
                />

                <QAContent
                    num={4}
                    q="査定だけでも大丈夫ですか？"
                    a="大丈夫です。査定だけでも無料で承ります。査定結果を確認した後、買取をキャンセルしていただいても構いません。"
                />

                <QAContent
                    num={5}
                    q="買取価格はどのように決まりますか？"
                    a="スマートフォンのモデル、状態、付属品の有無、需要と供給などを考慮して買取価格を決定します。リアルタイムの市場価格を参考にしており、可能な限り高値で査定いたします。"
                />

                <QAContent
                    num={6}
                    q="データはどのように扱われますか？"
                    a="プライバシー保護のため、スマートフォンのデータはすべて初期化するようお願いしております。データ削除についてわからないことや心配なことがあれば、店舗スタッフまでお問い合わせください。なお、データが必要な場合は事前にバックアップをお願いいたします。"
                />

                <QAContent
                    num={7}
                    q="どのブランドを取り扱っていますか？"
                    a="Apple、Samsung、Google、Sony、Huawei、OPPOなど、主要ブランドのスマートフォンをほぼ全て取り扱っています。また、Nintendo Switch も扱っております。"
                />
            </FadeIn>
        </>
    );
};

export default FAQ_Purchase;
