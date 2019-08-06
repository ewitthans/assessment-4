
import React, { Component } from 'react';
import './App.css';
import { Navbar, Form, FormControl, Button } from 'react-bootstrap';
import { Route } from 'react-router-dom';
import MainComponent from './component/MainComponent';
import ListComponent from './component/ListComponent';
import RecipeComponent from './component/RecipeComponent';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCocktail } from '@fortawesome/free-solid-svg-icons';
import ItemComponent from './component/ItemComponent';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      liquor: '',
    }
  }

  handleSearchChange = event => {
    this.state.liquor = event.target.value;
  }

  initiateSearch = () => {
    this.props.history.push('/list');
  }


  render() {

    return (
      < div className='Container' >
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
            exact path="/"
            render={(props) => <MainComponent {...props} />}
          />
          <Route
            exact path="/list"
            render={(props) => <ListComponent {...props} liquor={this.state.liquor} />}
          />
          <Route
            path="/recipe"
            render={(props) => <RecipeComponent {...props} idDrink={this.state.idDrink} />}
          />

        </div>

      </div >

    )

  }
}

export default App