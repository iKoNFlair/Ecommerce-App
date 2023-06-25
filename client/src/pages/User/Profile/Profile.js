import React from "react";
import UserMenu from "../../../components/Layout/UserMenu/UserMenu";
import Layout from "../../../components/Layout/Layout";

const Profile = () => {
  return (
    <>
      <Layout title="User Profile">
        <div className="container-fluid m-3">
          <div className="row">
            <div className="col-md-3">
              <UserMenu />
            </div>
            <div className="col-md-9">Profile</div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Profile;
