import _nav from "../_nav";
import AppSidebarNav from "./appSidebarNav";

export default function AppSidebar() {
  return (
    <>
      <nav>
        <div class="bg-gray-200 shadow-xl  fixed bottom-0  md:h-screen z-10 w-full md:w-60 content-center">
          <div class="md:mt-12 md:w-48 md:fixed md:left-0 md:top-0 content-center md:content-start text-left justify-between">
            <ul class="list-reset flex flex-row md:flex-col pt-3 md:py-3 px-1 md:px-2 text-center md:text-left">
              {_nav.map((navItem) => (
                <AppSidebarNav navItem={navItem} />
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
