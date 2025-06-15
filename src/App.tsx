import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './layouts/Layout';
import Home from './pages/Home';
import MarketPlaceLayout from './layouts/MarketPlaceLayout';
import MainLayout from './layouts/MainLayout';
import MarketPlace from './pages/MarketPlace';
import Overview from './pages/Overview';
import NotFound from './pages/NotFound/NotFound';
import Wallet from './pages/Wallet/Wallet';
import PostAdd from './pages/Wallet/PostAdd';
import CardDetails from './pages/CardDetails';
import Completed from './pages/Completed/Completed';
import BuyOrder from './pages/BuyOrder';
import SellOrder from './pages/SellOrder';
import PostConfirmation from './pages/PostConfirmation';
import PostSuccess from './pages/PostSuccess';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="*" element={<NotFound />} /> 
        </Route>
        
        {/* Main Layout for non-marketplace pages */}
        <Route path="/" element={<MainLayout />}>
          <Route path="overview" element={<Overview />} />
          <Route path="wallet" element={<Wallet />} />
          <Route path="post-add" element={<PostAdd />} />
          <Route path="completed" element={<Completed />} />
          <Route path="card/:id" element={<CardDetails />} />
        </Route>

        {/* Marketplace specific layout and routes */}
        <Route path="/market-place" element={<MarketPlaceLayout />}>
          <Route index element={<MarketPlace />} />
          <Route path="*" element={<NotFound />} /> 
        </Route>

        {/* Standalone pages without layout */}
        <Route path="/buy-order" element={<BuyOrder />} />
        <Route path="/sell-order" element={<SellOrder />} />
        <Route path="/post-confirmation" element={<PostConfirmation />} />
        <Route path="/post-success" element={<PostSuccess />} />
        
        <Route path="*" element={<NotFound />} /> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;