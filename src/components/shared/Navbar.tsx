import Image from "next/image";
import Link from "next/link";
import React from "react";
import Logo from "@/assets/book.ico";

const Navbar = () => {
  const Links = (
    <>
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/listed-books">Listed Books</Link>
      </li>
      <li>
        <Link href="/pages-to-read">Pages to Read</Link>
      </li>
    </>
  );
  return (
    <nav className="  bg-base-100 shadow-sm ">
      <div className="navbar container mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                aria-label="Menu"
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={-1}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {Links}
            </ul>
          </div>
          <div className="flex gap-2 items-center">
            {" "}
            <Image
              src={Logo}
              width={40}
              height={40}
              alt="Book Vibe logo"
            ></Image>
            <Link href="/" className=" text-xl font-semibold">
              Book Vibe
            </Link>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{Links}</ul>
        </div>
        <div className="navbar-end gap-2">
          <a className=" btn btn-sm btn-success rounded-md ">Sign In</a>
          <a className="btn btn-sm btn-warning rounded-md">Sign Up</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
