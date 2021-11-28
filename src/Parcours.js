import React from "react";
import { Container, Row, Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Slide from 'react-reveal/Slide';
const divStyle = {
    boxShadow:"2px 1px 8px goldenrod",
    marginTop: "2%",
    marginRight:"2%",
    marginBottom:"7%",
    // textAlign: "justify",
    padding: "5%"
  };
const spanStyle ={
    fontSize: "14px",
    color: 'grey',
    fontStyle: 'italic',
};
const underline ={
     textDecoration : "underline",
}
const parcours = 
<div>
<Container>
<Slide bottom >
<Row>
    <Col>
    <h3>Formation</h3>
        <div style ={divStyle}>
            <h5 style={underline}>Web Developper <span style ={spanStyle}>05/2021 - En cours</span> </h5>
            <p>
              Formation Integrateur/Developper Web a la <b>Web@cademie by Epitech</b> à Paris. 
            </p>
            <h5 style={underline}>Licence Sciences pour l'ingénieur <span style ={spanStyle}>09/2018 - 06/2019</span> </h5>
            <p>
              Licence Mathématiques, Physique, Chimie, Informatique à la <b>Faculté des Sciences d'Aix Marseille</b> à Marseille. 
            </p>
            <h5 style={underline}>Baccalauréats Scientifiques <span style ={spanStyle}>09/2016 - 06/2018</span> </h5>
            <p>
              Baccalauréats Scientifiques option Sciences de l'ingenieur au <b>Lycée Diderot</b> à Paris. 
            </p>
        </div>
    </Col>
    <Col> 
    <h3>Diplomes</h3>
        <div style ={divStyle}>
        <h5><b>Baccalauréats Scientifiques</b> <span style ={spanStyle}><br/> année d'obtention : 2018</span> </h5>
            <p>
              Baccalauréats Scientifiques option Sciences de l'ingenieur. 
            </p>
        </div>
    </Col>
    
  </Row>
  </Slide> 
</Container>
    
    
</div>;

export default parcours;