import Link from "next/link";
import { useState } from "react";

export const NavItems = (props) => {
  return (
    <>
      <Link href={props.children.toLowerCase()}>
        <li className=" cursor-pointer flex justify-center items-center pb-4 text-sm">
          {props.children}
        </li>
      </Link>
      <a></a>
    </>
  );
};

const Navbar = () => {
  const navNames = [
    "Mission",
    "Partners",
    "Stories",
    "Submit",
    "FAQ",
    "Contact",
  ];
  const [toggleNavbar, setToggleNavbar] = useState(false);
  const changeToggleNavbar = () => {
    setToggleNavbar((current) => !current);
  };
  let viewNavbar = toggleNavbar ? "block" : "hidden";
  return (
    <nav
      className={` ${viewNavbar} md:block w-20 fixed right-0 bg-gray-200 text-black border-l-2 border-gray-400 `}
    >
      <div className=" min-h-screen flex flex-col justify-between items-center">
        <div>
          <div className="flex justify-center items-center mt-5"></div>
          <ul>
            {navNames.map((item) => (
              <NavItems key={item}>{item}</NavItems>
            ))}
          </ul>
        </div>

        <div className="mb-4 w-8 h-8 rounded-full bg-red-400 text-center"></div>
      </div>
    </nav>
  );
};

export default Navbar;
