/* eslint-disable jsx-a11y/anchor-is-valid */

import { useState } from "react";
import { useDispatch } from "react-redux";
import { getSearch } from "../../redux/slice/ProductSlice";

export default function AppNavbar() {
  const dispatch = useDispatch();
  // const [profile, setProfile] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(getSearch(searchTerm));
    console.log(searchTerm);
    setSearchTerm("");
  };

  return (
    <>
      <nav class="bg-gray-200 h-16">
        <div class="flex flex-wrap items-center">
          <div class="flex flex-shrink md:w-1/3 justify-center md:justify-start text-white">
            <span class="text-xl pl-2">
              <i class="em em-grinning"></i>
            </span>
          </div>

          <div class="md:w-1/3 justify-center md:justify-start text-gray-900 px-2 mt-1 rounded-lg border border-gray-500">
            {/* <form onSubmit={handleSubmit} class="relative w-full">
              <input
                onChange={(e) => setSearchTerm(e.target.value)}
                value={searchTerm}
                aria-label="search"
                type="search"
                id="search"
                placeholder="Search"
                class="w-full bg-gray-500 text-white transition border border-transparent focus:outline-none focus:border-gray-400  rounded py-3 px-2 pl-10 appearance-none leading-normal"
              />
              <div class="absolute ml-[500px] -mt-9 cursor-pointer">
                <svg
                  class="fill-current pointer-events-none text-pink-100 w-8 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"></path>
                </svg>
              </div>
            </form> */}
            <form onSubmit={handleSubmit}>
              <label
                for="default-search"
                class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300"
              >
                Search
              </label>
              <div class="relative">
                <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                  <svg
                    class="w-5 h-5 text-gray-500 dark:text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    ></path>
                  </svg>
                </div>
                <input
                  onChange={(e) => setSearchTerm(e.target.value)}
                  value={searchTerm}
                  type="search"
                  id="default-search"
                  class="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Search"
                />
                <button
                  type="submit"
                  class="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Search
                </button>
              </div>
            </form>
          </div>

          <div class="flex w-full pt-2 content-center justify-between md:w-1/3 md:justify-end">
            <ul class="list-reset flex justify-between flex-1 md:flex-none items-center">
              <li class="flex-1 md:flex-none md:mr-3">
                <a
                  class="inline-block py-2 px-4 text-white no-underline"
                  href="#"
                >
                  Active
                </a>
              </li>
              <li class="flex-1 md:flex-none md:mr-3">
                <a
                  class="inline-block text-gray-400 no-underline hover:text-gray-200 hover:text-underline py-2 px-4"
                  href="#"
                >
                  link
                </a>
              </li>
              <li class="flex-1 md:flex-none md:mr-3">
                <div class="relative inline-block">
                  <button
                    onclick="toggleDD('myDropdown')"
                    class="drop-button text-white py-2 px-2"
                  >
                    {" "}
                    <span class="pr-2">
                      <i class="em em-robot_face"></i>
                    </span>{" "}
                    Hi, User{" "}
                    <svg
                      class="h-3 fill-current inline"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </button>
                  <div
                    id="myDropdown"
                    class="dropdownlist absolute bg-gray-800 text-white right-0 mt-3 p-3 overflow-auto z-30 invisible"
                  >
                    <input
                      type="text"
                      class="drop-search p-2 text-gray-600"
                      placeholder="Search.."
                      id="myInput"
                      onkeyup="filterDD('myDropdown','myInput')"
                    />
                    <a
                      href="#"
                      class="p-2 hover:bg-gray-800 text-white text-sm no-underline hover:no-underline block"
                    >
                      <i class="fa fa-user fa-fw"></i> Profile
                    </a>
                    <a
                      href="#"
                      class="p-2 hover:bg-gray-800 text-white text-sm no-underline hover:no-underline block"
                    >
                      <i class="fa fa-cog fa-fw"></i> Settings
                    </a>
                    <div class="border border-gray-800"></div>
                    <a
                      href="#"
                      class="p-2 hover:bg-gray-800 text-white text-sm no-underline hover:no-underline block"
                    >
                      <i class="fas fa-sign-out-alt fa-fw"></i> Log Out
                    </a>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
