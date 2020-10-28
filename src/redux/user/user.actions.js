export const setCurrentUser = (user,isLoggedIn) => ({
    type: 'SET_CURRENT_USER',
    payload: {user:user, isLoggedIn: isLoggedIn}
});
