import React from 'react';
import { Button, Card } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';
import Typical from 'react-typical';
import Image1 from '../images/profile.jpeg';
import Image2 from '../images/cooking.jpeg';

import '../App.css';

const About = ({ name, paragraph, paragraph2, landingPageImage }) => {
  return (
    <div id="about" className="about">
      <div className="jumbotron text-center hoverable p-4">
        <div className="row">
          <div className="col-md-7 text-md-left ml-3 mt-3">
            <h1 className="about-intro">Hi, I'm {name}.</h1>
            <p>
              I
              <Typical
                loop={Infinity}
                wrapper="b"
                steps={[
                  ' am a developer 💻',
                  900,
                  "'m a former chef  👨‍🍳",
                  900,
                  "'m always trying to learn something new 🤓",
                  900,
                  ' love the outdoors 🤿  🚴🏻‍♂️  🏄‍♂️  🏀  🏈',
                  900,
                ]}
              />
            </p>
            <p>{paragraph}</p>
            <Accordion className='about-accordion' defaultActiveKey="1">
              <Card>
                <Card.Header>
                  <Accordion.Toggle
                    as={Button}
                    variant="outline-success"
                    eventKey="0"
                  >
                    A Little more About Me
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                  <Card.Body className="row">
                    <div className="col-6">{paragraph2}</div>
                    
                    <div className="col-6">
                      <img
                        className="cooking-img"
                        // align="right"
                        src={Image2}
                        height="480px"
                        width="auto"
                        alt={'error'}
                      />
                    </div>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>
            {''}
          </div>
          <div className="col-md-4 offset-md-1 mx-3 my-3">
            <div className="view overlay">
              <img
                className="profile-img"
                src={Image1}
                height="380px"
                width="auto"
                alt={'error'}
              />
              <div className="mask rgba-white-slight"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
