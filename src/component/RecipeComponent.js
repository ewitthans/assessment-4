import React, { Component } from 'react';
import IngredientComponent from './IngredientComponent';
import { DRINK_SEARCH_API_URL } from '../config';

export default class RecipeComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: '14610',
            // justClicked: this.props.justClicked,
            idDrink: this.props.idDrink,
            ingredients: {
                drinks: [0]
            }
        }
        console.log(this.state.idDrink, 'in recipe')

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

    render() {

        return (
            <div>
                <div className='Wrapper'>
                    {this.state.ingredients.drinks.map(list => (
                        <IngredientComponent key={this.idDrink} list={list} />
                    ))}
                </div>
            </div>
        )
    }
}