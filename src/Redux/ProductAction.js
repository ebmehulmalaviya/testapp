import axios from 'axios'
import { GET_PRODUCT_LIST, ADD_PRODUCT, UPDATE_PRODUCT, DELETE_PRODUCT, GET_PRODUCT_OBJ } from './ActionType'

export const getproduct = (data) => {
    return {
        type: GET_PRODUCT_LIST,
        data
    }
}
export const addproduct = (data) => {
    console.log('addproduct', data);
    return {
        type: ADD_PRODUCT,
        data
    }
}
export const deleteproduct = () => {
    console.log('deleteproduct');
    return {
        type: DELETE_PRODUCT,
    }
}
export const updateproduct = (data) => {
    console.log('updateproduct', data);
    return {
        type: UPDATE_PRODUCT,
        data
    }
}
export const getuserobject = (data) => {
    console.log('getuserobject', data);
    return {
        type: GET_PRODUCT_OBJ,
        data
    }
}


export const FetchProduct = () => {
    return (dispatch) => {
        axios.get('http://localhost:8000/product').then((res) => {
            dispatch(getproduct(res.data))
        }
        )
    }
}
export const DeleteProduct = (id) => {
    return (dispatch) => {
        axios.delete('http://localhost:8000/product/' + id).then((res) => {
            dispatch(deleteproduct())
        }
        )
    }
}
export const addProducts = (item) => {
    return (dispatch) => {
        axios.post('http://localhost:8000/product', item).then((res) => {
            console.log("adduser", res);
            dispatch(addproduct())
        }
        )
    }
}
export const getProductobj = (id) => {
    return (dispatch) => {
        axios.get('http://localhost:8000/product/' + id).then((res) => {
            console.log("getProductobj", res.data);
            dispatch(getuserobject(res.data))
        }
        )
    }
}
export const updateProduct = (item, id) => {
    console.log("update Data", item, id);
    return (dispatch) => {
        axios.put('http://localhost:8000/product/' + id, item).then((res) => {
            console.log('update call', res);
            dispatch(updateproduct())
        }
        )
    }
}