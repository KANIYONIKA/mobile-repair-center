"use client";
import { FadeIn } from "../_components/FadeIn";
import ResponsiveXScrollContainer from "../_containers/ResponsiveXScrollContainer";
import Image from "next/image";

const SpecialOffers: React.FC = () => {
    const reservation = <img alt="予約割引キャンペーン" className="m-auto h-auto max-w-[75%]" src="/img/bnr-so-reservation.png" />;
    const academy = <img alt="学割キャンペーン" className="m-auto h-auto max-w-[75%]" src="/img/bnr-so-academy.png" />;
    const set = <img alt="セット修理キャンペーン" className="m-auto h-auto max-w-[75%]" src="/img/bnr-so-set.png" />;

    return (
        <>
            <FadeIn>
                <ResponsiveXScrollContainer widthClass="w-[40em]" nodes={[reservation, academy, set]} />
            </FadeIn>
        </>
    );
};

export default SpecialOffers;
