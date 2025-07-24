import BusTrackingLanding from './components/BusTrackingLanding';
import Header from './components/Header';
import ProductSection from './components/ProductSection';
import SoftwareService from './components/SoftwareService';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import ContactUs from './components/ContactUs';
function App() {
  return (
    <div className="w-[100%] bg-[#151A23]">
      <header className="top-5 z-50 w-full ">
        <Header />
      </header>
      
      <main className="relative">
        <BusTrackingLanding />
      </main>

      <main className='bg-gradient-to-b from-[#1F242C] to-[#151A23] rounded-t-[80px]'>
        <ProductSection/>
        <SoftwareService/>
          <Pricing />
          <Testimonials/>
          <ContactUs/>
      </main>

      

      
    </div>
  )
}

export default App;