import React from "react";

export default function Hats() {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>HATS</h1>
      <div className="container">
        <div className="row">
          <div className="column">
            <div className="detail">
              <img src="./Assets/img/hat1.jpg" alt="" className="cc" />
            </div>
          </div>
          <div className="column">
            <div className="detail">
              <img src="./Assets/img/blue-beanie.jpg" alt="" className="cc" />
            </div>
          </div>
          <div className="column">
            <div className="detail">
              <img src="./Assets/img/brown-cowboy.jpg" alt="" className="cc" />
            </div>
          </div>
        </div>

        <div className="row">
          <div className="column">
            <div className="detail">
              <img src="./Assets/img/grey-brim.jpg" alt="" className="cc" />
            </div>
          </div>
          <div className="column">
            <div className="detail">
              <img src="./Assets/img/blue-snapback.jpg" alt="" className="cc" />
            </div>
          </div>
          <div className="column">
            <div className="detail">
              <img src="./Assets/img/palm-tree-cap.jpg" alt="" className="cc" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
