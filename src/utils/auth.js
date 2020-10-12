export const authMiddleWare = (history) => {
    const authToken = localStorage.getItem('sessionCookie');
    if(!authToken){
        history.push('/login')
        window.location.reload(false)
    }
}