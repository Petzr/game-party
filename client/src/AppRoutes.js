import About from './pages/About';
import ScoreBord from './pages/Scorebord';
import Register from './pages/Register';
import Duel from './pages/Duel';
import Menu from './pages/Menu';

const AppRoutes = [
    {
        path: 'about',
        element: <About />
    },
    {
        path: 'scorebord',
        element: <ScoreBord />
    },
    {
        path: 'duel',
        element: <Duel />
    },
    {
        path: 'register',
        element: <Register />
    },
    {
        path: 'menu',
        element: <Menu />
    },
]

export default AppRoutes;