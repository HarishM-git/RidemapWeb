import BusTrackingLanding from './components/BusTrackingLanding';
import BusTrackingHero from './components/BusTrackingLanding';
import Header from './components/Header';
import ProductSection from './components/ProductSection';
import ProductShowcase from './components/ProductShowcase';
import logo from './assets/hari.png';
import GpsFeatureRadar from './components/GpsFeatureRadar';
function App() {
  return (
    <div className="w-[100%] bg-[#151A23]">
      <header className="sticky top-5 z-50 w-full ">
        <Header />
      </header>
      
      <main className="relative">
        <BusTrackingLanding />
        {/* <ProductSection/> */}
        {/* <ProductShowcase/> */}
        {/* <FeaturesGrid centerImage={logo}/> */}
        <GpsFeatureRadar/>
      </main>

      

      
    </div>
  )
}

export default App;