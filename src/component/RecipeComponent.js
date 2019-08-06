import React, { Component } from 'react';
import IngredientComponent from './IngredientComponent';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faCheck, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { DRINK_SEARCH_API_URL } from '../config';

export default class RecipeComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: '17229',
            idDrink: this.props.idDrink,
            ingredients: {
                drinks: [0]
            }
        }
        console.log(this.state.idDrink)

    }

    componentDidMount() {

        const requestOptions = {
            method: 'GET'
        }

        fetch(DRINK_SEARCH_API_URL + this.state.id, requestOptions)

            .then(res => {
                if (!res.ok) {
                    console.log('something bad happened');
                }
                return res.json();
            })
            .then(responseBody => {
                this.setState({ ingredients: responseBody });
                //console.log(this.state.ingredients);
            })


    }

    navigate() {
        this.props.history.push('/list');
    }

    render() {
        return (
            <div>
                <div className=''>
                    {this.state.ingredients.drinks.map(list => (
                        <IngredientComponent key={this.idDrink} list={list} />
                    ))}
                </div>
                <div className='Navigation' onClick={() => this.navigate()}>
                    <FontAwesomeIcon icon={faArrowLeft} />
                    Back to Drink List
                 </div>
            </div>
        )
    }
}