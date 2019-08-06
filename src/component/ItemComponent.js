import React, { Component } from 'react';

export default class ItemComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            idDrink: '',
        }
    }

    handleTitleClick(idDrink) {
        //this.props.completeTask(idDrink);
        console.log(idDrink);
    }

    render() {
        const { drinktitle } = this.props;
        return (
            <div >

                <div className='DrinkTitle' onClick={() => this.handleTitleClick(drinktitle.idDrink)}  >
                    {drinktitle.strDrink}
                </div>

            </div>
        )
    }
}