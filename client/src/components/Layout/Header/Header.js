import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import { useAuth } from "../../../context/auth";
import { toast } from "react-hot-toast";
import { Badge } from "antd";
import { useCart } from "../../../context/cart";
import useCategory from "../../../hooks/useCategory";
import SearchInput from "../../Form/SearchInput";

const Header = () => {
  const [auth, setAuth] = useAuth();
  const [cart] = useCart();
  const categories = useCategory();
  const handleLogOut = () => {
    setAuth({
      ...auth,
      user: null,
      token: "",
    });
    localStorage.removeItem("auth");
    toast.success("Logout Successfully");
  };
  return (
    <div className="header">
      <nav
        className="navbar bg-dark border-bottom border-body navbar-expand-lg bg-body-tertiary"
        data-bs-theme="dark"
      >
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">
            EcomFlair
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-lg-center">
              <SearchInput className="search-bar" />
              <li className="nav-item">
                <Link
                  className="nav-link"
                  activeClassName="active"
                  aria-current="page"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  activeClassName="active"
                  className="nav-link dropdown-toggle"
                  to={"/categories"}
                  data-bs-toggle="dropdown"
                >
                  Categories
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to={"/categories"}>
                      All Categories
                    </Link>
                  </li>
                  {categories?.map((c) => (
                    <li key={c._id}>
                      <Link
                        className="dropdown-item"
                        to={`/category/${c.slug}`}
                      >
                        {c.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
              {!auth.user ? (
                <>
                  <li className="nav-item">
                    <Link
                      to="/login"
                      activeClassName="active"
                      className="nav-link"
                    >
                      Login
                    </Link>
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item dropdown ">
                    <Link
                      activeClassName="active"
                      className="nav-link dropdown-toggle"
                      to={"/dashboard/admin"}
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      {auth?.user.name}
                    </Link>
                    <ul className="dropdown-menu">
                      <li>
                        <Link
                          to={`/dashboard/${
                            auth?.user?.role === 1 ? "admin" : "user"
                          }`}
                          className="dropdown-item"
                          href="#"
                        >
                          DashBoard
                        </Link>
                      </li>
                      <li>
                        <Link
                          onClick={handleLogOut}
                          to="/login"
                          className="dropdown-item"
                        >
                          LogOut
                        </Link>
                      </li>
                    </ul>
                  </li>
                </>
              )}
              <li className="nav-item">
                <Link
                  to="/cart"
                  activeClassName="active"
                  className="nav-link cart dropdown-item"
                >
                  Cart
                  <Badge
                    count={cart?.length}
                    showZero
                    offset={[10, -5]}
                  ></Badge>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
