// import AppRoutes from './AppRoutes';
import { Route, Routes, BrowserRouter } from 'react-router-dom';

import Home from './pages/Home'
import AppRoutes from './AppRoutes'
import Layout from './pages/Layout'
import NoPage from './pages/NoPage'

import './App.css';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />

          {/* de routes worden gemakkelijk toegevoegd door de Approutes */}
          {AppRoutes.map((route) => {
            return <Route key={route} path={route.path} element={route.element} />
          })}

          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
