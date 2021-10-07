import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">
        <Link class="navbar-brand" to="/">
          Posts Data
        </Link>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto pl-5">
            <li className="nav-item ">
              <input type="text" placeholder="search post" className="form-control"  style={{width:"350px",marginLeft:"200px"}} />

            </li>
            <li class="nav-item">
            <i class="fa fa-search" style={{ position: "absolute",top: "14px", left: "880px" ,fontSize:"23px"}}></i>

            </li>
            {/* <li class="nav-item">
              <a class="nav-link" href="!#">
                Contact
              </a>
            </li> */}
          </ul>
          <Link to="/addPost" className="btn btn-dark">
            Add Posts
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
