import React from "react";
import Sidebar from "../components/sidebar/sidebar";
import { Col, Container, Row } from "react-bootstrap";
import Chart from "../components/dashboard/chart";
import User from "../components/login/user";

function Statistics() {
  return (
    <Container className="flex flex-col items-start h-screen ml-80 pt-6">
      <Row>
        <Col>
          <Sidebar />
          <div className="xl:pt-20">
            <h2 className="font-normal text-xl px-5">Statistics</h2>
            <p className="font-light text-gray-400 text-sm px-5 py-2">
              Home / Statistics
            </p>
            <User />
          </div>
        </Col>
        <Col className="ml-[350px] pt-10">
          <p>Last 5 entries</p>
          <Chart displayMode={"latest"} />
          <p>Average sleep</p>
          <Chart displayMode={"average"} />
        </Col>
      </Row>
    </Container>
  );
}

export default Statistics;
