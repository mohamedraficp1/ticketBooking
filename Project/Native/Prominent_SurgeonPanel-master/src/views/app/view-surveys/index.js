import React, { useState } from "react";
import Pagination from "@mui/material/Pagination";
import { AiTwotoneEdit, AiFillDelete } from "react-icons/ai";
import { GrCircleInformation } from "react-icons/gr";

import { adminRoot } from "../../../constants";

import Card from "../../../components/card";
import OutlinedButton from "../../../components/outlinedButton";
import AppModal from "../../../components/appModal";
import DeleteConfirmationBox from "../../../components/deleteConfirmBox";
import AddCategory from "../add-category";
import EditCategory from "../edit-category";
import { useHistory } from "react-router-dom";

const ViewSurveys = () => {
  const history = useHistory();
  const [modalVisible, setModalVisible] = useState(false);
  const [editModalVisible, setEditModalVisible] = useState(false);
  const [deleteModalVisible, setDeleteModalVisible] = useState(false);

  const hideModal = () => setModalVisible(false);
  const hideEditModal = () => setEditModalVisible(false);
  const showEditModal = () => setEditModalVisible(true);
  const hideDeleteModal = () => setDeleteModalVisible(false);
  const showDeleteModal = () => setDeleteModalVisible(true);

  const goToAddSurvey = () => history.push(`${adminRoot}/add-survey`);
  const goToEditSurvey = () => history.push(`${adminRoot}/view-survey-details`);

  const data = React.useMemo(
    () => [
      {
        name: "ENT-S-01",
        category: "ENT",
      },
      {
        name: "PDT-S-01",
        category: "Pediatricians",
      },
      {
        name: "ALGY-S-01",
        category: "Allergists",
      },
      {
        name: "DER-S-01",
        category: "Dermatologists",
      },
      {
        name: "OPH-S-01",
        category: "Ophthalmologists",
      },
      {
        name: "PST-S-01",
        category: "Plastic Surgeons",
      },
      {
        name: "POD-S-01",
        category: "Podiatrists",
      },
      {
        name: "RAD-S-01",
        category: "Radiologists",
      },
      {
        name: "RHE-S-01",
        category: "Rheumatologists",
      },
      {
        name: "GS-S-01",
        category: "General Surgeons",
      },
      {
        name: "URO-S-01",
        category: "Urologists",
      },
      {
        name: "ONC-S-02",
        category: "Oncologists",
      },
      {
        name: "ENT-S-01",
        category: "ENT",
      },
      {
        name: "PDT-S-02",
        category: "Pediatricians",
      },
      {
        name: "ALGY-S-02",
        category: "Allergists",
      },
      {
        name: "DER-S-02",
        category: "Dermatologists",
      },
      {
        name: "OPH-S-02",
        category: "Ophthalmologists",
      },
      {
        name: "PST-S-02",
        category: "Plastic Surgeons",
      },
    ],
    []
  );

  return (
    <div className="container-data-table">
      <Card className="p-3 table-white-card">
        <div className="data-table">
          <div className="py-3 px-3 table-header">
            <div className="table-card-title">Surveys</div>
          </div>
          <table className="table-container category-table">
            <thead>
              <tr>
                <th>SL NO</th>
                <th>SURVEY NAME</th>
                <th>CATEGORY</th>
                <th>Details</th>
              </tr>
            </thead>
            <tbody>
              {data.map((val, index) => (
                <tr>
                  <td>{index + 1}</td>
                  <td>{val.name}</td>
                  <td>{val.category}</td>
                  <td>
                    <button className="btn-blank" onClick={goToEditSurvey}>
                      <GrCircleInformation size={22} color={"#0A0758"} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <Pagination
            className="float-end pt-3"
            color="primary"
            count={10}
            page={1}
            onChange={() => null}
          />
        </div>
      </Card>
    </div>
  );
};

export default ViewSurveys;
