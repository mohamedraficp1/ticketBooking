import React from "react";
import { withRouter } from "react-router-dom";

const UserLayout = ({ children }) => {
  return (
    <div className="user-container">
      <div>{children}</div>
    </div>
  );
};

export default withRouter(UserLayout);
