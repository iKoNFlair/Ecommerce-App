import React, { useState, useEffect } from "react";
import UserMenu from "../../components/Layout/UserMenu";
import Layout from "./../../components/Layout/Layout";
import { useAuth } from "../../context/auth";
import toast from "react-hot-toast";
import axios from "axios";
import styles from "./Profile.module.css";
const Profile = () => {
  //context
  const [auth, setAuth] = useAuth();
  //state
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  //get user data
  useEffect(() => {
    const { email, name, phone, address } = auth?.user;
    setName(name);
    setPhone(phone);
    setEmail(email);
    setAddress(address);
  }, [auth?.user]);

  // form function
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.put("/api/v1/auth/profile", {
        name,
        email,
        password,
        phone,
        address,
      });
      if (data?.errro) {
        toast.error(data?.error);
      } else {
        setAuth({ ...auth, user: data?.updatedUser });
        let ls = localStorage.getItem("auth");
        ls = JSON.parse(ls);
        ls.user = data.updatedUser;
        localStorage.setItem("auth", JSON.stringify(ls));
        toast.success("Profile Updated Successfully");
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };
  return (
    <Layout title={"Your Profile"}>
      <div className="container-fluid m-3 p-3 dashboard profile">
        <div className="row">
          <div className="col-md-3">
            <UserMenu />
          </div>
          <div className="col-md-8">
            <div className={styles.register}>
              <form className={styles.form} onSubmit={handleSubmit}>
                <h2 className={styles.registerFormText}>User Profile</h2>
                <div className={styles.inputBox}>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    id="exampleInputEmail1"
                    // placeholder="Enter Your Name"
                    autoFocus
                    className={styles.formInput}
                  />
                  <label className={styles.label}>Name</label>
                </div>
                <div className={styles.inputBox}>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={styles.formInput}
                    id="exampleInputEmail1"
                    // placeholder="Enter Your Email "
                    disabled
                  />
                  <label className={styles.label}>Email</label>
                </div>
                <div className={styles.inputBox}>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className={styles.formInput}
                    id="exampleInputPassword1"
                    // placeholder="Enter Your Password"
                  />
                  <label className={styles.label}>Password</label>
                </div>
                <div className={styles.inputBox}>
                  <input
                    type="text"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className={styles.formInput}
                    id="exampleInputEmail1"
                    // placeholder="Enter Your Phone"
                  />
                  <label className={styles.label}>Phone</label>
                </div>
                <div className={styles.inputBox}>
                  <input
                    type="text"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    className={styles.formInput}
                    id="exampleInputEmail1"
                    // placeholder="Enter Your Address"
                  />
                  <label className={styles.label}>Address</label>
                </div>

                <button
                  type="submit"
                  className={`${styles.btn} btn btn-primary`}
                >
                  UPDATE
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Profile;
