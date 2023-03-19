import React, { useEffect, useState } from "react";
import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarHeader,
  SidebarFooter,
} from "react-pro-sidebar";
import { useHistory, useLocation } from "react-router";
import { adminRoot, sidemenuData } from "../../constants";
import { AiOutlineMenuFold } from "react-icons/ai";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { RiLogoutCircleRLine } from "react-icons/ri";
import appIcon from "../../assets/icons/appLogo.png";
import { setCurrentUser } from "../../helpers/Utils";

const SideBar = ({ toggleSideBar, onToggleSideBar }) => {
  const history = useHistory();
  const location = useLocation();
  const [collapseState, setCollapseState] = useState(false);

  const currentPathName = location.pathname;

  const onToggleCollapse = () => {
    if (toggleSideBar) {
      onToggleSideBar(false);
    } else {
      setCollapseState((prev) => !prev);
    }
  };

  const logout = () => {
    setCurrentUser();
    history.push("/user/login");
  };

  useEffect(() => {
    if (toggleSideBar) {
      setCollapseState(false);
    }
  }, [toggleSideBar]);

  return (
    <ProSidebar
      className="sidebar-container"
      collapsed={collapseState}
      collapsedWidth={75}
      width={250}
      breakPoint="sm"
      toggled={toggleSideBar}
    >
      <SidebarHeader className="px-3 py-2">
        <div className="sidebar-header-container">
          {!collapseState && (
            <div className="brand-detail-container">
              <img src={appIcon} alt="logo" width="50px" />
              <h4 className="f-extrabold sidebar-brand-title">PROM-IN-ENT</h4>
            </div>
          )}

          <div
            className={
              collapseState ? "text-center" : "sidebar-collapse-icon-container"
            }
          >
            <button className="btn-blank" onClick={onToggleCollapse}>
              {collapseState ? (
                <AiOutlineMenuUnfold size={25} color={"#000"} />
              ) : (
                <AiOutlineMenuFold size={25} color={"#000"} />
              )}
            </button>
          </div>
        </div>
      </SidebarHeader>
      <Menu style={{ height: "100%" }}>
        {sidemenuData.map((item) => {
          const isActiveMenu =
            currentPathName == `${adminRoot}/${item.to}` || false;
          return (
            <MenuItem
              icon={isActiveMenu ? item.activeIcon : item.icon}
              key={item.id}
              onClick={() => {
                history.push(`${adminRoot}/${item.to}`);
              }}
            >
              <h6
                style={{ color: isActiveMenu ? "#16348D" : "#8f9691" }}
                className={`pt-2 ${
                  isActiveMenu && "sidebar-menu-label-active"
                } sidebar-menu-label`}
              >
                {item.label}
              </h6>
            </MenuItem>
          );
        })}
      </Menu>
      <SidebarFooter>
        <button className="btn-blank" onClick={logout}>
          <div className="d-flex align-items-center px-4 py-2">
            <RiLogoutCircleRLine size={20} color="#000" />
            {!collapseState && (
              <h6 className="pt-2 px-3 sidebar-footer-label">Logout</h6>
            )}
          </div>
        </button>
      </SidebarFooter>
    </ProSidebar>
  );
};

export default SideBar;
