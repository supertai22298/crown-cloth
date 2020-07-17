export const addItemToCart = (cartItems, itemAddedToCart) => {
  const existingItem = cartItems.find(
    (cartItem) => cartItem.id === itemAddedToCart.id
  )

  if (existingItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === itemAddedToCart.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    )
  }
  return [...cartItems, { ...itemAddedToCart, quantity: 1 }]
}
export const clearItemFromCart = (cartItems, itemId) => {
  return cartItems.filter(cartItem => cartItem.id !== itemId)
}