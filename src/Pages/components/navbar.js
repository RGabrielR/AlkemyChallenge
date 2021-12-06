import React from "react";
// import { useHistory } from "react-router-dom";
// import {connect} from 'react-redux';
// import {loggedOut} from '../../redux/actions/loggedActions';
const NavBar = (props) => {
  // const history = useHistory();
  // const LogOut = () => {
  //   localStorage.removeItem("token");
  //   props.loggedOut();
  //   history.push("/login");
  // };

  return (
    <div className="navBar">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <img className="logoSize" src="./logo page.png" alt="img" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item px-10">
                <a
                  className="nav-link active text-white h2 "
                  aria-current="page"
                  href="/heroes"
                >
                  heroes
                </a>
              </li>
              {/* <li className="nav-item  rounded mr-10 pointer">
                <a className="nav-link text-white h2 " onClick={() => LogOut()}>
                  log out
                </a>
              </li> */}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};
// const mapDispatchToProps= (dispatch) => {
//   return{
//     loggedOut: () => dispatch(loggedOut())
//   }
// }
export default NavBar

// connect('', mapDispatchToProps)(NavBar);
