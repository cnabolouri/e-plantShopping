import { useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { selectCartItems, selectCartCount, selectCartTotal, updateQuantity, removeItem } from '../redux/CartSlice'


export default function CartItems() {
const dispatch = useDispatch()
const navigate = useNavigate()
const items = useSelector(selectCartItems)
const totalCount = useSelector(selectCartCount)
const totalCost = useSelector(selectCartTotal)


const format = (n) => `$${n.toFixed(2)}`


const handleContinueShopping = () => navigate('/plants')
const handleCheckoutShopping = () => alert('Functionality to be added for future reference')


const handleIncrement = (name, currentQty) => {
dispatch(updateQuantity({ name, amount: currentQty + 1 }))
}


const handleDecrement = (name, currentQty) => {
if (currentQty > 1) {
dispatch(updateQuantity({ name, amount: currentQty - 1 }))
} else {
dispatch(removeItem(name))
}
}


const handleRemove = (name) => dispatch(removeItem(name))


const rows = useMemo(() => items.map((it) => ({
...it,
subtotal: it.quantity * it.price,
})), [items])


return (
<section className="container">
<h2>Your Cart</h2>
<div className="cart-summary">
<div><strong>Total items:</strong> {totalCount}</div>
<div><strong>Total cost:</strong> {format(totalCost)}</div>
</div>


{rows.length === 0 ? (
<p>Your cart is empty. Browse <button className="linklike" onClick={handleContinueShopping}>plants</button>.</p>
) : (
<div className="cart-grid">
{rows.map((it) => (
<div className="cart-card" key={it.name}>
<img src={it.image} alt={it.name} />
<div className="cart-body">
<h4>{it.name}</h4>
<div className="unit">Unit price: <strong>{it.costText}</strong></div>
<div className="qty-row">
<button className="btn sm" onClick={() => handleDecrement(it.name, it.quantity)}>-</button>
<span className="qty">{it.quantity}</span>
<button className="btn sm" onClick={() => handleIncrement(it.name, it.quantity)}>+</button>
</div>
<div className="subtotal">Subtotal: <strong>{format(it.subtotal)}</strong></div>
<div className="actions">
<button className="btn outline" onClick={() => handleRemove(it.name)}>Delete</button>
</div>
</div>
</div>
))}
</div>
)}


<div className="cart-cta">
<button className="btn" onClick={handleContinueShopping}>Continue Shopping</button>
<button className="btn primary" onClick={handleCheckoutShopping}>Checkout</button>
</div>
</section>
)
}