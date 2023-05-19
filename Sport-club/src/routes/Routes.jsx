import {
    BrowserRouter,
    Routes,
    Route
} from 'react-router-dom'
import Suscribe from '../pages/suscribe/Suscribe'


const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Suscribe />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router