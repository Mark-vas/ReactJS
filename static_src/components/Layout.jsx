import React from 'react';
import MessageField from './MessageField.jsx'
import ChatList from './ChatList.jsx'
import Header from './Header.jsx'

const Layout = () => {

    return (
        <div className="container">
            <Header />
            <div className="messanger">
                <ChatList />
            </div>
        </div>
    )
}

export default Layout;