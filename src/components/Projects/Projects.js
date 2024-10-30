import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";

import Aqdee from "../../Assets/Projects/Aqdee.JPG";
import _3dWorld from "../../Assets/Projects/3dworld.JPG";
import Twenteefore from "../../Assets/Projects/twenteefore.JPG";
import LUP from "../../Assets/Projects/lup.JPG";
import Psychiatry from "../../Assets/Projects/app.JPG";




function Projects() {
  return (
    <Container fluid className="project-section">
    
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
              imgPath={Aqdee}
              isBlog={false}
              title="Aqdee"
              description="Unlock Seamless Contract and Legal Solutions, Experience maximum efficiency and transparency in managing your contracts and legal needs with Aqdee, your digital hub for leasing and legal services in Jordan"
              front="Frontend:ReactJs,Redux,MaterialUI, Sass, ReactPDF"
              link="https://ajari.aqdee.com/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={_3dWorld}
              isBlog={false}
              title="3D World"
              description="3D World is a ecommerce website for 3d Models aims to connect the buyers and sellers"
              front="Frontend:NextJs, Scss, ReactFiber, ThreeJS"
              link="https://3d-world-staging.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Twenteefore}
              isBlog={false}
              title="Twenteefore"
              description="Fun, new bingo-style golf game with six levels of difficulty. 
              Each level's scorecard has 24 outcome or skills based targets.
              chipping, putting & scoring. 
              Makes lines and shapes to win the most points."
              back="Backend:NodeJS,Express,MySql"
              front="Frontend:ReactJs, module.css , html , css3"
              link="https://twenteefore.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Psychiatry}
              isBlog={false}
              title="Psychiatry Online"
              description="PsychiatryOnline.org is the platform for all American Psychiatric Association Publishing journals, DSM, and bestselling textbooks, as well as APA Practice Guidelines, and continuing medical education."
              front="Frontend:TypeScript, pug , Scss"
              link="https://psychiatryonline.org/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={LUP}
              isBlog={false}
              title="LIVERPOOL"
              description="LUP is the UK’s third oldest university press. We publish approximate."
              front="Frontend:TypeScript, pug , Scss"
              link="https://www.liverpooluniversitypress.co.uk/"
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Plant AI"
              description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
              link="https://github.com/soumyajit4419/Plant_AI"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Editor.io"
              description="Online code and markdown editor build with react.js. Online Editor which supports html, css, and js code with instant view of website. Online markdown editor for building README file which supports GFM, Custom Html tags with toolbar and instant preview.Both the editor supports auto save of work using Local Storage"
              link="https://github.com/soumyajit4419/Editor.io"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Bits-0f-C0de"
              description="My personal blog page build with Next.js and Tailwind Css which takes the content from makdown files and renders it using Next.js. Supports dark mode and easy to write blogs using markdown."
              link="https://github.com/soumyajit4419/Bits-0f-C0de"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              link="https://github.com/soumyajit4419/AI_For_Social_Good"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              link="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
