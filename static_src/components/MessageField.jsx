import React, { useEffect, useState } from 'react';
import Form from './Form/form.js'
import AUTHORS from './Utilits/constatnst.js';

const initialMessages =
    [

    ];

const answerRobot =
    [
        {
            author: AUTHORS.ROBOT,
            text: ["Отстань от меня, Я - робот!",
                "Что тебе нужно от меня?",
                "Я устал, спроси позже",]
        }
    ];

const MessageField = () => {
    const [messages, setMessages] = useState(initialMessages);
    const handleMessage = (newMessages) => {
        setMessages([...messages, newMessages])
    };

    useEffect(() => {
        if (messages.length % 2 === 1) {
            let random = Math.floor(Math.random() * answerRobot[0].text.length)
            setMessages([...messages,
            {
                author: AUTHORS.ROBOT,
                text: answerRobot[0].text[random],
            }])
        }
    }, [messages])

    const messageElements =
        messages.map((message) => {
            return <div
                className={`message ${message.author === AUTHORS.ROBOT ? "bot-message" : "human-message"
                    }`
                }
            >
                {message.author}: {message.text}</div>
        });
    return (<div className="container">
        {messageElements}
        <Form onAddMessage={handleMessage} />
    </div>)
}

export default MessageField;