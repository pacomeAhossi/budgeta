import DownloadSection from "./sections/DownloadSection";
import Download from "./sections/DownloadSection";
import Features from "./sections/Features";
import Hero from "./sections/Hero";
import Reviews from "./sections/Reviews";
import Revolutionize from "./sections/Revolutionize";
import SubscribeSection from "./sections/SubscribeSection";

export default function Home() {
  return (
    <main>
      <div id="hero">
        <Hero />
      </div>
      <div id="features">
        <Features />
      </div>
      <div id="revolutionize">
        <Revolutionize />
      </div>
      <div id="reviews">
        <Reviews />
      </div>
      <div id="download">
        <DownloadSection />
      </div>
      <SubscribeSection />
    </main>
  );
}
