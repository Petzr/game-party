
import { Home } from './pages/Home';
import { About } from './pages/About';

const AppRoutes = [
    {
        index: true,
        element: <Home />
    },
    {
        path: '/voorstelling',
        element: <About />
    },
]

export default AppRoutes;