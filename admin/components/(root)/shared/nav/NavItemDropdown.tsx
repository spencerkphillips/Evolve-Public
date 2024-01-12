"use client";
import NextLink from "next/link";
import NavItem from "./NavItem";
import React, { useRef, useState } from "react";

export default function NavItemDropdown({ className, title, navItems }) {
  const [isOpen, setOpen] = useState(false);

  const toggleOpen = () => {
    setOpen(!isOpen);
  };

  return (
    <li className="relative">
      <button
        id="dropdownNavbarLink"
        data-dropdown-toggle="dropdownNavbar"
        onClick={toggleOpen}
        className={`${isOpen ? 'text-cyan-400 hover:text-cyan-500 focus:text-cyan-500' : 'text-inherit hover:text-cyan-500'} ease-in-out flex py-2 px-3 md:p-0 items-center justify-between w-full`}
      >
        {`${title} `}
        <svg
          className="w-2.5 h-2.5 ms-2.5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="m1 1 4 4 4-4"
          />
        </svg>
      </button>
      <div id="dropdownNavItem" className={`${isOpen ? 'block' : 'hidden'} ease-in-out static md:absolute top-full left-0 md:mt-2 z-10 md:py-2 md:px-3 font-normal md:bg-zinc-100 md:dark:bg-zinc-950 rounded-lg w-44`}>
        <ul className="py-2 text-sm">
            {navItems.map(item => <NavItem to={item.to} className={item.class} title={item.title} />)}
        </ul>
      </div>
    </li>
  );
}
