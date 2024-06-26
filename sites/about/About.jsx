import "./about.css";
import Address from "../../components/about/address/Address";
import Welcome from "../../components/about/welcome/Welcome";
import DiscoverySection from "../../components/about/discovery/DiscoverySection";
import Team from "../../components/about/team/Team";
import Adventure from "../../components/about/adventure/Adventure";
import Navbar from "../../components/globals/Navbar/Navbar";
import Footer from "../../components/globals/Footer/Footer";
export default function About() {
  return (
    <>
      <Navbar />
      <main className="container">
        <Welcome />
        <DiscoverySection />
        <Team />
        <Adventure />
        <Address />
      </main>
      <Footer />
    </>
  );
}
