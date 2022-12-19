import { useEffect, useState } from "react";
import { HiMenu } from "react-icons/hi";

const Menu = () => {
  const [showSideNav, setShowSideNav] = useState(false);

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
    <div className="bg-green-500 md:bg-black lg:bg-red-600 p-3">
      <div className="flex flex-row-reverse">
        <HiMenu
          className="text-3xl cursor-pointer text-white"
          onClick={toggleSidenav}
        />
      </div>
    </div>
  );
};

export default Menu;
