import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Layout from './pages/Layout';
import Header from './component/Header';
import Explore from './pages/Explore';
import Map from './pages/Map';
import NoPage from './pages/Nopage';

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <div className="container">
        <Routes>
          <Route path="/">
            <Route index element={<Explore />} />
            <Route path="explore/event" element={<Explore />} />
            <Route path="map" element={<Map />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>

      </div>
    </BrowserRouter>
  );
}

export default App;
