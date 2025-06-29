import { Button } from "@/components/ui/button";
import { WaveDivider } from "@/components/ui/wave-divider";
import QuickStats from "./QuickStats";

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 100,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="home" className="relative text-white" style={{
      backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url('https://images.unsplash.com/photo-1559825481-12a05cc00344?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')",
      backgroundSize: "cover",
      backgroundPosition: "center"
    }}>
      <div className="container mx-auto px-4 py-20 md:py-32">
        <div className="max-w-3xl">
          <div className="inline-block px-4 py-1 mb-6 rounded-full bg-primary/20 backdrop-blur-sm">
            <p className="text-sm font-medium text-white">Join the global water conservation movement</p>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-blue-300 bg-clip-text text-transparent">Every Drop Counts: Understanding Your Water Footprint</h1>
          <p className="text-xl mb-8">Discover how your daily choices affect global water resources and learn to make sustainable decisions.</p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <Button
              onClick={() => scrollToSection('calculator')}
              className="bg-white text-primary hover:bg-slate-100 font-semibold px-6 py-3 rounded-lg"
              size="lg"
            >
              Calculate Your Footprint
            </Button>
            <Button
              onClick={() => scrollToSection('education')}
              variant="outline"
              className="bg-transparent border-2 border-white text-white hover:bg-white/10 font-semibold px-6 py-3 rounded-lg"
              size="lg"
            >
              Learn More
            </Button>
          </div>
          
          <QuickStats />
        </div>
      </div>
      <WaveDivider />
    </section>
  );
}
