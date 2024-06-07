// src/pages/About/About.jsx
"use client";
import "./About.css";
import Footer from "../../globals/Footer/Footer";
import Address from "../Address/Address";
import Image from "next/image";

import DiscoverySection from "../Discovery/DiscoverySection";
export default function AboutComponent() {
    return (
        <>
            <div className="container">
                <h1 className="about-h1">About Us</h1>
                <p className="about-p">
                    Welcome to Green Horn Travels! At Green Horn Travels, we
                    believe that travel is not just about visiting new places;
                    it's about creating unforgettable experiences and cherished
                    memories. With a passion for exploration and a commitment to
                    excellence, we strive to provide our customers with the most
                    immersive and enjoyable travel experiences in Northeast
                    India. Founded with the vision of showcasing the hidden gems
                    and natural wonders of Assam and its neighboring states,
                    Green Horn Travels is your gateway to adventure, culture,
                    and discovery.
                </p>

                <DiscoverySection />
                <div className="text-two" id="text-two">
                    <p>
                        Our team of experienced travel experts is dedicated to
                        crafting personalized travel experiences tailored to
                        your interests, preferences, and budget. From arranging
                        accommodations and transportation to organizing guided
                        tours and activities, we take care of every detail so
                        you can focus on enjoying your journey to the fullest.
                    </p>
                    <Image
                        src={"/public/assets/illustrations/travelboy.png"}
                        alt="travelboy"
                        width={500}
                        height={500}
                    />
                </div>
                <div className="text-three" id="text-three">
                    <p>
                        Join us on an unforgettable adventure through Northeast
                        India and discover the beauty, diversity, and warmth of
                        this enchanting region with Green Horn Travels by your
                        side. Let us be your trusted companion as you explore
                        the wonders of Assam, Meghalaya, Arunachal Pradesh, and
                        beyond. Start planning your dream trip with us today!
                    </p>
                    <p id="slogan">
                        Experience the difference with Green Horn Travels -
                        Where every journey is a story waiting to be told!
                    </p>
                </div>
                <Address />
            </div>
            <Footer />
        </>
    );
};
