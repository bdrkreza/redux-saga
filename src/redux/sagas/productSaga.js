import { call, delay, put, takeLatest } from "redux-saga/effects";
import ProductServices from "../../service/ProductServices";
import {
  createProduct,
  deleteProduct,
  getProduct,
  getSearch,
  setAddProduct,
  setProduct,
  setUpdate,
} from "../slice/ProductSlice";

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
function* onAddProductStartAsync({ payload: body }) {
  console.log(body);
  try {
    const response = yield call(ProductServices.addProduct, body);
    yield delay(500);
    yield put(setAddProduct(response));
  } catch (error) {
    console.log(error);
  }
}

function* onUpdateProductStartAsync({ payload: { id, formUpdate } }) {
  try {
    const response = yield call(ProductServices.updateProduct, id, formUpdate);
    if (response.status === 200) {
      yield put(setUpdate(response));
    }
  } catch (error) {
    console.log(error);
  }
}
function* onDeleteProductStartAsync({ payload: { id } }) {
  try {
    const response = yield call(ProductServices.deleteProduct, id);
    if (response.status === 200) {
      yield put(deleteProduct(response));
    }
  } catch (error) {
    console.log(error);
  }
}

export function* onDeleteProduct() {
  yield takeLatest(deleteProduct.type, onDeleteProductStartAsync);
}
export function* onAddProduct() {
  yield takeLatest(createProduct.type, onAddProductStartAsync);
}

export function* onUpdateProduct() {
  yield takeLatest(setUpdate.type, onUpdateProductStartAsync);
}

export function* onProductGet() {
  yield takeLatest(getProduct.type, onProductStart);
}

export function* onSearchUser() {
  yield takeLatest(getSearch.type, onSearchProductStartAsync);
}
