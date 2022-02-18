import React from "react";
import { connect } from "react-redux";
import NavBar from "./components/navbar";
import ShowHeroes from "./components/ShowHeroes";
import { Col, Row, Button, Form, Container } from "react-bootstrap";
const Main = (props) => {
  
  const { members } = props.teamMembers;

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
      <Container className="container-fluid pt-4">
          <Row>
          {organizedTeam.map((hero) => {
          return <ShowHeroes key={hero.id} hero={hero} />;
        })}
          </Row>
        </Container>
    </div>
  );
};

const mapStateToProps = (state) => ({
  teamMembers: state.teamMembers,
});

export default connect(mapStateToProps, "")(Main);
