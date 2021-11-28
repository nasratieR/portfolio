import React from "react";
import { Container, Row, Col, Card, Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Fade from 'react-reveal/Fade';
import puissance from "./assets/puissance4.png";
import snapchat from "./assets/snapchat.PNG";
import quizz from "./assets/quizz.jpg";
import meetic from "./assets/meetic.png";
const divStyle={
    marginBottom : "5%",
    marginTop: "2%"
}
const imageStyle = {
    height: "286px",
    width: "auto",
}
const projet =
<div>
<Container>
    <Row>
    <Col>
        <Fade left>
            <div style={divStyle}> 
            <Card style={{ width: '18rem'}}>
            <Card.Img variant="top" src={puissance} style={imageStyle}/>
            <Card.Body>
            <Card.Title>Puissance4</Card.Title>
            <Card.Text>
                Le jeux puissance4 codé en <b>javaScript</b> et <b>jQuery</b>, accessible à partir d'un plugin avec option.
            </Card.Text>
            <Button variant="outline-success">Github</Button>
            </Card.Body>
            </Card>
            </div>
        </Fade>
        </Col>

        <Col>
        <Fade right>
            <div style={divStyle}> 
            <Card style={{ width: '18rem'}}>
            <Card.Img variant="top" src={snapchat} style={imageStyle}/>
            <Card.Body>
            <Card.Title>Snapchat</Card.Title>
            <Card.Text>
                Clone de l'application mobile snapchat fait en <b>React native</b>, possiblité de prendre et d'envoyer des photo prise en direct ou de la pélicule.
            </Card.Text>
            <Button variant="outline-success">Github</Button>
            </Card.Body>
            </Card>
            </div>
        </Fade>
        </Col>
    </Row>

    <Row>
        
        <Col>
        <Fade left>
            <div style={divStyle}> 
            <Card style={{ width: '18rem'}}>
            <Card.Img variant="top" src={meetic} style={imageStyle}/>
            <Card.Body>
            <Card.Title>My Meetic</Card.Title>
            <Card.Text>
                Application de rencontre selon les loisirs et la ville, développé en <b>PHP</b> et gestion de la base de données avec <b>MySQL</b>.
            </Card.Text>
            <Button variant="outline-success">Github</Button>
            </Card.Body>
            </Card>
            </div>
        </Fade>
        </Col>
        <Col>
        <Fade right>
             <div style={divStyle}> 
            <Card style={{ width: '18rem'}}>
            <Card.Img variant="top" src={quizz} style={imageStyle}/>
            <Card.Body>
            <Card.Title>Quizz</Card.Title>
            <Card.Text>
                Un jeu de quizz par categorie avec possiblilité de crer son espace personnel et de nouveaux quizz, application développé avec <b>Simfony</b>.
            </Card.Text>
            <Button variant="outline-success">Github</Button>
            </Card.Body>
            </Card>
            </div>
        </Fade>
       
        </Col>
  </Row>
    </Container>     

        
</div>


export default projet;