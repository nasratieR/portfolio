import React, { Component } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Section from "./Components/Section";
import about from "./About";
import parcours from "./Parcours";
import projet from "./Projet";
import contact from "./Contact";
import competences from "./Competences";
class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Section
          title=""
          subtitle={about}
          id="section1"
        />
        <Section
          title=""
          subtitle={parcours}
          id="section2"
        />
        <Section
          title="Compétences"
          subtitle={competences}
          id="section3"
        />
        <Section
          title="Projets réalisés"
          subtitle={projet}
          id="section4"
        />
        <Section
          title="Contact"
          subtitle={contact}
          id="section5"
        />
      </div>
    );
  }
}

export default App;
