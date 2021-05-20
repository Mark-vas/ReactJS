import React, { useEffect, useState } from 'react';
import Form from './Form/form.js'
import AUTHORS from './Utilits/constatnst.js';

const initialMessages = {
    chat_001: [

    ],
    chat_002: [

    ],
    chat_003: [

    ],
}

const answerRobot =
    [
        {
            author: AUTHORS.ROBOT,
            text: ["Отстань от меня, Я - робот!",
                "Что тебе нужно от меня?",
                "Я устал, спроси позже",]
        }
    ];

const MessageField = ({ chatId }) => {
    const [messages, setMessages] = useState(initialMessages);
    const handleMessage = (newMessages) => {
        setMessages({
            ...messages,
            [chatId]: [...messages[chatId], newMessages]
        })
    };

    useEffect(() => {
        if (messages[chatId].length % 2 === 1) {
            let random = Math.floor(Math.random() * answerRobot[0].text.length)
            setMessages({
                ...messages,
                [chatId]: [...messages[chatId], { author: AUTHORS.ROBOT, text: answerRobot[0].text[random] }],
            })
        }
    }, [messages])

    const messageElements =
        messages[chatId].map((message) => {
            return <div
                className={`message ${message.author === AUTHORS.ROBOT ? "bot-message" : "human-message"
                    }`
                }
            >
                <div className={"textAuthor"}>
                    <p>{message.text}</p>
                    <p className={"nameAuthor"}>{message.author}</p>
                </div>
            </div>
        });
    return (<div className="WriteMessage">
        {messageElements}
        <Form onAddMessage={handleMessage} />
    </div>)
}

export default MessageField;