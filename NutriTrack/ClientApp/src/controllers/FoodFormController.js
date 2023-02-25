import React, { Component } from 'react';
import FoodForm from '../components/FoodForm/FoodForm';
import FoodModel from '../models/FoodItem';

class FoodFormController extends Component {
    constructor(props) {
        super(props);

        this.state = {
            food: new FoodModel('', '', ''),
            errorMessage: ''
        };
    }

    handleInputChange = event => {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        const updatedFood = { ...this.state.food };
        updatedFood[name] = value;

        this.setState({
            food: updatedFood
        });
    };

    handleAddFood = event => {
        event.preventDefault();

        if (this.state.food.name === '' || this.state.food.image === '' || this.state.food.description === '') {
            this.setState({
                errorMessage: 'Please fill out all fields.'
            });
        } else {
            this.props.handleAddFood(this.state.food);

            // Clear the form after successfully adding food
            this.setState({
                food: new FoodModel('', '', ''),
                errorMessage: ''
            });
        }
    };

    render() {
        return (
            <FoodForm
                food={this.state.food}
                errorMessage={this.state.errorMessage}
                handleInputChange={this.handleInputChange}
                handleAddFood={this.handleAddFood}
            />
        );
    }
}

export default FoodFormController;
