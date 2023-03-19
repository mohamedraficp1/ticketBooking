import React, { useCallback, useState } from "react";
import { withRouter } from "react-router-dom";
import SideBar from "../containers/navs/sideBar";
import TopNavBar from "../containers/navs/topNav";

const AppLayout = ({ children }) => {
  const [toggleSideBar, setToggleSideBar] = useState(false);
  const onToggleSideBar = useCallback((val) => {
    setToggleSideBar(val);
  }, []);

  return (
    <div className="app-container">
      <SideBar {...{ toggleSideBar, onToggleSideBar }} />
      <div className="right-container">
        <TopNavBar {...{ onToggleSideBar }} />
        <div className="app-content-container">{children}</div>
      </div>
    </div>
  );
};

export default withRouter(AppLayout);
