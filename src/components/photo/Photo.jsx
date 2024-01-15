import "./photo.css";
function Photo({ photoUrl }) {
  return (
    <div className="photo">
      <img src={photoUrl} />
    </div>
  );
}

export default Photo;
