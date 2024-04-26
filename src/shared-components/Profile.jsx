import React from "react";
import "./profile.css";

function Profile() {
  return (
    <div className="container">
      <section className="two">
        <h1>Recipe Finder</h1>
        <p>A tool that help you use those leftover ingredients</p>
        <hr />
      </section>

      <main>
        <section className="three">
          <h2>Mister Chef-Hat (profile name)</h2>
          <p>Favorite Recipes</p>

          <ul className="list">
            <li>Lorim ipsum dolor sit</li>
            <li>Lorim ipsum dolor sit</li>
            <li>Lorim ipsum dolor sit</li>
            <li>Lorim ipsum dolor sit</li>
            <li>Lorim ipsum dolor sit</li>
            <li>Lorim ipsum dolor sit</li>
            <li>Lorim ipsum dolor sit</li>
          </ul>
        </section>

        <section className="four">
          <img className="avatar"></img>
          <p>personprofile@gmail.com</p>
          <button className="btn">Edit Profile</button>
        </section>
      </main>
    </div>
  );
}

export default Profile;
