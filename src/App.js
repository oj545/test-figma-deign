import Bubble from "./components/UI/Bubble";
import HeroSection from "./components/sections/heroSection";
import Navbar from "./components/UI/navbar";
import MarketingSection from "./components/sections/MarketingSection";
import AboutSection from "./components/sections/AboutSection";
import ServicesSection from "./components/sections/ServicesSection";

const bubbles = [
  {
    size: 10,
    position: { top: 7, left: 50 },
    rotate: 100,
    color1: "#F8B5D3",
    color2: "#E278FF",
  },
  {
    size: 8,
    position: { top: 35, left: 35 },
    rotate: 30,

    color1: "#E278FF",
    color2: "#BBF3FD",
  },
  {
    size: 15,
    position: { top: 18, left: 8 },
    rotate: 100,
    color1: "#BBF3FD",
    color2: "#E278FF",
  },
  {
    size: 20,
    position: { top: 70, left: 20 },
    rotate: 30,
    color1: "#F8B5D3",
    color2: "#E278FF",
  },
  {
    size: 15,
    position: { top: 55, left: 70 },
    rotate: 80,
    color1: "#BBF3FD",
    color2: "#E278FF",
  },
  {
    size: 10,
    position: { top: 107, left: 50 },
    rotate: 100,
    color1: "#F8B5D3",
    color2: "#E278FF",
  },
  {
    size: 8,
    position: { top: 118, left: 8 },
    rotate: 100,
    color1: "#BBF3FD",
    color2: "#E278FF",
  },

  {
    size: 8,
    position: { top: 150, left: 40 },
    rotate: 100,
    color1: "#F8B5D3",
    color2: "#E278FF",
  },
  {
    size: 18,
    position: { top: 190, left: 20 },
    rotate: 30,
    color1: "#BBF3FD",
    color2: "#E278FF",
  },
  {
    size: 17,
    position: { top: 165, left: 80 },
    rotate: 80,

    color1: "#F8B5D3",
    color2: "#E278FF",
  },
  {
    size: 10,
    position: { top: 207, left: 50 },
    rotate: 100,
    color1: "#F8B5D3",
    color2: "#E278FF",
  },
  {
    size: 8,
    position: { top: 218, left: 8 },
    rotate: 100,
    color1: "#BBF3FD",
    color2: "#E278FF",
  },

  {
    size: 8,
    position: { top: 250, left: 40 },
    rotate: 100,
    color1: "#BBF3FD",
    color2: "#E278FF",
  },
  {
    size: 18,
    position: { top: 290, left: 20 },
    rotate: 9,

    color1: "#F8B5D3",
    color2: "#E278FF",
  },
  {
    size: 12,
    position: { top: 240, left: 10 },
    rotate: 30,

    color1: "#E278FF",
    color2: "#BBF3FD",
  },
  {
    size: 17,
    position: { top: 265, left: 60 },
    rotate: 80,

    color1: "#BBF3FD",
    color2: "#E278FF",
  },
  {
    size: 8,
    position: { top: 350, left: 40 },
    rotate: 100,
    color1: "#BBF3FD",
    color2: "#E278FF",
  },
];

function App() {
  const phoneNumber = "+972505336334";
  const message = "שלום קטיה אני מעוניין/נת לקבוע פגישה";
  const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(
    message
  )}`;

  return (
    <>
      <header>
        <Navbar whatsappUrl={whatsappUrl} />
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

        <HeroSection whatsappUrl={whatsappUrl} />
        <MarketingSection />
        <AboutSection />
        <ServicesSection />
      </main>
    </>
  );
}
export default App;
