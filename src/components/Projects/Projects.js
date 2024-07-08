import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={{}}
              isBlog={false}
              title="Food Recipe App"
              description="In this App You can Find You favourite Recipes"
              ghLink=""
              demoLink=""
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={{}}
              isBlog={false}
              title="Chat App"
              description="This is Real time Chat app , in which You can Send and Recieve Messages in Real Time using a Room Name stack Made this App in React Js , express Js and Socket.io"
              ghLink=""
              demoLink="https://chatapprealtime.netlify.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
