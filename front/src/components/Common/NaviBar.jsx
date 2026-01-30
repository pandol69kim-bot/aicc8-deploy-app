import React, { useCallback, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { navMenus } from '../../utils/naviList';
import { FcGoogle } from 'react-icons/fc';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../redux/slices/authSlice';
const googleClientId = import.meta.env.VITE_AUTH_CLIENT_ID;

const NaviBar = () => {
  const path = useLocation();
  const isActive = (location) => {
    return path.pathname === location;
  };

  const dispatch = useDispatch();

  const state = useSelector((state) => state.auth.authData);
  const [name] = state || {};

  // !!name 값이 있는지 엄격히 체크
  const [isAuth, setIsAuth] = useState(!!state);

  setIsAuth(false);
  const handleLoginSuccess = useCallback(
    (credentialResponse) => {
      try {
        const decoded = jwtDecode(credentialResponse.credential);
        dispatch(login({ authData: decoded }));
        setIsAuth(true);
      } catch (error) {
        console.log('Google Loign Error :', error);
      }
    },
    [dispatch],
  );

  const handleLogoutClick = () => {
    dispatch(logout());
    setIsAuth(false);
  };

  const handleLoginError = (error) => {
    console.log('google login error :', error);
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
          <li key={idx} className="rounded-sm">
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
      {isAuth ? (
        <div className="auth-button">
          <button
            className="flex justify-center items-cneter gap-2 gy-gray-300 text-gray-900 py-3 px-4 rounded-md w-full"
            onClick={handleLogoutClick}
          >
            <span>{name}님 로그아웃</span>
          </button>
        </div>
      ) : (
        <div className="auth-wrapper flex justify-center w-4/5 login-btn">
          <GoogleOAuthProvider clientId={googleClientId}>
            <div className="auth-button">
              <GoogleLogin
                onSuccess={handleLoginSuccess}
                onError={handleLoginError}
              />
              <button className="flex justify-center items-cneter gap-2 gy-gray-300 text-gray-900 py-3 px-4 rounded-md w-full">
                <FcGoogle className="w-5 h-5" />
                <span className="text-sm">Google login</span>
              </button>
            </div>
          </GoogleOAuthProvider>
        </div>
      )}
      {/* <GoogleOAuthProvider clientId={googleClientId}>
        <h1>Google 로그인 테스트</h1>
        <div className="auth-button">
          <button className="flex justify-center items-cneter gap-2 gy-gray-300 text-gray-900 py-3 px-4 rounded-md w-full">
            <GoogleLogin onSuccess={handleLoginSuccess}>
              <span>마샬님 로그아웃</span>
            </GoogleLogin>
          </button>
        </div>
      </GoogleOAuthProvider> */}

      {/* <GoogleOAuthProvider clientId={googleClientId}>
        <GoogleLogin
          onSuccess={handleLoginSuccess}
          onError={() => {
            console.log('로그인 실패');
          }}
          useOneTap
        />
      </GoogleOAuthProvider> */}
    </nav>
  );
};

export default NaviBar;
