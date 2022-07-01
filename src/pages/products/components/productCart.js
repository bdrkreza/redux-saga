import { useState } from "react";
import { FiDelete, FiLinkedin, FiPenTool } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deleteProduct } from "../../../redux/slice/ProductSlice";
import EditProduct from "../editProduct";

export default function ProductCart({ product }) {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  if (product.length === 0) {
    return <div>No Data found</div>;
  }
  return (
    <>
      <div
        key={product}
        class="max-w-md grid grid-cols-3 max-h-64 overflow-hidden bg-white rounded-lg mt-3 border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700"
      >
        <div className="">
          <img
            class="rounded-t-lg w-full h-52 "
            src={product.thumbnail}
            alt=""
          />
        </div>
        <div class="p-5 col-span-2 flex flex-col justify-between">
          <div>
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {product.title}
            </h5>

            <p class="mb-3 font-normal align-baseline line-clamp-3 text-gray-700 dark:text-gray-400">
              {product.description}
            </p>
            <p class="mb-3 font-semibold text-pink-700 dark:text-gray-400">
              ${product.price}
            </p>
          </div>
          <div className="flex justify-center items-center gap-2">
            <Link to="/view_product" state={product}>
              <button
                type="button"
                className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <FiLinkedin
                  className="-ml-1 mr-2 h-5 w-5 text-gray-500"
                  aria-hidden="true"
                />
                View
              </button>
            </Link>
            <Link to="" state={product}>
              <button
                onClick={() => setOpen(true)}
                type="button"
                className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <FiPenTool
                  className="-ml-1 mr-2 h-5 w-5 text-gray-500"
                  aria-hidden="true"
                />
                Edit
              </button>
            </Link>
            <EditProduct setOpen={setOpen} open={open} />
            <button
              onClick={() => dispatch(deleteProduct({ id: product.id }))}
              type="button"
              className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              delete
              <FiDelete
                className="ml-2 h-5 w-5 text-gray-500"
                aria-hidden="true"
              />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
