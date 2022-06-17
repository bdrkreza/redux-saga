import { call, delay, put, takeLatest } from "redux-saga/effects";
import ProductServices from "../../service/ProductServices";
import { getProduct, getSearch, setProduct } from "../slice/ProductSlice";

function* onProductStart() {
  try {
    const response = yield call(ProductServices.getProducts);
    yield delay(500);
    yield put(setProduct(response));
  } catch (error) {
    console.log(error);
  }
}
function* onSearchProductStartAsync({ payload: query }) {
  try {
    const response = yield call(ProductServices.getProductBySearch, query);
    yield delay(500);
    yield put(setProduct(response));
  } catch (error) {
    console.log(error);
  }
}

export function* onProductGet() {
  yield takeLatest(getProduct.type, onProductStart);
}

export function* onSearchUser() {
  yield takeLatest(getSearch.type, onSearchProductStartAsync);
}
