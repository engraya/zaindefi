import Footer from '../components/Footer';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/NavBar';

function MainLayout() {
  return (
    <div className="flex flex-col min-h-screen bg-[#1D1E2B]">
      <Navbar />
      <main className="w-full px-4 py-4 md:px-20 md:py-8 lg:px-32 lg:py-12">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default MainLayout; 