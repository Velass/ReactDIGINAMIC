import "./Smiley.css";

function Smiley({ smiley, setSmiley }) {
  function handle(smiley) {
    setSmiley(smiley);
  }
  return <button onClick={() => handle(smiley)}>{smiley.image}</button>;
}

export default Smiley;
