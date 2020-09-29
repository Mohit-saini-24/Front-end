import { combineReducers } from 'redux';
import fetchPosters from './fetchPosters';
import {
    fetchCategorySeed,
    fetchCategoryHerbicide,
    fetchCategoryFungicide,
    fetchCategoryInsecticide,
    fetchCategoryFertilizer,
    fetchCategoryOther,
    fetchCategoryAll,
    fetchFeaturedProducts
} from './fetchCategory'
// import fetchUsers from './fetchUsers';
import fetchProduct from './fetchProduct'
import FeaturedProducts from '../../components/Shop/home/FeaturedProducts';

export default combineReducers ({
    posters: fetchPosters,
    seed: fetchCategorySeed,
    herbicide: fetchCategoryHerbicide,
    fungicide: fetchCategoryFungicide,
    insecticide: fetchCategoryInsecticide,
    fertilizer: fetchCategoryFertilizer,
    other: fetchCategoryOther,
    product: fetchProduct,
    categoryProducts: fetchCategoryAll,
    featuredProducts: fetchFeaturedProducts
})