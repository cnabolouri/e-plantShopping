import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Landing from './pages/Landing'
import ProductList from './pages/ProductList'
import CartItems from './pages/CartItems'


export default function App() {
    return (
        <div className="app">
            <Navbar />
            {/* <Landing /> */}
            <Routes>
                <Route index element={<Landing />} />
                {/* <Route path="" element={<Landing />} /> */}
                <Route path="*" element={<Landing />} />
                <Route path="plants" element={<ProductList />} />
                <Route path="cart" element={<CartItems />} />
            </Routes>
        </div>
    )
}