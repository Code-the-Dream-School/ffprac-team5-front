import React from "react";
import "./ingredients.css";

function ingredients() {
  return (
    <div className="container">
      <section className="two">
        <h1>Recipe Finder</h1>
        <p>A tool that help you use those leftover ingredients</p>
        <hr />
      </section>

      <main>
        <section className="three">
          <h2>Eggplant Parmesan</h2>
          <p>Ingredients</p>

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
          <img className="avatar2"></img>
          <div className="times">
            <section className="a">
              <p>PREP</p>
              <p>10 mins</p>
            </section>
            <section className="b">
              <p>COOK</p>
              <p>20 mins</p>
            </section>
            <section className="c">
              <p>TOTAL</p>
              <p>30 mins</p>
            </section>
          </div>
        </section>
        <section className="five">
          <div className="directions">
            <p>DIRECTION</p>
            <ul>
              <ol>
                Lorem ipsum dolor consectetor adipiscing elit sen do eiusmod
                tempor incidont lorem
              </ol>
              <ol>
                Lorem ipsum dolor consectetor adipiscing elit sen do eiusmod
                tempor incidont lorem
              </ol>
              <ol>
                Lorem ipsum dolor consectetor adipiscing elit sen do eiusmod
                tempor incidont lorem
              </ol>
              <ol>
                Lorem ipsum dolor consectetor adipiscing elit sen do eiusmod
                tempor incidont lorem
              </ol>
              <ol>
                Lorem ipsum dolor consectetor adipiscing elit sen do eiusmod
                tempor incidont lorem
              </ol>
            </ul>
          </div>
          <div className="buttons">
            <button className="btn">SAVE</button>
            <button className="btn">PRINT</button>
          </div>
        </section>
      </main>
    </div>
  );
}

export default ingredients;
