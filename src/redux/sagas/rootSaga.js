import { all, call } from "redux-saga/effects";
import {
  onDeleteProduct,
  onProductGet,
  onSearchUser,
  onUpdateProduct,
} from "./productSaga";

function* rootSaga() {
  yield all([
    call(onProductGet),
    call(onSearchUser),
    call(onUpdateProduct),
    call(onDeleteProduct),
  ]);
}

export default rootSaga;
