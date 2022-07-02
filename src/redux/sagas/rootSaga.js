import { all, call } from "redux-saga/effects";
import {
  onAddProduct,
  onCategoryProduct,
  onDeleteProduct,
  onProductGet,
  onSearchUser,
  onUpdateProduct,
} from "./productSaga";

function* rootSaga() {
  yield all([
    call(onProductGet),
    call(onSearchUser),
    call(onCategoryProduct),
    call(onUpdateProduct),
    call(onDeleteProduct),
    call(onAddProduct),
  ]);
}

export default rootSaga;
