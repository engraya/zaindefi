import Footer from '../components/Footer'; 
import MarketPlaceNavigation from '../components/MarketPlace/MarketPlaceNavigation';
import { Outlet } from 'react-router-dom';

function MarketPlaceLayout() {
  return (
    <div className="flex flex-col min-h-screen bg-[#1D1E2B]">
      <MarketPlaceNavigation />
      <main className="w-full px-4 py-4 md:px-20 md:py-8 lg:px-32 lg:py-12">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default MarketPlaceLayout;
