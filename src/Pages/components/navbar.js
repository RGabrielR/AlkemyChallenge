import React from "react";
import { connect } from "react-redux";
const NavBar = (props) => {
  const { members } = props.teamMembers;
  const allHeights = members
    .map((hero) => {
      return hero.data.appearance.height[1];
    })
    .map((elem) => parseInt(elem, 10));

  const allWeight = members
    .map((hero) => {
      return hero.data.appearance.weight[1];
    })
    .map((elem) => parseInt(elem, 10));

  let numOr0 = (n) => (isNaN(n) ? 0 : n);

  const averageHeight =
    allHeights.reduce((a, b) => numOr0(a) + numOr0(b), 0) /
    (allHeights.length - 1);

  const averageWeight =
    allWeight.reduce((a, b) => numOr0(a) + numOr0(b), 0) /
    (allWeight.length - 1);

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
            <ul className="navbar-nav w-100 d-flex justify-content-between">
              <li className="nav-item px-10">
                <a
                  className="nav-link active text-white h2 "
                  aria-current="page"
                  href="/heroes"
                >
                  heroes
                </a>
              </li>
              <li className="nav-link disabled px-10 ">
                <h5 className="text-white " >
                  {" "}
                  Average Height: {(averageHeight / 100).toFixed(2)} m{" "}
                </h5>
                <h5 className="text-white ">
                  {" "}
                  Average Weight: {averageWeight.toFixed(2)} kg{" "}
                </h5>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

const mapStateToProps = (state) => ({
  teamMembers: state.teamMembers,
});

export default connect(mapStateToProps, "")(NavBar);
