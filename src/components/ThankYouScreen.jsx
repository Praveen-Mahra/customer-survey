const ThankYouScreen = ({ onRestart }) => {
  return (
    <div>
      <h1>Thank you for completing the survey!</h1>
      <button onClick={onRestart}>Reset survey</button>
    </div>
  );
};

export default ThankYouScreen;
