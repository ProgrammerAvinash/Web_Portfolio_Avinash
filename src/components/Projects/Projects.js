import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import food from "../../Assets/FoodRecipeApp.png";
import chatApp from "../../Assets/chatApp.png";
import clothingApp from "../../Assets/ClothingApp.png";
import TetrisGame from "../../Assets/TetrisGame.png";
import TicTacToe from "../../Assets/TicTacToe.png";

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
              imgPath={food}
              isBlog={false}
              title="Food Recipe App"
              description="In this App You can find your favourite recipes and make various recipes "
              ghLink="https://github.com/ProgrammerAvinash/foodRecipeApp"
              demoLink="https://foodsrecipeapp.netlify.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatApp}
              isBlog={false}
              title="Chat App"
              description="This is Real time Chat app ,in which You can Send and Recieve Messages in Real Time using a Room Name stack Made this App in React Js , express Js and Socket.io"
              ghLink="https://github.com/ProgrammerAvinash/RealTimeChatApp"
              demoLink="https://chatapprealtime.netlify.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={clothingApp}
              isBlog={false}
              title="Clothing App"
              description="Engineered a responsive and user-friendly clothing e-commerce clothing app using React JS, incorporating state of the art UI/UX design principles and ensuring seamless performance."
              ghLink="https://github.com/ProgrammerAvinash/NeoG-Project-1"
              demoLink="https://mnwclothing.netlify.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={TetrisGame}
              isBlog={false}
              title="Tetris Game"
              description="Make alive your Childhood by playing the fun little tetris game made with JavaScript"
              ghLink="https://github.com/ProgrammerAvinash/TetrisGame"
              demoLink="https://programmeravinash.github.io/TetrisGame/index.html"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={TicTacToe}
              isBlog={false}
              title="TicTacToe"
              description="Make alive your Childhood by playing the fun little TicTacToe game made with React"
              ghLink="https://github.com/ProgrammerAvinash/TicTacToe"
              demoLink="https://tictactoefun.netlify.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
