import React, { useState } from "react";
import WelcomeScreen from "./components/WelcomeScreen";
import SurveyQuestion from "./components/SurveyQuestion";
import ThankYouScreen from "./components/ThankYouScreen";
import { getSurveyStatus, setSurveyStatus } from "./ localStorageUtils";

const questions = [
  {
    id: "q1",
    text: "How satisfied are you with our products?",
    type: "rating",
    max: 5,
  },
  {
    id: "q2",
    text: "How fair are the prices compared to similar retailers?",
    type: "rating",
    max: 5,
  },
  {
    id: "q3",
    text: "How satisfied are you with the value for money of your purchase?",
    type: "rating",
    max: 5,
  },
  {
    id: "q4",
    text: "On a scale of 1-10 how would you recommend us to your friends and family?",
    type: "rating",
    max: 10,
  },
  { id: "q5", text: "What could we do to improve our service?", type: "text" },
];

const App = () => {
  const [step, setStep] = useState(-1); // Start with the Welcome screen
  const [surveyCompleted, setSurveyCompleted] = useState(
    getSurveyStatus() === "COMPLETED"
  );

  const handleStart = () => setStep(0);

  const handleNext = () => setStep((prevStep) => prevStep + 1);
  const handlePrevious = () => setStep((prevStep) => prevStep - 1);

  const handleSkip = () => handleNext();

  const handleFinish = () => {
    setSurveyStatus("COMPLETED");
    setSurveyCompleted(true);
  };

  const handleRestart = () => {
    setStep(-1); // Show the Welcome screen
    setSurveyCompleted(false);
    localStorage.removeItem("surveyData");
    localStorage.removeItem("surveyStatus");
  };

  return (
    <div>
      {surveyCompleted ? (
        <ThankYouScreen onRestart={handleRestart} />
      ) : step === -1 ? (
        <WelcomeScreen onStart={handleStart} />
      ) : step >= 0 && step < questions.length ? (
        <SurveyQuestion
          question={questions[step]}
          questionIndex={step}
          totalQuestions={questions.length}
          onNext={handleNext}
          onPrevious={handlePrevious}
          onSkip={handleSkip}
        />
      ) : (
        <button onClick={handleFinish}>Submit Survey</button>
      )}
    </div>
  );
};

export default App;
