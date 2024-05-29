"use client";
import { FadeIn } from "../_components/FadeIn";
import ShopCard from "../_components/ShopCard";
import ResponsiveXScrollContainer from "../_containers/ResponsiveXScrollContainer";
import { SHOP_INFORMATION_Ikebukuro, SHOP_INFORMATION_Koenji, SHOP_INFORMATION_TakadanobabaMain } from "../K";

const OurShops: React.FC = (props) => {
    const shopCards = [<ShopCard key={1} {...SHOP_INFORMATION_TakadanobabaMain} />, <ShopCard key={2} {...SHOP_INFORMATION_Ikebukuro} />, <ShopCard key={3} {...SHOP_INFORMATION_Koenji} />];

    return (
        <>
            <FadeIn>
                <ResponsiveXScrollContainer widthClass="w-[40em]" nodes={shopCards} />
            </FadeIn>
        </>
    );
};

export default OurShops;
