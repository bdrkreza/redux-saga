import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { setUpdate } from "../../../redux/slice/ProductSlice";

const initialState = {
  title: "",
  brand: "",
  price: 0,
  stock: 0,
  rating: 0,
  discountPercentage: 0,
  category: "",
  thumbnail: "https://i.pravatar.cc",
  description: "",
};

export default function AddFormLayout({ setOpen }) {
  const dispatch = useDispatch();
  const { state } = useLocation();
  const navigate = useNavigate();
  const [formValue, setFormValue] = useState(initialState);
  const [editMode, setEditMode] = useState(false);

  const {
    id,
    title,
    brand,
    price,
    rating,
    stock,
    category,
    discountPercentage,
    thumbnail,
    description,
  } = formValue;
  const onChange = (e) => {
    setFormValue({ ...formValue, [e.target.name]: e.target.value });
  };

  // redux use Selection hook
  const productId = useSelector((state) => state.products.data.length);

  const handleSubmit = (e) => {
    e.preventDefault();

    const formUpdate = {
      id,
      title,
      brand,
      price: parseInt(price),
      discountPercentage: parseInt(discountPercentage),
      rating: parseInt(rating),
      stock: parseInt(stock),
      category,
      thumbnail,
      description,
    };

    if (formUpdate) {
      if (!editMode) {
        const formData = {
          id: productId + 1,
          title,
          brand,
          price: parseInt(price),
          discountPercentage: parseInt(discountPercentage),
          rating: parseInt(rating),
          stock: parseInt(stock),
          category,
          thumbnail: "https://i.pravatar.cc",
          description,
        };
        console.log(formData);
        setTimeout(() => setOpen(false), 500);
      } else {
        dispatch(setUpdate({ id, formUpdate }));
        console.log(formUpdate);
        setTimeout(() => setOpen(false), 500);
      }
    }

    // dispatch(createProduct(formData));
    navigate("/product", { replace: true });
  };
  useEffect(() => {
    if (state) {
      setEditMode(true);
      setFormValue({ ...state });
    }
  }, [state]);
  return (
    <div>
      <>
        <div className="flex items-center justify-center mb-2">
          <span className="inline-block h-16 w-28 rounded-sm overflow-hidden bg-gray-100">
            {editMode ? (
              <img class="rounded-t-lg w-full h-full " src={thumbnail} alt="" />
            ) : (
              <svg
                className="h-full w-full text-gray-300"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            )}
          </span>
          <button
            type="button"
            className="ml-5 bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            add thumbnail
          </button>
        </div>
      </>
      <form class="w-full max-w-lg" onSubmit={handleSubmit}>
        <div class="flex flex-wrap -mx-3 mb-6 space-y-2">
          <div class="w-full md:w-1/2 px-3 mt-2 ">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-first-name"
            >
              Product Name
            </label>
            <input
              onChange={onChange}
              value={title || ""}
              class="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4  leading-tight focus:outline-none focus:bg-white"
              id="grid-first-name"
              type="text"
              name="title"
              placeholder="apple ..."
              required
            />
            {/* <p class="text-red-500 text-xs italic">
              Please fill out this field.
            </p> */}
          </div>
          <div class="w-full md:w-1/2 px-3">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-last-name"
            >
              brand name
            </label>
            <input
              defaultValue={brand || ""}
              onChange={onChange}
              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name"
              type="text"
              name="brand"
              placeholder="brand Name.."
              required
            />
          </div>
          <div class="w-full md:w-1/2 px-3">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-last-name"
            >
              category
            </label>
            <input
              defaultValue={category || ""}
              onChange={onChange}
              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name"
              type="text"
              name="category"
              placeholder="category Name.."
              required
            />
          </div>
          <div class="w-full md:w-1/2 px-3">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-last-name"
            >
              rating
            </label>
            <input
              defaultValue={rating || ""}
              onChange={onChange}
              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name"
              type="text"
              name="rating"
              placeholder="rating....."
              required
            />
          </div>
          <div class="w-full md:w-1/2 px-3">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-last-name"
            >
              price
            </label>
            <input
              defaultValue={price || ""}
              onChange={onChange}
              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name"
              type="text"
              name="price"
              placeholder="Price....."
              required
            />
          </div>
          <div class="w-full md:w-1/2 px-3">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-last-name"
            >
              discount Price
            </label>
            <input
              defaultValue={discountPercentage || ""}
              onChange={onChange}
              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name"
              type="text"
              name="discountPercentage"
              placeholder=" discount Price.."
              required
            />
          </div>
          <div class="w-full md:w-1/2 px-3">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-last-name"
            >
              stock
            </label>
            <input
              defaultValue={stock || ""}
              onChange={onChange}
              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name"
              type="number"
              name="stock"
              placeholder=" stock number.."
              required
            />
          </div>
        </div>
        <div>
          <label
            htmlFor="about"
            className="block text-sm uppercase font-medium text-gray-700"
          >
            description
          </label>
          <div className="mt-1">
            <textarea
              defaultValue={description || ""}
              onChange={onChange}
              name="description"
              rows={3}
              className="shadow-sm appearance-none focus:outline-none  focus:border mt-1 block w-full sm:text-sm border  rounded-md"
              placeholder=" Enter product description"
              required
            />
          </div>
        </div>
        <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
          <button
            type="button"
            className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
            onClick={() => {
              setOpen(false);
            }}
          >
            cancel
          </button>
          <button
            type="submit"
            className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
          >
            {editMode ? "Update" : "AddProduct"}
          </button>
        </div>
      </form>
    </div>
  );
}
