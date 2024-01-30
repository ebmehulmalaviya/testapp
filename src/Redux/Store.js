import { configureStore, combineReducers } from "@reduxjs/toolkit";
import logger from "redux-logger";
import thunk from "redux-thunk";
import { Reducer } from "./Reducer";
import { ProductReducer } from "./ProductReducer";
import { ChallanReducer } from "./Reducer/ChallanReducer";

const rootreducer = combineReducers({ user: Reducer, product: ProductReducer, challan: ChallanReducer });
const Store = configureStore({ reducer: rootreducer, middleware: [thunk, logger] })
export default Store;