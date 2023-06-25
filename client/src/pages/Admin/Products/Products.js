import React, { useEffect, useState } from "react";
import AdminMenu from "../../../components/Layout/AdminMenu/AdminMenu";
import Layout from "../../../components/Layout/Layout";
import { toast } from "react-hot-toast";
import axios from "axios";
import { Link } from "react-router-dom";
import styles from "./Products.module.css";

const Products = () => {
  const [products, setProducts] = useState([]);

  const getAllProducts = async () => {
    try {
      const { data } = await axios.get("/api/v1/product/get-product");
      setProducts(data.products);
      toast.success(data.message);
    } catch (error) {
      console.log(error);
      toast.error("something went wrong");
    }
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <Layout>
      <div className="row">
        <div className="col-md-3">
          <AdminMenu />
        </div>
        <div className="col-md-9">
          <h4 className="mt-2">Products Lists</h4>

          <div className="d-flex">
            {products?.map((p) => {
              return (
                <Link
                  to={`/dashboard/admin/product/${p.slug}`}
                  key={p._id}
                  className={styles.productLink}
                >
                  <div className="card m-2" style={{ width: "18rem" }}>
                    <img
                      src={`/api/v1/product/product-photo/${p._id}`}
                      className="card-img-top"
                      alt={p.name}
                    />
                    <div className="card-body">
                      <h5 className="card-title">{p.name}</h5>
                      <p className="card-text">{p.description}</p>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Products;
