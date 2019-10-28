import React from "react";
import "./style.css";

function GeneralCard(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img
          // alt="Mr. Krabs"
          src={props.image}
          // src="C:/Users/paras/Desktop/github/clicky-game/public/Krabs.png"
        />
      </div>
      {/* <div className="content">
        <ul>
          <li>
            <strong>Name:</strong> {props.name}
          </li>
          <li>
            <strong>Occupation:</strong>  {props.occupation}
          </li>
          <li>
            <strong>Location:</strong>  {props.location}
          </li>
        </ul>
      </div> */}
    </div>
  );
}

export default GeneralCard;
