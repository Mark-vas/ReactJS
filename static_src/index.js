import React from 'react';
import ReactDOM from 'react-dom';

const messages = ['Как у тебя дела?']

const Message = (props) => {
    const clickOnButton = () => {
        messages.push('Нормально')
        console.log(messages)
    }
    return (
        <div>
            <h1>{props.text}</h1>
            <button onClick={clickOnButton} >Кнопка</button>
        </div>)
}

ReactDOM.render(
    <Message text={messages} />,
    document.getElementById('root'),
);