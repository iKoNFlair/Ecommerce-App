import React, { useState } from "react";
import Layout from "../../../components/Layout/Layout";
import styles from "./Register.module.css";
import toast from "react-hot-toast";
import axios from "axios";
import { NavLink, useNavigate } from "react-router-dom";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `https://ecommerce-app-02j2.onrender.com/api/v1/auth/register`,
        {
          name,
          email,
          password,
          phone,
          address,
        }
      );

      if (res && res.data.success) {
        navigate("/login");
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
    <Layout title="Register with us">
      <div className={styles.register}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div>
            <h2 className={styles.registerFormText}>Register</h2>
            <div className={styles.inputBox}>
              <input
                type="name"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
                className={styles.formInput}
                // placeholder="Enter Name"
                required="required"
              />
              <label className={styles.label}>Name</label>
            </div>
            <div className={styles.inputBox}>
              <input
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                className={styles.formInput}
                // placeholder="Enter Email"
                required="required"
              />
              <label className={styles.label}>Email</label>
            </div>
            <div className={styles.inputBox}>
              <input
                type="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                className={styles.formInput}
                // placeholder="Enter Password"
                required
              />
              <label className={styles.label}>Password</label>
            </div>
            <div className={styles.inputBox}>
              <input
                type="phone"
                value={phone}
                onChange={(e) => {
                  setPhone(e.target.value);
                }}
                className={styles.formInput}
                // placeholder="Enter Phone Number"
                required
              />
              <label className={styles.label}>Phone</label>
            </div>
            <div className={styles.inputBox}>
              <input
                type="address"
                value={address}
                onChange={(e) => {
                  setAddress(e.target.value);
                }}
                className={styles.formInput}
                // placeholder="Enter Address"
                required
              />
              <label className={styles.label}>Address</label>
            </div>
            <button type="submit" className={`${styles.btn} btn btn-primary`}>
              Sign-Up
            </button>
            <div className={styles.loginButton}>
              <span className={styles.loginBtnText}>
                Already have an account?{" "}
              </span>
              <NavLink to="/login" className={styles.loginBtn}>
                Sign-In
              </NavLink>
            </div>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default Register;
