import React from "react";
import { useHistory } from "react-router-dom";
import { AiOutlineMenuUnfold, AiOutlineLogout } from "react-icons/ai";

import { setCurrentUser } from "../../helpers/Utils";

const TopNavBar = ({ onToggleSideBar }) => {
  const history = useHistory();
  return (
    <div className="top-nav-container">
      <button className="btn-blank" onClick={() => onToggleSideBar(true)}>
        <AiOutlineMenuUnfold size={25} />
      </button>
      {/* 
      <button
        className="btn-blank"
        onClick={() => {
          setCurrentUser();
          history.push("/user/login");
        }}
      >
        <AiOutlineLogout size={20} />
      </button> */}
    </div>
  );
};

export default TopNavBar;
