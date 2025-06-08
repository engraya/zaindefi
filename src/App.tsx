import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './layouts/Layout';
import Home from './pages/Home';
import MarketPlaceLayout from './layouts/MarketPlaceLayout';
import MarketPlace from './pages/MarketPlace';
import Overview from './pages/Overview';
import NotFound from './pages/NotFound/NotFound';
import Wallet from './pages/Wallet/Wallet';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="*" element={<NotFound />} /> 
        </Route>
        <Route path="/market-place" element={<MarketPlaceLayout />}>
          <Route index element={<MarketPlace />} />
          <Route path="overview" element={<Overview />} />
          <Route path="wallet" element={<Wallet />} />
          <Route path="*" element={<NotFound />} /> 
        </Route>
        <Route path="*" element={<NotFound />} /> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;