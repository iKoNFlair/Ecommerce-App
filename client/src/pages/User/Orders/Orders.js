import React from "react";
import Layout from "../../../components/Layout/Layout";
import UserMenu from "../../../components/Layout/UserMenu/UserMenu";

const Orders = () => {
  return (
    <>
      <Layout title="My Orders - User">
        <div className="container-fluid m-3">
          <div className="row">
            <div className="col-md-3">
              <UserMenu />
            </div>
            <div className="col-md-9">My Orders</div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Orders;
