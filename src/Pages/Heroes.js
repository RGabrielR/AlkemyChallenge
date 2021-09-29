import React, { useState } from "react";
import { Col, Row, Button, Form, Container } from "react-bootstrap";
import axios from "axios";
import NavBar from "./components/navbar";
import ShowHeroes from "./components/ShowHeroes";
import { useFormik } from "formik";
import * as Yup from "yup";

const Heroes = () => {
  const [heroes, setHeroes] = useState([]);
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
      const config = {
        method: "get",
        url: `${process.env.REACT_APP_SITE}/search/${value.search}`,
        headers: {},
      };
      axios(config).then((response) => {
        setHeroes(response.data.results);
      });
    },
  });

  return (
    <div className="">
      <NavBar />
      <div className="container">
        <h1 className="text-white py-3 pl-4">
          {" "}
          Choose your favourite heroes to join your team{" "}
        </h1>
        <Form className="pl-4" onSubmit={formik.handleSubmit}>
          <Row>
            <Col>
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
            <Col>
              <Button variant="secondary" size="lg" type="submit">
                Search
              </Button>
            </Col>
          </Row>
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
    </div>
  );
};

export default Heroes;
