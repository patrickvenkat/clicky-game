import React from "react";
import "./style.css";
// import Navbar from "../Navbar/Navbar";

function GeneralCard(props) {
  return (
    <div className="card" onClick={() => props.handleIncrement()}>
      <div className="img-container">
        <a href="#">
          <img
            // alt={props.name}
            src={props.image}
            // src="C:/Users/paras/Desktop/github/clicky-game/public/Krabs.png"
          />
        </a>
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
