"use client";

import { SHOP_INFORMATION, SHOP_INFORMATION_Koenji } from "../K";
import { FadeIn } from "./FadeIn";

interface Props {
    shopInformation: SHOP_INFORMATION;
}

const OpenShopPage: React.FC<Props> = ({ shopInformation }) => {
    return (
        <>
            <FadeIn>
                <a className="underline decoration-primary-text2" href={shopInformation.hpURLAbs} target="_blank">
                    <div className=" mb-0 flex">
                        {/* <img src="/img/finger-right.svg" className="mr-2 h-auto w-5" /> */}
                        {/* <img src="/img/open_new_window.svg" className="mr-2 h-auto w-5" /> */}
                        <img src="/img/open.svg" className="mr-2 h-auto w-8" />
                        <b>
                            <div className="font-notoSansJP text-2xl text-primary-text1">{shopInformation.shortName}を希望する</div>
                        </b>
                    </div>
                </a>
                <a className="decoration-primary-text2" href={shopInformation.hpURLAbs} target="_blank">
                    <div className="text-primary-text2"> ※店舗ページが開きます</div>
                </a>
            </FadeIn>
        </>
    );
};

export default OpenShopPage;
