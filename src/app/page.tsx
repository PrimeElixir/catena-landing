import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import MissingLayer from '@/components/MissingLayer';
import OperatingModel from '@/components/OperatingModel';
import PreviewSection from '@/components/PreviewSection';
import GovernedFabric from '@/components/GovernedFabric';
import Integrations from '@/components/Integrations';
import CloseSection from '@/components/CloseSection';
import RequestAccessModal from '@/components/RequestAccessModal';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-gradient-to-b from-background via-background to-slate-100 text-text-primary selection:bg-accent selection:text-white">
      <Header />
      <HeroSection />
      
      <MissingLayer />
      
      <OperatingModel />
      
      <PreviewSection />
      
      <GovernedFabric />
      
      <Integrations />

      <CloseSection />
      
      <footer className="py-12 text-center text-text-secondary text-sm border-t border-border-glass bg-transparent">
        <p>&copy; {new Date().getFullYear()} Prime Elixir Co. All rights reserved.</p>
      </footer>

      <RequestAccessModal />
    </main>
  );
}
