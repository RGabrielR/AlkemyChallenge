import React from "react";
import { connect } from "react-redux";
import NavBar from "./components/navbar";
import ShowHeroes from "./components/ShowHeroes";

const Main = (props) => {
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

  const organizedTeam = members
    .map((hero) => {
      const { biography, work, name, image, powerstats, id, appearance } = hero.data;
      const totalPower = Object.values(powerstats)
        .map((elem) => parseInt(elem, 10))
        .reduce((a, b) => a + b);
        
      return {
        name,
        image,
        powerstats,
        totalPower,
        id,
        biography,
        appearance,
        work,
      };
    })
    .sort((a, b) => b.totalPower - a.totalPower);

  return (
    <div>
      <NavBar />

      <h1 className="text-white">
        {" "}
        Average Height: {(averageHeight / 100).toFixed(2)} m{" "}
      </h1>
      <h1 className="text-white">
        {" "}
        Average Weight: {averageWeight.toFixed(2)} kg{" "}
      </h1>

      <div className="container-fluid mb-2 cardSize d-flex flex-column  align-items-center">
        {organizedTeam.map((hero) => {
          return <ShowHeroes key={hero.id} hero={hero} />;
        })}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  teamMembers: state.teamMembers,
});

export default connect(mapStateToProps, "")(Main);
