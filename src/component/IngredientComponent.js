import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faCheck, faArrowLeft } from '@fortawesome/free-solid-svg-icons';

export default class IngredientComponent extends Component {
    constructor(props) {
        super(props);

    }

    navigate = () => {
        console.log('success')
        // this.props.history.push('/list');
    }


    render() {
        const { drinktitle } = this.props;
        // console.log(drinktitle, 'in post');
        return (
            <div>
                <div className='RecipeTitle'>
                    {drinktitle.strDrink}
                    <div className='Navigation' onClick={() => this.navigate()}>
                        <FontAwesomeIcon icon={faArrowLeft} />
                        Instructions Back to Drink List
                </div>
                </div>

                <div>
                    <div className='Ingredients'>
                        <FontAwesomeIcon icon={faBars} /> Ingredients
                    <div className='IngredientsPerEach'>
                            {drinktitle.strIngredient1} <span className='MeasuresPerEach'>{drinktitle.strMeasure1} </span><br />
                            {drinktitle.strIngredient2} <span className='MeasuresPerEach'>{drinktitle.strMeasure2} </span><br />
                            {drinktitle.strIngredient3} <span className='MeasuresPerEach'>{drinktitle.strMeasure3} </span><br />
                            {drinktitle.strIngredient4} <span className='MeasuresPerEach'>{drinktitle.strMeasure4} </span><br />
                            {drinktitle.strIngredient5} <span className='MeasuresPerEach'>{drinktitle.strMeasure5} </span><br />
                            {drinktitle.strIngredient6} <span className='MeasuresPerEach'>{drinktitle.strMeasure6} </span><br />
                            {drinktitle.strIngredient7} <span className='MeasuresPerEach'>{drinktitle.strMeasure7} </span><br />
                            {drinktitle.strIngredient8} <span className='MeasuresPerEach'>{drinktitle.strMeasure8} </span><br />
                            {drinktitle.strIngredient9} <span className='MeasuresPerEach'>{drinktitle.strMeasure9} </span><br />
                            {drinktitle.strIngredient10} <span className='MeasuresPerEach'>{drinktitle.strMeasure10} </span><br />
                            {drinktitle.strIngredient11} <span className='MeasuresPerEach'>{drinktitle.strMeasure11} </span><br />
                            {drinktitle.strIngredient12} <span className='MeasuresPerEach'>{drinktitle.strMeasure12} </span><br />
                            {drinktitle.strIngredient13} <span className='MeasuresPerEach'>{drinktitle.strMeasure13} </span><br />
                            {drinktitle.strIngredient14} <span className='MeasuresPerEach'>{drinktitle.strMeasure14} </span><br />
                            {drinktitle.strIngredient15} <span className='MeasuresPerEach'>{drinktitle.strMeasure15} </span><br />
                        </div>


                    </div>

                    <div className='Instructions'>
                        <FontAwesomeIcon icon={faCheck} /> Instructions
                    <div className='InstructionsPerEach'>
                            {drinktitle.strInstructions}
                        </div>
                    </div>


                </div>




            </div>

        )
    }
}