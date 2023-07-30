import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  const { data: session } = useSession();
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link href={"/pc-builder"}>PC Builder</Link>
            </li>
            <li>
              <a>Categories</a>
              <ul className="p-2">
                <li>
                  <Link href={"/categories/Processor"}>Processor</Link>
                </li>
                <li>
                  <Link href={"/categories/Motherboard"}>Motherboard</Link>
                </li>
                <li>
                  <Link href={"/categories/RAM"}>RAM</Link>
                </li>
                <li>
                  <Link href={"/categories/Power Supply Unit"}>
                    Power Supply Unit
                  </Link>
                </li>
                <li>
                  <Link href={"/categories/Storage Device"}>
                    Storage Device
                  </Link>
                </li>
                <li>
                  <Link href={"/categories/Monitor"}>Monitor</Link>
                </li>
                <li>
                  <Link href={"/categories/Others"}>Others</Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <Link href={"/"} className="btn btn-ghost normal-case text-xl">
          EliteCraft
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link href={"/pc-builder"}>PC Builder</Link>
          </li>
          <li tabIndex={0}>
            <details className="z-[1]">
              <summary>Categories</summary>
              <ul>
                <li>
                  <Link href={"/categories/Processor"}>Processor</Link>
                </li>
                <li>
                  <Link href={"/categories/Motherboard"}>Motherboard</Link>
                </li>
                <li>
                  <Link href={"/categories/RAM"}>RAM</Link>
                </li>
                <li>
                  <Link href={"/categories/Power Supply Unit"}>
                    Power Supply Unit
                  </Link>
                </li>
                <li>
                  <Link href={"/categories/Storage Device"}>
                    Storage Device
                  </Link>
                </li>
                <li>
                  <Link href={"/categories/Monitor"}>Monitor</Link>
                </li>
                <li>
                  <Link href={"/categories/Others"}>Others</Link>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        {session ? (
          <button className="btn" onClick={() => signOut()}>Sign out</button>
        ) : (
          <button
          className="btn"
            onClick={() =>
              signIn("google", {
                callbackUrl: "http://localhost:3000/",
              })
            }
          >
            Sign in
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
