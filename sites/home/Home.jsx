import Navbar from "../../components/globals/Navbar/Navbar";
import Hero from "../../components/home/Hero/Hero";
import AboutUs from "../../components/home/About us/AboutUs";
import TopPackagesSection from "../../components/home/TopPackagesSection/TopPackagesSection";
import Carousel from "../../components/home/carousel/Carousel";
import Footer from "../../components/globals/Footer/Footer";
export function Home() {
    return (
        <>
            <Navbar />
            <Hero />
            <AboutUs />
            <TopPackagesSection />
            <Carousel />
            <Footer />
        </>
    );
}
