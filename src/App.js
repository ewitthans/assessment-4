
import React, { Component } from 'react';
import './App.css';
import { Navbar, Form, FormControl, Button } from 'react-bootstrap';
import { Route } from 'react-router-dom';
import MainComponent from './component/MainComponent';
import ListComponent from './component/ListComponent';
import RecipeComponent from './component/RecipeComponent';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCocktail } from '@fortawesome/free-solid-svg-icons';
import { INGREDIENT_SEARCH_API_URL } from './config';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      liquor: '',
      list: []
    }
  }

  handleSearchChange = (event) => {
    this.state.liquor = event.target.value;
  }

  initiateSearch = () => {
    console.log(this.state.liquor)

    const requestOptions = {
      method: 'GET'
    }

    fetch(INGREDIENT_SEARCH_API_URL + this.state.liquor, requestOptions)

      .then(res => {
        if (!res.ok) {
          console.log('something bad happened');
        }
        return res.json();
      })
      .then(list => {
        this.setState({ 'list': list });
      })

    console.log(this.state.list);

    this.props.history.push('/list');
  }






  render() {
    return (
      <div className='Container'>
        <Navbar bg="light" expand="lg">
          <div className="Icon">
            <FontAwesomeIcon icon={faCocktail} />
          </div>
          <Navbar.Brand href="/">Mix It Up!</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Form inline>
              <FormControl type="text" name="liquor" placeholder="Search" id="liquor" onChange={this.handleSearchChange} />
              <Button variant="outline-success" onClick={() => this.initiateSearch()}>Search</Button>
            </Form>
          </Navbar.Collapse>
        </Navbar>
        <div className='Wrapper'>
          {/* how to add homepage, route, components */}
          <Route
            path="/" exact
            render={(props) => <MainComponent />}
          />
          <Route
            path="/d/:list"
            render={(props) => <ListComponent {...props} />}
          />
          <Route
            path="/recipe"
            render={(props) => <RecipeComponent {...props} />}
          />
        </div>
      </div>
    )
  }
}
