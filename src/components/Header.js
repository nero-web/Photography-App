/** @format */

import React, { useContext, useState } from "react";
import Socials from "./Socials";
import Logo from "../img/header/logo.svg";
import { IoMdClose } from "react-icons/io";
import { CgMenuRight } from "react-icons/cg";
import { Link } from "react-router-dom";
import { CursorContext } from "../context/CursorContext";
import {
  ImTwitter,
  ImPinterest,
  ImYoutube,
} from 'react-icons/im';
import { FaInstagram, FaFacebook, } from 'react-icons/fa';

const Header = () => {
  const {mouseEnterHandler, mouseLeaveHandler} = useContext(CursorContext)
  const [openMenu, setOpenMenu] = useState(false);
  const links = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/portfolio", label: "Portfolio" },
    { to: "/contact", label: "Contact Us" },
    { to: "/blog", label: "Blog" },
  ];

  const closeOverlay = () => {
    openMenu(false);
  };
  return (
    <header className='absolute w-full px-[30px] lg:px-[100px] hedz h-[100px] lg:h-[140px] flex items-center'>
      <div className='flex flex-row lg:flex-row lg:items-center w-full justify-between'>
        {/* Logo */}
        <Link
          to={"/"}
          className='max-w-[200px]'>
          <img src={Logo} alt=''></img>
        </Link>
        <i
          onClick={() => setOpenMenu(!openMenu)}
          className='text-3xl cursor-pointer xl:hidden'>
          {openMenu ? <IoMdClose /> : <CgMenuRight />}
        </i>
        <div
          onClick={setOpenMenu}
          style={{
            color: "black",
            transition: "transform 1s",
            transform: openMenu ? "translateY(0%)" : "translateY(-100%)",
            opacity: 0.9,
            backgroundColor: "#fff",
          }}
          className={
            openMenu
              ? "fixed text-black left-0 top-[80px] w-full px-4 py-7 flex flex-col rounded-b-[16px] z-50"
              : "absolute top-[-100]"
          }>
          <ul className={openMenu ? "block" : "hidden"}>
            {links.map((link, index) => (
              <Link onClick={closeOverlay} to={link.to} key={index}>
                <li className='py-4 ps-6 text-3xl font-semibold text-center'>
                  {link.label}
                </li>
              </Link>
            ))}
          </ul>
          <div className='w-full h-[100px] mt-7'>
            <ul className={openMenu ? "flex gap-x-[2.5rem] justify-center" : "hidden"}>
              <li>
                <a href='https://twitter.com/SaadElmasrour' target='_blank'>
                  <FaFacebook size={35}/>
                </a>
              </li>
              <li>
                <a href='https://twitter.com/SaadElmasrour' target='_blank'>
                  <ImTwitter size={35}/>
                </a>
              </li>
              <li>
                <a href='https://twitter.com/SaadElmasrour' target='_blank'>
                  <FaInstagram size={35}/>
                </a>
              </li>
              <li>
                <a href='https://twitter.com/SaadElmasrour' target='_blank'>
                  <ImYoutube size={35}/>
                </a>
              </li>
              <li>
                <a href='https://twitter.com/SaadElmasrour' target='_blank'>
                  <ImPinterest size={35}/>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <nav
          className='hidden xl:flex gap-x-12 font-semibold'>
          <Link
            to={"/"}
            className='text-[#696c6d] transition'>
            Home
          </Link>
          <Link
            to={"/about"}
            className='text-[#696c6d] transition'>
            About
          </Link>
          <Link
            to={"/portfolio"}
            className='text-[#696c6d] transition'>
            Portfolio
          </Link>
          <Link
            to={"/blog"}
            className='text-[#696c6d] transition'>
            Blog
          </Link>
          <Link
            to={"/contact"}
            className='text-[#696c6d] transition'>
            Contact Us
          </Link>
        </nav>
      </div>
      <Socials />
    </header>
  );
};

export default Header;

