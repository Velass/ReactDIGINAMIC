import { useState } from "react";
import "./App.css";
import Smiley from "./components/smiley/Smiley";
import { smileys } from "./models/Smiley.jsx";
import { profiles } from "./models/profiles.jsx";

function App() {
  const [smiley, setSmiley] = useState("");
  function profilSmiley(e) {
    setSmiley(e.image);
    profiles[0].humeur = e.image;
    console.log(profiles[0].humeur);
  }

  return (
    <div className="app">
      <h2>Quelle est ton humeur du jour ?</h2>
      <div className="smileys-box">
        {smileys.map((smiley) => (
          <Smiley key={smiley.id} smiley={smiley} setSmiley={profilSmiley} />
        ))}
      </div>
      <div>
        <h2>ton humeur est : {smiley} </h2>
      </div>
    </div>
  );
}

export default App;
