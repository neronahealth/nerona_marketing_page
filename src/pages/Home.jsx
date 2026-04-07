import HeroSection from '../components/home/HeroSection';
import QuickActions from '../components/home/QuickActions';
import FeaturedHospitals from '../components/home/FeaturedHospitals';

export default function Home() {
  return (
    <div>
      <HeroSection />
      <QuickActions />
      <FeaturedHospitals />
    </div>
  );
}