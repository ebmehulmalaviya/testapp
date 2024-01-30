import axios from "axios";
import { ADD_CHALLAN, DELETE_CHALLAN, GET_CHALLAN, GET_CHALLAN_OBJ, UPDATE_CHALLAN } from "../Constant/constant"


export const getChallan = (data) => {
    return {
        type: GET_CHALLAN,
        data
    }
}
export const addChallan = (data) => {
    return {
        type: ADD_CHALLAN,
    }
}
export const editchallan = (data) => {
    return {
        type: UPDATE_CHALLAN,
    }
}
export const deleteChallan = (data) => {

    return {
        type: DELETE_CHALLAN,
    }
}
export const getChallanObj = (data) => {
    return {
        type: GET_CHALLAN_OBJ,
        data
    }
}




export const getchallanData = () => {
    return (dispatch) => {
        axios.get('http://localhost:3004/challan')
            .then((res) => {
                console.log('getChallan', res.data)
                dispatch(getChallan(res.data))
            })
    }
}
export const newAddChallan = (data) => {
    return (dispatch) => {
        axios.post("http://localhost:3004/challan", data)
            .then(async (res) => {
                await dispatch(addChallan(res.data))
                await dispatch(getchallanData())
            })
    }
}
export const getChallanObject = (id) => {
    return (dispatch) => {
        axios.get(`http://localhost:3004/challan/${id}`)
            .then((res) => {
                console.log('get single object', res.data)
                dispatch(getChallanObj(res.data))
            })
            .catch((err) => {
                console.log("delete request failed", err);
            });
    }
}
export const editechallans = (id, payload) => {
    console.log('api edite data', id, payload);
    return (dispatch) => {
        axios.put('http://localhost:3004/challan/' + id, payload)
            .then(async (res) => {
                await dispatch(editchallan(res.data))
                await dispatch(getchallanData())
            })
            .catch((err) => {
                console.log("delete request failed", err);
            });
    }
}

export const removeChallan = (id) => {
    return (dispatch) => {
        axios.delete(`http://localhost:3004/challan/${id}`)
            .then(async (res) => {
                await dispatch(deleteChallan(res.data));
                await dispatch(getchallanData())
            })
            .catch((err) => {
                console.log("delete request failed", err);
            });
    };
};
