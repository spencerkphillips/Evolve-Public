'use client'

import dynamic from "next/dynamic";
import { FaBars } from "react-icons/fa"
import NextLink from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import NavItem from "./NavItem";
import NavItemDropdown from "./NavItemDropdown";
import React, { useRef, useState } from "react";

const ColorSwitcher = dynamic(() => import("./ColorSwitcher"), { ssr: false });

export default function Navbar() {

  let navDropdownItems = [
    { to: '#', class: 'py-1', title: 'Link 1' },
    { to: '#', class: 'py-1', title: 'Link 2' },
    { to: '#', class: 'py-1', title: 'Link 3' },
]

let navMegaItems = [
  { to: '#', class: '', title: 'Mega 1', description: 'Lorem ipsum dolar sit amet' },
  { to: '#', class: '', title: 'Mega 2', description: 'Lorem ipsum dolar sit amet' },
  { to: '#', class: '', title: 'Mega 3', description: 'Lorem ipsum dolar sit amet' },
  { to: '#', class: '', title: 'Mega 4', description: 'Lorem ipsum dolar sit amet' },
]

  const [isMegaOpen, setMegaOpen] = useState(false);

  const toggleMegaOpen = () => {
    setMegaOpen(!isMegaOpen);
  };

  const [isOpen, setOpen] = useState(false);

  const toggleOpen = () => {
    setOpen(!isOpen);
  };
  
  return (
    <>
      <nav className="bg-zinc-50 dark:bg-zinc-900 sticky w-full z-20 top-0 start-0">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <NextLink className="flex items-center space-x-3 rtl:space-x-reverse" href="#" passHref>
            <svg xmlns="http://www.w3.org/2000/svg" className="dark:fill-zinc-50 fill-zinc-950" height="32" fill="none" viewBox="0 0 176 40"><path fillRule="evenodd" d="M15 28a5 5 0 0 1-5-5V0H0v23c0 8.284 6.716 15 15 15h11V28H15ZM45 10a9 9 0 1 0 0 18 9 9 0 0 0 0-18Zm-19 9C26 8.507 34.507 0 45 0s19 8.507 19 19-8.507 19-19 19-19-8.507-19-19ZM153 10a9 9 0 0 0-9 9 9 9 0 0 0 9 9 9 9 0 0 0 9-9 9 9 0 0 0-9-9Zm-19 9c0-10.493 8.507-19 19-19s19 8.507 19 19-8.507 19-19 19-19-8.507-19-19ZM85 0C74.507 0 66 8.507 66 19s8.507 19 19 19h28c1.969 0 3.868-.3 5.654-.856L124 40l5.768-10.804A19.007 19.007 0 0 0 132 20.261V19c0-10.493-8.507-19-19-19H85Zm37 19a9 9 0 0 0-9-9H85a9 9 0 1 0 0 18h28a9 9 0 0 0 9-8.93V19Z" clipRule="evenodd"></path><path d="M176 2.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"></path></svg>
            <span className="sr-only">Company Name</span>
          </NextLink>
          <div className="flex md:order-2 space-x-3 rtl:space-x-reverse">
            <NextLink className="hidden md:block text-cyan-400 border-[3px] border-cyan-400 hover:border-cyan-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-4 py-2 text-center dark:border-cyan-400 dark:hover:border-cyan-500 hover:text-cyan-500 dark:focus:ring-cyan-500" href="#" passHref>
              Login
            </NextLink>
            <NextLink className="hidden md:block text-white border-[3px] border-cyan-400 hover:border-cyan-500 bg-cyan-400 hover:bg-cyan-500 focus:ring-4 focus:outline-none px-4 py-2 focus:ring-cyan-300 font-medium rounded-full text-sm text-center dark:border-cyan-400 dark:hover:border-cyan-500 dark:bg-cyan-400 dark:hover:bg-cyan-500 dark:focus:ring-cyan-500" href="#" passHref>
              Register
            </NextLink>
            <div className="px-4 py-3.5 text-center">
              <ColorSwitcher />
            </div>
            <button data-collapse-toggle="navbar-sticky" onClick={toggleOpen} type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-zinc-500 rounded-full md:hidden hover:bg-zinc-100 focus:outline-none focus:ring-2 focus:ring-zinc-200 dark:text-zinc-400 dark:hover:bg-zinc-700 dark:focus:ring-zinc-600" aria-controls="navbar-sticky" aria-expanded="false">
                <span className="sr-only">Open main menu</span>
                <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
                </svg>
            </button>
          </div>
          <div className={`${isOpen ? 'block' : 'hidden'} ease-in-out items-center justify-between w-full md:flex md:w-auto md:order-1`} id="navbar-sticky">
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border-none rounded-full bg-zinc-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent dark:bg-zinc-900">
              <li className="relative">
                <button
                  id="dropdownNavbarLink"
                  data-dropdown-toggle="dropdownNavbar"
                  onClick={toggleMegaOpen}
                  className={`${isMegaOpen ? 'text-cyan-400 hover:text-cyan-500 focus:text-cyan-500' : 'text-inherit hover:text-cyan-500'} ease-in-out flex py-2 px-3 md:p-0 items-center justify-between w-full`}
                >
                  Features
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
              </li>
              <NavItem to="#" className="" title="Pricing" />
              <NavItemDropdown navItems={navDropdownItems} className="" title="Developers" />
            </ul>
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-none rounded-full bg-zinc-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent dark:bg-zinc-900 md:hidden">
              <NavItem to="#" className="text-cyan-400 border-[3px] border-cyan-400 hover:border-cyan-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-4 py-2 text-center dark:border-cyan-400 dark:hover:border-cyan-500 dark:focus:ring-cyan-500" title="Login" />
              <NavItem to="#" className="mt-2 text-white border-[3px] border-cyan-400 hover:border-cyan-500 bg-cyan-700 hover:bg-cyan-800 focus:ring-4 focus:outline-none px-4 py-2 focus:ring-blue-300 font-medium rounded-full text-sm text-center dark:border-cyan-400 dark:hover:border-cyan-500 dark:bg-cyan-400 dark:hover:bg-cyan-500 dark:focus:ring-cyan-500" title="Register" />
            </ul>
          </div>
        </div>
        <div className={`${isMegaOpen ? 'block' : 'hidden'} ease-in-out mt-1 font-normal md:bg-zinc-100 md:dark:bg-zinc-950 w-full`} id="">
          <ul className="grid max-w-screen-xl px-4 py-5 mx-auto sm:grid-cols-2 md:px-6">
              {navMegaItems.map(item => (
                <li className="">
                  <NextLink href={item.to} className="p-3 rounded-full block" passHref>
                    <div className="font-semibold">{item.title}</div>
                    <span className="text-sm">{item.description}</span>
                  </NextLink>
                </li>
              ))}
          </ul>
        </div>
      </nav>
    </>
  );
}
