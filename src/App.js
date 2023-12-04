import Bubble from "./components/UI/Bubble";
import HeroSection from "./components/sections/heroSection";
import Navbar from "./components/navbar";

function App() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <HeroSection />
        <HeroSection />
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
