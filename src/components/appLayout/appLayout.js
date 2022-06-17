import { Outlet } from "react-router-dom";
import AppNavbar from "../appNavbar/appNavbar";
import AppSidebar from "../appSidebar/appSidebar";
import MobileSidebar from "../mobileSidebar/mobileSidebar";

export default function AppLayout() {
  return (
    <>
      <>
        <div className="grid grid-rows-3 grid-flow-col gap-4">
          {/* Sidebar starts */}
          <div className="fixed">
            <AppSidebar />
          </div>
          {/*Mobile responsive sidebar*/}
          <MobileSidebar />
          {/*Mobile responsive sidebar*/}
          {/* Sidebar ends */}
          <div className="bg-white  row-span-2 col-span-2   ">
            {/* Navigation starts */}
            <div className="fixed w-full top-0">
              <AppNavbar />
            </div>
            {/* Navigation ends */}
            <div className="mx-auto  lg:ml-60 h-[900px] container-xl p-20 -mt-72">
              <div className="w-full  max-h-fit rounded border-dashed border-2 border-gray-300">
                <Outlet />
              </div>
            </div>
          </div>
        </div>
      </>
    </>
  );
}
