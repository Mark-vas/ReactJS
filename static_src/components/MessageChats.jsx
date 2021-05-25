import React from 'react';
import MessageField from './MessageField.jsx'
import { useParams } from "react-router-dom";
import ChatList from './ChatList.jsx'
import Header from './Header.jsx';

const MessageChats = () => {

    let { chatId } = useParams();

    return (
        <div className="container">
            <Header />
            <h2 className="dialogs">Чат {chatId}</h2>
            <div className="messanger">
                <ChatList />
                <MessageField chatId={chatId} />
            </div>
        </div>
    )
}

export default MessageChats;