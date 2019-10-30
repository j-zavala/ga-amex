import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Link,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import Contact from './Contact';
import Footer from './Footer';
import About from './About';
import Home from './Home';

class App extends Component {
  constructor(props) {
    super();

    this.state = {
      contact: {
        name: "Casey Harding",
        linkedin: "https://linkedin.com",
        github: "https://github.com",
        email: "mailto:jzavalafgz@gmail.com"
      }
    }
  }

  render() {
    return (
      <Router>
        <div className="App">
          <nav>
            <Link to="home">Home</Link>
            <Link to="contact">Contact</Link>
            <Link to="about">About</Link>
          </nav>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" exact component={About} />
            <Route path="/contact"
              render={() => {
                return <Contact contact={this.state.contact} />
              }}
              exact component={Contact} />
          </Switch>
          <Contact contact={this.state.contact} />
          <About />
          <Footer contact={this.state.contact} />

        </div>
      </Router>
    );
  }
}

export default App;
