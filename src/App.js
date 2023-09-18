import axios from "axios";
import { useState } from "react";
import "./App.css";
import ReactAudioPlayer from "react-audio-player";

function App() {
  const [advice, setAdvice] = useState();

  const handleClick = () => [
    axios
      .get("https://api.adviceslip.com/advice")
      .then((response) => setAdvice(response.data.slip.advice)),
  ];
  return (
    <div className="App">
      <div className="adice-container">
        <button onClick={handleClick}>Give Me Your Advice</button>

        {advice && <p>{advice}</p>}
      </div>
    </div>
  );
}

export default App;
