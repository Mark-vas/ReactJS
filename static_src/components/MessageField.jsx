import React, { useEffect, useState } from 'react';
import Message from './Message.jsx';

const MessageField = () => {
    const initialMessages = ["Привет!", "Как дела?"];

    const [messages, setMessages] = useState(initialMessages);

    const handleClick = () => {
        setMessages([...messages, 'Нормально'])
    };

    useEffect(() => {

    }, [messages])

    const messageElements = messages.map((text, index) => (
        <Message key={index} text={text} />));

    return (<div>
        {messageElements}
        <button onClick={handleClick}>Отправить сообщение</button>
    </div>)
}

export default MessageField;
