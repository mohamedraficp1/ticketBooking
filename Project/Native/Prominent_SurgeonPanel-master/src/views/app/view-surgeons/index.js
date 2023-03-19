import React, { useState } from "react";
import Pagination from "@mui/material/Pagination";
import { AiTwotoneEdit, AiFillDelete } from "react-icons/ai";
import { RiSurveyFill } from "react-icons/ri";
import { IoAnalyticsSharp } from "react-icons/io5";

import Card from "../../../components/card";
import OutlinedButton from "../../../components/outlinedButton";
import ToggleButton from "../../../components/toggleButton";
import DeleteConfirmationBox from "../../../components/deleteConfirmBox";
import { surgeonData } from "../../../constants/appData";
import { useHistory } from "react-router-dom";
import { adminRoot } from "../../../constants";

const ViewSurgeons = () => {
  const history = useHistory();
  const [modalVisible, setModalVisible] = useState(false);
  const [editModalVisible, setEditModalVisible] = useState(false);
  const [deleteModalVisible, setDeleteModalVisible] = useState(false);

  const hideModal = () => setModalVisible(false);
  const showModal = () => setModalVisible(true);
  const hideEditModal = () => setEditModalVisible(false);
  const showEditModal = () => setEditModalVisible(true);
  const hideDeleteModal = () => setDeleteModalVisible(false);
  const showDeleteModal = () => setDeleteModalVisible(true);

  const goToDetailsPage = () =>
    history.push(`${adminRoot}/view-surgeon-details`);

  const goToEditSurgeonPage = () =>
    history.push(`${adminRoot}/edit-survey-details`);

  const goToEditPatientPage = () => history.push(`${adminRoot}/edit-patient`);
  const goToReportPage = () => history.push(`${adminRoot}/view-report`);

  const goToAddSurgeonPage = () =>
    history.push(`${adminRoot}/add-surgeon-details`);

  return (
    <div className="container-data-table">
      <Card className="p-3 table-white-card">
        <div className="data-table">
          <div className="py-3 px-3 table-header">
            {/* <div className="float-end px-3">
              <OutlinedButton
                title="Add Surgeon"
                onClick={goToAddSurgeonPage}
              />
            </div> */}
            <div className="table-card-title">Patients</div>
          </div>
          <table className="table-container">
            <thead>
              <tr>
                <th>NAME</th>
                <th>EMAIL</th>
                <th>PHONE NUMBER</th>
                <th>EDIT</th>
                <th>SURVEY STATUS</th>
                <th>Report</th>
                <th>
                  ENABLE/
                  <br />
                  DISABLE
                </th>
              </tr>
            </thead>
            <tbody>
              {surgeonData.map((val) => (
                <tr>
                  <td>{val.name}</td>
                  <td>{val.email}</td>
                  <td>{val.phoneNumber}</td>
                  <td>
                    <button className="btn-blank" onClick={goToEditPatientPage}>
                      <AiTwotoneEdit size={22} color={"#0A0758"} />
                    </button>
                  </td>

                  <td>COMPLETED</td>
                  <td>
                    <button className="btn-blank" onClick={goToReportPage}>
                      <IoAnalyticsSharp size={22} color={"#0A0758"} />
                    </button>
                  </td>
                  <td>
                    <ToggleButton />
                  </td>
                  {/* <td>
                    <button
                      className="btn-blank view-details-btn"
                      onClick={goToDetailsPage}
                    >
                      <span class="tooltiptext">View Details</span>
                      <GrCircleInformation size={22} color={"#0A0758"} />
                    </button>
                  </td> */}
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

      <DeleteConfirmationBox
        visible={deleteModalVisible}
        handleClose={hideDeleteModal}
      />
    </div>
  );
};

export default ViewSurgeons;
