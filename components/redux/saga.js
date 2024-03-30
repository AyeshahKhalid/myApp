import { takeEvery,put } from "redux-saga/effects";
import { SET_USER_DATA, USER_LIST } from "./constant";

function* userList() {
    // console.warn("saga function called")
    const url="https://dummyjson.com/user"
    let result=yield fetch(url)
    result=yield result.json()
    yield put({type:SET_USER_DATA,result}) //yiield will connect put with reducer
}


function* SagaData() {
    yield takeEvery(USER_LIST, userList)
}
export default SagaData