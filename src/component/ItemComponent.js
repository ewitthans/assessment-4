import React, { Component } from 'react';

export default class ItemComponent extends Component {
    constructor(props) {
        super(props);
    }

    handleTitleClick = (idDrink) => {
        console.log(idDrink);
        this.props.history.push('/recipe');
    }

    render() {
        const { drinktitle } = this.props;
        // console.log(drinktitle, 'in post');
        return (
            <div className=''>

                <div className='DrinkTitle' onClick={() => this.handleTitleClick(drinktitle.idDrink)}>
                    {drinktitle.strDrink}
                </div>

            </div>
        )
    }
}