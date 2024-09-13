const WelcomeScreen = ({ onStart }) => (
  <div>
    <h1>Welcome to our survey!</h1>
    <button onClick={onStart}>Start Survey</button>
  </div>
);

export default WelcomeScreen;
