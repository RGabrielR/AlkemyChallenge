import React, { useState } from "react";
import { Col, Row, Button, Form, Container } from "react-bootstrap";
import axios from "axios";
import NavBar from "./components/navbar";
import ShowHeroes from "./components/ShowHeroes";
import { useFormik } from "formik";
import * as Yup from "yup";
import './HeroesLoader.css';
const Heroes = () => {
  const [heroes, setHeroes] = useState([]);
  const [loading, setLoading] = useState(false);
  const formik = useFormik({
    initialValues: {
      search: "",
    },
    validationSchema: Yup.object({
      search: Yup.string().required(
        "please, insert the name you´re looking for"
      ),
    }),
    onSubmit: (value) => {
      setLoading(true);
      console.log(process.env.REACT_APP_SITE);
      const config = {
        method: "get",
        url: `${process.env.REACT_APP_SITE}/search/${value.search}`,
        headers: {},
      };
      axios(config).then((response) => {
        setHeroes(response.data.results);
        setLoading(false);
      });
    },
  });

  return (
    <div className="">
      <NavBar />
      <div className="container  pb-4">
        <h1 className="text-white py-3 pl-4 text-center">
          Choose your favourite heroes to join your team
        </h1>
        <Form className="pl-5 pb-12" onSubmit={formik.handleSubmit}>
          <Container >
          <Row className="justify-content-center">
            <Col xs lg="6" >              
            <Form.Control
                size="lg"
                type="text"
                name="search"
                id="search"
                value={formik.values.search}
                onChange={formik.handleChange}
                placeholder="Search for your Hero"
              />
              </Col>
              <Col xs lg="1">
              <Button variant="secondary" size="lg" type="submit">
                Search
              </Button>
              </Col>
          </Row>
          </Container>
        </Form>
      </div>

      {formik.errors.search ? (
        <div
          className="my-4 bg-danger 
                 border border-dark rounded text-white p-2"
        >
          <p className="font-bold text-center h1">{formik.errors.search}</p>
        </div>
      ) : (
        ""
      )}
      {loading ? (
        <main>
          <div className="body">
            <span>
              <span></span>
              <span></span>
            </span>
            <div className="hand">
              <span></span>
              <div className="face"></div>
              <div className="cowl"></div>
            </div>
          </div>
          <div className="speed">
            <span></span>
            <span></span>
          </div>
          <h2>SEARCHING YOUR HEROES</h2>
        </main>
      ) : (
        <Container className="container-fluid">
          <Row>
            {heroes
              ? heroes.map((hero) => {
                  console.log(hero);
                  return <ShowHeroes key={hero.id} hero={hero} />;
                })
              : ""}
          </Row>
        </Container>
      )}
    </div>
  );
};

export default Heroes;
