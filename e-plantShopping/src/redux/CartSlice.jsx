import { createSlice } from '@reduxjs/toolkit'


// Each item: { name, image, costText: "$12.99", price: 12.99, quantity }
const initialState = {
items: [],
}


const cartSlice = createSlice({
name: 'cart',
initialState,
reducers: {
addItem: (state, action) => {
const { name, image, costText, price } = action.payload
const existing = state.items.find((it) => it.name === name)
if (existing) {
existing.quantity += 1
} else {
state.items.push({ name, image, costText, price, quantity: 1 })
}
},
removeItem: (state, action) => {
const name = action.payload
state.items = state.items.filter((it) => it.name !== name)
},
updateQuantity: (state, action) => {
const { name, amount } = action.payload // amount is the target quantity
const item = state.items.find((it) => it.name === name)
if (item) {
if (amount <= 0) {
state.items = state.items.filter((it) => it.name !== name)
} else {
item.quantity = amount
}
}
},
clearCart: (state) => {
state.items = []
},
},
})


export const { addItem, removeItem, updateQuantity, clearCart } = cartSlice.actions


// Selectors
export const selectCartItems = (state) => state.cart.items
export const selectCartCount = (state) => state.cart.items.reduce((sum, it) => sum + it.quantity, 0)
export const selectCartTotal = (state) => state.cart.items.reduce((sum, it) => sum + it.quantity * it.price, 0)


export default cartSlice.reducer