import { useState, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addItem, selectCartItems } from '../redux/CartSlice'
import { plantsArray } from '../data/plants'


export default function ProductList() {
    const dispatch = useDispatch()
    const cartItems = useSelector(selectCartItems)


    // Local state to mark buttons as disabled once added (per spec)
    const [addedToCart, setAddedToCart] = useState({})


    // Build category groups for section headings
    const categories = useMemo(() => {
        const map = new Map()
        plantsArray.forEach((p) => {
            if (!map.has(p.category)) map.set(p.category, [])
            map.get(p.category).push(p)
        })
        return Array.from(map.entries()) // [ [category, plants[]], ...]
    }, [])


    const alreadyInCart = (name) => cartItems.some((it) => it.name === name)


    const handleAddToCart = (plant) => {
        dispatch(addItem(plant))
        setAddedToCart((prev) => ({ ...prev, [plant.name]: true }))
    }


    return (
        <section className="container">
            <h2>Our Plants</h2>
            {categories.map(([cat, items]) => (
                <div key={cat} className="category-block">
                    <h3>{cat}</h3>
                    <div className="product-grid">
                        {items.map((plant) => {
                            const disabled = addedToCart[plant.name] || alreadyInCart(plant.name)
                            return (
                                <div className="card" key={plant.name}>
                                    <img src={plant.image} alt={plant.name} />
                                    <div className="card-body">
                                        <h4>{plant.name}</h4>
                                        <p className="desc">{plant.description}</p>
                                        <div className="price-row">
                                            <span className="price">{plant.costText}</span>
                                            <button
                                                className="btn add"
                                                onClick={() => handleAddToCart(plant)}
                                                disabled={disabled}
                                                aria-disabled={disabled}
                                                title={disabled ? 'Added to Cart' : 'Add to Cart'}
                                            >
                                                {disabled ? 'Added to Cart' : 'Add to Cart'}
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            ))}
        </section>
    )
}