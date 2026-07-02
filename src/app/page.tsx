import Header from '@/components/Header';
import Hero from '@/components/Hero';
import SpineVisualization from '@/components/SpineVisualization';
import Integrations from '@/components/Integrations';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-background text-text-primary selection:bg-accent selection:text-[#0a0c10]">
      <Header />
      
      <Hero />
      
      <SpineVisualization />
      
      <Integrations />
      
      <footer className="py-12 text-center text-text-secondary text-sm border-t border-border-glass">
        <p>&copy; {new Date().getFullYear()} Prime Elixir Co. All rights reserved.</p>
      </footer>
    </main>
  );
}
