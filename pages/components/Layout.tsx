import { FC, useEffect, useState } from "react";
import { HiMenu } from "react-icons/hi";
import { SideNav } from "./index";

const Layout: FC = () => {
  const [showSideNav, setShowSideNav] = useState<boolean>(false);

  const toggleSidenav = () => {
    setShowSideNav(!showSideNav);
  };

  if (typeof window !== "undefined") {
    // Client-side-only code
    const { innerWidth: width } = window;
    useEffect(() => {
      if (width >= 1024 && showSideNav === false) {
        setShowSideNav(true);
      }
    }, []);
  }
  return (
    <main className="relative w-full">
      <SideNav showSideNav={showSideNav} />
      <main
        className={`${
          !showSideNav ? "" : "lg:left-1/4"
        } absolute top-0 right-0 bottom-0 left-0`}
      >
        <div className="">
          <div className="bg-green-500 md:bg-black lg:bg-red-600 p-3">
            <div className="flex flex-row-reverse">
              <HiMenu
                className="text-3xl cursor-pointer text-white"
                onClick={toggleSidenav}
              />
            </div>
          </div>
        </div>
      </main>
    </main>
  );
};

export default Layout;
