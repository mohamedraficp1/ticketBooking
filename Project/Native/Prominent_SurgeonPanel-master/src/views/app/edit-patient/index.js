import React from "react";
import { Col, Row } from "react-bootstrap";
import { AiOutlineClose, AiFillCloseCircle } from "react-icons/ai";
import { useHistory } from "react-router-dom";
import AppDropDown from "../../../components/appDropdown";
import Card from "../../../components/card";
import {
  categoryData,
  ClientNotificationData,
  surveyData,
} from "../../../constants/appData";
import AppDateRangePicker from "../../../components/datePicker";
import QuestionCard from "../../../components/questionCard";

const SurveyItem = ({ value }) => (
  <li className="detail-survey-name-container">
    <div className="assigned-survey-tile py-0">
      <div className="pr-3">{value}</div>
      <div>
        <AiFillCloseCircle size={18} color="red" />
      </div>
    </div>
  </li>
);

const EditPatient = () => {
  const history = useHistory();

  const goBack = () => {
    if (history.length > 1) {
      history.goBack();
    }
  };

  return (
    <div className="container-data-table">
      <Card className="p-3 table-white-card">
        <div className="position-rfh data-table">
          <div className="py-3 px-3 table-header">
            <button
              className="float-end card-close-icon btn-blank"
              onClick={goBack}
            >
              <AiOutlineClose size={25} color={"#000"} />
            </button>
            <div className="table-card-title">Edit Patient</div>

            <div className="surgeon-details-content-container">
              <Row className="pt-5">
                <Col xs={12} sm={6} className="input-form edit-surgeon-form">
                  <div className="card-sub-title pb-3">Basic Details</div>
                  <input
                    className="app-input"
                    type="text"
                    id="fname"
                    placeholder="First Name"
                  />
                  <input
                    className="app-input"
                    type="text"
                    id="lname"
                    placeholder="Last Name"
                  />
                  <input
                    className="app-input"
                    type="text"
                    id="dob"
                    placeholder="Date of birth (DD/MM/YYYY)"
                  />
                  <input
                    className="app-input"
                    type="text"
                    id="phone"
                    placeholder="Phone Number"
                  />
                  <input
                    className="app-input"
                    type="email"
                    id="email"
                    placeholder="Email"
                  />

                  <input
                    className="app-input"
                    type="text"
                    id="password"
                    placeholder="Password"
                  />

                  <div className="add-patient-right-box pt-3 pb-3">
                    <div className="card-sub-title pb-3 pt-3">
                      Set Notification Frequency
                    </div>
                    <AppDropDown
                      className="pb-5"
                      data={ClientNotificationData}
                      placeholder="Select a Frequency"
                    />
                  </div>

                  {/* 
                  <div className="btn-container">
                    <button className="btn-small-primary w-100">Save</button>
                  </div> */}
                </Col>

                <Col xs={4}>
                  <div className="card-sub-title pb-3">Assign Survey</div>
                  <div>
                    <AppDropDown
                      data={categoryData}
                      placeholder="Select Category"
                    />

                    <AppDropDown
                      className="pt-2"
                      labelName="name"
                      valueName="name"
                      data={surveyData}
                      placeholder="Select Survey"
                    />
                  </div>
                  <div className="btn-container pt-3">
                    <button className="btn-small-outline w-100">Add</button>
                  </div>

                  <div className="survey-form-right-container pt-5">
                    <div className="card-sub-title"> Assigned Surveys</div>
                    <div className="sf-r-qn-container box-h-35vh">
                      <QuestionCard count={1} text="ENT-S-01" />
                      <QuestionCard count={2} text="ENT-S-02" />
                      <QuestionCard count={3} text="ENT-S-03" />
                      <QuestionCard count={4} text="ENT-S-04" />
                      <QuestionCard count={5} text="ENT-S-05" />
                      <QuestionCard count={6} text="ENT-S-06" />
                      <QuestionCard count={7} text="ENT-S-07" />
                      <QuestionCard count={8} text="ENT-S-08" />
                      <QuestionCard count={9} text="ENT-S-09" />
                      <QuestionCard count={10} text="ENT-S-10" />
                    </div>
                  </div>
                </Col>

                <Col>
                  <div className="survey-form-right-container">
                    <div className="card-sub-title">Survey Preview</div>
                    <div className="card-sub-text pt-2">ENT-S-01</div>
                    <div className="sf-r-qn-container h-65">
                      <QuestionCard count={1} deleteOption={false} />
                      <QuestionCard count={2} deleteOption={false} />
                      <QuestionCard count={3} deleteOption={false} />
                      <QuestionCard count={4} deleteOption={false} />
                      <QuestionCard count={5} deleteOption={false} />
                      <QuestionCard count={6} deleteOption={false} />
                      <QuestionCard count={7} deleteOption={false} />
                      <QuestionCard count={8} deleteOption={false} />
                      <QuestionCard count={9} deleteOption={false} />
                      <QuestionCard count={10} deleteOption={false} />
                    </div>
                  </div>
                </Col>
              </Row>
              <Row>
                <div class="btn-right-container">
                  <div className="btn-container">
                    <button className="btn-small-primary">Save</button>
                  </div>
                </div>
              </Row>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default EditPatient;
