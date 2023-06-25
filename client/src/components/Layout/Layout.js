import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Helmet } from "react-helmet";
import { Toaster } from "react-hot-toast";

const Layout = ({ children, description, keywords, author, title }) => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content={author} />
        <title>{title}</title>
      </Helmet>
      <Header />
      <main style={{ minHeight: "85vh" }}>{children}</main>
      <Toaster />
      <Footer />
    </div>
  );
};

Layout.defaultProps = {
  title: "Ecommerce App - Shop Now",
  description: "MERN Project",
  keywords: "Mern, react",
  author: "Ikonflair",
};

export default Layout;
