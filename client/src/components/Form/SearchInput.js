import React, { useState } from "react";
import { useSearch } from "../../context/search";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { IoIosSearch } from "react-icons/io";

import "./SearchInput.css";
const SearchInput = () => {
  const [values, setValues] = useSearch();
  const [value, setValue] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setValue(e.target.value);
    setValues({ ...values, keyword: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.get(
        `https://ecommerce-app-02j2.onrender.com/api/v1/product/search/${values.keyword}`
      );
      setValues({ ...values, results: data });
      setValue("");
      navigate("/search");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <form
        className="d-flex search-form"
        role="search"
        onSubmit={handleSubmit}
      >
        <input
          className="form-control me-2 search-bar"
          type="search"
          placeholder="Search"
          aria-label="Search"
          value={value}
          onChange={handleChange}
        />
        <button className="search-btn" type="submit">
          <IoIosSearch />
        </button>
      </form>
    </div>
  );
};

export default SearchInput;
