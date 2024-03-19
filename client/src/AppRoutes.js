import About from './pages/About';
import ScoreBord from './pages/Scorebord';
import Register from './pages/Register';
import Duel from './pages/Duel';

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
]

export default AppRoutes;