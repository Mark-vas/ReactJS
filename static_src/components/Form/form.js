import React, { useState } from 'react';
import AUTHORS from '../Utilits/constatnst';

const Form = ({ onAddMessage }) => {
    const [text, setText] = useState('')

    const handleChange = (event) => {
        setText(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (text !== '') {
            onAddMessage({ author: AUTHORS.HUMAN, text: text });
            setText('')
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={text} onChange={handleChange}></input>
            <br></br>
            <input type="submit" value="Отправить сообщение"></input>
        </form >
    )
};

export default Form