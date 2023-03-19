import React from "react";
import { Col, Row } from "react-bootstrap";

const EditCategory = () => {
  return (
    <div className="container-center">
      <div className="white-card p-3">
        <div className="card-title">EDIT CATEGORY</div>
        <div className="input-form py-3">
          <input
            className="app-input"
            type="text"
            id="fname"
            placeholder="Category Name"
          />
          <div className="btn-container">
            <button className="float-end btn-small-primary">Save</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditCategory;
