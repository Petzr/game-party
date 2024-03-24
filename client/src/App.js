// import AppRoutes from './AppRoutes';
import { Route, Routes, Link, Outlet, BrowserRouter } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import Home from './pages/Home'
import AppRoutes from './AppRoutes'
import NoPage from './pages/NoPage'
import './App.css';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from './components/ui/dropdown-menu';

function Layout() {
  let navigate = useNavigate()
  return (
    <>
      <nav className="bg-gray-600 py-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <Link to="/" className="text-white text-xl font-bold mr-6">Game Partyy</Link>
            <ul className="hidden md:flex space-x-4">
              <li><Link to="/#about" className="text-white hover:text-gray-400">About</Link></li>
              <li><Link to="/scorebord" className="text-white hover:text-gray-400"> Game</Link></li>
              <li><Link to="/register" className="text-white hover:text-gray-400">Join Game</Link></li>
            </ul>
          </div>
          <div className="md:hidden">
            <DropdownMenu>
              <DropdownMenuTrigger><i className="fa-solid fa-bars col text-white"></i></DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem onClick={() => navigate('/#about')}>About</DropdownMenuItem>
                <DropdownMenuItem onClick={() => navigate('/game')}>Join Game</DropdownMenuItem>
                <DropdownMenuItem onClick={() => navigate('/create-game')}>Create Game</DropdownMenuItem>
                <DropdownMenuItem onClick={() => navigate('/register')}>Register</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </nav>

      <main>
        <Outlet />
      </main>

      <footer className='p-10'>
        fakka neef dit is footer tekst ofz
        fakka neef dit is footer tekst ofz
        fakka neef dit is footer tekst ofz
        fakka neef dit is footer tekst ofz
        fakka neef dit is footer tekst ofz
        fakka neef dit is footer tekst ofz
        fakka neef dit is footer tekst ofz
        fakka neef dit is footer tekst ofz
      </footer>
    </>
  );
}

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
