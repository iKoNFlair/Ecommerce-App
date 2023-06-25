import React, { useEffect, useState } from "react";
import { useAuth } from "../../context/auth";
import { Outlet } from "react-router-dom";
import axios from "axios";
import Spinner from "../Spinner/Spinner";

const AdminRoutes = () => {
  const [ok, setOk] = useState(false);
  const [auth, setAuth] = useAuth();

  useEffect(() => {
    const authCheck = async () => {
      try {
        const res = await axios.get("/api/v1/auth/admin-auth");
        if (res.data.ok) {
          setOk(true);
        } else {
          setOk(false);
        }
      } catch (error) {
        console.log(error);
      }
    };

    if (auth?.token) {
      authCheck();
    }
  }, [auth?.token]);

  if (ok) {
    return <Outlet />;
  } else {
    return <Spinner path="" />;
  }
};

export default AdminRoutes;
