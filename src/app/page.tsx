import ContactSection from "./components/contact-section";
import Footer from "./components/footer";
import HeroSection from "./components/hero-section";
import Navbar from "./components/navbar";
import OfficesSection from "./components/office-section";
import ServicesSection from "./components/service-section";
import StatisticsSection from "./components/statistics-section";
import TeamSection from "./components/team-section";
import ErrorPage from "./components/error-page";


const hasPaymentIssue = true;
const isTrialExpired = true;

export default function Home() {
  if (hasPaymentIssue || isTrialExpired) {
    return <ErrorPage />;
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <HeroSection />
        <ServicesSection />
        <StatisticsSection />
        <OfficesSection />
        <TeamSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
