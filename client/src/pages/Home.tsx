import Hero from "@/components/home/Hero";
import FeaturesOverview from "@/components/home/FeaturesOverview";
import DetailedWaterCalculator from "@/components/calculator/DetailedWaterCalculator";
import EducationalBlog from "@/components/education/EducationalBlog";
import WaterConservationTips from "@/components/tips/WaterConservationTips";
import WaterStatistics from "@/components/statistics/WaterStatistics";
import CallToAction from "@/components/home/CallToAction";
import ContactForm from "@/components/contact/ContactForm";
import PartnershipSection from "@/components/contact/PartnershipSection";

export default function Home() {
  return (
    <div className="bg-slate-50 text-slate-800">
      <Hero />
      <FeaturesOverview />
      <DetailedWaterCalculator />
      <EducationalBlog />
      <WaterConservationTips />
      <WaterStatistics />
      <CallToAction />
      <PartnershipSection />
      <ContactForm />
    </div>
  );
}
