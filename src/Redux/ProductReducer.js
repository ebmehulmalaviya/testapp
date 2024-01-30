/* eslint-disable default-case */
import { GET_PRODUCT_LIST, ADD_PRODUCT, UPDATE_PRODUCT, DELETE_PRODUCT, GET_PRODUCT_OBJ } from './ActionType'

const initialstate = {
    productList: [],
    productobj: {},
}

export const ProductReducer = (state = initialstate, action) => {
    switch (action.type) {
        case ADD_PRODUCT:
            return {
                ...state,
                productList: action.data
            }
        case GET_PRODUCT_LIST:
            return {
                ...state,
                productList: action.data
            }
        case UPDATE_PRODUCT:
            return {
                ...state
            }
        case DELETE_PRODUCT:
            return {
                ...state
            }
        case GET_PRODUCT_OBJ:
            return {
                ...state,
                productobj: action.data
            }

        default:
            return { ...state }
    }

}