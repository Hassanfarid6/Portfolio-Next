"use client"
import React,{useState} from "react";
import Link from "next/link";
import NavLink from "./NavLink";
import {Bars3Icon, XMarkIcon} from "@heroicons/react/24/solid";
// import { title } from "process";
// import { button } from "framer-motion/client";
import MenuOverlay from "./MenuOverlay";
// import Image from "next/image";
// import { nav } from "framer-motion/client";
// import { TypeAnimation } from 'react-type-animation';


const navLink =[
  {
    title: "About",
    path: "#about"
  },
  {
    title: "Projects",
    path: "#projects"
  },
  {
    title: "Contact",
    path: "#contact"
  }
]

  const Navbar = () => {

    const [navOpen, setNavOpen] = useState(false);
    return (
      <nav className="fixed top-0 left-0 right-0 z-10 bg-[#121212] ">

        <div className="flex flex-wrap items-center justify-between mx-auto px-4 my-2">
            <Link href={"/"} className="text-2xl md:text-5xl text-white font-semibold">
            Logo
            </Link>
            {/* // mobile responsive */}
            <div
             onClick={()=> setNavOpen(!navOpen)}
              className="mobile-menu block md:hidden">
              {
                navOpen?(
                  <button 
                  // onClick={()=> setNavOpen(true)} 
                  className="flex items-center px-2 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white">
                    < XMarkIcon className="h-5 w-5"/>
                  </button>
                ):(
                  <button 
                  // onClick={()=> setNavOpen(false)}
                  className="flex items-center px-2 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white">
                  < Bars3Icon className="h-5 w-5"/>
                </button>
                )
              }
            </div>
            <div className="menu hidden md:block md:w-auto" id="navbar">
                <ul className="flex p-4 md:p-0 md:space-x-8 mt-0">
                    {
                        navLink.map((link,index)=>(
                            <li key={index}>
                                <NavLink href={link.path} title={link.title}/>
                            </li>
                        ))
                    }
                </ul>
            </div>
    </div>
      {navOpen ? <MenuOverlay Links={navLink} /> : null}
  </nav>
  );
};

export default Navbar;