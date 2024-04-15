import React from "react";
import "./profile.css"

function Profile() {
  return (
    <div className="container">

      <section>
        <img className="avatar"></img>
      </section>
      <h2>Profile Name Goes Here!</h2>

      <p>personprofile@gmail.com</p>

      <p>Favorite Recipes</p>

      <ul className="list">
        <li>Place Holder</li>
        <li>Place Holder</li>
        <li>Place Holder</li>
        <li>Place Holder</li>
        <li>Place Holder</li>
        <li>Place Holder</li>
        <li>Place Holder</li>
      </ul>

      <button className="btn">Edit Profile</button>
    </div>
  );
}

export default Profile;
