import React, { Component } from 'react';

export default class ListComponent extends Component {
    constructor(props) {
        super(props);

    }

    componentDidMount() {

    }

    render() {
        console.log(this.props.list)

        return (
            <div>
                List:
            </div>
            // <div className="Container">
            //     {this.props.list.map((drinks) =>
            //         <div>
            //             {drinks.strDrink}
            //         </div>
            //     )}
            // </div>

        )
    }
}