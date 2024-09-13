import React, { useState, useEffect } from "react";
import StarRating from "./StarRating";
import { getSurveyData, saveAnswer } from "../ localStorageUtils";

const SurveyQuestion = ({
  question,
  questionIndex,
  totalQuestions,
  onNext,
  onPrevious,
  onSkip,
}) => {
  const [answer, setAnswer] = useState(
    () => getSurveyData()[question.id] || ""
  );

  useEffect(() => {
    // Update state when the question changes
    setAnswer(getSurveyData()[question.id] || "");
  }, [question.id]);

  const handleAnswerChange = (newValue) => {
    setAnswer(newValue);
    saveAnswer(question.id, newValue);
  };

  const handleNext = () => {
    if (answer === "") {
      alert("Please provide an answer before proceeding.");
      return;
    }
    onNext();
  };

  return (
    <div className="container">
      <h2>
        Question {questionIndex + 1} of {totalQuestions}
      </h2>
      <p>{question.text}</p>
      {question.type === "rating" && (
        <StarRating
          value={answer}
          onChange={handleAnswerChange}
          maxStars={question.max}
        />
      )}
      {question.type === "text" && (
        <textarea
          value={answer}
          onChange={(e) => handleAnswerChange(e.target.value)}
        />
      )}
      <div className="buttons">
        {questionIndex > 0 && <button onClick={onPrevious}>Previous</button>}
        <button onClick={onSkip}>Skip</button>
        <button onClick={handleNext}>Next</button>
      </div>
    </div>
  );
};

export default SurveyQuestion;
