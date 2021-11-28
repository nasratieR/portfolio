import React from "react";
import Cv from"./Cv-Nasratie-Rafion.pdf";
import image from "./assets/IMG2.jpg"
import {Button, Container, Row, Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Tada from 'react-reveal/Tada';
import Fade from 'react-reveal/Fade';


const imageStyle = {
    height: "200px",
    width: "auto",
    borderRadius: "45%",
    boxShadow: "3px 1px 10px grey",
}
const titre={
    textAlign: "center",
    marginBottom:"5%",
    color:"grey",
}
const grey ={
    color: "#999999"
}
const para={
    marginTop:"5%",
    color:"grey",
}
const about = 
<div>
    <Fade top>
    <h1 style={titre}>DEVELOPPEUSE WEB </h1>
    </Fade>
    <Container>
  <Row>
    <Col style={titre}>
    <Fade left>
    <img src={image} alt="photo de Nasratie" style={imageStyle}/>
    
    <Row style={para}>
        <p><i>Nasratie Rafion</i></p>
    </Row>
    </Fade>
    </Col>
    <Col>
    <Fade right>
        <h2 style={grey}>Qui suis-je ?</h2>
        <p>Salut, moi c'est Nasratie, étudiante à la Webacademie by Epitech en <b>recherche d'alternance</b> en tant que developpeuse web.</p>
        <Row>
            <Col>
            <a href={Cv} download ><Tada><Button variant="outline-warning">Cv PDF</Button> </Tada></a> 
            </Col>
            <Col>
            <a href="https://www.linkedin.com/in/nasratie-rafion" target="_blank"><Tada><Button variant="outline-primary">Linkedin</Button> </Tada></a>
            </Col>
            <Col>
            <a href="https://github.com" target="_blank"><Tada><Button variant="outline-success">Github</Button> </Tada></a>
            </Col>
        </Row>
    </Fade> 
    </Col>
  </Row>
</Container>
    </div>




export default about;