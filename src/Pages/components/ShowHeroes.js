import React, { useState } from "react";
import {
  Button,
  Modal,
  Image,
  Card,
} from "react-bootstrap";

import { connect } from "react-redux";
import { addHero, deleteHero } from "../../redux/actions/heroesActions";
import Swal from "sweetalert2";
import {
  addGood,
  deleteGood,
  addBad,
  deleteBad,
} from "../../redux/actions/alignmentCounter";
const ShowHeroes = (props) => {
  const { hero, goodHeroesCounter, badHeroesCounter } = props;
  const { alignment } = hero.biography;
  const { name, image } = props.hero;
  const {
    weight,
    height,
    "eye-color": eyeColor,
    "hair-color": hairColor,
  } = hero.appearance;
  const { "alter-egos": alterEgos } = hero.biography;
  const { base } = hero.work;

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const addHero = (id, alignment) => {
    if (alignment === "good" && goodHeroesCounter >= 3) {
      return(
      Swal.fire({
        icon: "error",
        title: "Too much good heroes",
        text: "you already had 3 and you need balance, pick a bad one!",
      }))
    }
    if (alignment === "bad" && badHeroesCounter >= 3) {
      return(
      Swal.fire({
        icon: "error",
        title: "Too much bad heroes",
        text: "you already had 3 and you need balance, pick a good one!",
      })
      )
    }
    if (props.teamMembers.members.length >= 6) {
      return(
      Swal.fire({
        icon: "error",
        title: "Too much heroes",
        text: "you already had 6 members on your team!",
      })
    )} else {
      props.addHero(id);
      if (alignment === "good") {
        props.addGood();
      } else if(alignment ==="bad") {
        props.addBad();
      }
      Swal.fire("Congratulations!", "You added a new member", "success");
    }
  };

  const deleteHero = (id, members, alignment) => {
    props.deleteHero(id, members);
    if (alignment === "good") {
      props.deleteGood();
    } else {
      props.deleteBad();
    }
    Swal.fire("Congratulations!", "You deleted a member", "success");
  };
  return (
    <div class="card shortSize d-block mx-auto bg-dark">
      <Image className="card-img-top" src={image.url} alt='no hero found' />
      <div className="card-body">
        <h5 className="card-title text-white">{name}</h5>
        <div className="d-flex flex-row justify-content-between">

        {!props.teamMembers.members.find((i) => i.data.id === hero.id) ? (
          <Button onClick={() => addHero(hero.id, alignment)} variant="primary">
            ADD
          </Button>
        ) : (
          <Button
            onClick={() =>
              deleteHero(hero.id, props.teamMembers.members, alignment)
            }
            variant="danger"
          >
            DELETE
          </Button>
        )}

        <Button variant="success" onClick={handleShow}>
          MORE INFO
        </Button>

        </div>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{name}</Modal.Title>
          </Modal.Header>
          <Modal.Body className="d-flex responsive-flex md:flex-row  justify-content-between">
            <Image className="responsive-width" src={image.url} rounded fluid />
            <Card bg="secondary" text="white" className="align-self-center">
              <Card.Header className="text-center h4">Info</Card.Header>
              <Card.Body style={{ marginLeft: "1rem" }}>
                <Card.Text>Weight: {weight[1]} </Card.Text>
                <Card.Text>Height: {height[1]} </Card.Text>
                <Card.Text>Name: {name} </Card.Text>
                <Card.Text>Alias: {alterEgos} </Card.Text>
                <Card.Text>Eye Color: {eyeColor} </Card.Text>
                <Card.Text>Hair Color: {hairColor} </Card.Text>
                <Card.Text>Place of work: {base} </Card.Text>
              </Card.Body>
            </Card>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              OK
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  teamMembers: state.teamMembers,
  goodHeroesCounter: state.goodHeroesCounter,
  badHeroesCounter: state.badHeroesCounter,
});
const mapDispatchToProps = (dispatch) => {
  return {
    addHero: (id) => {
      dispatch(addHero(id));
    },
    deleteHero: (id, members) => {
      dispatch(deleteHero(id, members));
    },
    addGood: () => dispatch(addGood()),
    deleteGood: () => dispatch(deleteGood()),
    addBad: () => dispatch(addBad()),
    deleteBad: () => dispatch(deleteBad()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ShowHeroes);
