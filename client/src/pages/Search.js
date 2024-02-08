import React from "react";
import { useNavigate } from "react-router-dom";
import Layout from "./../components/Layout/Layout";
import { useSearch } from "../context/search";
import "../styles/SearchStyles.css";
const Search = () => {
  const [values, setValues] = useSearch();
  const navigate = useNavigate();
  return (
    <Layout title={"Search results"}>
      <div className="container mt-3 search">
        <h6 className="text-center">{values?.results.length} result found </h6>
        <div className="row">
          <div className="col-md-12">
            <div className="d-flex flex-wrap">
              {values?.results.map((p) => (
                <div
                  className="card"
                  key={p._id}
                  onClick={() => navigate(`/product/${p.slug}`)}
                >
                  {/*  */}
                  <div className="product-img">
                    <img
                      src={`https://ecommerce-app-02j2.onrender.com/api/v1/product/product-photo/${p._id}`}
                      className="card-img-top"
                      alt={p.name}
                    />
                  </div>
                  <div className="card-body">
                    <div className="card-name-text">
                      <h5 className="card-title">{p.name}</h5>
                      <p className="card-text">
                        {p.description.substring(0, 80)}...
                      </p>
                    </div>
                    <h5 className="card-price">
                      {p.price.toLocaleString("en-US", {
                        style: "currency",
                        currency: "USD",
                      })}
                    </h5>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Search;
