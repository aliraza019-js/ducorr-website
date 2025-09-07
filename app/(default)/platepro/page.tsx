import HeroPlatepro from "@/components/platepro/hero-platepro";
import PlateproTechnology from "@/components/platepro/platepro-technology";
import PlateproCompliance from "@/components/platepro/platepro-compliance";
import PlateproComparison from "@/components/platepro/platepro-comparison";
import PlateproInstallation from "@/components/platepro/platepro-installation";
import PlateproWarranty from "@/components/platepro/platepro-warranty";
import Cta from "@/components/cta";
import StickyActions from "@/components/StickyActions";

export default function PlateproPage() {
  return (
    <>
      <HeroPlatepro />
      <PlateproTechnology />
      <PlateproCompliance />
      <PlateproComparison />
      <PlateproInstallation />
      <PlateproWarranty />
      <Cta />
      <StickyActions />
    </>
  );
}