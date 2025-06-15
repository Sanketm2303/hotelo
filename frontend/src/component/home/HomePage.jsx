import React, { useState } from "react";
import RoomResult from "../common/RoomResult";
import RoomSearch from "../common/RoomSearch";

const HomePage = () => {

    const [roomSearchResults, setRoomSearchResults] = useState([]);

    // Function to handle search results
    const handleSearchResult = (results) => {
        setRoomSearchResults(results);
    };

    return (
        <div className="home">
            {/* HEADER / BANNER ROOM SECTION */}
            <section>
                <header className="header-banner">
                    <img src="./assets/images/hotel.webp" alt="Hotelo" className="header-image" />
                    <div className="overlay"></div>
                    <div className="animated-texts overlay-content">
                        <h1 align="center"> 
                            Welcome to <span className="phegon-color">Hotelo</span>
                        </h1><br />
                        <h3>More Than a Stay. It’s an Experience</h3>
                    </div>
                </header>
            </section>

            {/* SEARCH/FIND AVAILABLE ROOM SECTION */}
            <RoomSearch handleSearchResult={handleSearchResult} />
            <RoomResult roomSearchResults={roomSearchResults} />

            <h4><a className="view-rooms-home" href="/rooms">All Rooms</a></h4>

            <h2 className="home-services">Services at <span className="phegon-color">Hotelo</span></h2>

            {/* SERVICES SECTION */}
            <section className="service-section"><div className="service-card">
                <img src="./assets/images/ac.png" alt="Air Conditioning" />
                <div className="service-details">
                    <h3 className="service-title">Air Conditioning</h3>
                    <p className="service-description">Stay cool and comfortable throughout your stay with our individually controlled in-room air conditioning.</p>
                </div>
            </div>
                <div className="service-card">
                    <img src="./assets/images/mini-bar.png" alt="Mini Bar" />
                    <div className="service-details">
                        <h3 className="service-title">Mini Bar</h3>
                        <p className="service-description">Enjoy a convenient selection of beverages and snacks stocked in your room's mini bar with no additional cost.</p>
                    </div>
                </div>
                <div className="service-card">
                    <img src="./assets/images/parking.png" alt="Parking" />
                    <div className="service-details">
                        <h3 className="service-title">Parking</h3>
                        <p className="service-description">We offer on-site parking for your convenience . Please inquire about valet parking options if available.</p>
                    </div>
                </div>
                <div className="service-card">
                    <img src="./assets/images/wifi.png" alt="WiFi" />
                    <div className="service-details">
                        <h3 className="service-title">WiFi</h3>
                        <p className="service-description">Stay connected throughout your stay with complimentary high-speed Wi-Fi access available in all guest rooms and public areas.</p>
                    </div>
                </div>

            </section>
            {/* AVAILABLE ROOMS SECTION */}
            <section>

                

            </section>

            {/* ******** NEW SECTIONS ADDED BELOW ******** */}
            {/* ABOUT US SECTION */}
            <section className="about-section">
                <h2>About <span className="phegon-color">Hotelo</span></h2>
                <p className="about-text">
                    Since 2005, Hotelo has been redefining hospitality with our unique blend of modern luxury 
                    and timeless elegance. Located in the heart of the city, we offer beautifully appointed 
                    rooms and suites with panoramic city views.
                </p>
            </section>

            {/* WHY CHOOSE US SECTION */}
            <section className="choose-us">
                <h2>Why Choose Hotelo?</h2>
                <div className="choose-grid">
                    <div className="choose-card">
                        <h3>24/7 Luxury Service</h3>
                        <p>Round-the-clock concierge and personalized butler service</p>
                    </div>
                    <div className="choose-card">
                        <h3>Prime Location</h3>
                        <p>Walking distance to major attractions and business districts</p>
                    </div>
                    <div className="choose-card">
                        <h3>Award-Winning Spa</h3>
                        <p>10 treatment rooms offering holistic wellness experiences</p>
                    </div>
                </div>
            </section>

            {/* TESTIMONIALS SECTION */}
            <section className="testimonials">
                <h2>Guest Experiences</h2>
                <div className="testimonial-grid">
                    <div className="testimonial-card">
                        <p>"The perfect blend of luxury and comfort. Staff went above and beyond!"</p>
                        <p className="author">- Samir, Business Traveler</p>
                    </div>
                    <div className="testimonial-card">
                        <p>"Best hotel experience we've ever had. Will definitely return!"</p>
                        <p className="author">- Desai Family</p>
                    </div>
                </div>
            </section>

            {/* FAQ SECTION */}
            <section className="faq">
                <h2>Frequently Asked Questions</h2>
                <div className="faq-grid">
                    <div className="faq-item">
                        <h3>Check-in/Check-out Times?</h3>
                        <p>3:00 PM check-in | 11:00 AM check-out</p>
                    </div>
                    <div className="faq-item">
                        <h3>Pet Policy?</h3>
                        <p>Small pets allowed with prior notice (₹500/night fee)</p>
                    </div>
                    <div className="faq-item">
                        <h3>Parking Available?</h3>
                        <p>Complimentary valet parking for all guests</p>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default HomePage;