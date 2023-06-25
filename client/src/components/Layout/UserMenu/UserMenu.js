import React from "react";
import { NavLink } from "react-router-dom";

const UserMenu = () => {
  return (
    <>
      <div className="text-center p-3">
        <h3>User Panel</h3>
        <div className="list-group">
          <NavLink
            to="/dashboard/user/profile"
            className="list-group-item list-group-item-action"
          >
            Profile
          </NavLink>
          <NavLink
            to="/dashboard/user/orders"
            className="list-group-item list-group-item-action"
          >
            My orders
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default UserMenu;
