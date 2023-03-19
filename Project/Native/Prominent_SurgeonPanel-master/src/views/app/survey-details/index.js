import React from "react";
import { Col } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import Card from "../../../components/card";
import { AiOutlineClose } from "react-icons/ai";

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

const SurveyDetails = () => {
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
            <div className="table-card-title">Survey Details</div>
            <Col xs={12} className="pt-5">
              <div className="card-sub-title pb-3">Survey Name : ENT-S-01</div>
              <div className="survey-form-right-container  py-3">
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
          </div>
        </div>
      </Card>
    </div>
  );
};

export default SurveyDetails;
