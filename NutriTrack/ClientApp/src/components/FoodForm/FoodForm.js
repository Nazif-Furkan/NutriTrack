import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import Food from '../../models/FoodItem';

function FoodForm({ onAddFood }) {
    const [name, setName] = useState('');
    const [photo, setPhoto] = useState('');

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handlePhotoChange = (event) => {
        setPhoto(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const newFood = new Food(name, photo);
        onAddFood(newFood);
        setName('');
        setPhoto('');
    };

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formName">
                <Form.Label>Yemek Adı:</Form.Label>
                <Form.Control type="text" value={name} onChange={handleNameChange} required />
            </Form.Group>

            <Form.Group controlId="formPhoto">
                <Form.Label>Fotoğraf URL'si:</Form.Label>
                <Form.Control type="text" value={photo} onChange={handlePhotoChange} required />
            </Form.Group>

            <Button variant="primary" type="submit">
                Kaydet
            </Button>
        </Form>
    );
}

export default FoodForm;
