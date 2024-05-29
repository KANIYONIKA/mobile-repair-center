"use client";
import { FadeIn } from "../_components/FadeIn";
import QAContent from "../_components/QAContent";

const FAQ_Repair: React.FC = () => {
    return (
        <>
            <FadeIn>
                <QAContent
                    num={1}
                    q="どのような修理が可能ですか？"
                    a="画面割れ、バッテリー交換、水没修理、ボタン修理、カメラ交換、基盤修理など、ほぼ全ての修理サービスを提供しています。機種については、iPhone、iPad、Android端末、Nintendo Switch を対象としていますが、一部例外もございます。詳しくはお問い合わせください。"
                />

                <QAContent
                    num={2}
                    q="修理の時間はどのくらいですか？"
                    a="例えばiPhoneのバッテリー交換や画面修理の場合、30分から1時間程度で完了することがほとんどです。iPadやAndroid端末、Nintendo Switch については修理の内容と機種による異なるため、お見積もり時にお伝えさせていただきます。"
                />

                <QAContent
                    num={3}
                    q="修理の費用はどのくらいですか？"
                    a="iPhoneバッテリー交換は4,300円(税別)〜。iPadバッテリー交換は3,800円(税別)〜。お見積もりは無料で実施いたしますので、どうぞご依頼ください。"
                />

                <QAContent
                    num={4}
                    q="修理後の保証はありますか？"
                    a="修理に使用する部品には保証を提供しており、修理後に不具合が発生した場合は無償で再修理を行います。保証期間については、修理内容によって異なりますので、詳細はお問い合わせください。"
                />

                <QAContent
                    num={5}
                    q="修理後データは残っていますか？"
                    a="修理中にデータが失われることは一般的にはありませんが、念のため修理前にはデータのバックアップを推奨しています。データ保持については最大限の注意を払って対応いたします。"
                />
            </FadeIn>
        </>
    );
};

export default FAQ_Repair;
