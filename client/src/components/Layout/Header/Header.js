import React from "react";
import { Link, NavLink } from "react-router-dom";
import { AiFillShopping, AiOutlineShoppingCart } from "react-icons/ai";
import "./Header.css";
import { useAuth } from "../../../context/auth";
import { toast } from "react-hot-toast";
import { Badge } from "antd";
import { useCart } from "../../../context/cart";

const Header = () => {
  const [auth, setAuth] = useAuth();
  const [cart] = useCart();
  const handleLogOut = () => {
    setAuth({
      ...auth,
      user: null,
      token: "",
    });

    localStorage.removeItem("auth");
    toast.success("Logout Success");
  };
  return (
    <div className="header">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">
            <span className="navbar-logo">
              <AiFillShopping />
            </span>
            Ecommerce App
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasDarkNavbar"
            aria-controls="offcanvasDarkNavbar"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div
            className="offcanvas offcanvas-end text-bg-dark"
            tabIndex={-1}
            id="offcanvasDarkNavbar"
            aria-labelledby="offcanvasDarkNavbarLabel"
          >
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">
                <Link to="/" className="navbar-brand">
                  <span className="navbar-logo">
                    <AiFillShopping />
                  </span>{" "}
                  Ecommerce App
                </Link>
              </h5>
              <button
                type="button"
                className="btn-close btn-close-white"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              />
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li className="nav-item">
                  <NavLink to="/" className="nav-link">
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/category" className="nav-link">
                    Category
                  </NavLink>
                </li>
                {!auth.user ? (
                  <>
                    <li className="nav-item">
                      <NavLink to="/login" className="nav-link">
                        Login
                      </NavLink>
                    </li>
                  </>
                ) : (
                  <>
                    <li className="nav-item dropdown ">
                      <NavLink
                        className="nav-link dropdown-toggle "
                        href="#"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        {auth?.user.name}
                      </NavLink>
                      <ul className="dropdown-menu">
                        <li>
                          <NavLink
                            to={`/dashboard/${
                              auth?.user?.role === 1 ? "admin" : "user"
                            }`}
                            className="dropdown-item"
                            href="#"
                          >
                            DashBoard
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            onClick={handleLogOut}
                            to="/login"
                            className="dropdown-item"
                          >
                            LogOut
                          </NavLink>
                        </li>
                      </ul>
                    </li>
                  </>
                )}
                <li className="nav-item">
                  <NavLink to="/cart" className="nav-link cart dropdown-item">
                    <Badge count={cart?.length} showZero offset={[10, -5]}>
                      <AiOutlineShoppingCart color="white" width={"60px"} />
                    </Badge>
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
