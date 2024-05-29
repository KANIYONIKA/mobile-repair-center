import React from "react";
import SectionTitle from "./SectionTitle";

export const SectionTitle_Blog: React.FC<{ english: string; japanese: string }> = (props) => {
    return <SectionTitle english={props.english} japanese={props.japanese} />;
};
export const SectionTitle_NEWS: React.FC<{ english: string; japanese: string }> = (props) => {
    return <SectionTitle english={props.english} japanese={props.japanese} />;
};

export const SectionTitle_PrivacyPolicy: React.FC = () => {
    return <SectionTitle english="Privacy Policy" japanese="プライバシーポリシー" />;
};

export const SectionTitle_Company: React.FC = () => {
    return <SectionTitle english="Ling Rise,Inc." japanese="株式会社リングライズ" />;
};

export const SectionTitle_FAQ_Repair: React.FC = () => {
    return <SectionTitle english="FAQ - Repair" japanese="よくある質問（修理）" />;
};

export const SectionTitle_FAQ_Purchase: React.FC = () => {
    return <SectionTitle english="FAQ - Purchase" japanese="よくある質問（買取）" />;
};

export const SectionTitle_RepairPrice_Screen: React.FC = () => {
    return <SectionTitle english="Repair Price - Screen" japanese="修理価格表（画面）" />;
};

export const SectionTitle_RepairPrice_Battery: React.FC = () => {
    return <SectionTitle english="Repair Price - Battery" japanese="修理価格表（バッテリー）" />;
};

export const SectionTitle_RepairPrice_Substrate: React.FC = () => {
    return <SectionTitle english="Repair Price - Data Recovery" japanese="修理価格表（データ復旧）" />;
};

export const SectionTitle_AboutRepair: React.FC = () => {
    return <SectionTitle english="About Repair" japanese="スマホの修理をご希望ですか？" />;
};

export const SectionTitle_AboutPurchase: React.FC = () => {
    return <SectionTitle english="About Purchase" japanese="スマホの買取をご希望ですか？" />;
};

export const SectionTitle_DevicesForPurchase: React.FC = () => {
    return <SectionTitle english="Devices for Purchase" japanese="買取対象機器" />;
};

export const SectionTitle_Contact: React.FC = () => {
    return <SectionTitle english="How To Contact Us" japanese="あなたの連絡をお待ちしています" />;
};

export const SectionTitle_FromDevices: React.FC = () => {
    return <SectionTitle english="From Devices" japanese="端末から修理を探す" />;
};

export const SectionTitle_FromMalfunctions: React.FC = () => {
    return <SectionTitle english="From Malfunctions" japanese="症状から修理を探す" />;
};

export const SectionTitle_OurJourney: React.FC = () => {
    return <SectionTitle english="Our Journey" japanese="私たちの歩み" />;
};

export const SectionTitle_OurShops: React.FC = () => {
    return <SectionTitle english="Our Shops" japanese="私たちの店舗情報です" />;
};

export const SectionTitle_ShopInfo: React.FC<{ english: string; japanese: string }> = (props) => {
    return <SectionTitle english={props.english} japanese={props.japanese} />;
};

export const SectionTitle_SpecialOffers: React.FC = () => {
    return <SectionTitle english="Special Offers" japanese="お得なキャンペーン" />;
};

export const SectionTitle_RecentPosts: React.FC<{ english: string; japanese: string }> = (props) => {
    return <SectionTitle english={props.english} japanese={props.japanese} />;
};
