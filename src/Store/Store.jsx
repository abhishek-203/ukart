import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga"

import RootReducer from "./Reducers/RootReducer";
import RootSaga from "./Sagas/RootSaga";

const sagaMiddlerware = createSagaMiddleware()
const myStore = configureStore({
    reducer: RootReducer,
    middleware :()=>[sagaMiddlerware]
})
export default  myStore
sagaMiddlerware.run(RootSaga)