export const fetchCategorySeed = (state = [], action) => {
    switch (action.type) {
        case 'FETCH_SEED':
            return action.payload;
        default:
            return state;
    }
}
export const fetchCategoryHerbicide = (state = [], action) => {
    switch (action.type) {
        case 'FETCH_HERBICIDE':
            return action.payload;
        default:
            return state;
    }
}
export const fetchCategoryFungicide = (state = [], action) => {
    switch (action.type) {
        case 'FETCH_FUNGICIDE':
            return action.payload;
        default:
            return state;
    }
}
export const fetchCategoryFertilizer = (state = [], action) => {
    switch (action.type) {
        case 'FETCH_FERTILIZER':
            return action.payload;
        default:
            return state;
    }
}
export const fetchCategoryInsecticide = (state = [], action) => {
    switch (action.type) {
        case 'FETCH_INSECTICIDE':
            return action.payload;
        default:
            return state;
    }
}
export const fetchCategoryOther = (state = [], action) => {
    switch (action.type) {
        case 'FETCH_OTHER':
            return action.payload;
        default:
            return state;
    }
}

export const fetchCategoryAll = (state = [], action) => {
    switch (action.type) {
        case 'FETCH_CATEGORY':
            return action.payload;
        default:
            return state;
    }
}

export const fetchFeaturedProducts = (state = [], action) => {
    switch (action.type) {
        case 'FETCH_FEATURED':
            return action.payload;
        default:
            return state;
    }
}
