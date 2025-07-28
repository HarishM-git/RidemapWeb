import BusTrackingLanding from './BusTrackingLanding';
import Header from './Header';
import ProductSection from './ProductSection';
import SoftwareService from './SoftwareService';
import Pricing from './Pricing';
import Testimonials from './Testimonials';
import ContactUs from './ContactUs';
import CursorTrail from './CursorTrail';
import Footer from './Footer';
import Clients from './Clinets';
import ProjectsShowcase from './ProjectsShowcase';
function MainContent() {
  return (
    <div className="w-[100%] bg-[#151A23]">
      {/* <CursorTrail /> */}
      <header className="top-5 z-50 w-full ">
        <Header />
      </header>

      <main className="relative">
        <BusTrackingLanding />
      </main>
      <main className="bg-gradient-to-b from-[#1F242C] to-[#151A23] rounded-t-[80px]">
        <ProductSection />
        <div id="service">
          <SoftwareService />
        </div>
        <div id="pricing">
          <Pricing />
        </div>
        <Clients />
        <Testimonials />
          {/* <Projects /> */}
          <ProjectsShowcase/>
        <div id="contact">
          <ContactUs />
        </div>
        <Footer />
      </main>
    </div>
  );
}

export default MainContent;
