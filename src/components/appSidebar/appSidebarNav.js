import { Link, useLocation } from "react-router-dom";

export default function AppSidebarNav({ navItem }) {
  const router = useLocation();
  const { link, title, icon: Icon } = navItem;
  const isActive = router.pathname === navItem.link;
  return (
    <>
      <Link to={link}>
        <li
          className={` ${
            isActive
              ? "text-black font-bold bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400"
              : "text-gray-800 font-serif  hover:bg-gray-600 hover:text-gray-200 hover:underline-offset-2"
          } flex items-center mt-5  space-x-4  rounded-md p-2 cursor-pointer
             
           
              `}
        >
          <Icon className="h-6 w-6" />
          <span>{title}</span>
        </li>
      </Link>
    </>
  );
}
