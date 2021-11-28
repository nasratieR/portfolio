import React from "react";
import Swal from 'sweetalert2';
import emailjs from 'emailjs-com';
import { Container, Row, Col, Card, Button, Form} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Fade from 'react-reveal/Fade';
import {SERVICE_ID, TEMPLATE_ID, USER_ID} from "./emailkey.js";

const divStyle = {
    boxShadow:"2px 1px 8px goldenrod",
    marginTop: "2%",
    marginRight:"2%",
    marginBottom:"7%",
    padding: "3%"
  };
const formStyle={
    marginBottom:"7%",
}
const handleOnSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID)
      .then((result) => {
        console.log(result.text);
        Swal.fire({
          icon: 'success',
          title: 'Message envoyé avec succès'
        })
      }, (error) => {
        console.log(error.text);
        Swal.fire({
          icon: 'error',
          title: 'Ooops, un problème est survenu',
          text: error.text,
        })
      });
    e.target.reset()
  };
const contact =
<Container>
    <Fade bottom>
    <div style={divStyle}>
        <Form onSubmit={handleOnSubmit}>
        <Form.Group className="mb-3" controlId="email">
            <Form.Label>Email </Form.Label>
            <Form.Control type="email" placeholder="name@example.com" name='from_email'/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="sujet">
            <Form.Label>Sujet</Form.Label>
            <Form.Control type="text" placeholder="Sujet" name='sujet'/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="message" >
            <Form.Label>Message</Form.Label>
            <Form.Control as="textarea" rows={5} name='message'/>
        </Form.Group>
        <Button variant="warning" type="submit">
            Envoyer
        </Button>
        </Form>
            </div>
    </Fade>
            
</Container>
 

export default contact;