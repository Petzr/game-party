import About from './pages/About';
import ScoreBord from './pages/Scorebord';
import Register from './pages/Register';
import Duel from './pages/Duel';
import GameMenu from './pages/GameMenu';

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
        path: 'game',
        element: <GameMenu />
    }
]

export default AppRoutes;