import HeroTankbox from "@/components/tankbox/hero-tankbox";
import TankboxFeatures from "@/components/tankbox/tankbox-features";
import TankboxSpecs from "@/components/tankbox/tankbox-specs";
import TankboxBenefits from "@/components/tankbox/tankbox-benefits";
import TankboxInstallation from "@/components/tankbox/tankbox-installation";
import TankboxWarranty from "@/components/tankbox/tankbox-warranty";
import Cta from "@/components/cta";

export default function TankboxPage() {
  return (
    <>
      <HeroTankbox />
      <TankboxFeatures />
      <TankboxSpecs />
      <TankboxBenefits />
      <TankboxInstallation />
      <TankboxWarranty />
      <Cta />
    </>
  );
}