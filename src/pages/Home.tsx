import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import CTA from "../components/CTA";
import Footer from "../components/Footer";
import Offers from "../components/Offers";
import OurWork from "../components/OurWork";
const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <Offers/>
      <OurWork/>
      <CTA />
      <Footer />
    </>
  );
};

export default Home;
