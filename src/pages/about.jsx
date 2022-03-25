import Sidebar from '../components/sidebar/sidebar';
import { Col, Row } from 'react-bootstrap';

const About = () => (
  <main className='flex flex-col items-start md:ml-80 pt-6'>
    <Row>
      <Col>
        <Sidebar />
      </Col>
      <Col className='pt-6 xl:pt-20 text-3xl block'>
        <Row className=''>
          <h2 className='font-normal text-xl px-5'>About</h2>
          <p className='font-light text-gray-400 text-sm px-5 py-2'>
            Home / About
          </p>
        </Row>
        <p className='text-sm pl-5 pr-5 md:pr-16 flex flex-wrap'>
          Sleep is an essential function that allows your body and mind to
          recharge, leaving you refreshed and alert when you wake up. Healthy
          sleep also helps the body remain healthy and stave off diseases.
          Without enough sleep, the brain cannot function properly. This can
          impair your abilities to concentrate, think clearly, and process
          memories.
          <br /> <br />
          Most adults require between seven and nine hours of nightly sleep.
          Children and teenagers need substantially more sleep, particularly if
          they are younger than five years of age. Work schedules, day-to-day
          stressors, a disruptive bedroom environment, and medical conditions
          can all prevent us from receiving enough sleep. A healthy diet and
          positive lifestyle habits can help ensure an adequate amount of sleep
          each night – but for some, chronic lack of sleep may be the first sign
          of a sleep disorder.
        </p>
      </Col>
    </Row>
  </main>
);

export default About;
