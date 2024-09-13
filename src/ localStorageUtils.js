export const saveAnswer = (questionId, answer) => {
  const surveyData = JSON.parse(localStorage.getItem("surveyData")) || {};
  surveyData[questionId] = answer;
  localStorage.setItem("surveyData", JSON.stringify(surveyData));
};

export const getSurveyData = () =>
  JSON.parse(localStorage.getItem("surveyData")) || {};

export const setSurveyStatus = (status) => {
  localStorage.setItem("surveyStatus", status);
};

export const getSurveyStatus = () => localStorage.getItem("surveyStatus");
