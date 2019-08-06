import React, { Component } from 'react';
import ItemComponent from './ItemComponent';
import { INGREDIENT_SEARCH_API_URL } from '../config';

export default class ListComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            liquor: this.props.liquor,
            array: {
                drinks: []
            }
        }

    }

    componentDidMount() {
        // console.log(this.state.liquor, 'in list');


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
            .then(responseBody => {
                this.setState({ array: responseBody });
                console.log(this.state.array, 'in bun');
            })

    }

    handleTitleClick() {
        console.log('success');
        this.props.history.push('./recipe')
    }

    render() {

        return (
            <div onClick={() => this.handleTitleClick()} >
                {this.state.array.drinks.map(drinktitle => (
                    <ItemComponent key={this.idDrink} drinktitle={drinktitle} />
                ))}
            </div>
        )
    }
}