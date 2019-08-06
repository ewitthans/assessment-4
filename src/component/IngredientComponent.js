import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faCheck, faArrowLeft } from '@fortawesome/free-solid-svg-icons';

export default class IngredientComponent extends Component {
    constructor(props) {
        super(props);

    }
    navigate() {
        console.log('success')
        //this.props.history.push('/list');
    }

    render() {
        const { list } = this.props;
        // console.log(drinktitle, 'in post');
        return (
            <div>
                <div className='RecipeTitle'>
                    {list.strDrink}
                    <a className='Navigation' href='/list' onClick={() => this.navigate()}>
                        <FontAwesomeIcon icon={faArrowLeft} />
                        Back to Drink List
                </a>
                </div>

                <div>
                    <div className='Ingredients'>
                        <FontAwesomeIcon icon={faBars} /> Ingredients
                    <div className='IngredientsPerEach'>
                            {list.strIngredient1} <span className='MeasuresPerEach'>{list.strMeasure1} </span><br />
                            {list.strIngredient2} <span className='MeasuresPerEach'>{list.strMeasure2} </span><br />
                            {list.strIngredient3} <span className='MeasuresPerEach'>{list.strMeasure3} </span><br />
                            {list.strIngredient4} <span className='MeasuresPerEach'>{list.strMeasure4} </span><br />
                            {list.strIngredient5} <span className='MeasuresPerEach'>{list.strMeasure5} </span><br />
                            {list.strIngredient6} <span className='MeasuresPerEach'>{list.strMeasure6} </span><br />
                            {list.strIngredient7} <span className='MeasuresPerEach'>{list.strMeasure7} </span><br />
                            {list.strIngredient8} <span className='MeasuresPerEach'>{list.strMeasure8} </span><br />
                            {list.strIngredient9} <span className='MeasuresPerEach'>{list.strMeasure9} </span><br />
                            {list.strIngredient10} <span className='MeasuresPerEach'>{list.strMeasure10} </span><br />
                            {list.strIngredient11} <span className='MeasuresPerEach'>{list.strMeasure11} </span><br />
                            {list.strIngredient12} <span className='MeasuresPerEach'>{list.strMeasure12} </span><br />
                            {list.strIngredient13} <span className='MeasuresPerEach'>{list.strMeasure13} </span><br />
                            {list.strIngredient14} <span className='MeasuresPerEach'>{list.strMeasure14} </span><br />
                            {list.strIngredient15} <span className='MeasuresPerEach'>{list.strMeasure15} </span><br />
                        </div>


                    </div>

                    <div className='Instructions'>
                        <FontAwesomeIcon icon={faCheck} /> Instructions
                    <div className='InstructionsPerEach'>
                            {list.strInstructions}
                        </div>
                    </div>


                </div>




            </div>

        )
    }
}