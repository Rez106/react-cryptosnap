import { Outlet, NavLink, Link } from "react-router-dom";
import logo from "/assets/images/logo2.png";

const Layout = () => {
  return (
    <>
      <div className="app"></div>
      <div className="container">
        <header className="header">
          <div className="navbar">
            <div className="navbar__logo">
              <img src={logo} className="logo-img" alt="logo" />
              <span className="logo-name">CryptoSnap</span>
            </div>
            <nav className="navbar__menu-wrapper">
              <ul className="menu">
                <li className="menu-item">
                  <NavLink
                    className={({ isActive }) => {
                      return isActive ? "active" : "";
                    }}
                    to="/"
                  >
                    Home
                  </NavLink>
                  <span className="hover-effect"></span>
                </li>
                <li className="menu-item">
                  <NavLink
                    className={({ isActive }) => {
                      return isActive ? "active" : "";
                    }}
                    to="/currencies"
                  >
                    Currencies
                  </NavLink>
                  <span className="hover-effect"></span>
                </li>
                <li className="menu-item">
                  <NavLink
                    className={({ isActive }) => {
                      return isActive ? "active" : "";
                    }}
                    to="/about"
                  >
                    About us
                  </NavLink>
                  <span className="hover-effect"></span>
                </li>
                <li className="menu-item-btn">
                  <Link className="menu-item__btn" to="/login">
                    Sign up
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </header>
        <main className="main">
          <Outlet />
        </main>
        <footer className="footer"></footer>
      </div>
    </>
  );
};

export default Layout;
