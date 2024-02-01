import React, { useState } from "react";
import Layout from "../../../components/Layout/Layout";
import styles from "./Login.module.css";
import toast from "react-hot-toast";
import axios from "axios";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../../context/auth";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const [auth, setAuth] = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `https://ecommerce-app-02j2.onrender.com/api/v1/auth/login`,
        {
          email,
          password,
        }
      );

      if (res && res.data.success) {
        setAuth({
          ...auth,
          user: res.data.user,
          token: res.data.token,
        });
        localStorage.setItem("auth", JSON.stringify(res.data));
        navigate(location.state || "/");
        toast.success(res.data && res.data.message);
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <Layout title="Login - Ecommerce App">
      <div className={styles.login}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div>
            <h2 className={styles.loginText}>Login</h2>
            <div className={styles.loginInputBox}>
              <input
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                className={styles.loginFormInput}
                required
              />
              <label className={styles.loginLabel}>Email</label>
            </div>
            <div className={styles.loginInputBox}>
              <input
                type="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                className={styles.loginFormInput}
                required
              />
              <label className={styles.loginLabel}>Password</label>
            </div>
            <button type="submit" className={`${styles.btn} btn btn-primary`}>
              Sign-In
            </button>
            <div className={styles.registerButton}>
              <span className={styles.registerText}>
                Don't have an account?{" "}
              </span>
              <NavLink to="/register" className={styles.registerBtn}>
                Sign-Up
              </NavLink>
            </div>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default Login;
