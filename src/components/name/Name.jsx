import "./Name.css";

function Name({ userName }) {
  return (
    <div className="name">
      <h2>{userName}</h2>
    </div>
  );
}

export default Name;
