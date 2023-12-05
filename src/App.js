import Bubble from "./components/UI/Bubble";
import HeroSection from "./components/sections/heroSection";
import Navbar from "./components/navbar";
import MarketingSection from "./components/sections/MarketingSection";
import AboutSection from "./components/sections/AboutSection";
import ServicesSection from "./components/sections/ServicesSection";

function App() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <HeroSection />
        <MarketingSection />
        <AboutSection />
        <ServicesSection />
      </main>
      {/* <HeroSection />
      <Bubble
        size={200}
        position={{ top: 7, left: 50 }}
        rotate={100}
        color1={"#8B78FF"}
        color2={"#F8B5D3"}
      /> */}
    </>
  );
}
export default App;
