import React, { Component } from 'react';

export default class ItemComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            idDrink: '',
            justClicked: ''
        }
    }
    handleTitleClick(idDrink) {
        console.log(idDrink);
        //trying to set state and navigate to recipe page, currently not working
        this.setState({ justClicked: idDrink });
        console.log(this.state.justClicked);
        // this.props.history.push('/recipe');
    }
    render() {
        const { drinktitle } = this.props;
        return (
            <div >

                <div className='DrinkTitle' onClick={() => this.handleTitleClick(drinktitle.idDrink)}>
                    {drinktitle.strDrink}
                </div>

            </div>
        )
    }
}