import axios from 'axios'


export const fetchProduct = (category,id) => async dispatch => {

    const response = await axios.get(`/shop/${category}/${id}`);
    dispatch({ type: 'FETCH_PRODUCT', payload: response.data })
}

