import React from 'react';
import ReactDOM from 'react-dom';

const messages = ['Как у тебя дела?']

// clickOnButton = () => {
//     messages.push('Нормально')
// }

// const Message = (props) =>
//     <div>
//         <h1>{props.text}</h1>
//         <button OnClick={this.clickOnButton}></button>
//     </div>

const Message = (props) => {
    let clickOnButton = () => {
        messages.push('Нормально')
        console.log(messages)
    }
    return (
        <div>
            <h1>{props.text}</h1>
            <button onClick={clickOnButton} >Кнопка</button>
        </div>)
}



// const MessageList = (props) => {
//     return props.messages.map((message) => <Message text={message} />)
// }

ReactDOM.render(
    <Message text={messages} />,
    document.getElementById('root'),
);