import { takeEvery } from "redux-saga/effects";
import { USER_LIST } from "./constant";

function* userList() {
    console.warn("saga function called")
}


function* SagaData() {
    yield takeEvery(USER_LIST, userList)
}
export default SagaData