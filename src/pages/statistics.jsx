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
        <Col className="ml-[350px] pt-10">Statistics</Col>
      </Row>
    </Container>
  );
}

export default About;
