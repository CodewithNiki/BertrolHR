"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Nav = () => {
  const [blur, setBlur] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = () =>{
    setIsOpen(!isOpen);
    // setBlur(false)
  }
  // useEffect(() => {
  //   const navBarLimit = window.matchMedia("(min-width: 360px)");
  //   const handleScroll = () => {
  //     if (navBarLimit.matches && window.scrollY > 100) {
  //       setBlur(true);
  //       console.log(setBlur);
  //     } else {
  //       setBlur(false);
  //     }
  //   };
  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

  return (
    <nav
      className={` ${
        blur
          ? " bg-slate-900/30 backdrop-blur-sm border-b  border-b-gray-700"
          : ""
      } px-8 py-4 md:px-16  lg:px-24  top-0 left-0 right-0 fixed z-30 flex justify-between items-center`}
    >
      <Link href="/" className=" text-blue-500 font-bold text-xl relative mt-6 z-50">
        <p className=" text-base scale-150 absolute left-3 -top-4">Bertrol</p>
        <p className=" text-[0.5rem] text-white">Integrated Services</p>
      </Link>
      <ul className=" text-white gap-8 hidden md:flex">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/">Services</Link>
        </li>
      </ul>
      <div className=" text-white gap-1 md:hidden flex flex-col fixed right-8 cursor-pointer" onClick={handleNavClick}>
        <div className={`${isOpen ? "w-10 h-1 bg-blue-800 -rotate-45" : "w-10 h-1 bg-blue-800"}`}></div>
        <div className={`${isOpen ? "w-10 h-1 bg-blue-800 absolute rotate-45" : "w-10 h-1 bg-blue-800"}`}></div>
        {!isOpen && <div className="w-10 h-1 bg-blue-800"></div>}
      </div>
      {isOpen && <ul className="fixed left-0 top-0 bottom-0 bg-blue-800 w-1/2 md:hidden flex flex-col justify-center items-center gap-12 text-white">
      <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/">Services</Link>
        </li>
      </ul>}
    </nav>
  );
};

export default Nav;
