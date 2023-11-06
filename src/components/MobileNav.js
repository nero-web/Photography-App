import React, { useState} from 'react';

import { Link } from 'react-router-dom';




const MobileNav = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const links = [
    { to: '/', label: 'Home' },
    { to: '/categories/all', label: 'Categories' },
    { to: '/contactus', label: 'Contact Us'},
  ];
  
  const closeOverlay = () => {
    openMenu(false);
  };
  return (
    <div onClick={setOpenMenu}  style={{ color:  "black", transition: 'transform 1s', transform: openMenu ? 'translateY(0%)' : 'translateY(-100%)', opacity: 0.8, backgroundColor: "#fff"}} className={openMenu ? 'fixed text-black left-0 top-[70px] w-full px-4 py-7 flex flex-col rounded-b-[16px] z-50' : 'absolute top-[-100]'}>
    <ul className={openMenu ? 'block' : 'hidden'}>
      {links.map((link, index) => (
        <Link onClick={closeOverlay} to={link.to} key={index}>
          <li
            
            className="py-4 ps-6 text-3xl font-semibold"
          >
            {link.label}
          </li>
        </Link>
      ))}
    </ul>
  </div>
  );
};

export default MobileNav;
