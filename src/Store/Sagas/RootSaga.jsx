import {all} from "redux-saga/effects"
import maincategorySaga from "./MaincategorySagas"

export default  function*  RootSaga(){
    yield all([
        maincategorySaga()
    ])
}