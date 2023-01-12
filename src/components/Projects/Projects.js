import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";
import stored from "../../Assets/Projects/StoreD.jpg";
import mail from "../../Assets/Projects/0xmail.jpg";
import buddle from "../../Assets/Projects/Buddle.png";

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
              imgPath={chatify}
              isBlog={false}
              title="Memories"
              description="Social Media Platform built on MERN stack with auth, 
pagination and comments. Technology used - NodeJs, React, Express, MongoDB"
              ghLink="https://github.com/anjanah07/Memories"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={stored}
              isBlog={false}
              title="StoreD"
              description="Decentralized storage and sharing using wallet-to-wallet 
address and perpetual storage plans using Fevm. This project is being developed for Capstone project. Technology used in this project include Typescript, Nextjs, Tailwindcss, Solidity, IPFS, Filecoin, Hardhat."
              ghLink="https://github.com/anjanah07/StoreD"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mail}
              isBlog={false}
              title="0xmail"
              description="Decentralized mail service which enables users to send emails from their wallet to other's wallet. This project was built during EthGlobal's EthOnline 2022 Hackathon. Technology used are Typescript, Nextjs, Turborepo, Unstoppable Domain, WorldCoin, Filecoin. "
              ghLink="https://github.com/Akshit1311/0xmail"
              demoLink="https://0xmail-txz486dag-akshit1311.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={buddle}
              isBlog={false}
              title="Buddle01"
              description="Buddle01 is a web chess app with inbuilt huddle01 video conferencing feature which allows two players to play chess as well as communicate on the same platform. This project was built during the HackGDSC2.0 conducted by GDSC VIT Bhopal. Technology used are React and Huddle01"
              ghLink="https://github.com/anjanah07/Buddle01"
              demoLink="https://devfolio.co/projects/buddle-2ade"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Wxchained"
              description=" Decentralized Crypto Exchange Wallet built on Ethereum 
blockchain, used to transfer coins using stablecoin. This was the third year project. Technology included are Web3, Node, React, Ganache"
              ghLink="https://github.com/anjanah07/E-wallet-thirdyearproject"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
