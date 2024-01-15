// Profile.jsx

import { profiles } from "../../models/Profiles.jsx";
import Photo from "../photo/Photo";
import Bio from "../bio/Bio.jsx";
import Name from "../name/Name";
import "./Profile.css";
function Profile() {
  return (
    <div className="profiles">
      {profiles.map((profile) => (
        <div key={profile.id} className="profile">
          <Photo photoUrl={profile.photo} altText={profile.name} />
          <Name userName={profile.name} />
          <Bio bioText={profile.bio} />
        </div>
      ))}
    </div>
  );
}

export default Profile;
