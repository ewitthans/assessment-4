import React, { Component } from 'react';

export default class ListComponent extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        console.log(this.props.list)

        return (
            <div>
                List:

                    {/* {this.props.list.map(drink => (
                    <div>
                        <li key={drink.idDrink}>{drink.strDrink}</li>
                    </div>
                ))} */}
            </div>

        )
    }
}