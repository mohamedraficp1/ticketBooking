import React from "react";
import { Col, Row } from "react-bootstrap";
import { AiOutlineClose } from "react-icons/ai";
import { RiCloseFill } from "react-icons/ri";
import { useHistory } from "react-router-dom";
import AppDropDown from "../../../components/appDropdown";
import Card from "../../../components/card";
import { categoryData } from "../../../constants/appData";

const QuestionCard = ({ count }) => {
  return (
    <div className="my-3 sfr-card-container">
      <button className="btn-blank sfr-card-close-btn-container">
        <RiCloseFill size={20} color="#fff" />
      </button>
      <div className="card-number">{count}</div>
      <Card>
        <p className="sfr-card-text p-3" contentEditable>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
      </Card>
    </div>
  );
};

const EditSurvey = () => {
  const history = useHistory();

  const goBack = () => history.goBack();

  return (
    <div className="container-data-table">
      <Card className="p-3 table-white-card">
        <div className="data-table">
          <div className="py-3 px-3 table-header">
            <button
              className="float-end card-close-icon btn-blank"
              onClick={goBack}
            >
              <AiOutlineClose size={25} color={"#000"} />
            </button>
            <div className="table-card-title">Edit Survey</div>
          </div>
          <div className="card-content-container p-3">
            <Row>
              <Col xs={3}>
                <div className="input-form py-3 add-survey-form">
                  <div className="card-sub-title mb-1">Details</div>
                  <input
                    className="app-input"
                    type="text"
                    id="surveyname"
                    placeholder="Survey Name"
                  />
                  <AppDropDown
                    data={categoryData}
                    placeholder="Select Category"
                  />
                  <textarea
                    className="app-input"
                    type="textarea"
                    rows={10}
                    id="lname"
                    placeholder="Question"
                  />
                  <div className="btn-container">
                    <button className="btn-small-outline w-100">
                      Add Question
                    </button>
                  </div>
                  <div className="btn-container">
                    <button className="btn-small-primary w-100">
                      Update Survey
                    </button>
                  </div>
                </div>
              </Col>
              <Col xs={9}>
                <div className="survey-form-right-container py-3 px-5">
                  <div className="card-sub-title">Questions</div>
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
          </div>
        </div>
      </Card>
    </div>
  );
};

export default EditSurvey;
