import DownloadSection from "./sections/DownloadSection";
import Download from "./sections/DownloadSection";
import Features from "./sections/Features";
import Hero from "./sections/Hero";
import Reviews from "./sections/Reviews";
import Revolutionize from "./sections/Revolutionize";

export default function Home() {
  return (
    <main>
      <Hero />
      <Features />
      <Revolutionize />
      <Reviews />
      <DownloadSection />
    </main>
  );
}
