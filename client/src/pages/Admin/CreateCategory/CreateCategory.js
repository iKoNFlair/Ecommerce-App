import React, { useEffect, useState } from "react";
import Layout from "../../../components/Layout/Layout";
import AdminMenu from "../../../components/Layout/AdminMenu/AdminMenu";
import { toast } from "react-hot-toast";
import axios from "axios";
import CategoryForm from "../../../components/Form/CategoryForm/CategoryForm";
import { MdDelete, MdEdit } from "react-icons/md";
import { Modal } from "antd";

const CreateCategory = () => {
  const [categories, setCategories] = useState([]);
  const [name, setName] = useState("");
  const [visible, setVisible] = useState(false);
  const [selected, setSelected] = useState(null);
  const [updatedName, setUpdatedName] = useState("");

  // get all categories
  const getAllCategories = async () => {
    try {
      const { data } = await axios.get("/api/v1/category/get-category");

      if (data?.success) {
        setCategories(data?.category);
      }
    } catch (error) {
      console.log(error);
      toast.error("Can't get categories");
    }
  };

  // submit to create category
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("/api/v1/category/create-category", {
        name,
      });

      setName("");

      if (data?.success) {
        toast.success(`${name} is created!!`);
        getAllCategories();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong in the input form");
    }
  };

  // update category
  const handleUpdate = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.put(
        `/api/v1/category/update-category/${selected._id}`,
        { name: updatedName }
      );
      if (data?.success) {
        toast.success(`${updatedName} is Updated!!`);
        setSelected(null);
        setUpdatedName("");
        setVisible(false);
        getAllCategories();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error.response);
      toast.error("Something went wrong");
    }
  };

  const handleDelete = async (id) => {
    try {
      const { data } = await axios.delete(
        `/api/v1/category/delete-category/${id}`
      );

      if (data.success) {
        toast.success(data.message);
        getAllCategories();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  useEffect(() => {
    getAllCategories();
  }, []);

  return (
    <>
      <Layout title="Create category - Admin">
        <div className="row">
          <div className="col-md-3">
            <AdminMenu />
          </div>
          <div className="col-md-9">
            <h4 className="mt-2">Manage Category</h4>
            <div className="p-3 w-75">
              <CategoryForm
                handleSubmit={handleSubmit}
                value={name}
                setValue={setName}
                btnName="Add"
              />
            </div>
            <div className="w-75">
              <table class="table">
                <thead>
                  <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {categories?.map((e) => {
                    return (
                      <>
                        <tr>
                          <td>{e.name}</td>
                          <td>
                            <button
                              className="btn btn-primary w-25 ms-2"
                              onClick={() => {
                                setVisible(true);
                                setUpdatedName(e.name);
                                setSelected(e);
                              }}
                            >
                              <MdEdit />
                            </button>
                            <button
                              className="btn btn-danger w-25 ms-2"
                              onClick={() => {
                                handleDelete(e._id);
                              }}
                            >
                              <MdDelete />
                            </button>
                          </td>
                        </tr>
                      </>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
          <Modal
            onCancel={() => setVisible(false)}
            footer={null}
            visible={visible}
          >
            <h4>Update Category</h4>
            <CategoryForm
              value={updatedName}
              setValue={setUpdatedName}
              handleSubmit={handleUpdate}
              btnName="Update"
            />
          </Modal>
        </div>
      </Layout>
    </>
  );
};

export default CreateCategory;
