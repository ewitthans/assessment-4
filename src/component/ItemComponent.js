import React, { Component } from 'react';

export default class ItemComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            idDrink: ''
        }
    }

    handleTitleClick(idDrink) {
        alert('This drink has a unique id of: ' + idDrink + '. ' + ' I can log the unique id on click but cannot figure out how to pass it to recipe, which you are about to be redirected to. The recipe page currently calls the api and displays data from id: 17229, better known as the Adios Amigos Cocktail');
        localStorage.setItem("DrinkId", idDrink);
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

