import Link from "next/link";

const MainHeader = () => {
  return (
    <div className=" text-center w-full bg-gray-200 flex justify-between items-center">
      <Link href="/">
        <div className=" ml-3 w-8 h-8 bg-black rounded-full cursor-pointer flex justify-center items-center ">
          <div className=" "></div>
        </div>
      </Link>

      <h1 className=" text-3xl md:text-5xl xl:text-7xl">
        THE RIVER ROUND-TABLE
      </h1>
      <div className=""></div>
    </div>
  );
};

export default MainHeader;
