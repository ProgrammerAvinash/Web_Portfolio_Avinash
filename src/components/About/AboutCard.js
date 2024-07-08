import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Avinash Yadav </span>
            from <span className="purple"> Mumbai, India.</span>
            <br />
            I am currently employed as a software developer at PowerLaw.Pvt.Ltd.
            <br />
            I have completed BSc (I.T) from Mumbai University.
            <br />
            <br />
            Things I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Football
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching Movies
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Love to Solve Challenging Problems!"{" "}
          </p>
          <footer className="blockquote-footer">Avinash</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
