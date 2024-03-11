import About from './pages/About';
import ScoreBord from './pages/Scorebord';
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
]

export default AppRoutes;