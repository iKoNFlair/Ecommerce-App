import React from "react";
import Layout from "../../components/Layout/Layout";
import { Link } from "react-router-dom";
import "./PageNotFound.css";
import pnfImg from "./image/pnf-img.png";

const PageNotFound = () => {
  return (
    <Layout title="Oops! Something went wrong">
      <div className="pnf">
        <img src={pnfImg} alt="page not found" className="pnf-img" />
        <h2 className="pnf-heading">Oops! Page Not Found</h2>
        <Link to="/" className="pnf-btn">
          Go Back
        </Link>
      </div>
    </Layout>
  );
};

export default PageNotFound;
