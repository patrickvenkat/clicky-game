import React from "react";
import "./Navbar.css";

function Navbar(props) {
  return (
    <div className="container-fullwidth">
      <nav className="navbar navbar-default navbar-static-top navbar-expand-lg navbar-dark bg-primary justify-content" data-spy="affix">

      {/* <div class="d-flex bd-highlight">
        <div class="p-2 flex-fill bd-highlight">Flex item with a lot of content</div>
        <div class="p-2 flex-fill bd-highlight">Flex item</div>
       <div class="p-2 flex-fill bd-highlight">Flex item</div>
      </div> */}

        <a className="navbar-brand" href="#">
          Clicky Game
        </a>

        <a className={props.messageColor} href="#">
          {props.message}
        </a>

        <a className="navbar-brand" href="#">
          Game Score: {props.score}
        </a>

        <a className="navbar-brand" href="#">
         |  High Score : {props.maxScore}
        </a>
        {/* <button
          className="navbar-toggler"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button> */}

        {/* <div className="collapse navbar-collapse" id="navbarSupportedContent"> */}
          {/* <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">
                Score: {props.score} <span className="sr-only">(current)</span>
              </a>
            </li> */}
            {/* <li className="nav-item">
              <a className="nav-link" href="#">
                Link
              </a>
            </li> */}
            {/* <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Dropdown
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="#">
                  Action
                </a>
                <a className="dropdown-item" href="#">
                  Another action
                </a>
                <div className="dropdown-divider" />
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
              </div>
            </li> */}
            {/* <li className="nav-item">
              <a className="nav-link disabled" href="#">
                Disabled
              </a>
            </li> */}
          {/* </ul> */}
          {/* <form className="form-inline my-2 my-lg-0">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
              Search
            </button>
          </form> */}
        {/* </div> */}
      </nav>
    </div>
  );
}

export default Navbar;
