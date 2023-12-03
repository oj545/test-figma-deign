import Bubble from "./UI/Bubble";
import HeroSection from "./components/heroSection";

function App() {
  return (
    <>
      <HeroSection />
      <Bubble
        size={200}
        position={{ top: 7, left: 50 }}
        rotate={100}
        color1={"#8B78FF"}
        color2={"#F8B5D3"}
      />
    </>
  );
}
export default App;
