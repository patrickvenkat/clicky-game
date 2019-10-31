import React from "react";

function Jumbotron() {
  return (
    <div className="jumbotron jumbotron-fluid">
      <h1 className="display-3">Welcome to the Clicky Game</h1>
      <p className="lead">
        Click any image to score. Do not click the same image twice. If you do, you lose the game and the score will be reset.
      </p>
      <h1></h1>
    </div>
  );
}

export default Jumbotron;
