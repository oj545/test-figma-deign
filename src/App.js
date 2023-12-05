import Bubble from "./components/UI/Bubble";
import HeroSection from "./components/sections/heroSection";
import Navbar from "./components/navbar";
import MarketingSection from "./components/sections/MarketingSection";
import AboutSection from "./components/sections/AboutSection";
import ServicesSection from "./components/sections/ServicesSection";
const bubbles = [
  {
    size: 100,
    position: { top: 7, left: 50 },
    rotate: 100,
    color1: "#F8B5D3",
    color2: "#b3a8f8",
  },
  {
    size: 200,
    position: { top: 35, left: 35 },
    rotate: 30,

    color1: "#b3a8f8",
    color2: "#BBF3FD",
  },
  {
    size: 150,
    position: { top: 18, left: 8 },
    rotate: 100,
    color1: "#BBF3FD",
    color2: "#b3a8f8",
  },
  {
    size: 200,
    position: { top: 70, left: 20 },
    rotate: 30,
    color1: "#F8B5D3",
    color2: "#b3a8f8",
  },
  {
    size: 150,
    position: { top: 55, left: 70 },
    rotate: 80,
    color1: "#BBF3FD",
    color2: "#b3a8f8",
  },
  {
    size: 100,
    position: { top: 107, left: 50 },
    rotate: 100,
    color1: "#F8B5D3",
    color2: "#b3a8f8",
  },
  {
    size: 80,
    position: { top: 118, left: 8 },
    rotate: 100,
    color1: "#BBF3FD",
    color2: "#b3a8f8",
  },

  {
    size: 80,
    position: { top: 150, left: 40 },
    rotate: 100,
    color1: "#F8B5D3",
    color2: "#b3a8f8",
  },
  {
    size: 180,
    position: { top: 190, left: 20 },
    rotate: 30,
    color1: "#BBF3FD",
    color2: "#b3a8f8",
  },
  {
    size: 170,
    position: { top: 165, left: 80 },
    rotate: 80,

    color1: "#F8B5D3",
    color2: "#b3a8f8",
  },
  {
    size: 100,
    position: { top: 207, left: 50 },
    rotate: 100,
    color1: "#F8B5D3",
    color2: "#b3a8f8",
  },
  {
    size: 80,
    position: { top: 218, left: 8 },
    rotate: 100,
    color1: "#BBF3FD",
    color2: "#b3a8f8",
  },

  {
    size: 80,
    position: { top: 250, left: 40 },
    rotate: 100,
    color1: "#BBF3FD",
    color2: "#b3a8f8",
  },
  {
    size: 180,
    position: { top: 290, left: 20 },
    rotate: 90,

    color1: "#F8B5D3",
    color2: "#b3a8f8",
  },
  {
    size: 120,
    position: { top: 240, left: 10 },
    rotate: 30,

    color1: "#b3a8f8",
    color2: "#BBF3FD",
  },
  {
    size: 170,
    position: { top: 265, left: 60 },
    rotate: 80,

    color1: "#BBF3FD",
    color2: "#b3a8f8",
  },
  {
    size: 80,
    position: { top: 350, left: 40 },
    rotate: 100,
    color1: "#BBF3FD",
    color2: "#b3a8f8",
  },
  {
    size: 180,
    position: { top: 380, left: 20 },
    rotate: 90,

    color1: "#BBF3FD",
    color2: "#b3a8f8",
  },
  {
    size: 120,
    position: { top: 330, left: 10 },
    rotate: 30,

    color1: "#F8B5D3",
    color2: "#b3a8f8",
  },
  {
    size: 80,
    position: { top: 330, left: 65 },
    rotate: 30,
    color1: "#b3a8f8",
    color2: "#BBF3FD",
  },
  {
    size: 270,
    position: { top: 365, left: 80 },
    rotate: -10,
    color1: "#b3a8f8",
    color2: "#BBF3FD",
  },
];

function App() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        {bubbles.map((bubble, i) => {
          const { size, position, rotate, color1, color2 } = bubble;
          return (
            <Bubble
              key={i}
              size={size}
              position={position}
              rotate={rotate}
              color1={color1}
              color2={color2}
            />
          );
        })}
        <HeroSection />
        <MarketingSection />
        <AboutSection />
        <ServicesSection />
      </main>
    </>
  );
}
export default App;
