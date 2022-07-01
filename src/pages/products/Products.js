import { useEffect, useState } from "react";
import { FiCheck } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../../redux/slice/ProductSlice";
import AddProduct from "./components/addProduct";
import ProductCart from "./components/productCart";

export default function Products() {
  const [open, setOpen] = useState(false);
  const { data } = useSelector((state) => state.products);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProduct());
  }, [dispatch]);

  return (
    <div className="p-5">
      <div className="mt-5 flex justify-end  lg:mt-0 lg:ml-4">
        <span className="sm:ml-3">
          <button
            onClick={() => setOpen(true)}
            type="button"
            className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            <FiCheck className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
            addProduct
          </button>
        </span>
      </div>
      <AddProduct setOpen={setOpen} open={open} />
      {data.length === 0 ? (
        <div className="text-2xl font-bold text-pink-700 text-center">
          No Data Found please reload page
        </div>
      ) : (
        <div className="flex flex-wrap gap-10">
          {data?.map((product) => (
            <ProductCart product={product} key={product.id} />
          ))}
        </div>
      )}
    </div>
  );
}
