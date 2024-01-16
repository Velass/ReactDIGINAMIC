import { useState } from "react";
import "./App.css";

function App() {
  const [userInput, setuserInput] = useState("");
  return (
    <div className="app">
      <input type="text" onChange={(e) => setuserInput(e.target.value)} />
      <h1>{userInput}</h1>
    </div>
  );
}

export default App;
