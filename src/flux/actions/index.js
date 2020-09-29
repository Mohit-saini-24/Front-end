import axios from 'axios'


export const fetchPosters = () => async dispatch => {
    const response = await axios.get('/posters');
    // console.log(response.data)
    dispatch({ type: 'FETCH_POSTERS', payload: response.data })
}

export const fetchCategorySeed = () => async dispatch => {

    const response = await axios.get('/category/Seed');
    dispatch({ type: 'FETCH_SEED', payload: response.data })
}

export const fetchCategoryHerbicide = () => async dispatch => {

    const response = await axios.get('/category/Herbicide');
    dispatch({ type: 'FETCH_HERBICIDE', payload: response.data })
}
export const fetchCategoryInsecticide = () => async dispatch => {

    const response = await axios.get('/category/Insecticide');
    dispatch({ type: 'FETCH_INSECTICIDE', payload: response.data })
}
export const fetchCategoryFungicide = () => async dispatch => {

    const response = await axios.get('/category/Fungicide');
    dispatch({ type: 'FETCH_FUNGICIDE', payload: response.data })
}
export const fetchCategoryFertilizer = () => async dispatch => {

    const response = await axios.get('/category/Fertilizer');
    dispatch({ type: 'FETCH_FERTILIZER', payload: response.data })
}
export const fetchCategoryOther = () => async dispatch => {

    const response = await axios.get('/category/Other');
    dispatch({ type: 'FETCH_OTHER', payload: response.data })
}

export const fetchCategoryAll = category => async dispatch => { 
    const response = await axios.get(`/shop/${category}`);
    dispatch({type:'FETCH_CATEGORY', payload: response.data})
}

export const fetchFeaturedProducts = () => async dispatch => {
    const response = await axios.get('/featuredProducts');
    dispatch({type:'FETCH_FEATURED', payload: response.data })
}