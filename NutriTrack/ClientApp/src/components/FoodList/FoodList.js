import React, { Component } from 'react';

class FoodList extends Component {
    render() {
        const { foods } = this.props;
        return (
            <table>
                <thead>
                <tr>
                    <th>Yemek Adı</th>
                    <th>Porsiyon Miktarı</th>
                    <th>Porsiyon Başına Kalori</th>
                </tr>
                </thead>
                <tbody>
                {foods && foods.map((food, index) => (
                    <tr key={index}>
                        <td>{food.name}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        );
    }
}

export default FoodList;
