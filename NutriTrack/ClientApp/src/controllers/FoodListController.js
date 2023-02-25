import React, { useState, useEffect } from 'react';
import axios from 'axios';
import FoodList from '../components/FoodList/FoodList';
function FoodListController() {
    const [foods, setFoods] = useState([]);

    useEffect(() => {
        async function fetchFoods() {
            const response = await axios.get('/api/foods');
            setFoods(response.data);
        }

        fetchFoods().then(r => console.log(r));
    }, []);

    return (
        <FoodList foods={foods}></FoodList>
    );
}

export default FoodListController;