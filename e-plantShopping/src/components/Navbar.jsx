import { Link, NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectCartCount } from '../redux/CartSlice'


export default function Navbar() {
    const count = useSelector(selectCartCount)
    return (
        <header className="nav">
            <nav className="nav-inner">
                <NavLink to="" className="brand">Paradise Nursery</NavLink>
                <div className="links">
                    <NavLink to="plants">Plants</NavLink>
                    <Link to="cart" className="cart-link">
                        <span className="cart-icon">🛒</span>
                        <span className="cart-count">{count}</span>
                    </Link>
                </div>
            </nav>
        </header>
    )
}