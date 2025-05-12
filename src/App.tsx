import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './layouts/Layout';
import Home from './pages/Home';
import MarketPlaceLayout from './layouts/MarketPlaceLayout';
import MarketPlace from './pages/MarketPlace';


function App() {

  
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
          </Route>
          <Route path="/market-place" element={<MarketPlaceLayout />}>
            <Route index element={<MarketPlace />} />
          </Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App;