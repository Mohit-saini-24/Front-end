export default (state = [], action) => {
    switch(action.type){
        case 'FETCH_POSTERS':
            return action.payload;
        default:
            return state;
    }
};

