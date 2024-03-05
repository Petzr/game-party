// import AppRoutes from './AppRoutes';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import About from './pages/About'
import Home from './pages/Home'
import Layout from './pages/Layout'
import NoPage from './pages/NoPage'

import './App.css';

function App() {
  return (
    <>
    <BrowserRouter>
  
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
