import Contacts from "@/app/_sections/Contacts";
import { ContactCategory } from "@/app/common/enum";
import MainImage from "./_components/MainImage";
import {
	SectionTitle_AboutPurchase,
	SectionTitle_AboutRepair,
	SectionTitle_Contact,
	SectionTitle_DevicesForPurchase,
	SectionTitle_FromDevices,
	SectionTitle_FromMalfunctions,
	SectionTitle_OurJourney,
	SectionTitle_OurShops,
	SectionTitle_SpecialOffers,
} from "./_components/SectionTitles";
import StickyNavbar from "./_components/StickyNavbar";
import ResponsiveSectionContainer from "./_containers/ResponsiveSectionContainer";
import AboutPurchase from "./_sections/AboutPurchase";
import AboutRepair from "./_sections/AboutRepair";
import DevicesForPurchase from "./_sections/DevicesForPurchase";
import FromDevices from "./_sections/FromDevices";
import FromMalfunctions from "./_sections/FromMalfunctions";
import OurJourney from "./_sections/OurJourney";
import OurShops from "./_sections/OurShops";
import SpecialOffers from "./_sections/SpecialOffers";

export default function Home() {
	return (
			<StickyNavbar mobileTitle="">
				<MainImage
					homeTitleDesktopImgSrc="/img/home-title-desktop.png"
					homeTitleTabletImgSrc="/img/home-title-tablet.png"
				/>
				<main className="">
					<ResponsiveSectionContainer>
						<SectionTitle_AboutPurchase />
						<AboutPurchase />
					</ResponsiveSectionContainer>

					<ResponsiveSectionContainer>
						<SectionTitle_DevicesForPurchase />
						<DevicesForPurchase />
					</ResponsiveSectionContainer>

					<section id="ask">
						<ResponsiveSectionContainer>
							<SectionTitle_Contact />````
							<Contacts
								contactCategory={ContactCategory.ToShopsPage}
								shopInfo={null}
							/>
						</ResponsiveSectionContainer>
					</section>

					<ResponsiveSectionContainer>
						<SectionTitle_AboutRepair />
						<AboutRepair />
					</ResponsiveSectionContainer>

					<ResponsiveSectionContainer>
						<SectionTitle_FromDevices />
						<FromDevices />
					</ResponsiveSectionContainer>

					<ResponsiveSectionContainer>
						<SectionTitle_FromMalfunctions />
						<FromMalfunctions />
					</ResponsiveSectionContainer>

					<ResponsiveSectionContainer>
						<SectionTitle_Contact />
						<Contacts
							contactCategory={ContactCategory.ToShopsPage}
							shopInfo={null}
						/>
					</ResponsiveSectionContainer>

					<ResponsiveSectionContainer>
						<SectionTitle_OurJourney />
						<OurJourney />
					</ResponsiveSectionContainer>

					<section id="shops">
						<ResponsiveSectionContainer>
							<SectionTitle_OurShops />
							<OurShops />
						</ResponsiveSectionContainer>
					</section>

					<ResponsiveSectionContainer>
						<SectionTitle_SpecialOffers />
						<SpecialOffers />
					</ResponsiveSectionContainer>
				</main>
			</StickyNavbar>
	);
}
