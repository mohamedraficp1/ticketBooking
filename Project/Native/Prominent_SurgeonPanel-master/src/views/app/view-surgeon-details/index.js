import React from "react";
import { Col, Row } from "react-bootstrap";
import { AiOutlineClose } from "react-icons/ai";
import { useHistory } from "react-router-dom";
import Card from "../../../components/card";

const DetailCard = ({ title, value }) => (
  <div className="detail-card-container">
    <div className="detail-tile-label">{title}</div>
    <div className="detail-tile-value">{value}</div>
  </div>
);

const SurgeonDetails = () => {
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
            <div className="table-card-title">Surgeon Details</div>

            <div className="surgeon-details-content-container">
              <Row className="pt-5">
                <Col>
                  <div className="card-sub-title pb-3">Basic Details</div>
                  <DetailCard title="FIRST NAME" value="Terry" />
                  <DetailCard title="LAST NAME" value="Otero" />
                  <DetailCard
                    title="EMAIL"
                    value="terryJOtero@jourrapide.com"
                  />
                  <DetailCard title="PHONE NUMBER" value="	7077225295" />
                  <DetailCard title="USERNAME" value="terryotero123	" />
                  <DetailCard title="PASSWORD" value="Terryotero@123" />
                </Col>
                <Col>
                  <div className="card-sub-title pb-3">Assigned Surveys</div>
                  <div>
                    <ul>
                      <li className="detail-survey-name">ENT-S-01</li>
                      <li className="detail-survey-name">PDT-S-01</li>
                      <li className="detail-survey-name">ALGY-S-01</li>
                      <li className="detail-survey-name">DER-S-01</li>
                      <li className="detail-survey-name">OPH-S-01</li>

                      <li className="detail-survey-name">ENT-S-01</li>
                      <li className="detail-survey-name">PDT-S-01</li>
                      <li className="detail-survey-name">ALGY-S-01</li>
                      <li className="detail-survey-name">DER-S-01</li>
                      <li className="detail-survey-name">OPH-S-01</li>
                    </ul>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default SurgeonDetails;
