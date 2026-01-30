import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { navMenus } from '../../utils/navList.js';
import { FcGoogle } from 'react-icons/fc';

const NaviBar = () => {
  const path = useLocation();
  const isActive = (location) => {
    return path.pathname === location;
  };
  return (
    <nav className="bg-gray-100 w-1/5 h-full rounded-sm border border-gray-500 py-10 px-4 flex flex-col justify-between items-center">
      <div className="logo-wrapper flex w-full items-center justify-center gap-8">
        <div className="logo"></div>
        <h2 className="font-semibold text-xl">
          <Link to="/">Marshal</Link>
        </h2>
      </div>
      <ul className="menus">
        {navMenus.map((menu, idx) => (
          <li
            key={idx}
            className="rounded-sm">
            <Link
              to={menu.to}
              className={`flex gap-x-4 items-center py-2 px-2 ${
                isActive(menu.to) ? 'bg-gray-950' : ''
              }`}
            >
              {menu.icon} {menu.label}
            </Link>
          </li>
        ))}
      </ul>
      <div className="auth-button">
        <button className="flex justify-center items-cneter gap-2 gy-gray-300 text-gray-900 py-3 px-4 rounded-md w-full">
          <FcGoogle />
          <span>마샬님 로그아웃</span>
        </button>
      </div>
    </nav>
  );
};

export default NaviBar;
