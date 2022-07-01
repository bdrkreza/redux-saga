import { Route, Routes } from "react-router-dom";
import { AppLayout } from "./components";
import Dashboard from "./pages/dashboard/Dashboard";
import ViewProduct from "./pages/products/components/viewProduct";
import Products from "./pages/products/Products";

export default function AppRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="/product" element={<Products />} />
          <Route path="/view_product" element={<ViewProduct />} />
        </Route>
      </Routes>
    </div>
  );
}
