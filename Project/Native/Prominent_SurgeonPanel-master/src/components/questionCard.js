import React from "react";
import { RiCloseFill } from "react-icons/ri";

import Card from "./card";

const placeholder =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.";

const QuestionCard = ({ count, text, deleteOption = true }) => {
  return (
    <div className="my-3 sfr-card-container">
      {deleteOption && (
        <button className="btn-blank sfr-card-close-btn-container">
          <RiCloseFill size={20} color="#fff" />
        </button>
      )}
      <div className="card-number">{count}</div>
      <Card>
        <p className="sfr-card-text p-3">{text || placeholder}</p>
      </Card>
    </div>
  );
};

export default QuestionCard;
