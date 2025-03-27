import { Routes, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage.jsx';
import CarBookingPage  from './Pages/CarBookingPage.jsx';
import CarPage from "./Pages/CarPage.jsx";
import Layout from "./Components/Layout/Layout.jsx";

function App() {
    return (
        <Routes>
            <Route element={<Layout/>}>
                <Route path="/" element={<HomePage />} />
                <Route path="/cars" element={<CarBookingPage />} />
                <Route path="/car/:id" element={<CarPage />} />
            </Route>
        </Routes>
    );
}

export default App;