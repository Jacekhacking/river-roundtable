import Link from "next/link";

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
  return (
    <nav className=" w-20 fixed bg-gray-200 text-black border-r-2 border-gray-400 ">
      <div className=" min-h-screen flex flex-col justify-between items-center">
        <div>
          <div className="flex justify-center items-center">
            <Link href="/">
              <div className=" cursor-pointer flex justify-center items-center w-8 h-8 mt-5 mb-9  bg-black rounded-full "></div>
            </Link>
          </div>

          <ul>
            {navNames.map((item) => (
              <NavItems key={item}>{item}</NavItems>
            ))}
          </ul>
        </div>

        <div className="mb-4 w-8 h-8 rounded-full bg-red-400 text-center">
          S
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
