import { all, call } from "redux-saga/effects";
import { onProductGet, onSearchUser } from "./productSaga";

function* rootSaga() {
  yield all([call(onProductGet), call(onSearchUser)]);
}

export default rootSaga;
