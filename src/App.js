
import React, { Component } from 'react';
import './App.css';
import { Navbar, Form, FormControl, Button } from 'react-bootstrap';
import { Route, NavLink } from 'react-router-dom';
import MainComponent from './component/MainComponent';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCocktail } from '@fortawesome/free-solid-svg-icons'

export default class App extends Component {
  constructor(props) {
    super(props);

  }
  render() {
    return (
      <div className='Container'>
        <Navbar bg="light" expand="lg">
          <div>
            <FontAwesomeIcon icon={faCocktail} />
          </div>
          <Navbar.Brand href="#">Mix It Up!</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Form inline>
              <FormControl type="text" placeholder="Search" id="Liquor"/>
              <Button variant="outline-success" onClick={() => this.initateSearch()}>Search</Button>
            </Form>
          </Navbar.Collapse>
        </Navbar>
        <div className='Wrapper'>
          {/* how to add homepage, route, components */}
          <Route
            path="/" exact
            render={(props) => <MainComponent />}
          />
        </div>
      </div>
    )
  }
}

