const reducer = (state, action) => {
    if (action.type === 'CLEAR_CART') {
        return { ...state, Cart: [] }
    }
    if (action.type === 'REMOVE') {
        return { ...state, Cart: state.Cart.filter((cartitem) => cartitem.id != action.payload) }
    }
    if (action.type === 'INC') {
        let tempCart = state.Cart.map((cartItem) => {
            if (cartItem.id === action.payload) {
                return { ...cartItem, amount: cartItem.amount + 1 }
            }
            return cartItem;
        })
        return { ...state, Cart: tempCart }
    }
    if (action.type === 'DEC') {
        let tempCart = state.Cart.map((cartItem) => {
            if (cartItem.id === action.payload) {
                return { ...cartItem, amount: cartItem.amount - 1 }
            }
            return cartItem;
        }).filter((item) => item.amount !== 0)
        return { ...state, Cart: tempCart }
    }
    if (action.type === 'GET_TOTALS') {
        let { total, amount } = state.Cart.reduce((cartTotal , CartItem) => {
            const { price, amount } = CartItem ;
            const itemTotal = price * amount ;
            cartTotal.amount += amount ;
            cartTotal.total += itemTotal
            return cartTotal
        }, 
        {
            amount: 0,
            total: 0,
        });
        total = parseFloat(total.toFixed(2));
        return { ...state, total, amount }
    }

    return state
}


export default reducer;