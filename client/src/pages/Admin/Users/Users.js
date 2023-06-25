import React from "react";
import Layout from "../../../components/Layout/Layout";
import AdminMenu from "../../../components/Layout/AdminMenu/AdminMenu";

const Users = () => {
  return (
    <>
      <Layout title="Users - Admin">
        <div className="row">
          <div className="col-md-3">
            <AdminMenu />
          </div>
          <div className="col-md-9">Users</div>
        </div>
      </Layout>
    </>
  );
};

export default Users;
