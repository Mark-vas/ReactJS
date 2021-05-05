import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import { script } from './script';
script();

const initialMessages = ['Как у тебя дела?'];


const Message = () => {
    const [messages, setMessages] = useState(initialMessages)

    const clickOnButton = () => {
        setMessages([...messages, 'Нормально'])
        console.log(messages)
    }
    return (
        <div>
            <h1>{messages}</h1>
            <button onClick={clickOnButton}>Кнопка</button>
        </div>)
}

ReactDOM.render(
    <Message />,
    document.getElementById('root'),
);