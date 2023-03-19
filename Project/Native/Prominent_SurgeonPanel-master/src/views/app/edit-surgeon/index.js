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

const QuestionCard = ({ count }) => {
  return (
    <div className="my-3 sfr-card-container">
      <div className="card-number">{count}</div>
      <Card>
        <p className="sfr-card-text p-3">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
      </Card>
    </div>
  );
};

const EditSurgeonDetails = () => {
  const history = useHistory();

  const goBack = () => history.goBack();

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
            <div className="table-card-title">Patient Survey</div>

            <div className="surgeon-details-content-container">
              <Row className="pt-5">
                {/* <Col className="input-form edit-surgeon-form">
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
                    type="email"
                    id="email"
                    placeholder="Email"
                  />
                  <input
                    className="app-input"
                    type="text"
                    id="phone"
                    placeholder="Phone Number"
                  />
                  <input
                    className="app-input"
                    type="text"
                    id="username"
                    placeholder="Username"
                  />
                  <input
                    className="app-input"
                    type="password"
                    id="password"
                    placeholder="Password"
                  />
                  <div className="btn-container">
                    <button className="btn-small-primary w-100">Update</button>
                  </div>
                </Col> */}

                <Col>
                  <Row>
                    <Col xs={3}>
                      <div className="card-sub-title pb-3">Assign Survey</div>
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

                      <div className="assign-btn pt-3">
                        <button className="btn-small-primary w-100">
                          Assign New Survey
                        </button>
                      </div>
                      <div className="assign-btn pt-3 pb-3">
                        <button className="btn-small-primary bg-red w-100">
                          Delete Existing Survey
                        </button>
                      </div>

                      {/* <div>
                        <div className="card-sub-title pb-3 pt-5">
                          Set Notification Frequency
                        </div>
                        <AppDropDown
                          data={ClientNotificationData}
                          placeholder="Select a Frequency"
                        />
                        <div className="assign-btn pt-3">
                          <button className="btn-small-primary w-100">
                            Save
                          </button>
                        </div>
                      </div> */}
                    </Col>
                    <Col xs={9}>
                      <div className="card-sub-title pb-3 px-5">
                        Assigned Survey : ENT-S-01
                      </div>
                      <div className="survey-form-right-container px-5 py-3">
                        <div className="card-sub-title">Survey Questions</div>
                        <div className="sf-r-qn-container">
                          <QuestionCard count={1} />
                          <QuestionCard count={2} />
                          <QuestionCard count={3} />
                          <QuestionCard count={4} />
                          <QuestionCard count={5} />
                          <QuestionCard count={6} />
                          <QuestionCard count={7} />
                          <QuestionCard count={8} />
                          <QuestionCard count={9} />
                          <QuestionCard count={10} />
                        </div>
                      </div>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default EditSurgeonDetails;
