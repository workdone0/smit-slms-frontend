var cart = []

const cartReducer = (state = cart, action) => {
            switch (action.type) {
                case 'SET_CART':
                    return {
                        cart: action.payload,
                    }
                default:
                    return state;    
            }
        }

export default cartReducer;