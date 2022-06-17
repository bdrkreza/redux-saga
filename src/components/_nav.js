import { AiFillProject } from "react-icons/ai";
import { FcDepartment } from "react-icons/fc";
import { FiUsers } from "react-icons/fi";
import { MdDashboard } from "react-icons/md";

const _nav = [
  { title: "Dashboard", link: "/", icon: MdDashboard },
  { title: "Product", link: "/product", icon: AiFillProject },
  { title: "EditProduct", link: "/edit_product", icon: FiUsers },
  { title: "Department", link: "/department/department", icon: FcDepartment },
];

export default _nav;
