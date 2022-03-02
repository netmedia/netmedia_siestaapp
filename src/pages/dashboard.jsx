import UserWidget from "../components/dashboard/userWidget";
import { AiOutlineBarChart } from "react-icons/ai";
import { BsFillCalculatorFill, BsAlarm } from "react-icons/bs";
import { useState } from "react";
import Chart from "../components/dashboard/chart";
import UpcomingAlarms from "../components/dashboard/upcomingAlarms";
import Sidebar from "../components/sidebar/sidebar";
import User from "../components/login/user";
import { Col, Container, Row } from "react-bootstrap";

const Dashboard = () => {
  const [displayMode, setDisplayMode] = useState("weekly");
  const widgetContent = [
    {
      name: "Alarms",
      count: 10,
      icon: <BsAlarm className="w-10 h-10 fill-siesta-blue-light" />,
    },
    {
      name: "Calculator",
      count: 3,
      icon: (
        <BsFillCalculatorFill className="w-10 h-10 fill-siesta-blue-light" />
      ),
    },
    {
      name: "Statistics",
      count: 2,
      icon: <AiOutlineBarChart className="w-10 h-10 fill-siesta-blue-light" />,
    },
  ];

  const defaultMarkupClasses = {
    activeClass: `rounded-full bg-siesta-blue-light text-white px-8 py-3 cursor-pointer`,

    defaultClass: `cursor-pointer px-8 py-3`,
  };

  return (
    <Container fluid>
      <Row className="max-w-6xl flex flex-col gap-8 mr-0">
        <Col>
          <Sidebar />
        </Col>
        <Col lg={6} className="ml-[350px] 2xl:pt-20">
          <Row className="">
            <h2 className="font-normal text-xl px-5">Dashboard</h2>
            <p className="font-light text-gray-400 text-sm px-5 py-2">
              Home / Dashboard
            </p>
            <User />
          </Row>
          <Row className="flex items-center justify-between gap-8 flex-nowrap px-5 py-3">
            {widgetContent.map((items, key) => {
              return <UserWidget items={items} key={key} />;
            })}
          </Row>

          <Row className="max-w-6xl px-5 2xl:pt-10 flex flex-wrap gap-4 items-start justify-between">
            <Col>
              <h2 className="font-normal text-xl">Sleep Entries</h2>
              <p className="font-light text-gray-400 text-sm py-2">Activity</p>
              <div className="text-xs px-5 py-2 bg-siesta-grey-light rounded-full flex place-items-center justify-between">
                <p
                  onClick={() => {
                    setDisplayMode("weekly");
                  }}
                  className={
                    displayMode === "weekly"
                      ? defaultMarkupClasses.activeClass
                      : defaultMarkupClasses.defaultClass
                  }
                >
                  Weekly
                </p>
                <p
                  onClick={() => {
                    setDisplayMode("monthly");
                  }}
                  className={
                    displayMode === "monthly"
                      ? defaultMarkupClasses.activeClass
                      : defaultMarkupClasses.defaultClass
                  }
                >
                  Monthly
                </p>
              </div>
              <Chart displayMode={displayMode} />
            </Col>
            <Col className="flex flex-col w-3/12 pt-24">
              <UpcomingAlarms />
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
