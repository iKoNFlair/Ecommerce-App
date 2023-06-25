import React from "react";
import styles from "./CategoryForm.module.css";

const CategoryForm = ({ handleSubmit, value, setValue, btnName }) => {
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <div className={styles.elements}>
            <input
              type="text"
              placeholder="Add category"
              className={`${styles.ip}`}
              value={value}
              onChange={(e) => {
                setValue(e.target.value);
              }}
            />
            <button type="submit" className="btn btn-secondary ms-2">
              {btnName}
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default CategoryForm;
