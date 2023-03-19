import React, { useState } from "react";
import Pagination from "@mui/material/Pagination";
import { adminRoot } from "../../../constants";

import Card from "../../../components/card";
import OutlinedButton from "../../../components/outlinedButton";
import AppModal from "../../../components/appModal";
import DeleteConfirmationBox from "../../../components/deleteConfirmBox";
import AddCategory from "../add-category";
import EditCategory from "../edit-category";
import { useHistory } from "react-router-dom";
import AppDateRangePicker from "../../../components/datePicker";
import AppDropDown from "../../../components/appDropdown";
import { categoryData, surveyData } from "../../../constants/appData";

const ViewSurveys = () => {
  const history = useHistory();
  const [modalVisible, setModalVisible] = useState(false);
  const [editModalVisible, setEditModalVisible] = useState(false);
  const [deleteModalVisible, setDeleteModalVisible] = useState(false);
  const [reportStartDate, setReportStartDate]=useState();

  const hideModal = () => setModalVisible(false);
  const hideEditModal = () => setEditModalVisible(false);
  const hideDeleteModal = () => setDeleteModalVisible(false);

  const data = React.useMemo(
    () => [
      {
        date: "01-10-2022",
        name: "ENT-S-01",
        category: "ENT",
        status: "Completed",
      },
      {
        date: "02-10-2022",
        name: "ENT-S-02",
        category: "Pediatricians",
        status: "Completed",
      },
      {
        date: "03-10-2022",
        name: "ENT-S-03",
        category: "Allergists",
        status: "Incomplete",
      },
      {
        date: "04-10-2022",
        name: "ENT-S-04",
        category: "Dermatologists",
        status: "Incomplete",
      },
      {
        date: "05-10-2022",
        name: "ENT-S-05",
        category: "Ophthalmologists",
        status: "Completed",
      },
      {
        date: "06-10-2022",
        name: "ENT-S-06",
        category: "Plastic Surgeons",
        status: "Incomplete",
      },
      {
        date: "07-10-2022",
        name: "ENT-S-07",
        category: "Podiatrists",
        status: "Completed",
      },
      {
        date: "08-10-2022",
        name: "ENT-S-08",
        category: "Radiologists",
        status: "Incomplete",
      },
      {
        date: "09-10-2022",
        name: "ENT-S-09",
        category: "Rheumatologists",
        status: "Completed",
      },
      {
        date: "10-10-2022",
        name: "ENT-S-10",
        category: "General Surgeons",
        status: "Incomplete",
      },
      {
        date: "11-10-2022",
        name: "ENT-S-11",
        category: "Urologists",
        status: "Completed",
      },
      {
        date: "12-10-2022",
        name: "ENT-S-12",
        category: "Oncologists",
        status: "Incomplete",
      },
      {
        date: "13-10-2022",
        name: "ENT-S-13",
        category: "ENT",
        status: "Completed",
      },
      {
        date: "14-10-2022",
        name: "ENT-S-14",
        category: "Pediatricians",
        status: "Incomplete",
      },
      {
        date: "15-10-2022",
        name: "ENT-S-15",
        category: "Allergists",
        status: "Completed",
      },
      {
        date: "16-10-2022",
        name: "ENT-S-16",
        category: "Dermatologists",
        status: "Completed",
      },
      {
        date: "17-10-2022",
        name: "ENT-S-17",
        category: "Ophthalmologists",
        status: "Incomplete",
      },
      {
        date: "18-10-2022",
        name: "ENT-S-18",
        category: "Plastic Surgeons",
        status: "Completed",
      },
    ],
    []
  );

  return (
    <div className="container-data-table">
      <Card className="p-3 table-white-card">
        <div className="data-table">
          <div className="py-3 px-3 table-header">
            <div className="report-header-right-container float-end d-flex align-items-center">
              <div className="d-flex align-items-center">
                <AppDropDown
                  data={categoryData}
                  placeholder="Select Category"
                />

                <AppDropDown
                  className="px-3"
                  labelName="name"
                  valueName="name"
                  data={surveyData}
                  placeholder="Select Survey"
                />
              </div>
              <AppDateRangePicker label="Start Date" className="px-2 pb-3" setReportStartDate={setReportStartDate} />
              <AppDateRangePicker label="End Date" className="px-2 pb-3" reportStartDate={reportStartDate} />
              <div className="float-end px-3">
                <OutlinedButton title="Generate Report" />
              </div>
            </div>

            <div className="table-card-title">Patient Report</div>
          </div>
          <table className="table-container category-table">
            <thead>
              <tr>
                <th className="position-static">DATE</th>
                <th className="position-static">SURVEY NAME</th>
                <th className="position-static">STATUS</th>
              </tr>
            </thead>
            <tbody>
              {data.map((val, index) => (
                <tr>
                  <td>{val.date}</td>
                  <td>{val.name}</td>
                  <td>{val.status}</td>
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
      <AppModal visible={modalVisible} handleClose={hideModal}>
        <AddCategory />
      </AppModal>
      <AppModal visible={editModalVisible} handleClose={hideEditModal}>
        <EditCategory />
      </AppModal>

      <DeleteConfirmationBox
        visible={deleteModalVisible}
        handleClose={hideDeleteModal}
      />
    </div>
  );
};

export default ViewSurveys;
