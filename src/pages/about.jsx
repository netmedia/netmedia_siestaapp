import React from "react";
import Sidebar from "../components/sidebar/sidebar";
import { Col, Container, Row } from "react-bootstrap";

function About() {
  return (
    <Container fluid>
      <Row>
        <Col>
          <Sidebar />
        </Col>
        <Col className="ml-[350px] pt-10 text-3xl block">
          <p className="animate-bounce py-10 bounceIn">Better sleep</p>
          <p className="animate-bounce flex justify-end pr-20 py-10">
            Better you
          </p>
          <p className="animate-bounce py-10">Track your sleep cycle</p>
          <p className="animate-bounce flex justify-end pr-10 py-10">
            Monitor sleep quality
          </p>
          <p className="animate-bounce py-10">Improve your daily life</p>
        </Col>
      </Row>
    </Container>
  );
}

export default About;
