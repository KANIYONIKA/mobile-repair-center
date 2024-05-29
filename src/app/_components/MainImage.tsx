"use client";
import Image from "next/image";
import "../_styles/burger.scss";
import { Link as Scroll } from "react-scroll";
import { FadeIn } from "./FadeIn";

interface MainImageProps {
    homeTitleDesktopImgSrc: string;
    homeTitleTabletImgSrc: string;
}

const MainImage: React.FC<MainImageProps> = (props) => {
    return (
        <>
            <FadeIn>
                {/* PC向け画像 */}
                <div className="relative hidden h-[525px] w-full overflow-hidden xl:block">
                    <img src={props.homeTitleDesktopImgSrc} alt="モバイル修理センター" className=" absolute left-1/2 h-[525px] min-w-[1920px] max-w-screen-lg -translate-x-1/2 transform" />

                    {/* 文字を表示する部分 */}
                    <>
                        <div className="font-wight-400 absolute left-1/2 top-[370px] flex translate-x-[260px] transform text-sm text-primary-text1 ">
                            <img src="/img/icon-concierge.svg" alt="買取や修理のサポートが必要ですか？" className="mr-2 h-8 w-8" />
                            <p>
                                買取や修理のサポートが必要ですか？
                                <br />
                                <Scroll to="ask" smooth={true} offset={-80}>
                                    <span className="underline">＞ プロに相談する</span>
                                </Scroll>
                            </p>
                        </div>

                        <div className="font-wight-400 absolute left-1/2 top-[420px] flex translate-x-[260px] transform text-sm text-primary-text1 ">
                            <img src="/img/icon-map.svg" alt="お店の情報はこちらです。" className="mr-2 h-8 w-8" />
                            <p>
                                お店の情報はこちらです。
                                <br />
                                <Scroll to="shops" smooth={true} offset={-80}>
                                    <span className="underline">＞ お店の情報を見る</span>
                                </Scroll>
                            </p>
                        </div>
                    </>
                </div>

                {/* タブレット向け画像 */}
                <div className="relative hidden h-auto w-full md:block xl:hidden">
                    <img src={props.homeTitleTabletImgSrc} alt="モバイル修理センター" className="h-auto w-full" />

                    <div className="absolute right-[0%] top-[75%] flex -translate-x-1/2 -translate-y-1/2 transform text-sm text-primary-text1">
                        <img src="/img/icon-concierge.svg" alt="買取や修理のサポートが必要ですか？" className="mr-2 h-7 w-7" />
                        <p className="md:text-[1.32vw]">
                            買取や修理のサポートが必要ですか？
                            <br />
                            <Scroll to="ask" smooth={true} offset={-80}>
                                <span className="underline">＞ プロに相談する</span>
                            </Scroll>
                        </p>
                    </div>

                    <div className="absolute right-[10%] top-[85%] flex -translate-x-1/2 -translate-y-1/2 transform text-sm text-primary-text1">
                        <img src="/img/icon-map.svg" alt="お店の情報はこちらです。" className="mr-2 h-7 w-7" />

                        <p className="md:text-[1.32vw]">
                            お店の情報はこちらです。
                            <br />
                            <Scroll to="shops" smooth={true} offset={-80}>
                                <span className="underline">＞ お店の情報を見る</span>
                            </Scroll>
                        </p>
                    </div>
                </div>

                {/* モバイル向け画像 */}
                <div className="block h-auto w-full md:hidden">
                    <img src="/img/home-title-mobile.png" alt="モバイル修理センター" className="h-auto w-full" />
                </div>
            </FadeIn>
        </>
    );
};

export default MainImage;
