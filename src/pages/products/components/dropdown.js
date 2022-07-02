/* This example requires Tailwind CSS v2.0+ */
import { Listbox, Transition } from "@headlessui/react";
import { Fragment, useEffect, useState } from "react";
import { FcCheckmark } from "react-icons/fc";
import { HiOutlineSelector } from "react-icons/hi";
import { useDispatch } from "react-redux";
import { getCategory } from "../../../redux/slice/ProductSlice";
const productCategory = [
  {
    id: 0,
    category: "select category",
  },
  {
    id: 1,
    category: "smartphones",
  },

  {
    id: 2,
    category: "laptops",
  },
  {
    id: 3,
    category: "fragrances",
  },
  {
    id: 4,
    category: "skincare",
  },
  {
    id: 5,
    category: "groceries",
  },
  {
    id: 6,
    category: "home-decoration",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Dropdown() {
  const dispatch = useDispatch();
  const [category, setCategory] = useState(productCategory[0]);

  useEffect(() => {
    dispatch(getCategory(category.category));
  }, [dispatch, category]);

  return (
    <Listbox value={category} onChange={setCategory}>
      {({ open }) => (
        <>
          <div className="relative">
            <Listbox.Button className="relative w-full min-w-[180px] bg-indigo-500 border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500">
              <span className="flex items-center">
                <span className="ml-3 block text-white font-semibold ">
                  {category.category}
                </span>
              </span>
              <span className="ml-3 absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                <HiOutlineSelector
                  className="h-5 w-5 text-white"
                  aria-hidden="true"
                />
              </span>
            </Listbox.Button>

            <Transition
              show={open}
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-56 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
                {productCategory.map((ctg) => (
                  <Listbox.Option
                    key={ctg.id}
                    className={({ active }) =>
                      classNames(
                        active ? "text-white bg-indigo-600" : "text-gray-900",
                        "cursor-default select-none relative py-2 pl-3 pr-9"
                      )
                    }
                    value={ctg}
                  >
                    {({ category, active }) => (
                      <>
                        <div className="flex items-center">
                          <span
                            className={classNames(
                              category ? "font-semibold" : "font-normal",
                              "ml-3 block truncate"
                            )}
                          >
                            {ctg.category}
                          </span>
                        </div>

                        {category ? (
                          <span
                            className={classNames(
                              active ? "text-white" : "text-indigo-600",
                              "absolute inset-y-0 right-0 flex items-center pr-4"
                            )}
                          >
                            <FcCheckmark
                              className="h-5 w-5"
                              aria-hidden="true"
                            />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </>
      )}
    </Listbox>
  );
}
