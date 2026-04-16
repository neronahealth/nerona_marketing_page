import HeroSection from '../components/home/HeroSection';
import QuickActions from '../components/home/QuickActions';
import FeaturedHospitals from '../components/home/FeaturedHospitals';
import DownloadCTA from '../components/home/DownloadCTA';

export default function Home() {
  return (
    <div>
      <HeroSection />
      <QuickActions />
      <FeaturedHospitals />
      <DownloadCTA />
    </div>
  );
}