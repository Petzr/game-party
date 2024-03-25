// import AppRoutes from './AppRoutes';
import { Route, Routes, Link, Outlet, BrowserRouter } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { useTheme } from "next-themes"

import Home from './pages/Home'
import AppRoutes from './AppRoutes'
import NoPage from './pages/NoPage'
import './App.css';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from './components/ui/dropdown-menu';
import { Button } from "./components/ui/button"

import { Moon, Sun, Menu } from "lucide-react"


export function ThemeToggle() {
  const { setTheme } = useTheme()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

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
              <DropdownMenuTrigger>
                <Menu className='text-white' />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem onClick={() => navigate('/#about')}>About</DropdownMenuItem>
                <DropdownMenuItem onClick={() => navigate('/game')}>Join Game</DropdownMenuItem>
                <DropdownMenuItem onClick={() => navigate('/create-game')}>Create Game</DropdownMenuItem>
                <DropdownMenuItem onClick={() => navigate('/register')}>Register</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <ThemeToggle />
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
