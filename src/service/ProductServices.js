import axios from "axios";
import requests from "./http_service";

class ProductService {
  getProducts() {
    return requests.get("/products");
  }

  getProductByID(id) {
    return requests.get(`/products/${id}`);
  }
  getProductByCategory(category) {
    return requests.get(`/products?category=${category}`);
  }
  getProductBySearch(query) {
    return requests.get(`/products?q=${query}`);
  }

  addProduct(body) {
    return requests.post(`/products`, body);
  }

  updateProduct(id, body) {
    return requests.put(`/products/${id}`, body);
  }

  deleteProduct(id) {
    return requests.delete(`/products/${id}`);
  }
}

export const loadProductApi = async () =>
  await axios.get(`http://localhost:5000/products`);

export default new ProductService();
