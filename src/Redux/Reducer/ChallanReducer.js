/* eslint-disable default-case */
import { DELETE_CHALLAN, GET_CHALLAN, GET_CHALLAN_OBJ, ADD_CHALLAN, UPDATE_CHALLAN } from "../Constant/constant"
const initialstate = {
    setLoadding: false,
    seterror: '',
    challanList: [],
    challanObj: {}

}

export const ChallanReducer = (state = initialstate, action) => {
    switch (action.type) {
        case GET_CHALLAN:
            return {
                ...state,
                challanList: action.data
            }
        case ADD_CHALLAN: {
            return {
                ...state,
            }
        }
        case GET_CHALLAN_OBJ:
            return {
                ...state,
                challanObj: action.data
            }
        case UPDATE_CHALLAN:
            return {
                ...state,
            }
        case DELETE_CHALLAN:
            return {
                ...state
            }
        default: return state
    }
}