import TopNav from '../components/TopNav';
import Hero from '../components/Hero';
import FeatureCards from '../components/FeatureCards';
import OfflineFirst from '../components/OfflineFirst';
import InstallSteps from '../components/InstallSteps';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';

export default function Landing() {
  return (
    <div className="min-h-screen bg-ui-background">
      <TopNav />
      <main>
        <Hero />
        <FeatureCards />
        <OfflineFirst />
        <InstallSteps />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
