import SiteHeader from "@/components/SiteHeader";
import BlueprintHero from "@/components/BlueprintHero";
import WhoItsFor from "@/components/WhoItsFor";
import Tiers from "@/components/Tiers";
import Categories from "@/components/Categories";
import HowItWorks from "@/components/HowItWorks";
import TrustStrip from "@/components/TrustStrip";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main id="main">
        <BlueprintHero />
        <WhoItsFor />
        <Tiers />
        <Categories />
        <HowItWorks />
        <TrustStrip />
        <Footer />
      </main>
    </>
  );
}
