"use client";

import { signOut } from "next-auth/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
export type TSeasonsProps = {
  user?: {
    name?: string | null | undefined;
    email?: string | null | undefined;
    image?: string | null | undefined;
  };
};

const Navbar = ({ seasons }: { seasons: TSeasonsProps | null }) => {
  // console.log(seasons?.user);
  const path = usePathname();
  // console.log(path);

  const list = (
    <>
      <Link
        href="/"
        className={path === "/" ? "text-green-500 underline" : "text-gray-900"}
      >
        {" "}
        <li>
          <a>Home</a>
        </li>
      </Link>

      <Link
        href="/projects"
        className={
          path === "/projects" ? "text-green-500 underline" : "text-gray-900"
        }
      >
        {" "}
        <li>
          <a>Projects</a>
        </li>
      </Link>
      <Link
        href="/blog"
        className={
          path === "/blog" ? "text-green-500 underline" : "text-gray-900"
        }
      >
        {" "}
        <li>
          <a>Blogs</a>
        </li>
      </Link>
      <Link href="/dashboard">
        {" "}
        <li>
          <a>Dashboard</a>
        </li>
      </Link>
      <Link
        href="/contact"
        className={
          path === "/contact" ? "text-green-500 underline" : "text-gray-900"
        }
      >
        {" "}
        <li>
          <a>Contact</a>
        </li>
      </Link>
    </>
  );
  return (
    <div className="container mx-auto">
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost p-2 lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {list}
            </ul>
          </div>
          <a className="btn btn-ghost p-0 text-xl gap-0">
            Tan <span className="text-green-500">vir</span>
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{list}</ul>
        </div>
        <div className="navbar-end">
          {seasons?.user ? (
            <button
              onClick={() => signOut()}
              className="btn bg-green-400 text-white hover:bg-gray-700 "
            >
              {" "}
              Logout
            </button>
          ) : (
            <Link href="/login">
              {" "}
              <a className="btn bg-green-400 text-white hover:bg-gray-700 ">
                Login
              </a>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
