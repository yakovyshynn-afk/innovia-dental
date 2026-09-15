import { useState } from "react";
import About from "./components/About.jsx";
import BeforeAfter from "./components/BeforeAfter.jsx";
import BookingModal from "./components/BookingModal.jsx";
import ContactSection from "./components/ContactSection.jsx";
import Doctors from "./components/Doctors.jsx";
import FooterBottom from "./components/FooterBottom.jsx";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import InstagramSection from "./components/InstagramSection.jsx";
import MobileCta from "./components/MobileCta.jsx";
import Reviews from "./components/Reviews.jsx";
import Services from "./components/Services.jsx";
import StatsBar from "./components/StatsBar.jsx";

export default function App() {
  const [bookingService, setBookingService] = useState(null);

  return (
    <>
      <Header />
      <main className="pb-16 md:pb-0">
        <Hero />
        <StatsBar />
        <About />
        <Services onSelectService={(title) => setBookingService(title)} />
        <Doctors />
        <BeforeAfter />
        <InstagramSection />
        <Reviews />
        <ContactSection />
      </main>
      <FooterBottom />
      <MobileCta />
      <BookingModal
        open={bookingService !== null}
        service={bookingService ?? ""}
        onClose={() => setBookingService(null)}
      />
    </>
  );
}
