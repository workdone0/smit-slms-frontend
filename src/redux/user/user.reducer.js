const INITIAL_STATE = {
    currentUser: null,
    isLoggedIn: false,
}

const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'SET_CURRENT_USER':
            return {
                currentUser: action.payload.user,
                isLoggedIn: action.payload.isLoggedIn,
            }
        default:
            return state;    
    }
}

export default userReducer;